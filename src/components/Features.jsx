import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Cloud, Rocket } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'Security-first architecture, compliance, and best practices baked into every layer.'
  },
  {
    icon: Cpu,
    title: 'AI-native systems',
    desc: 'From vector search to LLM agents — we build intelligent features end-to-end.'
  },
  {
    icon: Cloud,
    title: 'Cloud & edge ready',
    desc: 'Kubernetes, serverless, and global edge delivery for scale and resilience.'
  },
  {
    icon: Rocket,
    title: 'Speed to value',
    desc: 'Battle-tested playbooks to go from idea to launch in weeks, not months.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(40% 40% at 20% 10%, rgba(34,211,238,0.12), transparent 60%), radial-gradient(30% 35% at 80% 20%, rgba(168,85,247,0.1), transparent 60%)'
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Engineering that moves you forward</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            We combine product thinking, rigorous engineering, and modern design to build platforms that last.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 grid place-items-center shadow-md shadow-cyan-500/20">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
