"use client";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Shield, Home, Building2, Bug, Leaf, Clock, CheckCircle, ArrowRight, Star, Zap, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroImage from "../../assets/hero-fumigation.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";

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

const FRAME_COUNT = 196;

const ScrollHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.4], [1, 1, 0, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.4, 0.55, 0.7, 0.8], [50, 0, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const text3Y = useTransform(scrollYProgress, [0.8, 0.9, 1], [50, 0, 0]);

  useEffect(() => {
    // Preload all 196 images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      const num = i.toString().padStart(3, '0');
      img.src = `/transition/ezgif-frame-${num}.jpg`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    const unsub = frameIndex.on("change", (latest) => {
      const index = Math.min(Math.floor(latest), FRAME_COUNT - 1);
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      
      if (images.length > 0 && canvas && ctx) {
        const img = images[index];
        if (img && img.complete) {
          // Use Math.min for 'contain' instead of Math.max for 'cover' to ensure nothing is cut off
          const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
          const x = (canvas.width / 2) - (img.width / 2) * scale;
          const y = (canvas.height / 2) - (img.height / 2) * scale;
          
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
      }
    });

    // Initial render
    if (images.length > 0 && images[0].complete && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = images[0];
      if (ctx) {
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    }

    // Handle window resize for canvas dimensions
    const resizeCanvas = () => {
      if (canvasRef.current) {
        // Adjust resolution if needed (window.devicePixelRatio)
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        
        // Re-draw current frame
        const index = Math.min(Math.floor(frameIndex.get()), FRAME_COUNT - 1);
        const ctx = canvasRef.current.getContext("2d");
        const img = images[index];
        if (img && img.complete && ctx) {
          const scale = Math.min(canvasRef.current.width / img.width, canvasRef.current.height / img.height);
          const x = (canvasRef.current.width / 2) - (img.width / 2) * scale;
          const y = (canvasRef.current.height / 2) - (img.height / 2) * scale;
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
      }
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsub();
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      {/* Scrollable Container Content */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Canvas Background Overlayed */}
        <div className="absolute inset-0 z-0 bg-black">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain opacity-90"
          />
          {/* Subtle gradient so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
        </div>

        {/* Loading Indicator */}
        {imagesLoaded < FRAME_COUNT && (
          <div className="absolute bottom-10 right-10 text-white/50 text-sm font-mono z-50">
            Loading sequence... {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%
          </div>
        )}

        {/* Text Segments overlaid */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          
          {/* Phase 1 Text */}
          <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute transform -translate-x-1/2 -translate-y-1/2 max-w-3xl w-full">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-md text-primary-foreground border border-primary/30 text-sm font-medium mb-6 uppercase tracking-widest">
              <Shield className="h-4 w-4" /> Next-Gen Pest Control
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-xl">
              Protect Your Space. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-extrabold italic">Eliminate Pests.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              Experience the evolution of fumigation technology. Slide down to see our invisible barrier in action.
            </p>
          </motion.div>

          {/* Phase 2 Text */}
          <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute transform -translate-x-1/2 -translate-y-1/2 max-w-3xl w-full">
             <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-xl">
              <span className="text-primary">Micro-precision</span> Targeting
            </h2>
            <p className="text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              Our advanced formulations reach where others can't, permanently neutralizing threats without harming your environment.
            </p>
          </motion.div>

          {/* Phase 3 Text */}
          <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="absolute transform -translate-x-1/2 -translate-y-1/2 max-w-3xl w-full flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-8 drop-shadow-xl">
              Secure Your Environment Today.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all">
                <Link href="/booking" className="flex items-center">
                  Book VIP Service <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

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
      <div className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <Navbar />
      </div>

      {/* Standard Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Professional fumigation service" className="w-full h-full object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium mb-6 uppercase tracking-widest">
              <Shield className="h-4 w-4" /> Next Generation Protection
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Total Eradication. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Zero Compromise.</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl leading-relaxed font-light">
              Premium fumigation services combining cutting-edge technology with industrial-grade chemical precision. We don't just control pests; we eliminate them.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all">
                <Link href="/booking" className="flex items-center">
                  Deploy Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/10 transition-all font-light">
                <Link href="/products">View Arsenal</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Hero - Interactive Sequence */}
      <div className="bg-black py-12 text-center relative z-20 border-t border-white/10">
        <h2 className="text-white/50 font-display uppercase tracking-[0.3em] text-sm">Interactive Sequence Demonstration</h2>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto mt-4 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </div>
      
      <ScrollHero />

      {/* Stats - Redesigned for Dark/Premium V2 */}
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
                <p className="font-display text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2">{stat.value}</p>
                <div className="h-1 w-8 bg-primary rounded-full mb-3" />
                <p className="text-sm font-medium text-white/50 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Glassmorphism */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900 relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="container-narrow px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-4">Precision Methodology</span>
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
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

      {/* Features/Why Us */}
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
                  <li key={item} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
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
              {/* Abstract decorative element representing technology/chemical precision */}
              <div className="aspect-square rounded-full border border-primary/20 absolute -inset-10 animate-spin-slow"></div>
              <div className="aspect-square rounded-full border border-primary/10 absolute -inset-20 animate-spin-slow-reverse"></div>
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black p-1">
                <div className="h-full w-full bg-zinc-950 rounded-xl p-10 flex flex-col items-center justify-center">
                   <Zap className="w-24 h-24 text-primary/40 mb-8" />
                   <h3 className="text-2xl font-display font-bold text-white mb-2">System Active</h3>
                   <div className="flex gap-2 mb-8">
                     <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                     <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                     <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                   </div>
                   <p className="text-center text-white/50 text-sm">Our proprietary vapor systems permeate structural cavities unseen by the naked eye.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                className="bg-zinc-950 rounded-2xl p-8 border border-white/[0.05] relative"
              >
                <div className="absolute top-8 right-8 text-6xl text-white/[0.03] font-serif leading-none">"</div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-white/80 font-light leading-relaxed mb-8 italic relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
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

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        
        <div className="container-narrow px-4 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            Protocol <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Initiated</span>.
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
