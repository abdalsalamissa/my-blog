// import { useState } from 'react'
import './App.css'
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from './Register'
import Home from './Home'
import BlogForm from './BlogForm'
import BlogList from './BlogList'
import PostDetails from './PostDetails'
import EditPost from './EditPost'

function App() {

  return (
    <>
    <div>
      <ToastContainer position='top-center' autoClose={3000} />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blog/new' element={<BlogForm />} />
        <Route path='/blogs' element={<BlogList />} />
        <Route path='/blog/:id' element={<PostDetails />} />
        <Route path='/blog/:id/Edit' element={<EditPost />} />
      </Routes>
    </div>
    </>
  )
}

export default App
