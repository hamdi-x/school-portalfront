import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Courses(){
  const [courses, setCourses] = useState([])
  useEffect(()=>{ axios.get('http://localhost:4000/api/courses').then(r=>setCourses(r.data)).catch(e=>console.error(e)) },[])
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Courses</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {courses.map(c=>(
          <div key={c._id||c.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">{c.title} <span className="text-sm text-slate-500">({c.code})</span></h3>
            <p className="text-sm text-slate-600 mt-1">Credits: {c.credits}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
