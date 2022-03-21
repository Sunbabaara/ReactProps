import React from 'react'
import Todo from "./components/Todo"
import NavBar from './components/NavBar'

function App() {
  let title= "my first website"
  return (
    <div>
    <NavBar title={title}/>

    <main>
      <Todo title="Learning React" datetime="23rd March, 2022"/>
      <Todo title="Learning React" datetime="23rd March, 2022"/>
      <Todo title="Learning React" datetime="23rd March, 2022"/>
      <Todo title="Learning React" datetime="23rd March, 2022"/>
      <Todo title="Learning React" datetime="23rd March, 2022"/>
      <Todo title="Learning React" datetime="23rd March, 2022"/>

    </main>

    </div>
  )
}

export default App