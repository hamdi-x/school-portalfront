// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function Students(){
//   const [students, setStudents] = useState([])
//   useEffect(()=>{ axios.get('http://localhost:4000/api/students').then(r=>setStudents(r.data)).catch(e=>console.error(e)) },[])
//   return (
//     <section>
//       <h2 className="text-2xl font-semibold mb-4">Students</h2>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {students.map(s=>(
//           <div key={s._id||s.id} className="p-4 bg-white rounded shadow">
//             <div className="flex items-center justify-between">
//               <h3 className="font-bold">{s.name}</h3>
//               <div className="text-xs text-slate-500">{s.roll}</div>
//             </div>
//             <p className="text-sm text-slate-600">{s.class}</p>
//             <p className="text-sm text-slate-500 mt-2">{s.email}</p>
//           </div>
//         ))}
//         {!students.length && <div>No students found.</div>}
//       </div>
//     </section>
//   )
// }

// src/pages/Students.jsx
import React, { useEffect, useState } from "react";
import api from "../utils/api";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  async function fetchStudents() {
    setLoading(true);
    setErr("");
    try {
      const res = await api.get("/api/students");
      // support both {data: [...] } and direct arrays
      setStudents(Array.isArray(res.data) ? res.data : res.data?.students || []);
    } catch (e) {
      console.error("Fetch students error:", e);
      if (e.response) {
        setErr(e.response.data?.message || `Server error: ${e.response.status}`);
      } else if (e.request) {
        setErr("No response from backend — check server / CORS / firewall.");
      } else {
        setErr(e.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <main className="py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-indigo-700">Students</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchStudents}
              className="px-3 py-1 rounded bg-indigo-600 text-white text-sm"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          {loading ? (
            <div className="p-6 text-center">Loading students…</div>
          ) : err ? (
            <div className="p-4 text-red-600">{err}</div>
          ) : students.length === 0 ? (
            <div className="p-6 text-center text-slate-500">No students found.</div>
          ) : (
            <ul className="space-y-3">
              {students.map((s) => (
                <li key={s._id || s.id || `${s.email}-${s.name}`} className="p-3 border rounded flex justify-between items-start">
                  <div>
                    <div className="text-lg font-medium text-slate-900">{s.name}</div>
                    <div className="text-sm text-slate-500">{s.email}</div>
                    <div className="text-sm text-slate-400 mt-1">
                      Class: <span className="text-slate-700">{s.className || "—"}</span> ·
                      Roll: <span className="text-slate-700 ml-1">{s.rollNo || "—"}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">{new Date(s.createdAt || s._createdAt || Date.now()).toLocaleDateString()}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
