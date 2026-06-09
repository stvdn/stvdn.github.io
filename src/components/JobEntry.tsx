import type { JobEntry as JobEntryType } from "@/data/portfolio";

interface JobEntryProps {
  job: JobEntryType;
}

export function JobEntry({ job }: JobEntryProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.5fr]">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-white">{job.title}</h3>
        <a
          href={job.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-gray-300"
        >
          {job.company} <span aria-hidden="true">↗</span>
        </a>
        <p className="text-sm text-gray-500">{job.dateRange}</p>
        <p className="text-sm text-gray-500">{job.location}</p>
      </div>
      <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-300 md:pl-6 md:text-base">
        {job.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}