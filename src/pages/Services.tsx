import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, Thermometer, AlertTriangle, Sun, Droplets, Flame, Phone, 
  CheckCircle, Star, Clock, Euro, Shield, Zap, ArrowRight 
} from "lucide-react";
import pipeImage from "/lovable-uploads/033c51f7-a99e-4c09-9028-ab128c60d220.png";
import heatingImage from "/lovable-uploads/ced9d22a-1cf6-4449-8b22-6e79879a4766.png";
import solarImage from "/lovable-uploads/a20dfd56-f3df-4935-b1a7-65125a25305f.png";
import emergencyImage from "/lovable-uploads/74d6462b-2c6b-4a15-9c94-516553cad454.png";
import waterHeatersImage from "/lovable-uploads/7ef06067-805e-433b-b533-d9984db88caf.png";
import boilerImage from "/lovable-uploads/37be9720-f499-40ff-8e49-e946d921d108.png";

const ServicesPage = () => {
  const services = [
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: "Pipe Installation",
      greekTitle: "Εγκατάσταση Νέων Σωληνώσεων",
      description: "Σύγχρονα συστήματα σωληνώσεων με premium υλικά και προηγμένες τεχνικές για μακροχρόνια αποτελέσματα.",
      features: ["Premium Υλικά", "Σύγχρονες Τεχνικές", "10ετής Εγγύηση", "Πιστοποιημένα Προϊόντα"],
      image: pipeImage,
      category: "Εγκαταστάσεις",
      duration: "1-3 ημέρες",
      warranty: "10 χρόνια"
    },
    {
      icon: <Thermometer className="w-10 h-10 text-accent" />,
      title: "Underfloor Heating",
      greekTitle: "Ενδοδαπέδια Θέρμανση",
      description: "Ενεργειακά αποδοτικά συστήματα θέρμανσης για άνετη και ομοιόμορφη κατανομή θερμοκρασίας.",
      features: ["Ενεργειακά Αποδοτικά", "Ομοιόμορφη Θέρμανση", "Έλεγχος Θερμοκρασίας", "Οικονομία 30%"],
      image: heatingImage,
      category: "Θέρμανση",
      duration: "2-5 ημέρες",
      warranty: "15 χρόνια"
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-emergency" />,
      title: "Emergency Repairs",
      greekTitle: "Επισκευές Έκτακτης Ανάγκης",
      description: "24/7 υπηρεσίες έκτακτης ανάγκης με εγγυημένη ποιότητα και γρήγορους χρόνους ανταπόκρισης.",
      features: ["24/7 Διαθέσιμοι", "Γρήγορη Ανταπόκριση", "Έκτακτη Επισκευή", "Άμεση Λύση"],
      image: emergencyImage,
      category: "Επείγον",
      duration: "30 λεπτά απόκριση",
      warranty: "2 χρόνια",
      urgent: true
    },
    {
      icon: <Sun className="w-10 h-10 text-accent" />,
      title: "Solar Systems",
      greekTitle: "Ηλιακά Συστήματα Νερού",
      description: "Φιλικά προς το περιβάλλον ηλιακά συστήματα θέρμανσης νερού για βιώσιμο και οικονομικό ζεστό νερό.",
      features: ["Φιλικά προς το Περιβάλλον", "Οικονομικά", "Επιδότηση 40%", "Εξοικονόμηση Ενέργειας"],
      image: solarImage,
      category: "Οικολογικά",
      duration: "1-2 ημέρες",
      warranty: "20 χρόνια"
    },
    {
      icon: <Droplets className="w-10 h-10 text-primary" />,
      title: "Water Heaters",
      greekTitle: "Εγκατάσταση Θερμοσίφωνων",
      description: "Επαγγελματική εγκατάσταση και συντήρηση ηλεκτρικών και αεριακών συστημάτων θέρμανσης νερού.",
      features: ["Ηλεκτρικοί & Αεριακοί", "Πλήρης Συντήρηση", "Ενεργειακή Κλάση A+", "Έξυπνος Έλεγχος"],
      image: waterHeatersImage,
      category: "Θερμοσίφωνες",
      duration: "4-6 ώρες",
      warranty: "5 χρόνια"
    },
    {
      icon: <Flame className="w-10 h-10 text-primary" />,
      title: "Boiler Systems",
      greekTitle: "Εγκατάσταση Λεβήτων",
      description: "Πλήρη εγκατάσταση λεβητοστασίου και συντήρηση για οικιακές και εμπορικές ιδιοκτησίες.",
      features: ["Οικιακά & Εμπορικά", "Πλήρη Εγκατάσταση", "Συστήματα Ελέγχου", "Υβριδικά Συστήματα"],
      image: boilerImage,
      category: "Λεβητοστάσια",
      duration: "3-7 ημέρες",
      warranty: "12 χρόνια"
    }
  ];

  const benefits = [
    { icon: <CheckCircle className="w-6 h-6 text-success" />, text: "Δωρεάν Εκτίμηση & Συμβουλευτική" },
    { icon: <Star className="w-6 h-6 text-accent" />, text: "Premium Υλικά & Εργασία" },
    { icon: <Shield className="w-6 h-6 text-primary" />, text: "Εκτεταμένη Εγγύηση" },
    { icon: <Clock className="w-6 h-6 text-warning" />, text: "Γρήγορη Ανταπόκριση" }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-accent rounded-full opacity-15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium text-primary">
              <Zap className="w-5 h-5" />
              Ολοκληρωμένες Υδραυλικές Υπηρεσίες
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="gradient-text">Υδραυλικές</span>
              <br />
              <span className="text-primary-foreground">Υπηρεσίες</span>
              <br />
              <span className="text-primary-foreground/80 text-4xl lg:text-5xl font-medium">για κάθε ανάγκη</span>
            </h1>
            
            <p className="text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Εξειδικευμένες λύσεις με σύγχρονη τεχνολογία και premium υλικά
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button variant="hero" size="xl" className="group">
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Επικοινωνία Τώρα
              </Button>
              <Button variant="glass" size="xl">
                Δωρεάν Εκτίμηση
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gradient-card border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                {benefit.icon}
                <span className="font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Επαγγελματικές</span>
              <br />
              <span className="text-foreground">Υπηρεσίες</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ολοκληρωμένες λύσεις για κάθε υδραυλική ανάγκη
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group modern-card rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-700 animate-slide-up"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge variant="secondary" className="glass text-foreground">
                      {service.category}
                    </Badge>
                  </div>

                  {/* Urgent Badge */}
                  {service.urgent && (
                    <div className="absolute top-6 right-6">
                      <Badge variant="destructive" className="animate-pulse-glow">
                        ΕΠΕΙΓΟΝ
                      </Badge>
                    </div>
                  )}

                  {/* Floating Icon */}
                  <div className="absolute bottom-6 left-6">
                    <div className="glass p-4 rounded-2xl">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm text-primary font-medium uppercase tracking-wider">{service.title}</h4>
                        <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                          {service.greekTitle}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/30 rounded-2xl">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        Διάρκεια
                      </div>
                      <div className="font-semibold text-foreground">{service.duration}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        Εγγύηση
                      </div>
                      <div className="font-semibold text-foreground">{service.warranty}</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Χαρακτηριστικά:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant={service.urgent ? "emergency" : "default"} 
                      className="flex-1 group"
                      size="lg"
                    >
                      {service.urgent ? (
                        <>
                          <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                          Κλήση Τώρα
                        </>
                      ) : (
                        <>
                          Προσφορά
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="lg" className="group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative p-16 modern-card rounded-3xl shadow-glow text-center animate-fade-in">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-5"></div>
            
            <div className="relative space-y-8">
              <h3 className="text-4xl lg:text-5xl font-bold">
                <span className="gradient-text">Χρειάζεστε</span>
                <br />
                <span className="text-foreground">Επαγγελματική Βοήθεια;</span>
              </h3>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Επικοινωνήστε μαζί μας για δωρεάν συμβουλευτική και προσφορά προσαρμοσμένη στις ανάγκες σας
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="hero" size="xl" className="group">
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  +30 698 581 4213
                </Button>
                <Button variant="outline" size="xl" className="bg-background/50">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;