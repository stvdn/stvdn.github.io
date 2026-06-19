interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="pt-7 pb-10 text-xs font-bold tracking-widest border-y border-divider">
      {children}
    </h2>
  );
}