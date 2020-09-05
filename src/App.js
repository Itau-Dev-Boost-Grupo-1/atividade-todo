import React from 'react'
import logo from './logo.svg'
import './App.css'

import UserTodos from './components/UserTodos/UserTodos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <UserTodos userId={1} />
    </div>
  )
}

export default App
