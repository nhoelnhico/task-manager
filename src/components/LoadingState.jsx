export default function LoadingState({ message = 'Loading…' }) {
    return (
      <div role="status" className="flex items-center justify-center gap-3 py-12 text-slate-500">
        <span className="size-5 animate-spin rounded-full border-2 border-slate-300 border-t-indigo-600" />
        <span>{message}</span>
      </div>
    )
  }