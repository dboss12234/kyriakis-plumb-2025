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

            {/* Batch 4: Photos 31-40 */}
            {/* Photo 31: Complex manifold system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/708150e4-14d6-4dc2-a8ed-177d5736b848.png" 
                alt="Complex green and blue pipe manifold system with pressure gauges and control valves"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Complex Manifolds
                </div>
              </div>
            </div>

            {/* Photo 32: Basement filtration system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/66c809c0-38c1-43ce-b920-67ec1e6aea71.png" 
                alt="Professional basement water filtration system with dual filter setup"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Basement Filtration
                </div>
              </div>
            </div>

            {/* Photo 33: Advanced manifold detail */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/cf25d02f-b6ea-4d25-9c6d-a738dbcf3197.png" 
                alt="Detailed view of advanced pipe manifold system with precision controls"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Advanced Controls
                </div>
              </div>
            </div>

            {/* Photo 34: Industrial pump system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/65b4e035-3a1d-449b-b8ea-7c928c384ce7.png" 
                alt="Professional green industrial pump motor system installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Industrial Pumps
                </div>
              </div>
            </div>

            {/* Photo 35: AQUASYSTEM expansion tank */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/5e07ecb1-3e0a-4bfc-8e33-e9153b1cd007.png" 
                alt="AQUASYSTEM red expansion tank with comprehensive pipe manifold system"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Expansion Systems
                </div>
              </div>
            </div>

            {/* Photo 36: Precision measurement work */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/e45651f1-8c0b-4798-ae11-40ff0d24b8d9.png" 
                alt="Professional water filter installation with precision measurement tools"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Precision Measurement
                </div>
              </div>
            </div>

            {/* Photo 37: GEBERIT display system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/44f149d5-d0a3-4c5f-b0d9-090bd1869de0.png" 
                alt="GEBERIT actuator plates and concealed cisterns display system"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  GEBERIT Systems
                </div>
              </div>
            </div>

            {/* Photo 38: Professional documentation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/e98ed6cf-441a-425d-bbac-8daa49884c56.png" 
                alt="Professional faucet installation manual and component documentation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Technical Documentation
                </div>
            </div>

            {/* Batch 5: Photos 41-50 */}
            {/* Photo 41: Well drilling equipment */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/a9288aeb-ee6d-4cca-86f5-c8f4155b7db2.png" 
                alt="Professional well drilling and water system installation equipment"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Well Drilling
                </div>
              </div>
            </div>

            {/* Photo 42: Rooftop water tank */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/48d8265c-1ac6-4377-9c09-c166e5d1f5b0.png" 
                alt="Professional rooftop water tank installation with city skyline view"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Rooftop Tank
                </div>
              </div>
            </div>

            {/* Photo 43: Industrial mechanical room */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/1b846268-f669-45be-853f-b3e1c11c9576.png" 
                alt="Large industrial mechanical room with blue storage tanks and professional installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Industrial Systems
                </div>
              </div>
            </div>

            {/* Photo 44: Filter sediment inspection */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/f8763d23-aaf1-434a-9677-69f6ce6b01b6.png" 
                alt="Professional water filter sediment inspection and maintenance work"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Filter Maintenance
                </div>
              </div>
            </div>

            {/* Photo 45: Vaillant solar water heaters */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/55393575-9b54-48a0-99b3-0332cab716f5.png" 
                alt="Professional Vaillant solar water heater installation on residential rooftop"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Solar Water Heaters
                </div>
              </div>
            </div>

            {/* Photo 46: DAB pump installation room */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/a8f4bb7f-18b9-46a1-9f3c-150e73b5c739.png" 
                alt="Professional DAB pump system installation in basement mechanical room"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  DAB Pump Systems
                </div>
              </div>
            </div>

            {/* Photo 47: Flow measurement device */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/c8e09356-24cf-4e0c-8b34-69fcd3a9529d.png" 
                alt="Professional water flow measurement device installation in utility area"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Flow Measurement
                </div>
              </div>
            </div>

            {/* Photo 48: Solar installation wide view */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/332bcd48-36ef-4b6f-9a9f-fc46352bf927.png" 
                alt="Wide view of professional Vaillant solar water heater installation on rooftop"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Solar Installation
                </div>
              </div>
            </div>

            {/* Photo 49: Complete solar system setup */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/a49f318e-1152-46d4-ba06-4e9a9b2f6321.png" 
                alt="Complete professional solar water heating system installation with piping connections"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Complete Solar System
                </div>
              </div>
            </div>

            {/* Photo 50: Underground infrastructure work */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/3e223dda-f293-44a1-95e6-f2f7b84e4584.png" 
                alt="Professional underground pipe infrastructure installation with orange and gray pipes"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Underground Infrastructure
                </div>
              </div>
            </div>
            </div>

            {/* Photo 39: Green motor system detail */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/22d6c11b-6785-4ad6-a71f-b9b84cd2e187.png" 
                alt="Detailed view of professional green motor pump system installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Motor Systems
                </div>
              </div>
            </div>

            {/* Photo 40: Finished premium bathroom */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/982d6411-e511-4990-b93e-7fd985198715.png" 
                alt="Completed modern bathroom with premium fixtures and elegant design"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Finished Bathroom
                </div>
              </div>
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

          {/* Batch 6: Photos 51-60 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {/* Photo 51: Underground pipe connections */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/b970f27a-345a-4491-995a-2955c41cb560.png" 
                alt="Underground pipe connections with orange and gray fittings"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Pipe Connections
                </div>
              </div>
            </div>

            {/* Photo 52: Green pipe installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/be0f94e1-af38-4342-ac2c-2f5ead7e1b8c.png" 
                alt="Green pipe installation with concrete blocks"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Green Pipe Installation
                </div>
              </div>
            </div>

            {/* Photo 53: Professional pipe fitting */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/fc6992e4-71b8-413f-8fad-a4484276cd27.png" 
                alt="Professional pipe fitting with orange and gray connections"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Professional Fitting
                </div>
              </div>
            </div>

            {/* Photo 54: Complex pipe junction */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/e4f4849d-1466-4e8d-9d00-81dad6531561.png" 
                alt="Complex pipe junction with multiple connections"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Complex Junction
                </div>
              </div>
            </div>

            {/* Photo 55: Modern heating system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/f1a068eb-be1a-4db8-a08a-b8dc9ea8bfee.png" 
                alt="Modern heating system with dual units mounted on wall"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Modern Heating System
                </div>
              </div>
            </div>

            {/* Photo 56: Underground pipe layout */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/edb8969b-b219-48a7-b1e6-3dfde32dce0d.png" 
                alt="Underground pipe layout with green and orange pipes"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Underground Layout
                </div>
              </div>
            </div>

            {/* Photo 57: Pipe installation process */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/ebf03157-c944-4c62-9b5b-0bb6afbcfdaf.png" 
                alt="Pipe installation process in underground trench"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Installation Process
                </div>
              </div>
            </div>

            {/* Photo 58: Advanced heating control system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/068e9250-f600-49b5-9694-1313532d7a0d.png" 
                alt="Advanced heating control system with multiple units"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Advanced Controls
                </div>
              </div>
            </div>

            {/* Photo 59: Professional wall-mounted system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/2cdc461c-9974-4ad6-a943-8bfb56abffd1.png" 
                alt="Professional wall-mounted heating system installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Wall-Mounted System
                </div>
              </div>
            </div>

            {/* Photo 60: Complete heating installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/f3295e4f-4a32-4661-9938-b064d12596df.png" 
                alt="Complete heating installation with dual control units"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Complete Installation
                </div>
              </div>
            </div>
          </div>

          {/* Batch 7: Photos 61-70 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {/* Photo 61: Professional manifold system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/5cb2f250-f6cb-4320-b85e-cdd6e2fb546d.png" 
                alt="Professional manifold system with multiple control valves"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Manifold System
                </div>
              </div>
            </div>

            {/* Photo 62: Boiler room setup */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/c6390ed0-d466-4708-b6e0-8af4bff2292b.png" 
                alt="Complete boiler room setup with red expansion tank"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Boiler Room Setup
                </div>
              </div>
            </div>

            {/* Photo 63: Advanced heating control panel */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/c4a8fcac-d287-477a-86c1-9be80cb27218.png" 
                alt="Advanced heating control panel with monitoring systems"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Control Panel
                </div>
              </div>
            </div>

            {/* Photo 64: Multi-zone heating distribution */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/f6b49c54-ab88-457f-a392-5d2da23a4387.png" 
                alt="Multi-zone heating distribution system with labeled pipes"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Multi-Zone Distribution
                </div>
              </div>
            </div>

            {/* Photo 65: Comprehensive heating installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/b00e54d6-200b-4b74-af36-63956d7f66d8.png" 
                alt="Comprehensive heating installation with expansion tank and controls"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Comprehensive Installation
                </div>
              </div>
            </div>

            {/* Photo 66: Professional tank installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/bf5eeaef-aa1a-4768-9c6e-6f4a0b3351a1.png" 
                alt="Professional tank installation with advanced piping system"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Tank Installation
                </div>
              </div>
            </div>

            {/* Photo 67: Modern water heater unit */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/0034a84e-a758-4123-9a0e-fa25e96ddd38.png" 
                alt="Modern water heater unit with brass connections"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Water Heater Unit
                </div>
              </div>
            </div>

            {/* Photo 68: Solar thermal fluid containers */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/2afc1f13-5a1b-4d66-b461-cdb236231d90.png" 
                alt="Solar thermal fluid containers for heating systems"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Solar Thermal Fluid
                </div>
              </div>
            </div>

            {/* Photo 69: Green pipe network system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/67e3a4a2-8c01-42f6-87c0-166b6068e304.png" 
                alt="Green pipe network system with pressure gauges"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Green Pipe Network
                </div>
              </div>
            </div>

            {/* Photo 70: Pipe material storage */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/2f7fe9d4-77fc-432f-9c56-645b2fc060b5.png" 
                alt="Professional pipe material storage and organization"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Material Storage
                </div>
              </div>
            </div>
          </div>

          {/* Batch 8: Photos 71-80 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {/* Photo 71: System pressure monitoring */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/a952edbc-975f-4377-877b-916eb61e89a1.png" 
                alt="System pressure monitoring with precision gauge"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Pressure Monitoring
                </div>
              </div>
            </div>

            {/* Photo 72: Advanced pressure manifold */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/cfdc7fa4-e7bc-43dc-a576-d1150ab241ba.png" 
                alt="Advanced pressure manifold with blue expansion tank"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Pressure Manifold
                </div>
              </div>
            </div>

            {/* Photo 73: Complex multi-tank system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/106fbc57-0931-4f0b-b266-9a8e445fb58a.png" 
                alt="Complex multi-tank heating system with advanced controls"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Multi-Tank System
                </div>
              </div>
            </div>

            {/* Photo 74: Clean circulation pump installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/2c5f79c8-b55b-4e22-b3ac-93fc34ada671.png" 
                alt="Clean circulation pump installation with green piping"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Circulation Pump
                </div>
              </div>
            </div>

            {/* Photo 75: Professional control system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/3ce5fc1a-3c45-4452-945b-8e1a47704c5e.png" 
                alt="Professional control system with multiple gauges and valves"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Control System
                </div>
              </div>
            </div>

            {/* Photo 76: Modern heating unit */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/a002eb54-27f7-4861-8e89-ccc22438260a.png" 
                alt="Modern heating unit with advanced monitoring system"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Modern Heating Unit
                </div>
              </div>
            </div>

            {/* Photo 77: Complete manifold installation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/31a66894-a0b8-45c5-8278-380b9e235eb2.png" 
                alt="Complete manifold installation with Sonne tank"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Complete Manifold
                </div>
              </div>
            </div>

            {/* Photo 78: Luxury bathroom renovation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/d48c0ac1-e639-4db4-92cd-07a7c2e75489.png" 
                alt="Luxury bathroom renovation with modern fixtures and lighting"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Luxury Bathroom
                </div>
              </div>
            </div>

            {/* Photo 79: Professional tank with Grundfos pump */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/68ad0b3c-0444-49ca-8999-bf40afd81d1e.png" 
                alt="Professional tank installation with Grundfos circulation pump"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Professional Tank
                </div>
              </div>
            </div>

            {/* Photo 80: Modern bathroom fixtures */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/8e714116-7515-4e7f-a113-b913608db4c7.png" 
                alt="Modern bathroom fixtures with premium brass fittings"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Modern Fixtures
                </div>
              </div>
            </div>
          </div>

          {/* Batch 9: Photos 81-83 (Final Batch) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {/* Photo 81: Dual tank heating system */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/c2e9ba03-03f0-4d0c-bc57-6fd85771e607.png" 
                alt="Professional dual tank heating system with advanced piping"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Dual Tank System
                </div>
              </div>
            </div>

            {/* Photo 82: Technician at work */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/34f30f71-40e6-40b9-bbac-ab8c3c1d247c.png" 
                alt="Professional technician working on heating system installation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Expert at Work
                </div>
              </div>
            </div>

            {/* Photo 83: Professional installation process */}
            <div className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square">
              <img 
                src="/lovable-uploads/63f27746-da14-43d5-bd83-8305efa86753.png" 
                alt="Professional installation process with heating system components"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Installation Process
                </div>
              </div>
            </div>
          </div>

          {/* Final Status */}
          <div className="mt-12 bg-gradient-primary/10 rounded-xl p-8 text-center border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">🎯 Complete Gallery!</h3>
            <p className="text-muted-foreground mb-4">
              All 83 photos successfully added to the gallery (9 batches completed).
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-lg">
              <span className="font-medium">Status:</span>
              <span>Complete Portfolio Gallery ✅</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;