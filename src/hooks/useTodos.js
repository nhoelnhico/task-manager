import{useQuery} from '@tanstack/react-query'
import {fetchTodo, fetchTodos} from '../api/todos'

export const todoKeys = {
    all: ['todos'],
    detail : (id) =>['todos', id],
}

export function useTodos() {
    return useQuery ({
        queryKey: todoKeys.all,
        queryFn:({ signal }) => fetchTodos(signal),

    })
}

export function useTodo(id){
    return useQuery({
        queryKey: todoKeys.detail(id),
        queryFn:({ signal }) => fetchTodo ( id , signal),
        enable:Boolean(id),
    })
}