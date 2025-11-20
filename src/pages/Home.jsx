// import React from 'react'

// export default function Home(){
//   return (
//     <section>
//       <div className="rounded-xl p-8 grid md:grid-cols-2 gap-6 items-center bg-white shadow">
//         <div>
//           <h1 className="text-4xl font-extrabold leading-tight" style={{color:'var(--accent)'}}>BrightFuture School</h1>
//           <p className="mt-4 text-slate-700">A modern school portal template with student management, courses and admin features. Responsive, accessible and easy to extend.</p>
//         </div>
//         <div className="p-4">
//           <div className="bg-gradient-to-tr from-[var(--brand)]/20 to-[var(--accent)]/10 rounded-lg p-6">
//             <h3 className="font-semibold">Why choose BrightFuture?</h3>
//             <ul className="mt-3 list-disc pl-5 text-slate-700">
//               <li>Clean responsive UI built with Tailwind CSS</li>
//               <li>MongoDB + Mongoose backend with JWT auth</li>
//               <li>Extensible — add attendance, grading or timetables</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import React from 'react'

// BrightFuture School - Full Home Page (single-file React component)
// Tailwind CSS required in project. Uses simple local images placeholders

export default function HomePage(){
  const stats = [
    {label: 'Students', value: '1,200+'},
    {label: 'Teachers', value: '85+'},
    {label: 'Courses', value: '45+'},
    {label: 'Years', value: '12'}
  ];

  const features = [
    {title: 'Smart Classrooms', desc: 'Interactive boards, live lessons and modern AV setup.'},
    {title: 'Experienced Faculty', desc: 'Committed teachers focused on holistic growth.'},
    {title: 'Sports & Arts', desc: 'Strong extracurricular program for all ages.'},
    {title: 'Laboratories', desc: 'Well-equipped science and computer labs.'}
  ];

  const events = [
    {date:'Dec 12, 2025', title:'Annual Cultural Fest', desc:'Music, dance and theatre performances by students.'},
    {date:'Jan 08, 2026', title:'Science Exhibition', desc:'Projects and experiments from every grade.'},
    {date:'Mar 05, 2026', title:'Inter-School Sports Meet', desc:'Athletics, football and more.'}
  ];

  const gallery = [
    'https://static.vecteezy.com/system/resources/thumbnails/049/172/328/small/view-of-architecture-of-american-school-building-exterior-concept-free-photo.jpeg','https://media.istockphoto.com/id/1768985857/photo/university-students-hanging-out-in-campus.jpg?s=612x612&w=0&k=20&c=AcDwJLF-DzVdQTMz2rS7_TAAUYZnQNjPydcoufQK25s=','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfxsPInjMyAnyOhvqOIzgAVr4dyBWCIClWQ&s','https://wwwaxiellcom.cdn.triggerfish.cloud/uploads/2019/03/library-activities.jpg','https://images.ctfassets.net/3u44qrj81gob/6eULtuMjkx4kig1hDi5pFb/4f1c04fabee51a9829de5bd27c2b264e/Gaining_Lab_Experience.jpg','https://www.jhs.ac.in/Innerimages/Best-Sports-School-in-India.jpg'
  ];

  const testimonials = [
    {name:'Rohit Sharma', role:'Parent', text:'BrightFuture has given my child a safe and nurturing environment. The teachers are wonderful.'},
    {name:'Anjali Mehta', role:'Alumni', text:'The academic rigour and support prepared me well for college.'},
    {name:'Sameer Khan', role:'Student', text:'I love the clubs and the friendly campus — so many opportunities to learn beyond textbooks.'}
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">BrightFuture School</h1>
            <p className="mt-4 text-lg lg:text-xl max-w-xl opacity-90">Empowering students with a balanced curriculum, modern facilities, and a caring community — preparing leaders for tomorrow.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#admissions" className="inline-flex items-center px-5 py-3 bg-white text-indigo-700 rounded-lg font-medium shadow hover:shadow-md">Apply Now</a>
              <a href="#about" className="inline-flex items-center px-5 py-3 bg-white/20 border border-white/30 rounded-lg font-medium">Learn More</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              {stats.map(s=> (
                <div key={s.label} className="bg-white/10 p-4 rounded-lg">
                  <div className="text-2xl font-semibold">{s.value}</div>
                  <div className="text-sm opacity-80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img src="https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/7Mi8DjQgGNSgcBT2RhqJ7n/791650bd8080bd08ae17d6869c35a4dd/Shorelight_Satellite_Schools.jpg?fit=thumb" alt="campus" className="w-full h-80 object-cover"/>
            </div>
          </div>
        </div>

        {/* decorative shape */}
        <svg className="absolute right-0 bottom-0 opacity-20" width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="400" height="200" rx="40" fill="#fff"/></svg>
      </section>

      {/* ABOUT & FEATURES */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-indigo-700">About BrightFuture</h2>
            <p className="mt-3 text-slate-600">Founded with the mission to provide quality education, BrightFuture School blends strong academics with co-curricular activities and personalized student support. Our campus fosters curiosity, creativity and character.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {features.map(f=> (
                <div key={f.title} className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-semibold text-indigo-700">{f.title}</h4>
                  <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>

          </div>

          <div>
            <div className="rounded-xl overflow-hidden shadow">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51GXLYBAbESWW4-hhp_mZoOQ-8SoARvbP4Q&s" alt="classroom" className="w-full h-64 object-cover"/>
            </div>

            <div className="mt-4 bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border">
              <h4 className="font-semibold text-indigo-700">Principal's Message</h4>
              <p className="mt-2 text-slate-600 text-sm">"At BrightFuture we believe every child can excel given the right guidance and environment. Our teachers and staff are dedicated to building confident, curious lifelong learners."</p>
              <div className="mt-3 flex items-center gap-3">
                <img src="https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-600w-2438031869.jpg" alt="principal" className="h-12 w-12 rounded-full object-cover"/>
                <div>
                  <div className="text-sm font-medium">Dr. Meera Rao</div>
                  <div className="text-xs text-slate-500">Principal</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EVENTS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-indigo-700">Upcoming Events</h3>
          <div className="mt-4 space-y-3">
            {events.map(ev=> (
              <div key={ev.title} className="bg-white p-4 rounded-lg shadow flex items-start gap-4">
                <div className="text-sm font-bold text-indigo-600 w-28">{ev.date}</div>
                <div>
                  <div className="font-semibold">{ev.title}</div>
                  <div className="text-sm text-slate-600">{ev.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-700">What Parents & Students Say</h3>
          <div className="mt-4 space-y-4">
            {testimonials.map(t=> (
              <blockquote key={t.name} className="bg-white p-4 rounded-lg shadow">
                <p className="text-slate-700">“{t.text}”</p>
                <footer className="mt-3 text-sm text-slate-500">— {t.name}, <span className="capitalize">{t.role}</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h3 className="text-lg font-semibold text-indigo-700">Campus Gallery</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {gallery.map((g, idx)=> (
            <div key={idx} className="rounded-lg overflow-hidden shadow-sm bg-white">
              <img src={g} alt={`gallery-${idx}`} className="w-full h-36 object-cover"/>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / ADMISSIONS CTA */}
      <section id="admissions" className="bg-gradient-to-r from-indigo-50 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-indigo-700">Admissions Open</h3>
            <p className="mt-2 text-slate-600">Apply now for the upcoming academic year. Limited seats available — visit or contact the admissions office for details.</p>
          </div>

          <div>
            <form className="bg-white p-4 rounded-lg shadow grid gap-3">
              <input className="p-2 border rounded" placeholder="Full name" />
              <input className="p-2 border rounded" placeholder="Phone or email" />
              <select className="p-2 border rounded">
                <option>Grade</option>
                <option>KG</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className="px-4 py-2 rounded bg-indigo-600 text-white">Request Info</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-200 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-6">
          <div>
            <div className="text-lg font-bold text-white">BrightFuture School</div>
            <p className="mt-2 text-sm text-slate-300">123 Sunrise Ave, City • Phone: +91 98765 43210 • Email: info@brightfuture.school</p>
          </div>

          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-2 text-sm space-y-1 text-slate-300">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#admissions" className="hover:underline">Admissions</a></li>
              <li><a href="#" className="hover:underline">Academics</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Follow Us</div>
            <div className="mt-2 flex gap-3">
              <a className="text-slate-300 hover:text-white" href="#">Twitter</a>
              <a className="text-slate-300 hover:text-white" href="#">Facebook</a>
              <a className="text-slate-300 hover:text-white" href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 text-sm text-slate-500 py-4 text-center">© {new Date().getFullYear()} BrightFuture School. All rights reserved.</div>
      </footer>
    </main>
  )
}
