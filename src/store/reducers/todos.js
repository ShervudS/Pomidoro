const initialState = {
    todos: [
        { id: '1', title: '1234', descr: '2134' },
        { id: '2', title: '1234', descr: '2134' },
        { id: '3', title: '1234', descr: '2134' },
    ],
};

export default function todosReduser(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload],
            };
        case 'REMOVE_TODO':
            return {

            };
    }

    return state;
}
