import { CheckCircle, Award, Clock, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-success" />,
      title: "Πιστοποιημένος Επαγγελματίας",
      description: "Premium Ποιότητα"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Υλικά υψηλής ποιότητας",
      description: "Γρήγορη Ανταπόκριση"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Εξυπηρέτηση την ίδια μέρα",
      description: "Εγγυημένη Εργασία"
    },
    {
      icon: <Shield className="w-8 h-8 text-success" />,
      title: "Πλήρης εγγύηση",
      description: "Επαγγελματικές Υπηρεσίες"
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Οι Υπηρεσίες μας
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional Plumbing Services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;