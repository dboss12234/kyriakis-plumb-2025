import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("GR");

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+30 698 581 4213</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>kyriakisplumber@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <button 
              onClick={() => setLanguage(language === "GR" ? "EN" : "GR")}
              className="hover:underline"
            >
              {language}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Kyriakis Plumber</h1>
              <p className="text-sm text-muted-foreground">Premium Services 2025</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Αρχική
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Υπηρεσίες
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Σχετικά
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Επικοινωνία
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="emergency" size="sm">
              <Phone className="w-4 h-4" />
              24/7 Κλήση
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;