import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      {/* Gradient aurora background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 opacity-70 pointer-events-none" style={{
        background: 'radial-gradient(60% 60% at 70% 30%, rgba(34,211,238,0.25) 0%, rgba(168,85,247,0.18) 35%, rgba(2,6,23,0) 70%)'
      }} />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-cyan-200 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Trusted software engineering partner
              </div>
              <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Build futuristic software that scales with your vision
              </h1>
              <p className="mt-5 text-lg text-slate-300 max-w-xl">
                We design, build, and ship world-class digital products — from cloud platforms to AI-powered experiences. Delivered with speed, quality, and a focus on outcomes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex justify-center items-center rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/25">
                  Start a project
                </a>
                <a href="#work" className="inline-flex justify-center items-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-white/90 font-semibold backdrop-blur-md">
                  Explore our work
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl max-w-md ml-auto">
                <div className="text-cyan-200 text-sm font-medium">Core capabilities</div>
                <ul className="mt-3 space-y-2 text-slate-200">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Cloud-native platforms</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> AI + data engineering</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Web, mobile, and edge</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> DevOps & platform engineering</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
