"use client";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Shield, Home, Building2, Bug, Leaf, Clock, CheckCircle, ArrowRight, Star, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../assets/hero-fumigation.jpg";
import productImage from "../../assets/product-spray_.png";
// import Navbar from "@/src/components/Navbar";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background min-w-screen ">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Professional fumigation service" className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>
        <div className="relative z-10 container-narrow px-4 md:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" /> Trusted Pest Control Experts
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
              Protect Your Space.{" "}
              <span className="text-primary">Eliminate Pests.</span>
            </h1>
            <p className="text-lg text-secondary-foreground/70 mb-8 max-w-xl leading-relaxed">
              Professional fumigation services and our own premium insecticide line — keeping homes and businesses pest-free since 2014.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">

                <Link href="/booking">
                <div className="p-4 flex items-center justify-center">  Book Fumigation <ArrowRight className="ml-2 h-5 w-5" /></div>
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg">
                <Link href="/products">Our Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container-narrow px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Fumigation Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From residential homes to commercial complexes, we deliver thorough pest elimination with our proprietary products and expert techniques.
            </p>
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
                className="card-elevated bg-card rounded-lg p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding hero-gradient">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Products</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mt-2 mb-6">
                Premium Insecticide Line
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed mb-6">
                We manufacture our own professional-grade insecticides, tested and proven effective. Available for both professional use and retail purchase.
              </p>
              <ul className="space-y-3 mb-8">
                {["Lab-tested formulas", "Eco-friendly options available", "Commercial & residential grades", "Long-lasting protection"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary-foreground/80">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero">
                <Link href="/products">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center w-full"
            >
              <Image 
                src={productImage} 
                alt="TobiCrusher insecticide product" 
                className="w-full max-w-[280px] md:max-w-sm drop-shadow-2xl h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why TobiCrusher</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Why Clients Trust Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Fast & Effective", desc: "Same-day service with results you can see immediately. Our proprietary formulas work faster." },
              { icon: Shield, title: "Licensed & Insured", desc: "Fully certified technicians with comprehensive insurance coverage for your peace of mind." },
              { icon: Users, title: "Trusted by Thousands", desc: "Over 15,000 properties treated with a 98% satisfaction rate across residential and commercial." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Our Clients Say
            </h2>
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
                className="bg-card rounded-lg p-6 border border-border card-elevated"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-card-foreground/80 leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-display font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Go Pest-Free?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Book your fumigation service today and enjoy a cleaner, safer environment. Free inspection included.
          </p>
          <Button variant="cta" size="lg"
          className="bg-accent text-accent-foreground"
          >
            <Link href="/booking">
              <div className="p-4 flex items-center justify-center">Book Now — It's Free to Quote <ArrowRight className="ml-2 h-5 w-5" /></div>
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
