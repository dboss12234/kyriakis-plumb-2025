import { CheckCircle, Award, Clock, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-success" />,
      title: t('features.certified.title'),
      description: t('features.certified.desc')
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: t('features.materials.title'),
      description: t('features.materials.desc')
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: t('features.service.title'),
      description: t('features.service.desc')
    },
    {
      icon: <Shield className="w-8 h-8 text-success" />,
      title: t('features.warranty.title'),
      description: t('features.warranty.desc')
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-surface"></div>
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('features.section.title1')}</span>
            <br />
            <span className="text-foreground">{t('features.section.title2')}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('features.section.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-6 group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex justify-center">
                <div className="modern-card w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-foreground group-hover:gradient-text transition-all duration-300">{feature.title}</h3>
                <p className="text-muted-foreground font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;