import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/94f85eaaee444b72a97e566e5521a1d66550b973.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Tours", path: "tours" },
    { name: "Enquiry", path: "enquiry" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 group"
          >
            <img 
              src={logoImage} 
              alt="Lucky Tours Logo" 
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-xl text-[#A0004D]">Lucky Tours</h1>
              <p className="text-xs text-gray-600">Explore the World</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`transition-colors ${
                  currentPage === item.path
                    ? "text-[#A0004D]"
                    : "text-gray-700 hover:text-[#A0004D]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => onNavigate("enquiry")}
              className="relative px-6 py-3 rounded-lg overflow-hidden group bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Enquire Now</span>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#A0004D]" />
            ) : (
              <Menu className="w-6 h-6 text-[#A0004D]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 px-4 rounded-lg transition-colors ${
                    currentPage === item.path
                      ? "bg-[#A0004D] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate("enquiry");
                  setMobileMenuOpen(false);
                }}
                className="relative px-6 py-3 rounded-lg overflow-hidden bg-gradient-to-r from-[#A0004D] to-[#C9005F] text-white backdrop-blur-md border border-white/20 shadow-lg"
              >
                Enquire Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}