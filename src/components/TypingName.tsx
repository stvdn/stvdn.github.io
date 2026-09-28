"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export function TypingName({ name }: { name: string }) {
  const lines = name.split(" ").map((part, index, parts) =>
    index === parts.length - 1 ? `${part}.` : part,
  );
  const characters = lines.map((line) => Array.from(line));
  const total = characters.reduce((sum, line) => sum + line.length, 0);
  const [visibleCount, setVisibleCount] = useState(total);
  const reduceMotion = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCount(total);
      return;
    }

    let count = total;
    let erasing = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let inView = true;

    const pause = () => {
      clearTimeout(timer);
      count = total;
      erasing = true;
      setVisibleCount(total);
    };

    const step = () => {
      count += erasing ? -1 : 1;
      setVisibleCount(count);

      if (count === 0) {
        erasing = false;
        timer = setTimeout(step, 450);
      } else if (count === total) {
        erasing = true;
        timer = setTimeout(step, 1800);
      } else {
        timer = setTimeout(step, erasing ? 65 : 115);
      }
    };

    const updateActivity = () => {
      pause();
      if (inView && document.visibilityState === "visible") {
        timer = setTimeout(step, 1600);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateActivity();
    });
    if (headingRef.current) observer.observe(headingRef.current);
    document.addEventListener("visibilitychange", updateActivity);
    updateActivity();

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateActivity);
    };
  }, [name, reduceMotion, total]);

  let charactersBefore = 0;
  const activeLine = characters.findIndex((line) => visibleCount <= (charactersBefore += line.length));

  return (
    <h1 ref={headingRef} aria-label={name}>
      {characters.map((line, index) => {
        const start = characters.slice(0, index).reduce((sum, part) => sum + part.length, 0);
        const visible = line.slice(0, Math.max(0, visibleCount - start)).join("");
        const hasPeriod = index === characters.length - 1 && visible.endsWith(".");

        return (
          <span className="header-name-line" key={`${line.join("")}-${index}`} aria-hidden="true">
            <span className="header-name-measure">{line.join("")}</span>
            <span className={`header-name-live${!reduceMotion && activeLine === index ? " is-active" : ""}`}>
              {hasPeriod ? visible.slice(0, -1) : visible}
              {hasPeriod && <span className="header-period">.</span>}
            </span>
          </span>
        );
      })}
    </h1>
  );
}
