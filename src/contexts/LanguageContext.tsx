import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'GR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: {
    EN: string;
    GR: string;
  };
}

const translations: Translations = {
  // Header
  'nav.home': { EN: 'Home', GR: 'Αρχική' },
  'nav.services': { EN: 'Services', GR: 'Υπηρεσίες' },
  'nav.details': { EN: 'Details', GR: 'Λεπτομέρειες' },
  'nav.about': { EN: 'About', GR: 'Σχετικά' },
  'nav.contact': { EN: 'Contact', GR: 'Επικοινωνία' },
  'header.emergency': { EN: '24/7 Call', GR: '24/7 Κλήση' },
  'header.tagline': { EN: 'Premium Services', GR: 'Premium Services' },

  // Hero Section
  'hero.badge': { EN: 'Professional Plumbing Solutions', GR: 'Επαγγελματικές Υδραυλικές Λύσεις' },
  'hero.title1': { EN: 'Professional', GR: 'Επαγγελματικές' },
  'hero.title2': { EN: 'Plumbing Solutions', GR: 'Υδραυλικές Λύσεις' },
  'hero.subtitle': { EN: 'Complete plumbing services with modern techniques and premium materials. From emergency repairs to complete installations, we deliver quality work with guaranteed results.', GR: 'Ολοκληρωμένες υδραυλικές υπηρεσίες με σύγχρονες τεχνικές και premium υλικά. Από επισκευές έκτακτης ανάγκης έως πλήρεις εγκαταστάσεις, παραδίδουμε ποιοτική εργασία με εγγυημένα αποτελέσματα.' },
  'hero.call': { EN: 'Call Now', GR: 'Κλήση Τώρα' },
  'hero.estimate': { EN: 'Free Estimate', GR: 'Δωρεάν Εκτίμηση' },

  // Services
  'services.badge': { EN: 'Our Services', GR: 'Οι Υπηρεσίες μας' },
  'services.title1': { EN: 'Professional', GR: 'Επαγγελματικές' },
  'services.title2': { EN: 'Plumbing Solutions', GR: 'Υδραυλικές Λύσεις' },
  'services.pipe.title': { EN: 'Pipe Installation', GR: 'Εγκατάσταση Νέων Σωληνώσεων' },
  'services.heating.title': { EN: 'Underfloor Heating', GR: 'Ενδοδαπέδια Θέρμανση' },
  'services.emergency.title': { EN: 'Emergency Repairs', GR: 'Επισκευές Έκτακτης Ανάγκης' },
  'services.solar.title': { EN: 'Solar Systems', GR: 'Ηλιακά Συστήματα Νερού' },
  'services.water.title': { EN: 'Water Heaters', GR: 'Εγκατάσταση Θερμοσίφωνων' },
  'services.boiler.title': { EN: 'Boiler Systems', GR: 'Εγκατάσταση Λεβήτων' },
  'services.offer': { EN: 'Get Quote', GR: 'Προσφορά' },
  'services.emergency.cta': { EN: 'Call Now', GR: 'Κλήση Τώρα' },
  'services.urgent': { EN: 'URGENT', GR: 'ΕΠΕΙΓΟΝ' },

  // Footer
  'footer.company': { EN: 'Kyriakis Plumber', GR: 'Kyriakis Plumber' },
  'footer.tagline': { EN: 'Premium Plumbing Services', GR: 'Premium Υδραυλικές Υπηρεσίες' },
  'footer.contact': { EN: 'Contact Information', GR: 'Στοιχεία Επικοινωνίας' },
  'footer.services.title': { EN: 'Our Services', GR: 'Οι Υπηρεσίες μας' },
  'footer.help': { EN: 'Need Help?', GR: 'Χρειάζεστε Βοήθεια;' },
  'footer.help.text': { EN: 'Contact us for professional plumbing services', GR: 'Επικοινωνήστε μαζί μας για επαγγελματικές υδραυλικές υπηρεσίες' },
  'footer.rights': { EN: '© 2025 Kyriakis Plumber. All rights reserved.', GR: '© 2025 Kyriakis Plumber. Όλα τα δικαιώματα διατηρούνται.' },
  'footer.privacy': { EN: 'Privacy Policy', GR: 'Πολιτική Απορρήτου' },
  'footer.terms': { EN: 'Terms of Use', GR: 'Όροι Χρήσης' },

  // Common
  'phone': { EN: 'Phone', GR: 'Τηλέφωνο' },
  'email': { EN: 'Email', GR: 'Email' },
  'location': { EN: 'Location', GR: 'Τοποθεσία' },
  'greece': { EN: 'Greece', GR: 'Ελλάδα' },
  'whatsapp': { EN: 'WhatsApp', GR: 'WhatsApp' }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('GR');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};