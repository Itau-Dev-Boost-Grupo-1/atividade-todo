import React from 'react'

import Users from './components/Users/Users'

import './index.css'

function App() {
  return (
    <div className="container app">
        <header>
          <h1 className="row justify-content-center">TODO Masters</h1>
        </header>

      <Users />
    </div>
  )
}

export default App
