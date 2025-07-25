

import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Banner from './components/Banner'
import PostTab from './components/PostTab'
import Signup from './pages/Signup'

function App() {


  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  return (
    <>
      <NavBar setToggle={setToggle}></NavBar>
      <Login toggle={toggle} setToggle={setToggle}></Login>
      <Banner></Banner>
      <PostTab></PostTab>
      <Signup></Signup>
    </>
  )
}

export default App
