

import { useState } from 'react'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Banner from './components/Banner'
import PostTab from './components/PostTab'

function App() {


  const [toggle, setToggle] = useState(false)

  return (
    <>
      <NavBar setToggle={setToggle}></NavBar>
      <Login toggle={toggle} setToggle={setToggle}></Login>
      <Banner></Banner>
      <PostTab></PostTab>
    </>
  )
}

export default App
