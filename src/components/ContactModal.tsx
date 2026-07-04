"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, CheckCircle2, Loader2, X } from "lucide-react";
import type { ContactModalStrings } from "@/i18n/dictionaries";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  apiUrl: string;
  strings: ContactModalStrings;
}

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactModal({ open, onClose, apiUrl, strings }: ContactModalProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setStatus("idle");
    setErrors({});
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const honeypot = String(data.get("website") ?? "");
    if (honeypot) return;
    if (!validate(data)) return;

    setStatus("submitting");
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name")).trim(),
          email: String(data.get("email")).trim(),
          subject: String(data.get("subject")).trim(),
          message: String(data.get("message")).trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
            className="relative w-full max-w-lg border border-divider bg-[#0a0a0a] p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label={strings.close}
              className="absolute right-4 top-4 text-gray-500 transition-colors hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="mb-6 text-lg font-bold text-white">{strings.title}</h2>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle2 size={40} className="text-green-500" />
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
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                    className={`w-full resize-none border bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-divider focus:ring-white"
                    }`}
                  />
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
                  className="flex w-full items-center justify-center gap-2 bg-white px-4 py-3 text-sm font-bold text-black transition-opacity disabled:opacity-60"
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