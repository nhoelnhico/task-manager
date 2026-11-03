const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function request({ path, signal}) {
    const response = await fetch(`${BASE_URL}${path}`, { signal });
    if (!response.ok) {
        const error = new Error(`Request failed with status ${response.status}`)
        error.status = response.status
        throw error
    }
    return response.json();
}

export async function fetchTodos(signal) {
    return request({ path: '/todos', signal });
}

export async function fetchTodo(id, signal) {
    return request({ path: `/todos/${id}`, signal });
}