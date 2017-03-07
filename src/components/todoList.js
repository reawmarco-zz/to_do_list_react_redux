/**
 *  Lista do itens todos.
 *  Está classe implementa a lista de itens.
 *
 */

import React, { PropTypes } from 'react'
import Todo from './todo'

const TodoList = ({ todos, onTodoClick }) => (
    <ul className="list-group">
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList