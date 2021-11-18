import React from 'react';
import './index.less';

// redux
import { connect } from 'react-redux';

// components
import TodoForm from './components/TodoForm/TodoForm';
import TodoItem from './components/TodoItem/TodoItem';

const Todos = ({ todoListData }) => {
    return (
        <div className="todos">
            <div className="todo__form">
                <TodoForm />
            </div>

            <div className="todos__body">
                {todoListData.todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        title={item.title}
                        descr={item.descr}
                    />
                ))}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        todoListData: state.todoListData,
    };
}

export default connect(mapStateToProps)(Todos);
