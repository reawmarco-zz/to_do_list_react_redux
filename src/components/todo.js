/**
 *  itens da lista de todos.
 *  Está classe demonstra os itens da lista todos, se clicados os mesmos são grifados.
 *
 */
import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (

    <li className="list-group-item"
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo