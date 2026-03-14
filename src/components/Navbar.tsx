"use client"
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Menu, X, Bug, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import logo from "../assets/logo_1.png";
import logo2 from "../assets/logo_2.png";
import Image from "next/image";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Book Now", path: "/booking" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src={logo} alt="Logo" className="h-8 w-8 md:h-10 md:w-10" />
          <Image src={logo2} alt="Logo" className="h-8 w-32 md:h-10 md:w-40 invert brightness-0" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path
                  ? "text-primary"
                  : "text-secondary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+1234567890" className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" />
            (123) 456-7890
          </a>
          <Button variant="cta" size="sm">
            <Link href="/booking">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary-foreground"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-border">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  location === link.path
                    ? "text-primary"
                    : "text-secondary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="cta" size="sm" className="mt-2">
              <Link href="/booking" onClick={() => setIsOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
