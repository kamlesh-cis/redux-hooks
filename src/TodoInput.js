import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from './redux'
import uuid from 'uuid/v4'

export default () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const onChange = event => {
    setTodo(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    if (todo.trim() === '') return
    dispatch(
      addTodoAction({
        id: uuid(),
        name: todo,
        complete: false
      })
    )
    setTodo('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="todo" value={todo} onChange={onChange} />
        <button type="submit"> Add Todo </button>
      </div>
    </form>
  )
}
