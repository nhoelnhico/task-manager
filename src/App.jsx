import { useTodo, useTodos } from './hooks/useTodos'

export default function App() {
  const todos = useTodos()
  const missing = useTodo('9999')

  return (
    <main className="min-h-screen space-y-2 bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-indigo-600">Task Manager</h1>
      <p>
        Todos:{' '}
        {todos.isPending ? 'Loading…' : todos.isError ? todos.error.message : todos.data.length}
      </p>
      <p>
        Todo 9999:{' '}
        {missing.isPending ? 'Loading…' : missing.isError ? missing.error.message : 'found'}
      </p>
    </main>
  )
}