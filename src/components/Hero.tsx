import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Users, Star, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import kyriakisLogo from "@/assets/kyriakis-logo.png";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/30 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-16 w-96 h-96 bg-accent/30 rounded-full opacity-15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-white">
                <Zap className="w-4 h-4 text-accent" />
                {t('hero.badge')}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-accent">{t('hero.title1')}</span>
                <br />
                <span className="text-white">{t('hero.title2')}</span>
                <br />
                <span className="text-white/80 text-3xl lg:text-4xl font-medium">{t('hero.title3')}</span>
              </h1>
              
              <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-emergency/30 rounded-xl">
                  <Phone className="w-6 h-6 text-emergency animate-pulse" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{t('hero.emergency')}</h2>
                  <p className="text-white/80">{t('hero.emergency.desc')}</p>
                </div>
              </div>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "500+", label: t('hero.stat1') },
                { number: "10+", label: t('hero.stat2') },
                { number: "24/7", label: t('hero.stat3') }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl animate-scale-in" 
                     style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group bg-accent hover:bg-accent/90 text-white">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                {t('hero.call')}
              </Button>
              <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                {t('hero.estimate')}
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
                <div className="absolute -top-4 -right-4 p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl animate-float">
                  <div className="flex items-center gap-2 text-success">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">{t('hero.certified')}</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl animate-float" 
                     style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-2 text-accent">
                    <Star className="w-5 h-5" />
                    <span className="text-sm font-semibold">{t('hero.quality')}</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-6 p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl animate-float" 
                     style={{animationDelay: '2s'}}>
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