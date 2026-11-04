export default function EmptyState({ title, message, action }) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
        <p className="font-medium text-slate-900">{title}</p>
        {message && <p className="mt-1 text-sm text-slate-600">{message}</p>}
        {action && <div className="mt-4">{action}</div>}
      </div>
    )
  }