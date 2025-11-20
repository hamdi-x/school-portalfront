// import React, { useState } from 'react'
// import axios from 'axios'

// export default function Admin(){
//   const [username,setUsername]=useState('')
//   const [password,setPassword]=useState('')
//   const [message,setMessage]=useState('')
//   const [token,setToken] = useState(localStorage.getItem('bf_token')||'')

//   const [sname,setSname]=useState(''); const [semail,setSemail]=useState(''); const [sclass,setSclass]=useState(''); const [sroll,setSroll]=useState('')
//   const [ctitle,setCtitle]=useState(''); const [ccode,setCcode]=useState(''); const [ccredits,setCcredits]=useState(3)

//   async function login(e){
//     e.preventDefault();
//     try{
//       const res = await axios.post('http://localhost:4000/api/auth/login',{username,password});
//       axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
//       localStorage.setItem('bf_token', res.data.token);
//       setToken(res.data.token);
//       setMessage('Logged in');
//     }catch(err){
//       setMessage('Login failed');
//     }
//   }

//   async function addStudent(e){
//     e.preventDefault();
//     try{
//       const res = await axios.post('http://localhost:4000/api/students',{ name: sname, email: semail, class: sclass, roll: sroll }, { headers: { Authorization: `Bearer ${token}` }});
//       setMessage('Student added: '+res.data.name);
//     }catch(err){
//       setMessage('Add student failed');
//     }
//   }

//   async function addCourse(e){
//     e.preventDefault();
//     try{
//       const res = await axios.post('http://localhost:4000/api/courses',{ title: ctitle, code: ccode, credits: Number(ccredits) }, { headers: { Authorization: `Bearer ${token}` }});
//       setMessage('Course added: '+res.data.title);
//     }catch(err){
//       setMessage('Add course failed');
//     }
//   }

//   return (
//     <section>
//       <h2 className="text-2xl font-semibold mb-4">Admin</h2>

//       <div className="grid md:grid-cols-2 gap-6">
//         <form onSubmit={login} className="space-y-2 bg-white p-4 rounded shadow">
//           <h3 className="font-semibold">Admin Login</h3>
//           <input className="w-full p-2 border rounded" placeholder="username" value={username} onChange={e=>setUsername(e.target.value)} />
//           <input className="w-full p-2 border rounded" placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
//           <button className="px-4 py-2 bg-[var(--brand)] text-white rounded">Login</button>
//         </form>

//         <div className="space-y-4">
//           <form onSubmit={addStudent} className="space-y-2 bg-white p-4 rounded shadow">
//             <h3 className="font-semibold">Add Student</h3>
//             <input className="w-full p-2 border rounded" placeholder="Name" value={sname} onChange={e=>setSname(e.target.value)} />
//             <input className="w-full p-2 border rounded" placeholder="Email" value={semail} onChange={e=>setSemail(e.target.value)} />
//             <input className="w-full p-2 border rounded" placeholder="Class" value={sclass} onChange={e=>setSclass(e.target.value)} />
//             <input className="w-full p-2 border rounded" placeholder="Roll" value={sroll} onChange={e=>setSroll(e.target.value)} />
//             <button className="px-4 py-2 bg-[var(--accent)] text-white rounded">Add Student</button>
//           </form>

//           <form onSubmit={addCourse} className="space-y-2 bg-white p-4 rounded shadow">
//             <h3 className="font-semibold">Add Course</h3>
//             <input className="w-full p-2 border rounded" placeholder="Title" value={ctitle} onChange={e=>setCtitle(e.target.value)} />
//             <input className="w-full p-2 border rounded" placeholder="Code" value={ccode} onChange={e=>setCcode(e.target.value)} />
//             <input className="w-full p-2 border rounded" placeholder="Credits" type="number" value={ccredits} onChange={e=>setCcredits(e.target.value)} />
//             <button className="px-4 py-2 bg-[var(--brand)] text-white rounded">Add Course</button>
//           </form>
//         </div>
//       </div>

