import type { JobEntry as JobEntryType } from "@/data/portfolio";

interface JobEntryProps {
  job: JobEntryType;
}

export function JobEntry({ job }: JobEntryProps) {
  return (
    <article className="job-entry">
      <div className="job-meta">
        <h3>{job.title}</h3>
        <p className="job-company">{job.company}</p>
        <p className="job-date">{job.dateRange}</p>
        <p className="job-location">{job.location}</p>
      </div>
      <ul className="job-bullets">
        {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
    </article>
  );
}
