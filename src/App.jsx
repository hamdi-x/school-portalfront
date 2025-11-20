import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'
import Courses from './pages/Courses'
import Admin from './pages/Admin'
import Header from './components/Header'

export default function App(){
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>
    </div>
  )
}
