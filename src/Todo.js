import React from 'react'

export default props => {
  const { todo, toggleTodo, deleteTodo } = props

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={e => {
          toggleTodo(todo.id)
        }}
      />
      <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
      <span
        className="delete-btn"
        onClick={() => {
          deleteTodo(todo.id)
        }}
      >
        X
      </span>
    </li>
  )
}
