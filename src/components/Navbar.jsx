import { useState } from 'react'
import { Menu, X, Orbit, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a href="#" className="text-slate-200 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mt-4 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 grid place-items-center shadow-lg shadow-cyan-500/20">
              <Orbit className="h-5 w-5 text-white" />
            </div>
            <div className="font-semibold text-white tracking-tight">NovaSoft Engineering</div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItem('Solutions')}
            {navItem('Services')}
            {navItem('Case Studies')}
            {navItem('About')}
          </nav>

          <div className="hidden md:flex">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-white font-medium shadow-sm hover:shadow-cyan-500/25 transition-shadow">
              <Sparkles className="h-4 w-4" /> Start a project
            </a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 mx-4 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-xl px-4 py-4 space-y-3">
          <a href="#" className="block text-slate-200">Solutions</a>
          <a href="#" className="block text-slate-200">Services</a>
          <a href="#" className="block text-slate-200">Case Studies</a>
          <a href="#" className="block text-slate-200">About</a>
          <a href="#contact" className="block text-white font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-center">Start a project</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
