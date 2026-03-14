"use client";

import { motion } from "framer-motion";
import { Shield, Home, Building2, Bug, Leaf, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const services = [
  { icon: Home, title: "Residential Fumigation", desc: "Complete home protection against cockroaches, ants, bedbugs, and more." },
  { icon: Building2, title: "Commercial Pest Control", desc: "Tailored solutions for offices, restaurants, warehouses, and retail spaces." },
  { icon: Bug, title: "Termite Treatment", desc: "Advanced termite detection and elimination with long-lasting barriers." },
  { icon: Shield, title: "Rodent Control", desc: "Professional rodent removal and prevention for any property." },
  { icon: Leaf, title: "Eco-Friendly Options", desc: "Green solutions that are safe for families, pets, and the environment." },
  { icon: Clock, title: "Emergency Response", desc: "24/7 rapid response for urgent pest infestations." },
];

export default function BookingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="min-h-screen bg-black min-w-screen text-white/90 font-sans selection:bg-primary/30 pt-20">
      
      {/* Fixed Navbar */}
      <div className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <Navbar />
      </div>

      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-radial-[at_top_center] from-primary/10 to-transparent pointer-events-none"></div>
        
        <div className="container-narrow px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm bg-black/20">
              Schedule Deployment
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
              Initiate <span className="text-primary italic font-serif font-light">Protocol</span>.
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              Select your required service and preferred time. Our tactical team will be dispatched to secure your environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area: Services + Booking Form */}
      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="container-narrow px-4">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            
            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-black border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                {/* Glow effect matching v2 */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h2 className="text-3xl font-display font-bold text-white mb-2">Service Request</h2>
                <p className="text-white/50 mb-8 font-light">Fill out the details below. We typically respond within 15 minutes during operating hours.</p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 lowercase tracking-widest font-mono">First Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 lowercase tracking-widest font-mono">Last Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 lowercase tracking-widest font-mono">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 lowercase tracking-widest font-mono">Phone Number</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 lowercase tracking-widest font-mono">Service Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors cursor-pointer">
                        <option value="" disabled className="text-black bg-white">Select required intervention...</option>
                        {services.map(s => <option key={s.title} value={s.title} className="text-black bg-white">{s.title}</option>)}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 lowercase tracking-widest font-mono">Address of Intervention</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors" placeholder="Full physical address" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 lowercase tracking-widest font-mono">Preferred Date & Time</label>
                    <input type="datetime-local" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors [&::-webkit-calendar-picker-indicator]:invert" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 lowercase tracking-widest font-mono">Additional Intelligence (Notes)</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors resize-none" placeholder="Provide any details about the scale or nature of the threat..."></textarea>
                  </div>

                  <Button type="button" size="lg" className="w-full h-14 rounded-xl font-bold text-lg bg-white text-black hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-95">
                    Submit Request
                  </Button>
                  
                  <p className="text-center text-xs text-white/40 mt-4 flex justify-center items-center gap-2">
                    <Shield className="w-3 h-3" /> All data is securely encrypted.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Right Column: Available Services context */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col"
            >
              <div className="mb-10">
                <h3 className="font-display text-3xl font-bold text-white mb-4">Available Capabilities</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  Our extermination protocols are designed for specific threat vectors. Review our capabilities to select the appropriate response for your environment.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="group relative p-6 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 transition-all duration-300 flex gap-5 items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white mb-1">{service.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed font-light">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Browse Products CTA block */}
              <div className="mt-12 p-8 rounded-3xl bg-linear-to-br from-primary/20 to-transparent border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full"></div>
                <h4 className="font-display text-2xl font-bold text-white mb-3 relative z-10">Need supplies instead?</h4>
                <p className="text-white/70 mb-6 text-sm relative z-10">Order professional-grade DIY extermination kits, sprays, and deterrents directly from our lab.</p>
                <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-colors relative z-10">
                  <Link href="/products">Browse Equipment <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
