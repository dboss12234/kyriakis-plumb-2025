import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Header = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 border-b border-border/50">
      {/* Top Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2 md:py-3">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-medium hidden sm:inline">+30 698 581 4213</span>
              <span className="font-medium sm:hidden">Call</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-medium hidden lg:inline">kyriakisplumber@gmail.com</span>
              <span className="font-medium lg:hidden">Email</span>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Globe className="w-3 h-3 md:w-4 md:h-4" />
            <span className="font-medium">GR</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">K</span>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold gradient-text">{t('footer.company')}</h1>
              <p className="text-xs md:text-sm text-muted-foreground font-medium hidden sm:block">{t('header.tagline')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: t('nav.home'), href: "/" },
              { name: t('nav.services'), href: "/services" },
              { name: t('nav.about'), href: "/about" },
              { name: t('nav.details'), href: "/detailed-services" },
              { name: t('nav.contact'), href: "#contact" }
            ].map((item, index) => (
              item.href.startsWith('#') ? (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-foreground hover:text-primary transition-colors font-medium relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = item.href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                </a>
              ) : (
                <Link key={index} to={item.href} className="text-foreground hover:text-primary transition-colors font-medium relative group">
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                </Link>
              )
            ))}
          </div>

          {/* Mobile & Tablet Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {/* Emergency Button - Always Visible */}
            <Button 
              variant="emergency" 
              size="sm" 
              className="shadow-md text-xs md:text-sm px-2 md:px-4"
              onClick={() => window.open('tel:+306985814213', '_self')}
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline ml-1 md:ml-2">{t('header.emergency')}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-3 pt-4">
              {[
                { name: t('nav.home'), href: "/" },
                { name: t('nav.services'), href: "/services" },
                { name: t('nav.about'), href: "/about" },
                { name: t('nav.details'), href: "/detailed-services" },
                { name: t('nav.contact'), href: "#contact" }
              ].map((item, index) => (
                item.href.startsWith('#') ? (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted/50"
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.substring(1);
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={index} 
                    to={item.href} 
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-4 rounded-lg hover:bg-muted/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;