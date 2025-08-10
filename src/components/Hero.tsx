import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Users, Star, Zap } from "lucide-react";
import kyriakisLogo from "@/assets/kyriakis-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen" style={{background: 'var(--gradient-hero)'}} >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float" style={{background: 'var(--gradient-primary)'}}></div>
      <div className="absolute bottom-32 left-16 w-96 h-96 rounded-full opacity-15 blur-3xl animate-float" style={{background: 'var(--gradient-accent)', animationDelay: '2s'}}></div>
      
      <div className="relative container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-primary"
                   style={{background: 'var(--glass-bg)', backdropFilter: 'var(--glass-backdrop)', border: '1px solid var(--glass-border)'}}>
                <Zap className="w-4 h-4" />
                Επαγγελματικές Υπηρεσίες
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span style={{background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Υδραυλικές</span>
                <br />
                <span className="text-foreground">Υπηρεσίες</span>
                <br />
                <span className="text-muted-foreground text-3xl lg:text-4xl font-medium">στην Ελλάδα</span>
              </h1>
              
              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl"
                   style={{background: 'var(--glass-bg)', backdropFilter: 'var(--glass-backdrop)', border: '1px solid var(--glass-border)'}}>
                <div className="flex items-center justify-center w-12 h-12 bg-emergency/20 rounded-xl">
                  <Phone className="w-6 h-6 text-emergency animate-pulse" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">24/7 Έκτακτη Ανάγκη</h2>
                  <p className="text-muted-foreground">Άμεση ανταπόκριση σε κρίσιμες καταστάσεις</p>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Προσφέρουμε ολοκληρωμένες υδραυλικές λύσεις με την πιο σύγχρονη τεχνολογία. 
                Από εγκαταστάσεις έως επισκευές, εμπιστευτείτε την εμπειρία μας για αποτελέσματα που διαρκούν.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "500+", label: "Ικανοποιημένοι Πελάτες" },
                { number: "10+", label: "Χρόνια Εμπειρίας" },
                { number: "24/7", label: "Διαθεσιμότητα" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl animate-scale-in" 
                     style={{background: 'var(--gradient-card)', boxShadow: 'var(--shadow-md)', animationDelay: `${index * 0.2}s`}}>
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Κλήση Τώρα
              </Button>
              <Button variant="outline" size="lg" className="bg-background/50">
                Δωρεάν Προσφορά
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Main Logo Card */}
              <div className="relative p-8 bg-transparent rounded-3xl">
                <img 
                  src={kyriakisLogo} 
                  alt="Kyriakis Plumber Professional Logo"
                  className="w-full h-auto max-w-xs lg:max-w-sm mx-auto object-contain aspect-square drop-shadow-2xl"
                  style={{filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))'}}
                />
                
                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl animate-float"
                     style={{background: 'var(--glass-bg)', backdropFilter: 'var(--glass-backdrop)', border: '1px solid var(--glass-border)'}}>
                  <div className="flex items-center gap-2 text-success">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">Πιστοποιημένος</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl animate-float" 
                     style={{background: 'var(--glass-bg)', backdropFilter: 'var(--glass-backdrop)', border: '1px solid var(--glass-border)', animationDelay: '1s'}}>
                  <div className="flex items-center gap-2 text-accent">
                    <Star className="w-5 h-5" />
                    <span className="text-sm font-semibold">Premium Ποιότητα</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-6 p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl animate-float" 
                     style={{background: 'var(--glass-bg)', backdropFilter: 'var(--glass-backdrop)', border: '1px solid var(--glass-border)', animationDelay: '2s'}}>
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;