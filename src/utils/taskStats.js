export function getTaskStats(todos) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;
  const completionRate =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return { total, completed, pending, completionRate };
}

export function getProgressByUser(todos) {
  const byUser = new Map();

  for (const todo of todos) {
    const entry = byUser.get(todo.userId) ?? {
      userId: todo.userId,
      total: 0,
      completed: 0,
    };
    entry.total += 1;
    if (todo.completed) entry.completed += 1;
    byUser.set(todo.userId, entry);
  }

  return [...byUser.values()]
    .map((entry) => ({
      ...entry,
      completionRate: Math.round((entry.completed / entry.total) * 100),
    }))
    .sort((a, b) => a.userId - b.userId);
}
