import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  const [data,setData] = useState([])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/:assesmentId' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App