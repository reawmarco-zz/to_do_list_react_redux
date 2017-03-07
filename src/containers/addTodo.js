/**
 * Conteiner responsável pela lógica para a inclusão do todo na lista.
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input

    return (

            <div className="form-group">
                <form className="form-inline" onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}>
                    <input ref={node => {
                        input = node
                    }} className="form-control" placeholder="To-do" />
                    {" "}
                    <button type="submit" className="btn btn-default">
                       Add Todo
                    </button>
                </form>
            </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo