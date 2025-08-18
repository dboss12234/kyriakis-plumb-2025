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

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Photos will be added here in batches of 10 */}
            {/* Batch 1: Photos 1-10 will be added here */}
            {/* Batch 2: Photos 11-20 will be added here */}
            {/* Continue for all 101 photos... */}
            
            {/* Placeholder for first batch */}
            <div className="bg-card rounded-lg border border-border/50 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-muted-foreground">📷</span>
                </div>
                <p className="text-sm text-muted-foreground">Batch 1</p>
                <p className="text-xs text-muted-foreground">Photos 1-10</p>
              </div>
            </div>
          </div>

          {/* Upload Instructions */}
          <div className="mt-12 bg-muted/30 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">📸 Ready for Your Photos</h3>
            <p className="text-muted-foreground mb-4">
              Upload your work photos in batches of 10. I'll add them to the gallery without duplicates.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
              <span className="font-medium">Status:</span>
              <span>Ready for Batch 1 (Photos 1-10)</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;