import { Shield, Clock, Award, Users, CheckCircle, Star } from "lucide-react";

const About = () => {
  const stats = [
    { value: "500", label: "Ικανοποιημένοι Πελάτες" },
    { value: "10", label: "Χρόνια Εμπειρίας" },
    { value: "1000", label: "Ολοκληρωμένα Έργα" },
    { value: "24", label: "Ωρών Υπηρεσία" }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-success" />,
      title: "Αδειοδοτημένος & Ασφαλισμένος",
      description: "Πλήρως αδειοδοτημένος επαγγελματίας με ολοκληρωμένη ασφαλιστική κάλυψη"
    },
    {
      icon: <Clock className="w-6 h-6 text-emergency" />,
      title: "24/7 Υπηρεσία Έκτακτης Ανάγκης",
      description: "Διαθεσιμότητα όλο το εικοσιτετράωρο για επείγουσες υδραυλικές επισκευές"
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Premium Ποιότητα",
      description: "Μόνο τα καλύτερα υλικά και οι πιο σύγχρονες τεχνικές για διαρκή αποτελέσματα"
    }
  ];

  const partners = [
    "Aquatherm",
    "Valsir", 
    "Uponor",
    "Rehau"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Σχετικά με την Εταιρεία μας
              </h2>
              <h3 className="text-2xl text-primary">
                10+ Χρόνια Αριστείας στις Υδραυλικές Υπηρεσίες
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Από το 2014, ο Kyriakis Plumber παρέχει υψηλής ποιότητας υδραυλικές υπηρεσίες σε όλη την Ελλάδα. 
                Ειδικευόμαστε σε σύγχρονες υδραυλικές λύσεις, επισκευές έκτακτης ανάγκης και πλήρεις εγκαταστάσεις 
                συστημάτων χρησιμοποιώντας μόνο premium υλικά και προηγμένες τεχνικές.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="bg-white rounded-full p-3 shadow-lg shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl p-6">
              <h4 className="font-semibold mb-2">Επικοινωνήστε Σήμερα</h4>
              <p className="text-primary-foreground/90">
                Έτοιμοι να παρέχουμε την καλύτερη εξυπηρέτηση για όλες τις υδραυλικές σας ανάγκες
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Partners */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-foreground mb-4 text-center">
                Αξιόπιστοι Συνεργάτες
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-secondary/30 rounded-lg p-4 text-center">
                    <span className="font-medium text-foreground">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality badges */}
            <div className="flex justify-center space-x-4">
              <div className="bg-success text-success-foreground rounded-full px-4 py-2 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Πιστοποιημένος</span>
              </div>
              <div className="bg-accent text-accent-foreground rounded-full px-4 py-2 flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span className="font-medium">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;