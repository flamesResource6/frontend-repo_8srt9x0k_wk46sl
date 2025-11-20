import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Glow backdrop */}
      <div className="pointer-events-none fixed inset-0" style={{
        background: 'radial-gradient(50% 50% at 50% 0%, rgba(34,211,238,0.12), rgba(2,6,23,0))'
      }} />

      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
