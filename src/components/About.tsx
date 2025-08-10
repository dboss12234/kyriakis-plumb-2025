import { Shield, Clock, Award, Users, CheckCircle, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const stats = [
    { value: "500", label: t('about.stats.customers') },
    { value: "10", label: t('about.stats.experience') },
    { value: "1000", label: t('about.stats.projects') },
    { value: "24", label: t('about.stats.hours') }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-success" />,
      title: t('about.licensed.title'),
      description: t('about.licensed.desc')
    },
    {
      icon: <Clock className="w-6 h-6 text-emergency" />,
      title: t('about.emergency.title'),
      description: t('about.emergency.desc')
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: t('about.quality.title'),
      description: t('about.quality.desc')
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
                {t('about.title')}
              </h2>
              <h3 className="text-2xl text-primary">
                {t('about.subtitle')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
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
              <h4 className="font-semibold mb-2">{t('about.contact.title')}</h4>
              <p className="text-primary-foreground/90">
                {t('about.contact.desc')}
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
                {t('about.partners')}
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
                <span className="font-medium">{t('about.certified')}</span>
              </div>
              <div className="bg-accent text-accent-foreground rounded-full px-4 py-2 flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span className="font-medium">{t('about.premium')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;