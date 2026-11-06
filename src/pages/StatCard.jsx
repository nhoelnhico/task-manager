import { Link } from 'react-router'

const baseClass = 'block rounded-lg border border-slate-200 bg-white p-5'

export default function StatCard({ label, value, hint, to }) {
  const content = (
    <>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`${baseClass} transition hover:border-indigo-300 hover:shadow-sm`}>
        {content}
      </Link>
    )
  }

  return <div className={baseClass}>{content}</div>
}