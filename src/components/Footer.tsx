import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
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
              <h3 className="text-xl font-bold mb-2">Kyriakis Plumber</h3>
              <p className="text-accent font-semibold">Premium Υδραυλικές Υπηρεσίες</p>
            </div>
            <p className="text-background/80 leading-relaxed">
              Επαγγελματικές υδραυλικές λύσεις με σύγχρονες τεχνικές και premium υλικά. 
              Εξυπηρετούμε την Ελλάδα με εγγυημένη ποιότητα εργασίας από το 2014.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Στοιχεία Επικοινωνίας</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium">Τηλέφωνο</p>
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
                  <p className="font-medium">Τοποθεσία</p>
                  <p className="text-background/80">Ελλάδα</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Οι Υπηρεσίες μας</h4>
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
            <h4 className="text-lg font-semibold">Χρειάζεστε Βοήθεια;</h4>
            <p className="text-background/80">
              Επικοινωνήστε μαζί μας για επαγγελματικές υδραυλικές υπηρεσίες
            </p>
            <div className="space-y-3">
              <Button variant="cta" className="w-full">
                <Phone className="w-4 h-4" />
                Κλήση Τώρα
              </Button>
              <Button variant="outline" className="w-full bg-background/10 border-background/20 text-background hover:bg-background/20">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2025 Kyriakis Plumber. Όλα τα δικαιώματα διατηρούνται.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Πολιτική Απορρήτου
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Όροι Χρήσης
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;