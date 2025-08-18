import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              {t('gallery.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('gallery.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('gallery.workTitle')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('gallery.workDescription')}
            </p>
          </div>

          {/* Coming Soon Placeholder */}
          <div className="bg-card rounded-2xl p-12 text-center border border-border/50">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground text-2xl font-bold">📷</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('gallery.comingSoon')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('gallery.comingSoonDescription')}
              </p>
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-sm text-muted-foreground">
                  {t('gallery.uploadingSoon')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;