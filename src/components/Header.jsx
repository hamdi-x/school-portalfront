// import React from 'react'
// import { Link } from 'react-router-dom'
// export default function Header(){
//   return (
//     <header className="bg-white/90 backdrop-blur sticky top-0 z-30 shadow-sm">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img src="http://localhost:4000/static/logo.svg" alt="logo" className="h-8 w-auto"/>
//           <div>
//             <div className="text-lg font-semibold" style={{color:'var(--brand)'}}>BrightFuture School</div>
//             <div className="text-xs text-slate-500">Learn • Grow • Achieve</div>
//           </div>
//         </div>
//         <nav className="space-x-4 text-sm">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/students" className="hover:underline">Students</Link>
//           <Link to="/courses" className="hover:underline">Courses</Link>
//           <Link to="/admin" className="hover:underline">Admin</Link>
//         </nav>
//       </div>
//     </header>
//   )
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.dribbble.com/userupload/7216433/file/original-d323c5aa0b57f04827451ee37b96c8de.jpg?format=webp&resize=400x300&vertical=center"
            alt="logo"
            className="h-10 w-auto drop-shadow-md"
          />

          <div>
            <div className="text-xl font-bold tracking-wide">
              BrightFuture School
            </div>
            <div className="text-xs opacity-80 tracking-[1px]">
              Learn • Grow • Achieve
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["Home", "Students", "Courses", "Admin"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
