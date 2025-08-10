import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const services = [
    "Εγκατάσταση Σωληνώσεων",
    "Επισκευή Διαρροών", 
    "Συστήματα Θέρμανσης",
    "Ηλιακά Συστήματα",
    "Υπηρεσία Έκτακτης Ανάγκης",
    "Εγκατάσταση Λεβήτων"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">{t('footer.company')}</h3>
              <p className="text-accent font-semibold">{t('footer.tagline')}</p>
            </div>
            <p className="text-background/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium">{t('phone')}</p>
                  <p className="text-background/80">+30 698 581 4213</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-background/80">kyriakisplumber@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium">{t('location')}</p>
                  <p className="text-background/80">{t('greece')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-background/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">{t('footer.help')}</h4>
            <p className="text-background/80">
              {t('footer.help.text')}
            </p>
            <div className="space-y-3">
              <Button variant="cta" className="w-full">
                <Phone className="w-4 h-4" />
                {t('call.now')}
              </Button>
              <Button variant="outline" className="w-full bg-background/10 border-background/20 text-background hover:bg-background/20">
                <MessageCircle className="w-4 h-4" />
                {t('whatsapp')}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;