//       {message && <p className="mt-4 text-sm">{message}</p>}
//     </section>
//   )
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(localStorage.getItem("bf_token") || "");

  // Student form state
  const [sname, setSname] = useState("");
  const [semail, setSemail] = useState("");
  const [sclass, setSclass] = useState("");
  const [sroll, setSroll] = useState("");

  // Course form state
  const [ctitle, setCtitle] = useState("");
  const [ccode, setCcode] = useState("");
  const [ccredits, setCcredits] = useState(3);

  // UI loading states
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingStudent, setLoadingStudent] = useState(false);
  const [loadingCourse, setLoadingCourse] = useState(false);

  // ensure axios uses token automatically
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("bf_token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("bf_token");
    }
  }, [token]);

  // Small helper to show messages
  function showMsg(text, isError = false) {
    setMessage(text);
    if (isError) {
      // keep visible longer for errors
      setTimeout(() => setMessage(""), 5000);
    } else {
      setTimeout(() => setMessage(""), 3000);
    }
  }

  async function login(e) {
    e.preventDefault();
    setLoadingLogin(true);
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        username,
        password,
      });
      setToken(res.data.token);
      showMsg("Logged in successfully ✅");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
      showMsg("Login failed — check credentials", true);
    } finally {
      setLoadingLogin(false);
    }
  }

  function logout() {
    setToken("");
    showMsg("Logged out");
  }

  async function addStudent(e) {
    e.preventDefault();
    if (!token) return showMsg("You must login first", true);
    if (!sname || !semail) return showMsg("Name and email are required", true);

    setLoadingStudent(true);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/students",
        {
          name: sname,
          email: semail,
          class: sclass,
          roll: sroll,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      showMsg(`Student added: ${res.data.name} ✅`);
      // reset form
      setSname("");
      setSemail("");
      setSclass("");
      setSroll("");
    } catch (err) {
      console.error(err);
      showMsg("Add student failed", true);
    } finally {
      setLoadingStudent(false);
    }
  }

  async function addCourse(e) {
    e.preventDefault();
    if (!token) return showMsg("You must login first", true);
    if (!ctitle || !ccode) return showMsg("Title and code are required", true);

    setLoadingCourse(true);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/courses",
        { title: ctitle, code: ccode, credits: Number(ccredits) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      showMsg(`Course added: ${res.data.title} ✅`);
      setCtitle("");
      setCcode("");
      setCcredits(3);
    } catch (err) {
      console.error(err);
      showMsg("Add course failed", true);
    } finally {
      setLoadingCourse(false);
    }
  }

  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-indigo-700">Admin Panel</h2>

          <div className="flex items-center gap-3">
            {token ? (
              <button
                onClick={logout}
                className="px-3 py-1 text-sm rounded bg-white/10 border border-white/10 text-white hover:bg-white/20 transition"
              >
                Logout
              </button>
            ) : (
              <span className="text-sm text-slate-500">Not logged in</span>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Login Card */}
          <form
            onSubmit={login}
            className="bg-white rounded-xl shadow p-5 border-t-4 border-indigo-600"
          >
            <h3 className="text-lg font-medium text-indigo-700 mb-3">
              Admin Login
            </h3>

            <label className="block text-sm text-slate-600">Username</label>
            <input
              className="w-full p-2 border rounded mt-1 mb-3"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="block text-sm text-slate-600">Password</label>
            <input
              className="w-full p-2 border rounded mt-1 mb-4"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="px-4 py-2 rounded bg-indigo-600 text-white font-medium disabled:opacity-60"
                disabled={loadingLogin}
              >
                {loadingLogin ? "Signing in..." : "Login"}
              </button>

              {token && (
                <span className="px-3 py-2 rounded bg-green-50 text-green-700 text-sm">
                  Authenticated
                </span>
              )}
            </div>
          </form>

          {/* Actions column */}
          <div className="space-y-4">
            {/* Add student */}
            <form
              onSubmit={addStudent}
              className="bg-white rounded-xl shadow p-5 border-t-4 border-blue-500"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-blue-600">Add Student</h3>
                <small className="text-sm text-slate-400">Requires login</small>
              </div>

              <input
                className="w-full p-2 border rounded mt-3"
                placeholder="Name"
                value={sname}
                onChange={(e) => setSname(e.target.value)}
              />
              <input
                className="w-full p-2 border rounded mt-2"
                placeholder="Email"
                value={semail}
                onChange={(e) => setSemail(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <input
                  className="w-full p-2 border rounded"
                  placeholder="Class"
                  value={sclass}
                  onChange={(e) => setSclass(e.target.value)}
                />
                <input
                  className="w-full p-2 border rounded"
                  placeholder="Roll"
                  value={sroll}
                  onChange={(e) => setSroll(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-60"
                  disabled={loadingStudent || !token}
                >
                  {loadingStudent ? "Adding..." : "Add Student"}
                </button>
              </div>
            </form>

            {/* Add course */}
            <form
              onSubmit={addCourse}
              className="bg-white rounded-xl shadow p-5 border-t-4 border-indigo-400"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-indigo-700">Add Course</h3>
                <small className="text-sm text-slate-400">Requires login</small>
              </div>

              <input
                className="w-full p-2 border rounded mt-3"
                placeholder="Title"
                value={ctitle}
                onChange={(e) => setCtitle(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <input
                  className="w-full p-2 border rounded"
                  placeholder="Code"
                  value={ccode}
                  onChange={(e) => setCcode(e.target.value)}
                />
                <input
                  className="w-full p-2 border rounded"
                  placeholder="Credits"
                  type="number"
                  min={1}
                  value={ccredits}
                  onChange={(e) => setCcredits(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-60"
                  disabled={loadingCourse || !token}
                >
                  {loadingCourse ? "Adding..." : "Add Course"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Message area */}
        {message && (
          <div className="rounded-md p-3 bg-indigo-50 border border-indigo-100 text-indigo-800">
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
