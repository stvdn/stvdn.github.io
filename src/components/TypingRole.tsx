"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export function TypingRole({ roles, active }: { roles: string[]; active: boolean }) {
  const characters = roles.map((role) => Array.from(role));
  const [current, setCurrent] = useState({ index: 0, count: characters[0].length });
  const reduceMotion = useReducedMotion();
  const roleRef = useRef<HTMLParagraphElement>(null);
  const longestRole = roles.reduce((longest, role) => role.length > longest.length ? role : longest, "");

  useEffect(() => {
    if (!active) return;

    if (reduceMotion) {
      setCurrent({ index: 0, count: characters[0].length });
      return;
    }

    let index = 0;
    let count = characters[0].length;
    let typing = false;
    let inView = true;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const pause = () => {
      clearTimeout(timer);
      index = 0;
      count = characters[0].length;
      typing = false;
      setCurrent({ index, count });
    };

    const step = () => {
      if (typing) {
        count += 1;
        setCurrent({ index, count });
        if (count === characters[index].length) {
          typing = false;
          timer = setTimeout(step, 2300);
        } else {
          timer = setTimeout(step, 90);
        }
      } else {
        count -= 1;
        if (count === 0) {
          index = (index + 1) % characters.length;
          typing = true;
          setCurrent({ index, count: 0 });
          timer = setTimeout(step, 350);
        } else {
          setCurrent({ index, count });
          timer = setTimeout(step, 60);
        }
      }
    };

    const updateActivity = () => {
      pause();
      if (inView && document.visibilityState === "visible") {
        timer = setTimeout(step, 3000);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateActivity();
    });
    if (roleRef.current) observer.observe(roleRef.current);
    document.addEventListener("visibilitychange", updateActivity);
    updateActivity();

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateActivity);
    };
  }, [active, roles, reduceMotion]);

  return (
    <p className="header-role" data-visible={active} ref={roleRef}>
      <span className="sr-only">{roles.join(". ")}</span>
      <span className="header-role-rule" aria-hidden="true" />
      <span className="header-role-copy" aria-hidden="true">
        <span className="header-role-measure">{longestRole}</span>
        <span className={`header-role-live${reduceMotion ? "" : " is-active"}`}>
          {characters[current.index].slice(0, current.count).join("")}
        </span>
      </span>
    </p>
  );
}
