import { Button } from "@/components/ui/button";
import { Wrench, Thermometer, AlertTriangle, Sun, Droplets, Flame, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import pipeImage from "/lovable-uploads/033c51f7-a99e-4c09-9028-ab128c60d220.png";
import heatingImage from "/lovable-uploads/ced9d22a-1cf6-4449-8b22-6e79879a4766.png";
import solarImage from "/lovable-uploads/a20dfd56-f3df-4935-b1a7-65125a25305f.png";
import emergencyImage from "/lovable-uploads/74d6462b-2c6b-4a15-9c94-516553cad454.png";
import waterHeatersImage from "/lovable-uploads/7ef06067-805e-433b-b533-d9984db88caf.png";
import boilerImage from "/lovable-uploads/37be9720-f499-40ff-8e49-e946d921d108.png";

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Pipe Installation",
      greekTitle: "Εγκατάσταση Νέων Σωληνώσεων",
      description: "Σύγχρονα συστήματα σωληνώσεων με premium υλικά και προηγμένες τεχνικές για μακροχρόνια αποτελέσματα.",
      features: ["Premium Υλικά", "Σύγχρονες Τεχνικές"],
      image: pipeImage,
      cta: "Προσφορά"
    },
    {
      icon: <Thermometer className="w-8 h-8 text-accent" />,
      title: "Underfloor Heating",
      greekTitle: "Ενδοδαπέδια Θέρμανση",
      description: "Ενεργειακά αποδοτικά συστήματα θέρμανσης για άνετη και ομοιόμορφη κατανομή θερμοκρασίας.",
      features: ["Ενεργειακά Αποδοτικά", "Ομοιόμορφη Θέρμανση"],
      image: heatingImage,
      cta: "Προσφορά"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-emergency" />,
      title: "Emergency Repairs",
      greekTitle: "Επισκευές Έκτακτης Ανάγκης",
      description: "24/7 υπηρεσίες έκτακτης ανάγκης με εγγυημένη ποιότητα και γρήγορους χρόνους ανταπόκρισης.",
      features: ["24/7 Διαθέσιμοι", "Γρήγορη Ανταπόκριση"],
      image: emergencyImage,
      cta: "Κλήση Τώρα",
      urgent: true
    },
    {
      icon: <Sun className="w-8 h-8 text-accent" />,
      title: "Solar Systems",
      greekTitle: "Ηλιακά Συστήματα Νερού",
      description: "Φιλικά προς το περιβάλλον ηλιακά συστήματα θέρμανσης νερού για βιώσιμο και οικονομικό ζεστό νερό.",
      features: ["Φιλικά προς το Περιβάλλον", "Οικονομικά"],
      image: solarImage,
      cta: "Προσφορά"
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "Water Heaters",
      greekTitle: "Εγκατάσταση Θερμοσίφωνων",
      description: "Επαγγελματική εγκατάσταση και συντήρηση ηλεκτρικών και αεριακών συστημάτων θέρμανσης νερού.",
      features: ["Ηλεκτρικοί & Αεριακοί", "Πλήρης Συντήρηση"],
      image: waterHeatersImage,
      cta: "Προσφορά"
    },
    {
      icon: <Flame className="w-8 h-8 text-primary" />,
      title: "Boiler Systems",
      greekTitle: "Εγκατάσταση Λεβήτων",
      description: "Πλήρη εγκατάσταση λεβητοστασίου και συντήρηση για οικιακές και εμπορικές ιδιοκτησίες.",
      features: ["Οικιακά & Εμπορικά", "Πλήρη Εγκατάσταση"],
      image: boilerImage,
      cta: "Προσφορά"
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-surface"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-accent rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
            <Wrench className="w-4 h-4" />
            {t('services.badge')}
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">{t('services.title1')}</span>
            <br />
            <span className="text-foreground">{t('services.title2')}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group modern-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6">
                  <div className="glass p-4 rounded-2xl">
                    {service.icon}
                  </div>
                </div>

                {/* Urgent Badge */}
                {service.urgent && (
                  <div className="absolute top-6 right-6">
                    <div className="bg-emergency/90 backdrop-blur-sm rounded-xl px-3 py-1 animate-pulse-glow">
                      <span className="text-sm font-bold text-emergency-foreground">ΕΠΕΙΓΟΝ</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h4 className="text-sm text-primary font-medium uppercase tracking-wider">{service.title}</h4>
                  <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {service.greekTitle}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={service.urgent ? "emergency" : "outline"} 
                  className="w-full group"
                  size="lg"
                >
                  {service.cta}
                  {service.urgent && <Phone className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center animate-slide-up">
          <div className="relative p-12 modern-card rounded-3xl shadow-glow max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-5"></div>
            
            <div className="relative space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold">
                  <span className="gradient-text">Χρειάζεστε Επαγγελματικές</span>
                  <br />
                  <span className="text-foreground">Υδραυλικές Υπηρεσίες;</span>
                </h3>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Επικοινωνήστε μαζί μας σήμερα για δωρεάν συμβουλευτική και προσφορά
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="hero" size="lg" className="group">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Κλήση Τώρα
                </Button>
                <Button variant="outline" size="lg" className="bg-background/50">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;