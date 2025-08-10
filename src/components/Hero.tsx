import { Button } from "@/components/ui/button";
import { Phone, Clock, CheckCircle, Users } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Υπηρεσία Έκτακτης Ανάγκης</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Επαγγελματικές Υδραυλικές Υπηρεσίες στην Ελλάδα
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Εξειδικευμένες υδραυλικές λύσεις με σύγχρονες τεχνικές και premium υλικά. 
                Εξυπηρετούμε οικιακούς και εμπορικούς πελάτες με εγγυημένη ποιότητα εργασίας.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">Ικανοποιημένοι Πελάτες</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-primary-foreground/80">Χρόνια Εμπειρίας</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/80">Υπηρεσία Έκτακτης Ανάγκης</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5" />
                Κλήση Τώρα
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Δωρεάν Προσφορά
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional plumber at work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Πιστοποιημένος</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Premium Ποιότητα</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;