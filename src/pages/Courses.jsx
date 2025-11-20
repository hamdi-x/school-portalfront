// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function Courses(){
//   const [courses, setCourses] = useState([])
//   useEffect(()=>{ axios.get('http://localhost:4000/api/courses').then(r=>setCourses(r.data)).catch(e=>console.error(e)) },[])
//   return (
//     <section>
//       <h2 className="text-2xl font-semibold mb-4">Courses</h2>
//       <div className="grid sm:grid-cols-2 gap-4">
//         {courses.map(c=>(
//           <div key={c._id||c.id} className="p-4 bg-white rounded shadow">
//             <h3 className="font-bold">{c.title} <span className="text-sm text-slate-500">({c.code})</span></h3>
//             <p className="text-sm text-slate-600 mt-1">Credits: {c.credits}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// src/pages/Courses.jsx
import React, { useEffect, useState } from "react";
import api from "../utils/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  async function fetchCourses() {
    setLoading(true);
    setErr("");
    try {
      const res = await api.get("/api/courses");
      setCourses(Array.isArray(res.data) ? res.data : res.data?.courses || []);
    } catch (e) {
      console.error("Fetch courses error:", e);
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
    fetchCourses();
  }, []);

  return (
    <main className="py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-indigo-700">Courses</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchCourses}
              className="px-3 py-1 rounded bg-indigo-600 text-white text-sm"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          {loading ? (
            <div className="p-6 text-center">Loading courses…</div>
          ) : err ? (
            <div className="p-4 text-red-600">{err}</div>
          ) : courses.length === 0 ? (
            <div className="p-6 text-center text-slate-500">No courses found.</div>
          ) : (
            <ul className="grid sm:grid-cols-2 gap-3">
              {courses.map((c) => (
                <li key={c._id || c.id || c.code} className="p-3 border rounded">
                  <div className="text-lg font-medium text-slate-900">{c.title}</div>
                  <div className="text-sm text-slate-500">{c.code}</div>
                  <div className="text-sm text-slate-400 mt-1">Credits: <span className="text-slate-700">{c.credits ?? "—"}</span></div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
