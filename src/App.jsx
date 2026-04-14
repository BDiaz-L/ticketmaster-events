import { useState } from 'react'
import Navbar from './components/Navbar';
import Events from './components/Events';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Events/>
    </>
  )
}

export default App
