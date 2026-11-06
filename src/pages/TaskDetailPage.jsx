import { Link, useParams } from 'react-router'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import LoadingState from '../components/LoadingState'
import StatusBadge from '../components/StatusBadge'
import { useTodo } from '../hooks/useTodos'

function isValidId(value) {
  return /^[1-9]\d*$/.test(value)
}

export default function TaskDetailPage() {
  const { id } = useParams()
  const validId = isValidId(id)
  const { data: task, isPending, isError, error, refetch } = useTodo(validId ? id : undefined)

  function renderContent() {
    if (!validId || error?.status === 404) {
      return (
        <EmptyState
          title="Task not found"
          message={`There’s no task with ID “${id}”.`}
          action={
            <Link
              to="/tasks"
              className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Back to all tasks
            </Link>
          }
        />
      )
    }

    if (isPending) return <LoadingState message="Loading task…" />

    if (isError) {
      return (
        <ErrorState title="Couldn’t load this task" message={error.message} onRetry={refetch} />
      )
    }

    return (
      <article className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">Task #{task.id}</p>
          <StatusBadge completed={task.completed} />
        </div>

        <h1 className="mt-3 text-2xl font-bold break-words text-slate-900 first-letter:uppercase">
          {task.title}
        </h1>

        <dl className="mt-6 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">Task ID</dt>
            <dd className="mt-1 text-slate-900">{task.id}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">
              Assigned to
            </dt>
            <dd className="mt-1 text-slate-900">User {task.userId}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-slate-500 uppercase">Status</dt>
            <dd className="mt-1 text-slate-900">{task.completed ? 'Completed' : 'In progress'}</dd>
          </div>
        </dl>
      </article>
    )
  }

  return (
    <section className="space-y-4">
      <Link to="/tasks" className="inline-block text-sm text-indigo-600 hover:underline">
        ← Back to tasks
      </Link>
      {renderContent()}
    </section>
  )
}