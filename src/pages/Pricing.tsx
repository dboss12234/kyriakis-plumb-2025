import { Phone, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const pricingCategories = [
    {
      title: "Βασικές Υδραυλικές Εργασίες",
      icon: "🔧",
      gradient: "from-primary to-primary-light",
      services: [
        { name: "Επίσκεψη - Διάγνωση", price: "25€" },
        { name: "Αλλαγή μπαταρίας", price: "50-70€" },
        { name: "Αλλαγή σιφονιού", price: "30-50€" },
        { name: "Τοποθέτηση καζανακιού", price: "50-70€" },
        { name: "Τοποθέτηση μπαταρίας νεροχύτη", price: "60-90€" },
        { name: "Αλλαγή λεκάνης", price: "25-40€" },
        { name: "Τοποθέτηση πλυντηρίου ρούχων/πιάτων", price: "25-40€" },
      ]
    },
    {
      title: "Εργασίες Αποχέτευσης",
      icon: "💧",
      gradient: "from-accent to-accent-light",
      services: [
        { name: "Εξαέρωση - έλεγχος", price: "20-40€" },
        { name: "Τοποθέτηση σωλήνων", price: "60-90€" },
        { name: "Αντικατάσταση βαλβίδας", price: "50-80€" },
        { name: "Καθαρισμός αποφράξεων", price: "150-200€" },
      ]
    },
    {
      title: "Θέρμανση - Καλοριφέρ",
      icon: "🔥",
      gradient: "from-emergency to-warning",
      services: [
        { name: "Εξαέρωση - έλεγχος", price: "20-40€" },
        { name: "Τοποθέτηση σώματος", price: "60-90€" },
        { name: "Αντικατάσταση βαλβίδας", price: "50-80€" },
        { name: "Καθαρισμός συστήματος (flush)", price: "40-60€" },
      ]
    },
    {
      title: "Ηλιακοί Θερμοσίφωνες / Boiler",
      icon: "☀️",
      gradient: "from-warning to-accent",
      services: [
        { name: "Τοποθέτηση ηλιακού θερμοσίφωνα", price: "150-230€" },
        { name: "Συντήρηση ηλιακού", price: "60-90€" },
        { name: "Τοποθέτηση ηλεκτρικού boiler", price: "50-80€" },
        { name: "Αλλαγή αντίστασης / Καθαρισμός", price: "50-70€" },
        { name: "Αλλαγή μαγνησίου", price: "40-60€" },
      ]
    },
    {
      title: "Εξωτερικές Εργασίες",
      icon: "🏠",
      gradient: "from-success to-primary",
      services: [
        { name: "Τοποθέτηση αυτόματου", price: "60-90€" },
        { name: "Εγκατάσταση", price: "25-40€" },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                💰 {t('pricing.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">{t('pricing.title1')}</span>
                <br />
                <span className="text-foreground">{t('pricing.title2')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {t('pricing.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="shadow-lg"
                  onClick={() => window.open('tel:+306985814213', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('call.now')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t('pricing.estimate')}
                </Button>
              </div>
            </div>

            {/* Important Notice */}
            <div className="glass rounded-2xl p-6 max-w-2xl mx-auto mb-16">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('pricing.note.title')}</h3>
                  <p className="text-muted-foreground">{t('pricing.note.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingCategories.map((category, index) => (
                <Card 
                  key={index}
                  className="modern-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.services.length} υπηρεσίες</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex}
                          className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                        >
                          <div className="flex items-start gap-2 flex-1">
                            <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{service.name}</span>
                          </div>
                          <span className="font-semibold text-primary ml-2">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">{t('pricing.cta.title1')}</span>
                <br />
                {t('pricing.cta.title2')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('pricing.cta.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg"
                  className="shadow-lg"
                  onClick={() => window.open('tel:+306985814213', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('call.now')}
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://wa.me/306985814213', '_blank')}
                >
                  {t('whatsapp')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
