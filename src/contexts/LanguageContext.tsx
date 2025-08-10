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
  'hero.badge': { EN: 'Professional Services', GR: 'Επαγγελματικές Υπηρεσίες' },
  'hero.title1': { EN: 'Plumbing', GR: 'Υδραυλικές' },
  'hero.title2': { EN: 'Services', GR: 'Υπηρεσίες' },
  'hero.title3': { EN: 'in Greece', GR: 'στην Ελλάδα' },
  'hero.emergency': { EN: '24/7 Emergency', GR: '24/7 Έκτακτη Ανάγκη' },
  'hero.emergency.desc': { EN: 'Immediate response to critical situations', GR: 'Άμεση ανταπόκριση σε κρίσιμες καταστάσεις' },
  'hero.subtitle': { EN: 'We offer comprehensive plumbing solutions with the latest technology. From installations to repairs, trust our experience for lasting results.', GR: 'Προσφέρουμε ολοκληρωμένες υδραυλικές λύσεις με την πιο σύγχρονη τεχνολογία. Από εγκαταστάσεις έως επισκευές, εμπιστευτείτε την εμπειρία μας για αποτελέσματα που διαρκούν.' },
  'hero.call': { EN: 'Call Now', GR: 'Κλήση Τώρα' },
  'hero.estimate': { EN: 'Free Quote', GR: 'Δωρεάν Προσφορά' },
  'hero.stat1': { EN: 'Satisfied Customers', GR: 'Ικανοποιημένοι Πελάτες' },
  'hero.stat2': { EN: 'Years Experience', GR: 'Χρόνια Εμπειρίας' },
  'hero.stat3': { EN: 'Availability', GR: 'Διαθεσιμότητα' },
  'hero.certified': { EN: 'Certified', GR: 'Πιστοποιημένος' },
  'hero.quality': { EN: 'Premium Quality', GR: 'Premium Ποιότητα' },

  // Services
  'services.badge': { EN: 'Our Services', GR: 'Οι Υπηρεσίες μας' },
  'services.title1': { EN: 'Professional', GR: 'Επαγγελματικές' },
  'services.title2': { EN: 'Plumbing Solutions', GR: 'Υδραυλικές Λύσεις' },
  'services.cta.title1': { EN: 'Need Professional', GR: 'Χρειάζεστε Επαγγελματικές' },
  'services.cta.title2': { EN: 'Plumbing Services?', GR: 'Υδραυλικές Υπηρεσίες;' },
  'services.cta.desc': { EN: 'Contact us today for free consultation and quote', GR: 'Επικοινωνήστε μαζί μας σήμερα για δωρεάν συμβουλευτική και προσφορά' },
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
  'footer.description': { EN: 'Professional plumbing solutions with modern techniques and premium materials. We serve Greece with guaranteed quality work since 2014.', GR: 'Επαγγελματικές υδραυλικές λύσεις με σύγχρονες τεχνικές και premium υλικά. Εξυπηρετούμε την Ελλάδα με εγγυημένη ποιότητα εργασίας από το 2014.' },
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
  'whatsapp': { EN: 'WhatsApp', GR: 'WhatsApp' },
  'call.now': { EN: 'Call Now', GR: 'Κλήση Τώρα' },

  // Features
  'features.certified.title': { EN: 'Certified Professional', GR: 'Πιστοποιημένος Επαγγελματίας' },
  'features.certified.desc': { EN: 'Premium Quality', GR: 'Premium Ποιότητα' },
  'features.materials.title': { EN: 'High Quality Materials', GR: 'Υλικά υψηλής ποιότητας' },
  'features.materials.desc': { EN: 'Fast Response', GR: 'Γρήγορη Ανταπόκριση' },
  'features.service.title': { EN: 'Same Day Service', GR: 'Εξυπηρέτηση την ίδια μέρα' },
  'features.service.desc': { EN: 'Guaranteed Work', GR: 'Εγγυημένη Εργασία' },
  'features.warranty.title': { EN: 'Full Warranty', GR: 'Πλήρης εγγύηση' },
  'features.warranty.desc': { EN: 'Professional Services', GR: 'Επαγγελματικές Υπηρεσίες' },
  'features.section.title1': { EN: 'Why Trust', GR: 'Γιατί να μας' },
  'features.section.title2': { EN: 'Us', GR: 'Εμπιστευτείτε' },
  'features.section.subtitle': { EN: 'Professional Excellence in Every Detail', GR: 'Επαγγελματική Αριστεία σε Κάθε Λεπτομέρεια' },

  // About
  'about.stats.customers': { EN: 'Satisfied Customers', GR: 'Ικανοποιημένοι Πελάτες' },
  'about.stats.experience': { EN: 'Years Experience', GR: 'Χρόνια Εμπειρίας' },
  'about.stats.projects': { EN: 'Completed Projects', GR: 'Ολοκληρωμένα Έργα' },
  'about.stats.hours': { EN: 'Hours Service', GR: 'Ωρών Υπηρεσία' },
  'about.title': { EN: 'About Our Company', GR: 'Σχετικά με την Εταιρεία μας' },
  'about.subtitle': { EN: '10+ Years of Excellence in Plumbing Services', GR: '10+ Χρόνια Αριστείας στις Υδραυλικές Υπηρεσίες' },
  'about.description': { EN: 'Since 2014, Kyriakis Plumber has been providing high-quality plumbing services throughout Greece. We specialize in modern plumbing solutions, emergency repairs and complete system installations using only premium materials and advanced techniques.', GR: 'Από το 2014, ο Kyriakis Plumber παρέχει υψηλής ποιότητας υδραυλικές υπηρεσίες σε όλη την Ελλάδα. Ειδικευόμαστε σε σύγχρονες υδραυλικές λύσεις, επισκευές έκτακτης ανάγκης και πλήρεις εγκαταστάσεις συστημάτων χρησιμοποιώντας μόνο premium υλικά και προηγμένες τεχνικές.' },
  'about.licensed.title': { EN: 'Licensed & Insured', GR: 'Αδειοδοτημένος & Ασφαλισμένος' },
  'about.licensed.desc': { EN: 'Fully licensed professional with comprehensive insurance coverage', GR: 'Πλήρως αδειοδοτημένος επαγγελματίας με ολοκληρωμένη ασφαλιστική κάλυψη' },
  'about.emergency.title': { EN: '24/7 Emergency Service', GR: '24/7 Υπηρεσία Έκτακτης Ανάγκης' },
  'about.emergency.desc': { EN: 'Available around the clock for urgent plumbing repairs', GR: 'Διαθεσιμότητα όλο το εικοσιτετράωρο για επείγουσες υδραυλικές επισκευές' },
  'about.quality.title': { EN: 'Premium Quality', GR: 'Premium Ποιότητα' },
  'about.quality.desc': { EN: 'Only the best materials and most modern techniques for lasting results', GR: 'Μόνο τα καλύτερα υλικά και οι πιο σύγχρονες τεχνικές για διαρκή αποτελέσματα' },
  'about.partners': { EN: 'Trusted Partners', GR: 'Αξιόπιστοι Συνεργάτες' },
  'about.contact.title': { EN: 'Contact Today', GR: 'Επικοινωνήστε Σήμερα' },
  'about.contact.desc': { EN: 'Ready to provide the best service for all your plumbing needs', GR: 'Έτοιμοι να παρέχουμε την καλύτερη εξυπηρέτηση για όλες τις υδραυλικές σας ανάγκες' },
  'about.certified': { EN: 'Certified', GR: 'Πιστοποιημένος' },
  'about.premium': { EN: 'Premium', GR: 'Premium' },

  // Contact
  'contact.badge': { EN: 'Contact', GR: 'Επικοινωνία' },
  'contact.title1': { EN: 'Contact', GR: 'Επικοινωνήστε' },
  'contact.title2': { EN: 'Us', GR: 'μαζί μας' },
  'contact.subtitle': { EN: 'Ready to solve your plumbing problems? Contact us for fast, reliable service. Available 24/7 for emergencies.', GR: 'Έτοιμοι να λύσουμε τα υδραυλικά σας προβλήματα; Επικοινωνήστε μαζί μας για γρήγορη, αξιόπιστη εξυπηρέτηση. Διαθέσιμοι 24/7 για επείγοντα περιστατικά.' },
  'contact.info': { EN: 'Contact Information', GR: 'Στοιχεία Επικοινωνίας' },
  'contact.phone.subtitle': { EN: 'Available 24/7 for emergencies', GR: 'Διαθέσιμοι 24/7 για επείγοντα' },
  'contact.email.subtitle': { EN: 'Response within 24 hours', GR: 'Απάντηση εντός 24 ωρών' },
  'contact.location.title': { EN: 'Service Area', GR: 'Περιοχή Εξυπηρέτησης' },
  'contact.location.value': { EN: 'All of Greece', GR: 'Όλη η Ελλάδα' },
  'contact.location.subtitle': { EN: 'Residential & commercial properties', GR: 'Οικιακές & εμπορικές ιδιοκτησίες' },
  'contact.whatsapp.subtitle': { EN: 'Quick messages & photos', GR: 'Γρήγορα μηνύματα & φωτογραφίες' },
  'contact.call': { EN: 'Call', GR: 'Κλήση' },
  'contact.form.title': { EN: 'Send us a Message', GR: 'Στείλτε μας Μήνυμα' },
  'contact.form.subtitle': { EN: 'Fill out the form below and we will contact you as soon as possible.', GR: 'Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.' },
  'contact.form.name': { EN: 'Full Name *', GR: 'Πλήρες Όνομα *' },
  'contact.form.name.placeholder': { EN: 'Your name', GR: 'Το όνομά σας' },
  'contact.form.email': { EN: 'Email Address *', GR: 'Διεύθυνση Email *' },
  'contact.form.phone': { EN: 'Phone Number', GR: 'Αριθμός Τηλεφώνου' },
  'contact.form.service': { EN: 'Service', GR: 'Υπηρεσία' },
  'contact.form.service.placeholder': { EN: 'Select service', GR: 'Επιλέξτε υπηρεσία' },
  'contact.form.service.emergency': { EN: 'Emergency Repair', GR: 'Έκτακτη Επισκευή' },
  'contact.form.service.installation': { EN: 'Pipe Installation', GR: 'Εγκατάσταση Σωληνώσεων' },
  'contact.form.service.heating': { EN: 'Underfloor Heating', GR: 'Ενδοδαπέδια Θέρμανση' },
  'contact.form.service.solar': { EN: 'Solar Systems', GR: 'Ηλιακά Συστήματα' },
  'contact.form.service.boiler': { EN: 'Boiler Installation', GR: 'Εγκατάσταση Λεβήτων' },
  'contact.form.service.other': { EN: 'Other', GR: 'Άλλο' },
  'contact.form.message': { EN: 'Message *', GR: 'Μήνυμα *' },
  'contact.form.message.placeholder': { EN: 'Describe your plumbing needs...', GR: 'Περιγράψτε τις υδραυλικές σας ανάγκες...' },
  'contact.form.submit': { EN: 'Send Message', GR: 'Αποστολή Μηνύματος' },
  'contact.form.sending': { EN: 'Sending...', GR: 'Αποστολή...' },
  'contact.emergency.title': { EN: 'Urgent Plumbing Problem?', GR: 'Επείγον Υδραυλικό Πρόβλημα;' },
  'contact.emergency.subtitle': { EN: 'Don\'t wait! Call us immediately for 24/7 emergency service.', GR: 'Μην περιμένετε! Καλέστε μας αμέσως για 24/7 υπηρεσία έκτακτης ανάγκης.' },
  'contact.emergency.button': { EN: 'Emergency Hotline', GR: 'Κλήση Γραμμής Έκτακτης Ανάγκης' },
  'contact.error.title': { EN: 'Error', GR: 'Σφάλμα' },
  'contact.error.required': { EN: 'Please fill in all required fields.', GR: 'Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.' },
  'contact.success.title': { EN: 'Successfully Sent!', GR: 'Επιτυχής Αποστολή!' },
  'contact.success.message': { EN: 'Your message has been sent successfully. We will contact you soon.', GR: 'Το μήνυμά σας εστάλη επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.' },
  'contact.error.send.title': { EN: 'Send Error', GR: 'Σφάλμα Αποστολής' },
  'contact.error.send.message': { EN: 'There was a problem sending. Try again or contact by phone.', GR: 'Παρουσιάστηκε πρόβλημα κατά την αποστολή. Δοκιμάστε ξανά ή επικοινωνήστε τηλεφωνικά.' }
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