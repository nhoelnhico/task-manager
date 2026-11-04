export default function StatusBadge({ completed }) {
    return (
      <span
        className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
          completed ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
        }`}
      >
        {completed ? 'Done' : 'Pending'}
      </span>
    )
  }