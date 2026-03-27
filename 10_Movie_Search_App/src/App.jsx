import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import SingleMovie from './components/SingleMovie/SingleMovie'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App