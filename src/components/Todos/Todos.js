import React, { useState } from 'react';
import './index.less';

// antd

// components
import TodoForm from './components/TodoForm/TodoForm';
import TodoItem from './components/TodoItem/TodoItem';

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            key: '12',
            title: '1234',
            descr: '2134',
        },
    ]);

    const addTodo = () => {
        setTodos(...todos);
    };

    return (
        <div className="todos">
            <div className="todo__form">
                <TodoForm />
            </div>

            <div className="todos__body">
                {todos.map((item) => (
                    <TodoItem
                        key={item.key}
                        title={item.title}
                        descr={item.descr}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todos;
