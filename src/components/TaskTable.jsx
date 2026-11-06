import { Link } from "react-router";
import StatusBadge from "./StatusBadge";

export default function TaskTable({ tasks }) {
  return (
    <div className="max-h-[70vh] overflow-auto rounded-lg border border-slate-200 bg-white">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <caption className="sr-only">Tasks</caption>
        <thead className="sticky top-0 z-10 bg-slate-50 text-xs tracking-wide text-slate-500 uppercase shadow-sm">
          <tr>
            <th scope="col" className="w-20 px-4 py-3 font-medium">
              ID
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              Task
            </th>
            <th scope="col" className="w-28 px-4 py-3 font-medium">
              User
            </th>
            <th scope="col" className="w-32 px-4 py-3 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {tasks.map((task) => (
            <tr key={task.id} className="transition-colors hover:bg-indigo-50">
              <td className="px-4 py-3 text-slate-500 tabular-nums">
                #{task.id}
              </td>
              <td className="px-4 py-3">
                <Link
                  to={`/tasks/${task.id}`}
                  className={`inline-block font-medium first-letter:uppercase hover:text-indigo-600 hover:underline ${
                    task.completed
                      ? "text-slate-500 line-through"
                      : "text-slate-900"
                  }`}
                >
                  {task.title}
                </Link>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                User {task.userId}
              </td>
              <td className="px-4 py-3">
                <StatusBadge completed={task.completed} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
