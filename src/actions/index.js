/**
 * Created by reawmarco-pc on 03/03/17.
 *
 * Actions são as ações que serão realizadas pelo app.
 * Aqui são descritas todas as ações.
 *
 */
export const ADD_TODO = 'ADD_TODO';
export const VISIBILITY_FILTER = 'VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';


let nextTodoId = 0

/**
 * Adiciona o um novo item a lista todo.
 *
 * @param text
 * @returns {{type: string, id: number, text: *}}
 */
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

/**
 * Seta a visibilidade dos filtros.
 *
 * @param filter
 * @returns {{type: string, filter: *}}
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: 'VISIBILITY_FILTER',
        filter
    }
}

/**
 * Marca como concluido o item todo.
 *
 * @param id
 * @returns {{type: string, id: *}}
 */
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}