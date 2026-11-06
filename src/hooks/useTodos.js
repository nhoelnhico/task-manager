import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTodo, fetchTodos } from '../api/todos'

export const todoKeys = {
  all: ['todos'],
  detail: (id) => ['todos', id],
}

export function useTodos() {
  return useQuery({
    queryKey: todoKeys.all,
    queryFn: ({ signal }) => fetchTodos(signal),
  })
}

export function useTodo(id) {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: todoKeys.detail(id),
    queryFn: ({ signal }) => fetchTodo(id, signal),
    enabled: Boolean(id),
    placeholderData: () =>
      queryClient.getQueryData(todoKeys.all)?.find((todo) => String(todo.id) === id),
  })
}