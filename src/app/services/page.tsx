"use client";

import { motion } from "framer-motion";
import { Shield, Home, Building2, Bug, Leaf, Clock, ArrowRight, Zap, CheckCircle } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const detailedServices = [
  { 
    icon: Home, 
    id: "residential",
    title: "Residential Fumigation", 
    desc: "Complete home protection against cockroaches, ants, bedbugs, and more. We utilize advanced thermal and chemical approaches to ensure zero survival rates while keeping your family safe.",
    features: ["Same-day emergency visits", "Child & pet safe variants", "90-day residual barrier"]
  },
  { 
    icon: Building2, 
    id: "commercial",
    title: "Commercial Pest Control", 
    desc: "Tailored solutions for offices, restaurants, warehouses, and retail spaces. We work securely after-hours to maintain business continuity and pass all health inspections.",
    features: ["Discreet nighttime deployment", "Audit-ready reporting", "Preventative maintenance"]
  },
  { 
    icon: Bug, 
    id: "termite",
    title: "Advanced Termite Eradication", 
    desc: "Subterranean and drywood termite detection and elimination with long-lasting barriers. We map the entire colony and destroy it from the source.",
    features: ["Thermal imaging detection", "Deep-soil injection", "Structural repair partnerships"]
  },
  { 
    icon: Shield, 
    id: "rodent",
    title: "Rodent Control & Exclusion", 
    desc: "Professional rodent removal and prevention for any property. Beyond trapping, we identify and seal all entry points to permanently secure the perimeter.",
    features: ["Humane trapping options", "Entry-point sealing", "Biohazard cleanup"]
  },
];

export default function ServicesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen bg-black min-w-screen text-white/90 font-sans selection:bg-primary/30 pt-20">
      
      {/* Fixed Navbar */}
      <div className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <Navbar />
      </div>

      {/* Hero Header */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5 bg-zinc-950">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container-narrow px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm bg-black/20">
              Intervention Protocols
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 drop-shadow-2xl">
              Tactical <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/50">Services</span>.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              We deploy highly calibrated chemical, thermal, and biological protocols tailored specifically to your exact threat vector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-black relative">
        <div className="container-narrow px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {detailedServices.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="group relative p-8 md:p-12 rounded-3xl bg-zinc-950 border border-white/5 hover:bg-white/2 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h2 className="font-display text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h2>
                  
                  <p className="text-white/60 text-lg leading-relaxed font-light mb-8 flex-grow">
                    {service.desc}
                  </p>

                  <div className="border-t border-white/10 pt-8 mt-auto">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Protocol Specifications</h4>
                    <ul className="space-y-3">
                      {service.features.map(feat => (
                        <li key={feat} className="flex items-start gap-3 text-sm text-white/80">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button variant="outline" className="w-full h-14 rounded-xl border-white/20 text-white hover:bg-white hover:text-black transition-colors" >
                      <Link href={`/booking?service=${service.id}`}>Request Intervention <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco & Emergency Flags */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="container-narrow px-4">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Eco */}
            <div className="p-10 rounded-3xl bg-linear-to-br from-green-900/20 to-black border border-green-500/20 relative overflow-hidden">
              <Leaf className="absolute -right-10 -bottom-10 w-64 h-64 text-green-500/5 pointer-events-none" />
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Eco-Friendly Alternatives</h3>
              <p className="text-white/60 font-light leading-relaxed">
                For sensitive environments, we offer fully botanical and organic treatments that are 100% safe for infants, pets, and organic gardens, leaving no synthetic residuals.
              </p>
            </div>

            {/* Emergency */}
            <div className="p-10 rounded-3xl bg-linear-to-br from-red-900/20 to-black border border-red-500/20 relative overflow-hidden">
              <Zap className="absolute -right-10 -bottom-10 w-64 h-64 text-red-500/5 pointer-events-none" />
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6 animate-pulse">
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">24/7 Rapid Response</h3>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                Critical infestations wait for no one. Our emergency response team is on standby 24 hours a day to neutralize threats immediately.
              </p>
              <Button  className="bg-red-600 hover:bg-red-700 text-white border-0 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                <Link href="/booking">Dispatch Emergency Unit</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
