import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'
import BlogsList from './components/BlogsList'
import BlogItemDetailsWrapper from './components/BlogItemDetailsWrapper'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/"  element={<BlogsList/>} />
      <Route path="/about" exact element={<About/>} />
      <Route path="/contact" exact element={<Contact/>}/>
      <Route path="/blogs/:id" element={<BlogItemDetailsWrapper/>} />
      <Route element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App