export default function UserProgressList({ users }) {
    return (
      <ul className="space-y-3">
        {users.map((user) => (
          <li key={user.userId}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">User {user.userId}</span>
              <span className="text-slate-500">
                {user.completed}/{user.total} · {user.completionRate}%
              </span>
            </div>
            <div
              role="progressbar"
              aria-label={`User ${user.userId} completion`}
              aria-valuenow={user.completionRate}
              aria-valuemin={0}
              aria-valuemax={100}
              className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100"
            >
              <div
                className="h-full rounded-full bg-indigo-600"
                style={{ width: `${user.completionRate}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    )
  }