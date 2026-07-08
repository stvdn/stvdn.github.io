"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, CheckCircle2, FileText, Loader2, Upload, X } from "lucide-react";
import type { ContactModalStrings } from "@/i18n/dictionaries";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  apiUrl: string;
  strings: ContactModalStrings;
}

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx", "txt", "png", "jpg", "jpeg", "gif", "webp", "zip"];

interface SelectedFile {
  filename: string;
  contentType: string;
  content: string;
  size: number;
}

function validateFile(file: File): string | null {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_EXTENSIONS.includes(ext)) return "type";
  if (file.size > MAX_FILE_SIZE) return "size";
  return null;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1] ?? "";
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("read failed"));
    reader.readAsDataURL(file);
  });
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function ContactModal({ open, onClose, apiUrl, strings }: ContactModalProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileError, setFileError] = useState(false);
  const [selectedFile, setSelectedFile] = useState<SelectedFile | null>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setStatus("idle");
    setErrors({});
    setFileError(false);
    setSelectedFile(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [open, handleClose]);

  if (typeof document === "undefined" || !document.body) return null;

  const validate = (data: FormData) => {
    const next: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 1) next.name = "required";
    if (!EMAIL_RE.test(email)) next.email = "invalid";
    if (subject.length < 1) next.subject = "required";
    if (message.length < 1) next.message = "required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return;
    const err = validateFile(file);
    if (err) {
      setFileError(true);
      setSelectedFile(null);
      e.currentTarget.value = "";
      return;
    }
    setFileError(false);
    try {
      const base64 = await fileToBase64(file);
      setSelectedFile({
        filename: file.name,
        contentType: file.type || "application/octet-stream",
        content: base64,
        size: file.size,
      });
    } catch {
      setFileError(true);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileError(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const honeypot = String(data.get("website") ?? "");
    if (honeypot) return;
    if (!validate(data)) return;

    setStatus("submitting");
    try {
      const body: Record<string, unknown> = {
        name: String(data.get("name")).trim(),
        email: String(data.get("email")).trim(),
        subject: String(data.get("subject")).trim(),
        message: String(data.get("message")).trim(),
      };
      if (selectedFile) {
        body.attachment = {
          filename: selectedFile.filename,
          content: selectedFile.content,
          contentType: selectedFile.contentType,
        };
      }
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      handleRemoveFile();
    } catch {
      setStatus("error");
    }
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={strings.title}
            className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto overscroll-contain border border-divider bg-[#0a0a0a] p-4 shadow-2xl sm:p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label={strings.close}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center text-gray-500 transition-colors hover:text-white sm:right-4 sm:top-4"
            >
              <X size={20} />
            </button>

            <h2 className="mb-5 text-base font-bold text-white sm:mb-6 sm:text-lg">{strings.title}</h2>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center sm:py-8">
                <CheckCircle2 className="size-8 text-green-500 sm:size-10" />
                <p className="text-sm text-gray-300">{strings.success}</p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded border border-divider px-4 py-2 text-sm text-white transition-colors hover:bg-white/5"
                >
                  {strings.close}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2">
                  <Field
                    label={strings.nameLabel}
                    name="name"
                    placeholder={strings.namePlaceholder}
                    error={errors.name}
                    ref={firstFieldRef}
                  />
                  <Field
                    label={strings.emailLabel}
                    name="email"
                    type="email"
                    placeholder={strings.emailPlaceholder}
                    error={errors.email}
                  />
                </div>
                <Field
                  label={strings.subjectLabel}
                  name="subject"
                  placeholder={strings.subjectPlaceholder}
                  error={errors.subject}
                />
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-400">
                    {strings.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={strings.messagePlaceholder}
                    className={`w-full min-h-[120px] resize-none border bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-divider focus:ring-white"
                    }`}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-400">
                    {strings.attachLabel}
                  </label>
                  {selectedFile ? (
                    <div className="flex items-center gap-2 border border-divider bg-black/40 px-3 py-2.5">
                      <FileText size={16} className="shrink-0 text-gray-400" />
                      <span className="flex-1 truncate text-sm text-white">
                        {selectedFile.filename}
                      </span>
                      <span className="shrink-0 text-xs text-gray-500">
                        {formatBytes(selectedFile.size)}
                      </span>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        aria-label={strings.attachRemove}
                        className="shrink-0 text-gray-500 transition-colors hover:text-white"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className={`flex w-full items-center gap-2 border border-dashed px-3 py-2.5 text-sm text-gray-500 transition-colors hover:text-white ${
                        fileError ? "border-red-500" : "border-divider hover:border-white"
                      }`}
                    >
                      <Upload size={16} className="shrink-0" />
                      <span>{strings.attachDrop}</span>
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="attachment"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif,.webp,.zip"
                    className="hidden"
                  />
                  {fileError && (
                    <p className="mt-1.5 text-xs text-red-400">{strings.attachError}</p>
                  )}
                  {!fileError && !selectedFile && (
                    <p className="mt-1.5 text-xs text-gray-600">{strings.attachHint}</p>
                  )}
                </div>

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={16} />
                    <span>{strings.error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 bg-white px-4 py-3 text-sm font-bold text-black transition-opacity disabled:opacity-60 sm:py-3.5"
                >
                  {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
                  {status === "submitting" ? strings.submitting : strings.submit}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, name, error, type = "text", placeholder, ...rest },
  ref,
) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-gray-400">{label}</label>
      <input
        ref={ref}
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className={`w-full border bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 ${
          error ? "border-red-500 focus:ring-red-500" : "border-divider focus:ring-white"
        }`}
        {...rest}
      />
    </div>
  );
});