import { Link } from "react-router";
import StatusBadge from "./StatusBadge";

export default function TaskCard({ task }) {
  return (
    <li>
      <Link
        to={`/tasks/${task.id}`}
        className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-indigo-300 hover:shadow-sm"
      >
        <div className="min-w-0">
          <p className="text-xs text-slate-500">
            #{task.id} · User {task.userId}
          </p>
          <p
            className={`mt-1 font-medium break-words first-letter:uppercase ${
              task.completed ? "text-slate-500 line-through" : "text-slate-900"
            }`}
          >
            {task.title}
          </p>
        </div>
        <StatusBadge completed={task.completed} />
      </Link>
    </li>
  );
}
