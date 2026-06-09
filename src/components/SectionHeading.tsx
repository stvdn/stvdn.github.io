interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
      {children}
    </h2>
  );
}