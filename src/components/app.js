/**
 * Created by reawmarco-pc on 03/03/17.
 *
 * Componentes são os itens que serão apresentados na tela do app,
 * este app é um single page app, o qual roda em apenas uma tela,
 * todas as requisições são representadas na mesma tela.
 *  *
 */


import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/addTodo'
import VisibleTodoList from '../containers/visibleTodoList'

/**
  * @constructor
 */
const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App
