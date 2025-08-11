import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="glass sticky top-0 z-50 border-b border-border/50">
      {/* Top Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-3">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+30 698 581 4213</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="font-medium">kyriakisplumber@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span className="font-medium">GR</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">{t('footer.company')}</h1>
              <p className="text-sm text-muted-foreground font-medium">{t('header.tagline')}</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { name: t('nav.home'), href: "/" },
              { name: t('nav.services'), href: "/services" },
              { name: t('nav.about'), href: "/about" },
              { name: t('nav.details'), href: "/detailed-services" },
              { name: t('nav.contact'), href: "#contact" }
            ].map((item, index) => (
              item.href.startsWith('#') ? (
                <a key={index} href={item.href} className="text-foreground hover:text-primary transition-colors font-medium relative group">
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

          <Button 
            variant="emergency" 
            size="sm" 
            className="shadow-md"
            onClick={() => window.open('tel:+306985814213', '_self')}
          >
            <Phone className="w-4 h-4" />
            {t('header.emergency')}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;