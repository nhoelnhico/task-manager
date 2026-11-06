const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "done", label: "Done" },
];

export default function TaskFilters({
  status,
  query,
  onStatusChange,
  onQueryChange,
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div
        role="group"
        aria-label="Filter by status"
        className="inline-flex self-start rounded-lg border border-slate-200 bg-white p-1"
      >
        {STATUS_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onStatusChange(option.value)}
            aria-pressed={status === option.value}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              status === option.value
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search tasks…"
        aria-label="Search tasks"
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none sm:w-64"
      />
    </div>
  );
}
