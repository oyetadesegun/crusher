"use client";

import { motion } from "framer-motion";
import { Link2, ShoppingCart, Info, Star, ShieldCheck, Shield } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@/src/components/ui/button";

const products = [
  {
    id: "p1",
    name: "AeroTox 500 Spray",
    category: "Aerosol Insecticide",
    price: "$45.00",
    rating: 4.8,
    reviews: 124,
    description: "Industrial-grade aerosol formulated for immediate knockdown of flying and crawling insects. Leaves no residue.",
    features: ["Fast-acting", "Low-odor", "Safe for indoor use"],
    image: "/placeholder-product.webp" // Can replace with actual images later
  },
  {
    id: "p2",
    name: "TermiGuard Bait Station",
    category: "Termite Defense",
    price: "$89.00",
    rating: 4.9,
    reviews: 86,
    description: "Professional subterranean termite baiting system. Silent eradication of entire colonies.",
    features: ["Colony killer", "Weather resistant", "Child-safe locking mechanism"],
    image: "/placeholder-product.webp"
  },
  {
    id: "p3",
    name: "VerdeRepel Eco-Spray",
    category: "Botanical Repellent",
    price: "$32.00",
    rating: 4.5,
    reviews: 210,
    description: "100% organic, plant-based essential oil blend. Deters spiders, ants, and mosquitoes without harsh chemicals.",
    features: ["Pet safe", "Pleasant mint scent", "Eco-friendly"],
    image: "/placeholder-product.webp"
  },
  {
    id: "p4",
    name: "RodentX Snap Traps (4-Pack)",
    category: "Physical Control",
    price: "$24.00",
    rating: 4.7,
    reviews: 312,
    description: "High-tension, sensitive trigger rodent traps designed for quick, humane dispatch.",
    features: ["Reusable", "Washable plastic", "No-touch release"],
    image: "/placeholder-product.webp"
  },
  {
    id: "p5",
    name: "MaxBarrier Perimeter Granules",
    category: "Outdoor Defense",
    price: "$55.00",
    rating: 4.6,
    reviews: 95,
    description: "Water-activated granules that create a 3-month barrier around your home's foundation.",
    features: ["3-month protection", "Covers 2,000 sq ft", "Weatherproof"],
    image: "/placeholder-product.webp"
  },
  {
    id: "p6",
    name: "BedBug Zero Thermal Protocol",
    category: "Specialized Treatment",
    price: "$110.00",
    rating: 4.9,
    reviews: 42,
    description: "Professional DIY kit for localized bed bug treatment, including targeted chemical and mattress encasements.",
    features: ["Includes Queen encasement", "Residual spray included", "Detailed guide"],
    image: "/placeholder-product.webp"
  }
];

export default function ProductsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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
      <section className="relative py-24 overflow-hidden border-b border-white/5 bg-zinc-950">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="container-narrow px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
              Professional <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-white">Arsenal</span>.
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              Industrial-grade extermination and prevention tools, now available for civilian deployment. Secure your perimeter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="bg-white/5 border-b border-white/10 py-4 hidden md:block">
        <div className="container-narrow px-4 flex justify-between items-center text-sm font-mono text-white/50 tracking-widest uppercase">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Lab Tested</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Commercial Grade</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Next-Day Shipping</span>
        </div>
      </div>

      {/* Main Content Area: Products Grid */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-narrow px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="group flex flex-col bg-zinc-950 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] relative"
              >
                {/* Image Area - Placeholder with sleek dark vibe */}
                <div className="h-64 bg-zinc-900 border-b border-white/10 relative overflow-hidden flex items-center justify-center p-8">
                  {/* Subtle hover gradient over image */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  
                  {/* Abstract placeholder visual */}
                  <div className="relative w-full h-full border border-white/5 rounded-xl bg-black flex items-center justify-center overflow-hidden shadow-inset group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay"></div>
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center relative z-10 bg-white/5 backdrop-blur-md">
                       <Shield className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-black/80 backdrop-blur-md text-white/70 px-3 py-1.5 rounded-full border border-white/10">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-primary transition-colors">{product.name}</h3>
                    <span className="font-mono font-bold text-lg text-white">{product.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-primary">
                      {Array.from({ length: 5 }).map((_, idx) => (
                         <Star key={idx} className={`w-3.5 h-3.5 ${idx < Math.floor(product.rating) ? "fill-primary" : "fill-primary/20 text-primary/20"}`} />
                      ))}
                    </div>
                    <span className="text-xs text-white/40">({product.reviews})</span>
                  </div>

                  <p className="text-white/60 text-sm font-light leading-relaxed mb-6 grow">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="mb-8 space-y-2">
                    {product.features.map(feat => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-white/50">
                        <div className="w-1 h-1 rounded-full bg-primary/50"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto pt-6 border-t border-white/5">
                    <Button variant="outline" className="flex-1 h-12 bg-transparent border-white/20 text-white hover:bg-white/5 transition-colors">
                      <Info className="w-4 h-4 mr-2" /> Details
                    </Button>
                    <Button className="flex-1 h-12 bg-white text-black hover:bg-zinc-200 font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                      <ShoppingCart className="w-4 h-4 mr-2" /> Order
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="container-narrow px-4 text-center">
          <div className="max-w-3xl mx-auto bg-linear-to-br from-primary/10 to-transparent p-10 md:p-16 rounded-3xl border border-primary/20">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Require Mass Deployment?</h2>
            <p className="text-white/60 text-lg mb-8 font-light">
              We offer wholesale pricing and specialized industrial containers for property managers and commercial facilities.
            </p>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-primary/50 text-white hover:bg-primary/10 transition-colors">
              Request Wholesale Catalog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
