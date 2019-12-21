import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodoAction, toggleTodoAction } from './redux'
import Todo from './Todo'

export default () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  const toggleTodo = todoId => dispatch(toggleTodoAction(todoId))
  const deleteTodo = todoId => dispatch(deleteTodoAction(todoId))

  const todosList = () => {
    return todos.map(todo => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )
    })
  }

  return (
    <p>
      <h2>Todos</h2>
      <ul>{todosList()}</ul>
    </p>
  )
}
