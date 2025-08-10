import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, Thermometer, AlertTriangle, Sun, Droplets, Flame, Phone, 
  CheckCircle, Star, Clock, Euro, Shield, Zap, ArrowRight, Home, Building2,
  Bath, ChefHat, Gauge, Settings, Lightbulb, Users
} from "lucide-react";

const DetailedServices = () => {
  const serviceCategories = [
    {
      title: "Εγκατάσταση & Επισκευή Σωλήνων",
      description: "Πλήρεις υπηρεσίες εγκατάστασης, επισκευής και αντικατάστασης σωλήνων για οικιστικά και εμπορικά ακίνητα.",
      icon: <Wrench className="w-12 h-12 text-primary" />,
      color: "primary",
      services: [
        "Εγκατάσταση σωλήνων νερού",
        "Συστήματα αποχέτευσης", 
        "Ανίχνευση διαρροών σωλήνων",
        "Επισκευές έκτακτης ανάγκης"
      ]
    },
    {
      title: "Υδραυλικά Μπάνιου & Κουζίνας",
      description: "Πλήρεις υδραυλικές λύσεις για μπάνια και κουζίνες, από εξαρτήματα έως πλήρεις ανακαινίσεις.",
      icon: <Bath className="w-12 h-12 text-accent" />,
      color: "accent",
      services: [
        "Εγκατάσταση εξαρτημάτων",
        "Επισκευή νεροχύτη & βρύσης",
        "Συστήματα ντους",
        "Υδραυλικά κουζίνας"
      ]
    },
    {
      title: "Υπηρεσίες Θερμοσίφωνα",
      description: "Εγκατάσταση, συντήρηση και επισκευή όλων των τύπων συστημάτων θέρμανσης νερού.",
      icon: <Thermometer className="w-12 h-12 text-warning" />,
      color: "warning",
      services: [
        "Εγκατάσταση λέβητα",
        "Επισκευή θερμοσίφωνα",
        "Συντήρηση συστήματος",
        "Αναβαθμίσεις ενεργειακής απόδοσης"
      ]
    },
    {
      title: "Εγκατάσταση Λεβητοστασίου",
      description: "Πλήρης εγκατάσταση και σχεδιασμός λεβητοστασίων για οικιστικά και εμπορικά κτίρια.",
      icon: <Flame className="w-12 h-12 text-primary" />,
      color: "primary",
      services: [
        "Σχεδιασμός λεβητοστασίου",
        "Εγκατάσταση λέβητα",
        "Σύνδεση δικτύου θέρμανσης",
        "Δοκιμές και παραλαβή"
      ]
    },
    {
      title: "Service Λεβητοστασίου",
      description: "Επαγγελματική συντήρηση και επισκευή λεβητοστασίων για βέλτιστη απόδοση.",
      icon: <Settings className="w-12 h-12 text-success" />,
      color: "success",
      services: [
        "Ετήσια συντήρηση λέβητα",
        "Καθαρισμός καυστήρα",
        "Έλεγχος ασφαλείας",
        "Επισκευές βλαβών"
      ]
    },
    {
      title: "Ηλιακά Συστήματα",
      description: "Εγκατάσταση και συντήρηση ηλιακών συστημάτων για οικονομική θέρμανση νερού.",
      icon: <Sun className="w-12 h-12 text-accent" />,
      color: "accent",
      services: [
        "Εγκατάσταση ηλιακών συλλεκτών",
        "Σύνδεση με υπάρχον σύστημα",
        "Συντήρηση ηλιακών",
        "Αναβαθμίσεις συστημάτων"
      ]
    },
    {
      title: "Οικιακά Υδραυλικά",
      description: "Πλήρεις υδραυλικές υπηρεσίες για σπίτια, διαμερίσματα και οικιστικά συγκροτήματα.",
      icon: <Home className="w-12 h-12 text-primary" />,
      color: "primary",
      services: [
        "Επιθεωρήσεις σπιτιού",
        "Προληπτική συντήρηση",
        "Αναβαθμίσεις εξαρτημάτων",
        "Ανίχνευση διαρροών"
      ]
    },
    {
      title: "Εμπορικά Υδραυλικά",
      description: "Επαγγελματικές υδραυλικές υπηρεσίες για επιχειρήσεις, γραφεία και εμπορικές εγκαταστάσεις.",
      icon: <Building2 className="w-12 h-12 text-warning" />,
      color: "warning",
      services: [
        "Εμπορικές εγκαταστάσεις",
        "Συμβόλαια συντήρησης",
        "Συμμόρφωση κώδικα",
        "Αναβαθμίσεις συστήματος"
      ]
    },
    {
      title: "Υπηρεσίες Έκτακτης Ανάγκης",
      description: "Υδραυλικές υπηρεσίες έκτακτης ανάγκης 24/7 για επείγουσες καταστάσεις και πρόληψη ζημιών από νερό.",
      icon: <AlertTriangle className="w-12 h-12 text-emergency" />,
      color: "emergency",
      urgent: true,
      services: [
        "Διαθεσιμότητα 24/7",
        "Επισκευή σπασμένου σωλήνα",
        "Πρόληψη πλημμύρας",
        "Διακοπές έκτακτης ανάγκης"
      ]
    }
  ];

  const benefits = [
    { icon: <CheckCircle className="w-6 h-6 text-success" />, text: "Πιστοποιημένοι Επαγγελματίες" },
    { icon: <Star className="w-6 h-6 text-accent" />, text: "Premium Υλικά & Εξοπλισμός" },
    { icon: <Shield className="w-6 h-6 text-primary" />, text: "Εκτεταμένη Εγγύηση" },
    { icon: <Clock className="w-6 h-6 text-warning" />, text: "24/7 Διαθεσιμότητα" }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/30 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/30 rounded-full opacity-15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="space-y-8 animate-fade-in text-white">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium">
              <Zap className="w-5 h-5 text-accent" />
              Ολοκληρωμένες Υδραυλικές Υπηρεσίες
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="text-accent">Επαγγελματικές</span>
              <br />
              <span className="text-white">Υδραυλικές</span>
              <br />
              <span className="text-white/80 text-4xl lg:text-5xl font-medium">Λύσεις</span>
            </h1>
            
            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Εξειδικευμένες υπηρεσίες για κάθε υδραυλική ανάγκη με εγγυημένη ποιότητα
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="xl" className="group bg-accent hover:bg-accent/90 text-white">
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                +30 698 581 4213
              </Button>
              <Button variant="outline" size="xl" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                Δωρεάν Εκτίμηση
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-border/50">
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
              <span style={{background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Οι Υπηρεσίες</span>
              <br />
              <span className="text-foreground">μας</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ολοκληρωμένες λύσεις για κάθε υδραυλική ανάγκη
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div 
                key={index}
                className="group bg-white/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-700 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-4 bg-${category.color}/10 rounded-2xl`}>
                        {category.icon}
                      </div>
                      {category.urgent && (
                        <Badge variant="destructive" className="animate-pulse">
                          ΕΠΕΙΓΟΝ
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className={`text-2xl font-bold text-foreground group-hover:text-${category.color} transition-all duration-300`}>
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Services List */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Υπηρεσίες:</h5>
                    <div className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 bg-${category.color} rounded-full`}></div>
                          <span className="text-sm text-muted-foreground font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button 
                      variant={category.urgent ? "destructive" : "outline"} 
                      className="w-full group"
                      size="lg"
                    >
                      {category.urgent ? (
                        <>
                          <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                          Κλήση Έκτακτης Ανάγκης
                        </>
                      ) : (
                        <>
                          <Euro className="w-4 h-4" />
                          Προσφορά
                        </>
                      )}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative p-16 bg-white/50 backdrop-blur-sm border border-border/50 rounded-3xl shadow-xl text-center animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>
            
            <div className="relative space-y-8">
              <h3 className="text-4xl lg:text-5xl font-bold">
                <span style={{background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Επικοινωνήστε</span>
                <br />
                <span className="text-foreground">μαζί μας</span>
              </h3>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Εξειδικευμένες λύσεις για κάθε υδραυλική ανάγκη. Δωρεάν συμβουλευτική και προσφορά.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="xl" className="group bg-primary hover:bg-primary/90 text-white">
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

export default DetailedServices;