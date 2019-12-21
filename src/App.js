import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App
