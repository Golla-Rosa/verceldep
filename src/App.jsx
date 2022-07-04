import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './layout/Navbar'
import Content from './layout/Content'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
    </div>
  )
}

export default App
