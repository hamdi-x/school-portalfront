import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Students(){
  const [students, setStudents] = useState([])
  useEffect(()=>{ axios.get('http://localhost:4000/api/students').then(r=>setStudents(r.data)).catch(e=>console.error(e)) },[])
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Students</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map(s=>(
          <div key={s._id||s.id} className="p-4 bg-white rounded shadow">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">{s.name}</h3>
              <div className="text-xs text-slate-500">{s.roll}</div>
            </div>
            <p className="text-sm text-slate-600">{s.class}</p>
            <p className="text-sm text-slate-500 mt-2">{s.email}</p>
          </div>
        ))}
        {!students.length && <div>No students found.</div>}
      </div>
    </section>
  )
}
