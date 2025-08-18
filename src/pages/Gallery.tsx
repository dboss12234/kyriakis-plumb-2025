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

          {/* Photo Grid - Batch 1: Photos 1-10 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Photo 1: Underground pipe installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/789a57f6-9680-4be6-b5dc-71a2f45dd1a7.png" 
                alt="Underground pipe installation with copper pipes"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Pipe Installation
                </div>
              </div>
            </div>

            {/* Photo 2: Gas meter installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/81dc06e3-54b8-4a8b-9eec-5481c0738201.png" 
                alt="Professional gas meter and copper pipe installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Gas Meter Setup
                </div>
              </div>
            </div>

            {/* Photo 3: Pipe cutting equipment */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/29df8f49-e090-45c4-8182-ffe0bbb76e69.png" 
                alt="Green pipe cutting and welding equipment"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Professional Tools
                </div>
              </div>
            </div>

            {/* Photo 4: Water system installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/93441e7d-8ad2-4c71-86a1-1debb0ff60bb.png" 
                alt="Water filtration and pressure system installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Water Systems
                </div>
              </div>
            </div>

            {/* Photo 5: Workshop pipe preparation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/a7d3f76c-fefa-4180-90cc-d0ab0e1e0492.png" 
                alt="Professional pipe preparation in workshop with specialized tools"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Workshop Setup
                </div>
              </div>
            </div>

            {/* Photo 6: Advanced pipe equipment */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/e657dc6f-2c77-4ae0-a8dd-1a5b81289829.png" 
                alt="Advanced pipe cutting and preparation equipment in workshop"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Advanced Equipment
                </div>
              </div>
            </div>

            {/* Photo 7: Control panel installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/5b5b3450-531c-4f07-ba00-1ca8b285c07c.png" 
                alt="Professional control panel and electrical installation for heating systems"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Control Systems
                </div>
              </div>
            </div>

            {/* Photo 8: Premium sink installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/ec25f865-fd83-4c28-aee7-839c9559cf02.png" 
                alt="Premium kitchen sink installation with professional components"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Kitchen Installation
                </div>
              </div>
            </div>

            {/* Photo 9: Underground utility installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/8e0f9812-0f65-460d-80c3-b998f0026cba.png" 
                alt="Underground utility box installation with precise piping"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Utility Installation
                </div>
              </div>
            </div>

            {/* Photo 10: Underfloor heating manifold */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/a6dbc87c-9860-4231-b156-013008d3860e.png" 
                alt="Professional underfloor heating manifold installation with multiple zones"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Heating Systems
                </div>
              </div>
            </div>
          </div>

          {/* Upload Status */}
          <div className="mt-12 bg-gradient-primary/10 rounded-xl p-8 text-center border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">✅ Batch 1 Complete!</h3>
            <p className="text-muted-foreground mb-4">
              First 10 photos successfully added to the gallery.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
              <span className="font-medium">Status:</span>
              <span>Ready for Batch 2 (Photos 11-20)</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;