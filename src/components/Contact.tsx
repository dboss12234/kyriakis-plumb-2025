import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, MessageCircle, Clock, AlertTriangle, Send, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
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
        title: t('contact.error.title'),
        description: t('contact.error.required'),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // For now, we'll simulate email sending without exposing credentials
      // The proper backend solution will be implemented once Supabase secrets are configured
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: t('contact.success.title'),
        description: "Thank you for your message! We'll get back to you soon.",
      });

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
        title: t('contact.error.send.title'),
        description: t('contact.error.send.message'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-surface"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-accent rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium text-primary mb-8">
            <Zap className="w-5 h-5" />
            {t('contact.badge')}
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">{t('contact.title1')}</span>
            <br />
            <span className="text-foreground">{t('contact.title2')}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">{t('contact.info')}</h3>
            
            {[
              {
                icon: <Phone className="w-8 h-8 text-primary" />,
                title: t('phone'),
                value: "+30 698 581 4213",
                subtitle: t('contact.phone.subtitle'),
                color: "primary"
              },
              {
                icon: <Mail className="w-8 h-8 text-accent" />,
                title: t('email'),
                value: "kyriakisplumber@gmail.com",
                subtitle: t('contact.email.subtitle'),
                color: "accent"
              },
              {
                icon: <MapPin className="w-8 h-8 text-success" />,
                title: t('contact.location.title'),
                value: t('contact.location.value'),
                subtitle: t('contact.location.subtitle'),
                color: "success"
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-warning" />,
                title: t('whatsapp'),
                value: "+30 698 581 4213",
                subtitle: t('contact.whatsapp.subtitle'),
                color: "warning"
              }
            ].map((contact, index) => (
              <div key={index} className="modern-card p-6 rounded-3xl hover:shadow-lg transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start gap-4">
                  <div className={`p-4 bg-${contact.color}/10 rounded-2xl`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-bold text-lg text-foreground">{contact.title}</h4>
                    <p className={`text-${contact.color} font-semibold text-lg`}>{contact.value}</p>
                    <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              <Button 
                variant="hero" 
                className="flex-1 group"
                onClick={() => window.open('tel:+306985814213', '_self')}
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                {t('contact.call')}
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 bg-background/50"
                onClick={() => window.open('https://wa.me/306985814213', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                {t('whatsapp')}
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="modern-card p-10 rounded-3xl">
              <div className="space-y-6 mb-8">
                <h3 className="text-3xl font-bold gradient-text">{t('contact.form.title')}</h3>
                <p className="text-muted-foreground text-lg">
                  {t('contact.form.subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-base font-semibold">{t('contact.form.name')}</Label>
                    <Input 
                      id="name" 
                      placeholder={t('contact.form.name.placeholder')}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 rounded-xl border-2 focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-semibold">{t('contact.form.email')}</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 rounded-xl border-2 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-base font-semibold">{t('contact.form.phone')}</Label>
                    <Input 
                      id="phone" 
                      placeholder="+30 xxx xxx xxxx" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 rounded-xl border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="service" className="text-base font-semibold">{t('contact.form.service')}</Label>
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger className="h-12 rounded-xl border-2">
                        <SelectValue placeholder={t('contact.form.service.placeholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">{t('contact.form.service.emergency')}</SelectItem>
                        <SelectItem value="installation">{t('contact.form.service.installation')}</SelectItem>
                        <SelectItem value="heating">{t('contact.form.service.heating')}</SelectItem>
                        <SelectItem value="solar">{t('contact.form.service.solar')}</SelectItem>
                        <SelectItem value="boiler">{t('contact.form.service.boiler')}</SelectItem>
                        <SelectItem value="other">{t('contact.form.service.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-base font-semibold">{t('contact.form.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.form.message.placeholder')}
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full group" 
                  size="xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    t('contact.form.sending')
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="relative p-12 modern-card rounded-3xl text-center animate-fade-in border-2 border-emergency/20 bg-gradient-to-br from-emergency/5 to-emergency/10">
          <div className="absolute inset-0 bg-emergency/5 rounded-3xl"></div>
          
          <div className="relative space-y-6">
            <div className="flex justify-center">
              <div className="p-6 bg-emergency/20 rounded-3xl animate-pulse-glow">
                <AlertTriangle className="w-12 h-12 text-emergency" />
              </div>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t('contact.emergency.title')}
            </h3>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.emergency.subtitle')}
            </p>
            
            <Button 
              variant="emergency" 
              size="xl" 
              className="group"
              onClick={() => window.open('tel:+306985814213', '_self')}
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              {t('contact.emergency.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;