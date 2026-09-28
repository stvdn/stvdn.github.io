"use client";

import { useCallback, useState } from "react";
import { TypingName } from "@/components/TypingName";
import { TypingRole } from "@/components/TypingRole";

export function HeaderIntroCopy({ name, roles }: { name: string; roles: string[] }) {
  const [nameFinished, setNameFinished] = useState(false);
  const revealRole = useCallback(() => setNameFinished(true), []);

  return (
    <div className="header-intro-copy">
      <TypingName name={name} onComplete={revealRole} />
      <TypingRole roles={roles} active={nameFinished} />
    </div>
  );
}
