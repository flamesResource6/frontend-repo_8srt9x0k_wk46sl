function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NovaSoft Engineering. All rights reserved.</p>
        <div className="flex items-center gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
