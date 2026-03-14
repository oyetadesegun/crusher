"use client";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Shield, Home, Building2, Bug, Leaf, Clock, CheckCircle, ArrowRight, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollHero from "../components/ScrollHero";

// Reusing original arrays for consistency
const services = [
  { icon: Home, title: "Residential Fumigation", desc: "Complete home protection against cockroaches, ants, bedbugs, and more." },
  { icon: Building2, title: "Commercial Pest Control", desc: "Tailored solutions for offices, restaurants, warehouses, and retail spaces." },
  { icon: Bug, title: "Termite Treatment", desc: "Advanced termite detection and elimination with long-lasting barriers." },
  { icon: Shield, title: "Rodent Control", desc: "Professional rodent removal and prevention for any property." },
  { icon: Leaf, title: "Eco-Friendly Options", desc: "Green solutions that are safe for families, pets, and the environment." },
  { icon: Clock, title: "Emergency Response", desc: "24/7 rapid response for urgent pest infestations." },
];

const stats = [
  { value: "15K+", label: "Properties Treated" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Support" },
];

const testimonials = [
  { name: "Sarah M.", role: "Homeowner", text: "TobiCrusher eliminated our termite problem completely. Their team was professional and thorough.", rating: 5 },
  { name: "James K.", role: "Restaurant Owner", text: "We rely on them for monthly pest control. Zero issues since we started. Highly recommended!", rating: 5 },
  { name: "Linda R.", role: "Property Manager", text: "Managing 50+ units, I trust only TobiCrusher. Fast, effective, and fairly priced.", rating: 5 },
];

export default function V2Page() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="min-h-screen bg-black min-w-screen text-white/90 font-sans selection:bg-primary/30">
      
      {/* Fixed Navbar with Background */}
      <div className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <Navbar />
      </div>

      {/* The Scroll Hero - starts below navbar */}
      <ScrollHero />

      {/* Stats Section */}
      <section className="bg-zinc-950 border-y border-white/5 pb-16 pt-24">
        <div className="container-narrow px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <p className="font-display text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-white to-white/50 mb-2">
                  {stat.value}
                </p>
                <div className="h-1 w-8 bg-primary rounded-full mb-3" />
                <p className="text-sm font-medium text-white/50 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-linear-to-b from-black to-zinc-900 relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="container-narrow px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Precision Methodology
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Tactical Extermination
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group relative p-8 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container-narrow px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Engineered for <span className="text-primary">Eradication.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
                We've spent the last decade perfecting the chemical balance and delivery systems required to maintain completely sterile environments for our partners.
              </p>
              <ul className="space-y-4">
                {[
                  "Industrial-grade synthetic compounds", 
                  "Residual barrier technology", 
                  "Thermal & vapor dispersion mechanisms", 
                  "Biometric pest tracking"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 p-4 rounded-xl bg-white/2 border border-white/5">
                    <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-white/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-full border border-primary/20 absolute -inset-10 animate-spin-slow"></div>
              <div className="aspect-square rounded-full border border-primary/10 absolute -inset-20 animate-spin-slow-reverse"></div>
              <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-zinc-900 to-black p-1">
                <div className="h-full w-full bg-zinc-950 rounded-xl p-10 flex flex-col items-center justify-center">
                  <Zap className="w-24 h-24 text-primary/40 mb-8" />
                  <h3 className="text-2xl font-display font-bold text-white mb-2">System Active</h3>
                  <div className="flex gap-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                    <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                  </div>
                  <p className="text-center text-white/50 text-sm">
                    Our proprietary vapor systems permeate structural cavities unseen by the naked eye.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container-narrow px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">Case Studies</span>
              <h2 className="font-display text-4xl font-bold text-white">
                Verified Outcomes
              </h2>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-white/20 rounded-full"></div>
              <div className="w-4 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-zinc-950 rounded-2xl p-8 border border-white/5 relative"
              >
                <div className="absolute top-8 right-8 text-6xl text-white/3 font-serif leading-none">"</div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-white/80 font-light leading-relaxed mb-8 italic relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-white/40 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        
        <div className="container-narrow px-4 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            Protocol <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-white">Initiated</span>.
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
            Deploy our specialized teams to stabilize your environment within 24 hours. Confidential and completely discreet.
          </p>
          <Button size="lg"
            className="h-16 px-10 rounded-full bg-white text-black hover:bg-zinc-200 transition-all font-bold text-lg hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <Link href="/booking" className="flex items-center">
               Execute Request <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}