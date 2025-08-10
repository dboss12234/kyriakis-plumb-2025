import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, MessageCircle, Clock, AlertTriangle, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Σφάλμα",
        description: "Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_gdrd50p', // Service ID
        'template_o8stalu', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: 'kyriakisplumber@gmail.com'
        },
        '0hLkydwQF9f0KtYoT' // Public Key
      );

      toast({
        title: "Επιτυχής Αποστολή!",
        description: "Το μήνυμά σας εστάλη επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Σφάλμα Αποστολής",
        description: "Παρουσιάστηκε πρόβλημα κατά την αποστολή. Δοκιμάστε ξανά ή επικοινωνήστε τηλεφωνικά.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Επικοινωνία</h2>
          <h3 className="text-2xl text-primary mb-6">
            Επικοινωνήστε μαζί μας για Επαγγελματική Εξυπηρέτηση
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Έτοιμοι να λύσουμε τα υδραυλικά σας προβλήματα; Επικοινωνήστε μαζί μας σήμερα για γρήγορη, 
            αξιόπιστη εξυπηρέτηση. Είμαστε διαθέσιμοι 24/7 για επείγοντα περιστατικά και προσφέρουμε 
            δωρεάν συμβουλευτική για όλα τα έργα.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Στοιχεία Επικοινωνίας</h3>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Τηλέφωνο</h4>
                    <p className="text-primary font-medium">+30 698 581 4213</p>
                    <p className="text-sm text-muted-foreground">Διαθέσιμοι 24/7 για επείγοντα</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-primary font-medium">kyriakisplumber@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Θα απαντήσουμε εντός 24 ωρών</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Περιοχή Εξυπηρέτησης</h4>
                    <p className="text-primary font-medium">Όλη η Ελλάδα</p>
                    <p className="text-sm text-muted-foreground">Εξυπηρετούμε οικιακούς & εμπορικούς</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 rounded-full p-3">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-accent font-medium">+30 698 581 4213</p>
                    <p className="text-sm text-muted-foreground">Γρήγορα μηνύματα & φωτογραφίες</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-3">
              <Button variant="cta" className="flex-1">
                <Phone className="w-4 h-4" />
                Κλήση Τώρα
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Στείλτε μας Μήνυμα</CardTitle>
                <p className="text-muted-foreground">
                  Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Πλήρες Όνομα *</Label>
                      <Input 
                        id="name" 
                        placeholder="Το όνομά σας" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Διεύθυνση Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Αριθμός Τηλεφώνου</Label>
                      <Input 
                        id="phone" 
                        placeholder="+30 xxx xxx xxxx" 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Υπηρεσία που Χρειάζεστε</Label>
                      <Select value={formData.service} onValueChange={handleServiceChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Επιλέξτε υπηρεσία" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Έκτακτη Επισκευή</SelectItem>
                          <SelectItem value="installation">Εγκατάσταση Σωληνώσεων</SelectItem>
                          <SelectItem value="heating">Ενδοδαπέδια Θέρμανση</SelectItem>
                          <SelectItem value="solar">Ηλιακά Συστήματα</SelectItem>
                          <SelectItem value="boiler">Εγκατάσταση Λεβήτων</SelectItem>
                          <SelectItem value="other">Άλλο</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Μήνυμα *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Περιγράψτε τις υδραυλικές σας ανάγκες..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    className="w-full" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Αποστολή..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Αποστολή Μηνύματος
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="bg-emergency/10 border border-emergency/20 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-emergency/20 rounded-full p-4">
              <AlertTriangle className="w-8 h-8 text-emergency" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Επείγον Υδραυλικό Πρόβλημα;
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Μην περιμένετε! Καλέστε μας αμέσως για 24/7 υπηρεσία έκτακτης ανάγκης.
          </p>
          <Button variant="emergency" size="lg" className="text-lg px-8">
            <Phone className="w-5 h-5" />
            Κλήση Γραμμής Έκτακτης Ανάγκης
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;