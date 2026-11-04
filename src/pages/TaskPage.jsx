import { useSearchParams } from 'react-router'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import LoadingState from '../components/LoadingState'
import TaskCard from '../components/TaskCard'
import TaskFilters from '../components/TaskFilters'
import { useTodos } from '../hooks/useTodos'

const VALID_STATUSES = ['all', 'pending', 'done']

function filterTodos(todos, status, query) {
  const normalizedQuery = query.trim().toLowerCase()

  return todos.filter((todo) => {
    const matchesStatus =
      status === 'all' || (status === 'done' ? todo.completed : !todo.completed)
    const matchesQuery =
      normalizedQuery === '' || todo.title.toLowerCase().includes(normalizedQuery)
    return matchesStatus && matchesQuery
  })
}

export default function TasksPage() {
  const { data: todos, isPending, isError, error, refetch } = useTodos()
  const [searchParams, setSearchParams] = useSearchParams()

  const statusParam = searchParams.get('status')
  const status = VALID_STATUSES.includes(statusParam) ? statusParam : 'all'
  const query = searchParams.get('q') ?? ''

  function updateParam(key, value, defaultValue) {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value === defaultValue) next.delete(key)
        else next.set(key, value)
        return next
      },
      { replace: true },
    )
  }

  function clearFilters() {
    setSearchParams({}, { replace: true })
  }

  function renderContent() {
    if (isPending) return <LoadingState message="Loading tasks…" />

    if (isError) {
      return (
        <ErrorState title="Couldn’t load tasks" message={error.message} onRetry={refetch} />
      )
    }

    const visibleTodos = filterTodos(todos, status, query)

    if (visibleTodos.length === 0) {
      return (
        <EmptyState
          title="No tasks match your filters"
          message="Try a different search term or status."
          action={
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              Clear filters
            </button>
          }
        />
      )
    }

    return (
      <>
        <p className="text-sm text-slate-500">
          Showing {visibleTodos.length} of {todos.length} tasks
        </p>
        <ul className="grid gap-3 md:grid-cols-2">
          {visibleTodos.map((todo) => (
            <TaskCard key={todo.id} task={todo} />
          ))}
        </ul>
      </>
    )
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tasks</h1>
        <p className="mt-1 text-slate-600">Browse, filter and search your tasks.</p>
      </div>

      <TaskFilters
        status={status}
        query={query}
        onStatusChange={(value) => updateParam('status', value, 'all')}
        onQueryChange={(value) => updateParam('q', value, '')}
      />

      {renderContent()}
    </section>
  )
}