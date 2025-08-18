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

            {/* Batch 2: Photos 11-20 */}
            {/* Photo 11: Underfloor heating installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/ec0d5397-5e21-4be9-9ec5-d708c7fcd306.png" 
                alt="Underfloor heating pipes installation on insulation panels"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Underfloor Heating
                </div>
              </div>
            </div>

            {/* Photo 12: Outdoor pipe installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/0362e908-213a-4c18-b601-279e0028946e.png" 
                alt="Professional outdoor copper pipe installation along stone wall"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Outdoor Installation
                </div>
              </div>
            </div>

            {/* Photo 13: Stone wall pipe routing */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/372d6bd5-4686-430a-8b9d-bf7c6505a79f.png" 
                alt="Copper pipe installation along traditional stone wall foundation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Foundation Work
                </div>
              </div>
            </div>

            {/* Photo 14: Underground excavation work */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/a4fbf0f6-a382-4043-8771-c5aec5614169.png" 
                alt="Professional excavation work for underground pipe installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Excavation Work
                </div>
              </div>
            </div>

            {/* Photo 15: Main water line installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/5a165467-ab5f-43c1-b8b1-7fa596227ade.png" 
                alt="Large diameter water main pipe installation in excavated area"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Main Water Lines
                </div>
              </div>
            </div>

            {/* Photo 16: Construction site plumbing */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/f63ff9b8-8d3b-4e7f-8437-cd9e706725fe.png" 
                alt="Plumbing installation at construction site with workers"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Construction Site
                </div>
              </div>
            </div>

            {/* Photo 17: Modern water heater installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/9f280a5e-4eb5-402b-9aa5-40ac3b3a1936.png" 
                alt="Modern tankless water heater installation with professional piping"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Water Heater
                </div>
              </div>
            </div>

            {/* Photo 18: Sewage system component */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/3f004088-73bb-43eb-a24c-a5331e717e10.png" 
                alt="Professional sewage system tank component installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Sewage Systems
            </div>

            {/* Batch 3: Photos 21-30 */}
            {/* Photo 21: Precision plumbing work */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/8838a8f2-521d-4d68-86b1-d2a1c8eca577.png" 
                alt="Detailed precision plumbing installation work with professional tools"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Precision Work
                </div>
              </div>
            </div>

            {/* Photo 22: Underground drainage system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/7ab7d6f8-d93d-49b6-a52d-5ae9eb7ce648.png" 
                alt="Professional underground drainage and sewerage system installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Drainage Systems
                </div>
              </div>
            </div>

            {/* Photo 23: Water filtration component */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/c34066c8-5fa5-442d-8853-f596c6c0bf23.png" 
                alt="Professional water filtration system component installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Water Filtration
                </div>
              </div>
            </div>

            {/* Photo 24: Underground utility installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/150720f2-733c-458b-b48c-fb56d444153d.png" 
                alt="Underground utility box installation with specialized coiled systems"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Utility Systems
                </div>
              </div>
            </div>

            {/* Photo 25: Boiler and heating system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/d60452f6-aaab-4cd9-bf48-830ff9d183ca.png" 
                alt="Professional boiler installation with expansion tank and control systems"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Boiler Systems
                </div>
              </div>
            </div>

            {/* Photo 26: Professional equipment */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/6c49fab4-771a-4de7-a385-f8ae23a39c56.png" 
                alt="Professional plumbing equipment and tools for advanced installations"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Professional Equipment
                </div>
              </div>
            </div>

            {/* Photo 27: DAB pump system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/8510e9a1-07f8-4794-9915-7e4e1de19474.png" 
                alt="DAB water pump system installation with digital controls"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Pump Systems
                </div>
              </div>
            </div>

            {/* Photo 28: Premium bathroom fixtures */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/4f6fa9cc-6c86-4b9d-9282-b8db30f13b92.png" 
                alt="Premium gold bathroom faucet installation with professional tiling"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Premium Fixtures
                </div>
              </div>
            </div>

            {/* Photo 29: Dual water filtration */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/63c3b92c-105e-4074-9d8b-9cc1e7dbc445.png" 
                alt="Dual blue water filtration system with professional piping"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Dual Filtration
                </div>
              </div>
            </div>

            {/* Photo 30: Commercial filtration system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/921e530f-fefd-41e5-a7c3-281cf8abc280.png" 
                alt="Large commercial water filtration system with multiple filter stages"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Commercial Filtration
                </div>
              </div>
            </div>
              </div>
            </div>

            {/* Photo 19: Outdoor excavation and piping */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/af3a8fdb-1c03-4fbe-ad56-2b24fa935ad8.png" 
                alt="Outdoor excavation work with specialized plumbing equipment"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Site Preparation
                </div>
              </div>
            </div>

            {/* Photo 20: Hydraulic separation unit */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/4d1978e9-201b-4228-aa81-f3fe6be7070a.png" 
                alt="Professional hydraulic separation unit installation with multiple connections"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Hydraulic Systems
                </div>
              </div>
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
            <h3 className="text-xl font-semibold mb-4 text-primary">✅ Batch 3 Complete!</h3>
            <p className="text-muted-foreground mb-4">
              Photos 1-30 successfully added to the gallery.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
              <span className="font-medium">Status:</span>
              <span>Ready for Batch 4 (Photos 31-40)</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;