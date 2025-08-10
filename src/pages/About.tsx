import { Shield, Clock, Award, Users, CheckCircle, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const { t } = useLanguage();
  
  const stats = [
    { value: "500+", label: t('about.stats.customers') },
    { value: "10+", label: t('about.stats.experience') },
    { value: "1000+", label: t('about.stats.projects') },
    { value: "24/7", label: t('about.stats.hours') }
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

  const team = [
    {
      name: "Kyriakis",
      role: "Master Plumber & Owner",
      experience: "15+ years",
      specialization: "Emergency repairs, Solar systems"
    },
    {
      name: "Technical Team",
      role: "Certified Technicians",
      experience: "10+ years average",
      specialization: "Installations, Maintenance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold gradient-text mb-6">
              {t('about.title')}
            </h1>
            <h2 className="text-2xl text-primary mb-8">
              {t('about.subtitle')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2014, Kyriakis Plumber has been providing exceptional plumbing services across Greece. 
              We combine traditional craftsmanship with modern technology to deliver premium solutions 
              for residential and commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide reliable, professional plumbing services that exceed expectations. 
                  We believe every customer deserves quality workmanship, transparent pricing, 
                  and service they can trust.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment to excellence has earned us the trust of hundreds of satisfied 
                  customers throughout Greece. We use only premium materials and the latest 
                  techniques to ensure lasting results.
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
                  Trusted Partners
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
                  <span className="font-medium">Licensed</span>
                </div>
                <div className="bg-accent text-accent-foreground rounded-full px-4 py-2 flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="py-16 bg-secondary/20 rounded-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our experienced professionals are dedicated to providing exceptional service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="py-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose Kyriakis Plumber?</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Licensed & Insured</h4>
                <p className="text-muted-foreground">Fully licensed professionals with comprehensive insurance coverage</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Quality Guarantee</h4>
                <p className="text-muted-foreground">All work comes with our satisfaction guarantee and warranty</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">24/7 Emergency</h4>
                <p className="text-muted-foreground">Round-the-clock emergency services for urgent plumbing needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;