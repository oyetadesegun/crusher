import Link from "next/link";
import { Bug, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo_1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* <Bug className="h-7 w-7 text-primary" /> */}
              <Image src={logo} alt="Logo" className="h-10 w-10" />
              <span className="font-display text-xl font-bold">
                Tobi<span className="text-red-500">Crusher</span>
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Professional fumigation services and premium insecticide products for residential and commercial properties.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/booking" className="hover:text-primary transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Residential Fumigation</li>
              <li>Commercial Pest Control</li>
              <li>Termite Treatment</li>
              <li>Rodent Control</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                (123) 456-7890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                info@guardpestpro.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                123 Pest Control Ave, Suite 100
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} GuardPestPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
