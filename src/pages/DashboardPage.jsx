import { Link } from "react-router";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";
import UserProgressList from "../components/UserProgressList";
import { useTodos } from "../hooks/useTodos";
import { getProgressByUser, getTaskStats } from "../utils/taskStats";

export default function DashboardPage() {
  // throw new Error ('Test Crash') - this is for test error page

  const { data: todos, isPending, isError, error, refetch } = useTodos();

  function renderContent() {
    if (isPending) return <LoadingState message="Loading dashboard…" />;

    if (isError) {
      return (
        <ErrorState
          title="Couldn’t load your dashboard"
          message={error.message}
          onRetry={refetch}
        />
      );
    }

    if (todos.length === 0) {
      return (
        <EmptyState
          title="No tasks yet"
          message="Tasks will appear here once they’re added."
        />
      );
    }

    const stats = getTaskStats(todos);
    const users = getProgressByUser(todos);
    const upNext = todos.filter((todo) => !todo.completed).slice(0, 4);

    return (
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard label="Total tasks" value={stats.total} to="/tasks" />
          <StatCard
            label="Completed"
            value={stats.completed}
            to="/tasks?status=done"
          />
          <StatCard
            label="Pending"
            value={stats.pending}
            to="/tasks?status=pending"
          />
          <StatCard
            label="Completion rate"
            value={`${stats.completionRate}%`}
            hint="Completed ÷ total tasks"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Progress by user
            </h2>
            <div className="mt-4">
              <UserProgressList users={users} />
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Up next</h2>
              <Link
                to="/tasks?status=pending"
                className="text-sm text-indigo-600 hover:underline"
              >
                View all pending
              </Link>
            </div>
            {upNext.length === 0 ? (
              <EmptyState
                title="All caught up"
                message="Every task is completed."
              />
            ) : (
              <ul className="space-y-3">
                {upNext.map((todo) => (
                  <TaskCard key={todo.id} task={todo} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <title>Dashboard · TaskFlow</title>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-slate-600">An overview of your tasks.</p>
      </div>
      {renderContent()}
    </section>
  );
}
