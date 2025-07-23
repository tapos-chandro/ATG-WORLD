

import { useState } from 'react'
import NavBar from './components/NavBar'
import Login from './pages/Login'

function App() {


  const [toggle, setToggle] = useState(false)

  return (
    <>
      <NavBar setToggle={setToggle}></NavBar>
      <Login toggle={toggle} setToggle={setToggle}></Login>
    </>
  )
}

export default App
