import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Thermometer, AlertTriangle, Sun, Droplets, Flame } from "lucide-react";
import pipeImage from "/lovable-uploads/033c51f7-a99e-4c09-9028-ab128c60d220.png";
import heatingImage from "/lovable-uploads/ced9d22a-1cf6-4449-8b22-6e79879a4766.png";
import solarImage from "/lovable-uploads/a20dfd56-f3df-4935-b1a7-65125a25305f.png";
import emergencyImage from "/lovable-uploads/74d6462b-2c6b-4a15-9c94-516553cad454.png";
import waterHeatersImage from "/lovable-uploads/7ef06067-805e-433b-b533-d9984db88caf.png";
import boilerImage from "/lovable-uploads/37be9720-f499-40ff-8e49-e946d921d108.png";

const Services = () => {
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
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Επαγγελματικές Υπηρεσίες
          </h2>
          <h3 className="text-2xl text-primary mb-6">
            Εξειδικευμένες Υδραυλικές Λύσεις
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ολοκληρωμένες υδραυλικές υπηρεσίες με σύγχρονες τεχνικές και premium υλικά. 
            Από επισκευές έκτακτης ανάγκης έως πλήρεις εγκαταστάσεις, παραδίδουμε ποιοτική εργασία με εγγυημένα αποτελέσματα.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm text-muted-foreground">{service.title}</h4>
                  <h3 className="text-xl font-bold text-foreground">{service.greekTitle}</h3>
                </div>
                
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={service.urgent ? "emergency" : "outline"} 
                  className="w-full"
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Χρειάζεστε Επαγγελματικές Υδραυλικές Υπηρεσίες;
            </h3>
            <p className="text-muted-foreground mb-6">
              Επικοινωνήστε μαζί μας σήμερα για δωρεάν συμβουλευτική και προσφορά
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Κλήση Τώρα
              </Button>
              <Button variant="outline" size="lg">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;