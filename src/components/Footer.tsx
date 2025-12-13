import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-[#A0004D] to-[#7A0039] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="mb-4">Lucky Tours</h3>
            <p className="text-white/80 mb-4">
              Your trusted partner for memorable travel experiences across India
              and around the world.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lucky_tours_cbe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/lucky_tours_cbe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/lucky_tours_cbe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("tours")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("enquiry")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Enquiry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h3 className="mb-4">Tour Categories</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Honeymoon Tours</li>
              <li className="text-white/80">Family Tours</li>
              <li className="text-white/80">College Tours</li>
              <li className="text-white/80">School Tours</li>
              <li className="text-white/80">International Tours</li>
              <li className="text-white/80">Domestic Tours</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Velusamy Complex, 10.C, Opp. to Kongunadu College, Pallakattu
                  Thottam, Gounder Mills, Coimbatore, Tamil Nadu 641029
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div className="text-white/80">
                  <div>7867983892</div>
                  <div>096292 26612</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80">info@luckytours.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© 2025 Lucky Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}