import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; index: number } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of all gallery images
  const galleryImages = [
    { src: "/lovable-uploads/789a57f6-9680-4be6-b5dc-71a2f45dd1a7.png", alt: "Underground pipe installation with copper pipes" },
    { src: "/lovable-uploads/81dc06e3-54b8-4a8b-9eec-5481c0738201.png", alt: "Professional pipe fitting and connections" },
    { src: "/lovable-uploads/a7d3f76c-fefa-4180-90cc-d0ab0e1e0492.png", alt: "Complex plumbing junction installation" },
    { src: "/lovable-uploads/5b5b3450-531c-4f07-ba00-1ca8b285c07c.png", alt: "Modern heating system components" },
    { src: "/lovable-uploads/f63ff9b8-8d3b-4e7f-8437-cd9e706725fe.png", alt: "Professional manifold installation" },
    { src: "/lovable-uploads/4f6fa9cc-6c86-4b9d-9282-b8db30f13b92.png", alt: "Advanced pipe network system" },
    { src: "/lovable-uploads/ec25f865-fd83-4c28-aee7-839c9559cf02.png", alt: "High-quality pipe materials and fittings" },
    { src: "/lovable-uploads/8e0f9812-0f65-460d-80c3-b998f0026cba.png", alt: "Precision plumbing installation work" },
    { src: "/lovable-uploads/0362e908-213a-4c18-b601-279e0028946e.png", alt: "Underground pipe laying process" },
    { src: "/lovable-uploads/3f004088-73bb-43eb-a24c-a5331e717e10.png", alt: "Professional heating system setup" },
    { src: "/lovable-uploads/af3a8fdb-1c03-4fbe-ad56-2b24fa935ad8.png", alt: "Complex pipe connection work" },
    { src: "/lovable-uploads/4d1978e9-201b-4228-aa81-f3fe6be7070a.png", alt: "Modern plumbing infrastructure" },
    { src: "/lovable-uploads/8510e9a1-07f8-4794-9915-7e4e1de19474.png", alt: "Quality pipe installation" },
    { src: "/lovable-uploads/9f280a5e-4eb5-402b-9aa5-40ac3b3a1936.png", alt: "Advanced heating controls" },
    { src: "/lovable-uploads/8838a8f2-521d-4d68-86b1-d2a1c8eca577.png", alt: "Professional pipe network" },
    { src: "/lovable-uploads/7ab7d6f8-d93d-49b6-a52d-5ae9eb7ce648.png", alt: "Precision manifold system" },
    { src: "/lovable-uploads/c34066c8-5fa5-442d-8853-f596c6c0bf23.png", alt: "Underground installation work" },
    { src: "/lovable-uploads/150720f2-733c-458b-b48c-fb56d444153d.png", alt: "Professional piping solution" },
    { src: "/lovable-uploads/d60452f6-aaab-4cd9-bf48-830ff9d183ca.png", alt: "Quality heating system" },
    { src: "/lovable-uploads/6c49fab4-771a-4de7-a385-f8ae23a39c56.png", alt: "Modern pipe connections" },
    { src: "/lovable-uploads/b970f27a-345a-4491-995a-2955c41cb560.png", alt: "Underground pipe connections with orange and gray fittings" },
    { src: "/lovable-uploads/be0f94e1-af38-4342-ac2c-2f5ead7e1b8c.png", alt: "Green pipe installation with concrete blocks" },
    { src: "/lovable-uploads/fc6992e4-71b8-413f-8fad-a4484276cd27.png", alt: "Professional pipe fitting with orange and gray connections" },
    { src: "/lovable-uploads/e4f4849d-1466-4e8d-9d00-81dad6531561.png", alt: "Complex pipe junction with multiple connections" },
    { src: "/lovable-uploads/f1a068eb-be1a-4db8-a08a-b8dc9ea8bfee.png", alt: "Modern heating system with dual units mounted on wall" },
    { src: "/lovable-uploads/5cb2f250-f6cb-4320-b85e-cdd6e2fb546d.png", alt: "Professional manifold system with multiple control valves" },
    { src: "/lovable-uploads/c6390ed0-d466-4708-b6e0-8af4bff2292b.png", alt: "Complete boiler room setup with red expansion tank" },
    { src: "/lovable-uploads/c4a8fcac-d287-477a-86c1-9be80cb27218.png", alt: "Advanced heating control panel with monitoring systems" },
    { src: "/lovable-uploads/f6b49c54-ab88-457f-a392-5d2da23a4387.png", alt: "Multi-zone heating distribution system with labeled pipes" },
    { src: "/lovable-uploads/b00e54d6-200b-4b74-af36-63956d7f66d8.png", alt: "Comprehensive heating installation with expansion tank and controls" },
    { src: "/lovable-uploads/a952edbc-975f-4377-877b-916eb61e89a1.png", alt: "System pressure monitoring with precision gauge" },
    { src: "/lovable-uploads/cfdc7fa4-e7bc-43dc-a576-d1150ab241ba.png", alt: "Advanced pressure manifold with blue expansion tank" },
    { src: "/lovable-uploads/106fbc57-0931-4f0b-b266-9a8e445fb58a.png", alt: "Complex multi-tank heating system with advanced controls" },
    { src: "/lovable-uploads/2c5f79c8-b55b-4e22-b3ac-93fc34ada671.png", alt: "Clean circulation pump installation with green piping" },
    { src: "/lovable-uploads/3ce5fc1a-3c45-4452-945b-8e1a47704c5e.png", alt: "Professional control system with multiple gauges and valves" },
    { src: "/lovable-uploads/a002eb54-27f7-4861-8e89-ccc22438260a.png", alt: "Modern heating unit with advanced monitoring system" },
    { src: "/lovable-uploads/31a66894-a0b8-45c5-8278-380b9e235eb2.png", alt: "Complete manifold installation with Sonne tank" },
    { src: "/lovable-uploads/d48c0ac1-e639-4db4-92cd-07a7c2e75489.png", alt: "Luxury bathroom renovation with modern fixtures and lighting" },
    { src: "/lovable-uploads/68ad0b3c-0444-49ca-8999-bf40afd81d1e.png", alt: "Professional tank installation with Grundfos circulation pump" },
    { src: "/lovable-uploads/8e714116-7515-4e7f-a113-b913608db4c7.png", alt: "Modern bathroom fixtures with premium brass fittings" },
    { src: "/lovable-uploads/c2e9ba03-03f0-4d0c-bc57-6fd85771e607.png", alt: "Professional dual tank heating system with advanced piping" },
    { src: "/lovable-uploads/34f30f71-40e6-40b9-bbac-ab8c3c1d247c.png", alt: "Professional technician working on heating system installation" },
    { src: "/lovable-uploads/63f27746-da14-43d5-bd83-8305efa86753.png", alt: "Professional installation process with heating system components" },
  ];

  const openLightbox = (src: string, alt: string, index: number) => {
    setSelectedImage({ src, alt, index });
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage({
      src: galleryImages[newIndex].src,
      alt: galleryImages[newIndex].alt,
      index: newIndex
    });
  };

  const goToNext = () => {
    const newIndex = currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    setSelectedImage({
      src: galleryImages[newIndex].src,
      alt: galleryImages[newIndex].alt,
      index: newIndex
    });
  };

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
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              {t('gallery.workDescription')}
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
              <ZoomIn size={16} />
              <span className="text-sm font-medium">Click any image to view in perfect full size</span>
            </div>
          </div>

          {/* Optimized Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border/50 aspect-square cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-primary/50"
                onClick={() => openLightbox(image.src, image.alt, index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate">{image.alt}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <ZoomIn size={12} className="text-white/80" />
                      <span className="text-white/80 text-xs">Click to enlarge</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="mt-12 bg-gradient-primary/10 rounded-xl p-8 text-center border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">🎯 Complete Professional Portfolio</h3>
            <p className="text-muted-foreground mb-4">
              Showcasing {galleryImages.length} high-quality photos of our plumbing and heating expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">{galleryImages.length}</div>
                <div className="text-sm text-muted-foreground">Professional Photos</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">9</div>
                <div className="text-sm text-muted-foreground">Project Categories</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Quality Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Perfect Image Display */}
            <div className="relative max-w-full max-h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">{selectedImage.alt}</p>
                <div className="flex justify-between items-center text-xs text-white/80">
                  <span>Image {currentImageIndex + 1} of {galleryImages.length}</span>
                  <span>Use arrow keys or buttons to navigate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;