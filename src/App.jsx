import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Card1 from './component/Card1'
import Verticalnav from './component/Verticalnav'
import Songs from './component/Songs'
import {
  BrowserRouter,
  
  Routes,
  Route,
  Link
} from "react-router-dom";
import Latest from './component/Latest'
import History from './component/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Verticalnav  />
      <Routes>
        <Route  path={'/'} element={<Card1 />}/>
        <Route path={'/songs'} element={<Songs/>}/>
        <Route path={"/latest"} element={<Latest />}/>
        <Route path={"/history"} element={<History />}></Route>
      </Routes>
      
      </BrowserRouter>      
    </>
  )
}

export default App
