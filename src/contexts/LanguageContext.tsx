import React, { createContext, useContext, ReactNode } from 'react';

type Language = 'GR';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: string;
}

const translations: Translations = {
  // Header
  'nav.home': 'Αρχική',
  'nav.services': 'Υπηρεσίες',
  'nav.details': 'Λεπτομέρειες',
  'nav.about': 'Σχετικά',
  'nav.contact': 'Επικοινωνία',
  'header.emergency': '24/7 Κλήση',
  'header.tagline': 'Premium Services',

  // Hero Section
  'hero.badge': 'Επαγγελματικές Υπηρεσίες',
  'hero.title1': 'Υδραυλικές',
  'hero.title2': 'Υπηρεσίες',
  'hero.title3': 'στην Ελλάδα',
  'hero.emergency': '24/7 Έκτακτη Ανάγκη',
  'hero.emergency.desc': 'Άμεση ανταπόκριση σε κρίσιμες καταστάσεις',
  'hero.subtitle': 'Προσφέρουμε ολοκληρωμένες υδραυλικές λύσεις με την πιο σύγχρονη τεχνολογία. Από εγκαταστάσεις έως επισκευές, εμπιστευτείτε την εμπειρία μας για αποτελέσματα που διαρκούν.',
  'hero.call': 'Κλήση Τώρα',
  'hero.estimate': 'Δωρεάν Προσφορά',
  'hero.stat1': 'Ικανοποιημένοι Πελάτες',
  'hero.stat2': 'Χρόνια Εμπειρίας',
  'hero.stat3': 'Διαθεσιμότητα',
  'hero.certified': 'Πιστοποιημένος',
  'hero.quality': 'Premium Ποιότητα',

  // Services
  'services.badge': 'Οι Υπηρεσίες μας',
  'services.title1': 'Επαγγελματικές',
  'services.title2': 'Υδραυλικές Λύσεις',
  'services.cta.title1': 'Χρειάζεστε Επαγγελματικές',
  'services.cta.title2': 'Υδραυλικές Υπηρεσίες;',
  'services.cta.desc': 'Επικοινωνήστε μαζί μας σήμερα για δωρεάν συμβουλευτική και προσφορά',
  'services.pipe.title': 'Εγκατάσταση Νέων Σωληνώσεων',
  'services.heating.title': 'Ενδοδαπέδια Θέρμανση',
  'services.emergency.title': 'Επισκευές Έκτακτης Ανάγκης',
  'services.solar.title': 'Ηλιακά Συστήματα Νερού',
  'services.water.title': 'Εγκατάσταση Θερμοσίφωνων',
  'services.boiler.title': 'Εγκατάσταση Λεβήτων',
  'services.offer': 'Προσφορά',
  'services.emergency.cta': 'Κλήση Τώρα',
  'services.urgent': 'ΕΠΕΙΓΟΝ',

  // Footer
  'footer.company': 'Kyriakis Plumber',
  'footer.tagline': 'Premium Υδραυλικές Υπηρεσίες',
  'footer.description': 'Επαγγελματικές υδραυλικές λύσεις με σύγχρονες τεχνικές και premium υλικά. Εξυπηρετούμε την Ελλάδα με εγγυημένη ποιότητα εργασίας από το 2014.',
  'footer.contact': 'Στοιχεία Επικοινωνίας',
  'footer.services.title': 'Οι Υπηρεσίες μας',
  'footer.help': 'Χρειάζεστε Βοήθεια;',
  'footer.help.text': 'Επικοινωνήστε μαζί μας για επαγγελματικές υδραυλικές υπηρεσίες',
  'footer.rights': '© 2025 Kyriakis Plumber. Όλα τα δικαιώματα διατηρούνται.',
  'footer.privacy': 'Πολιτική Απορρήτου',
  'footer.terms': 'Όροι Χρήσης',

  // Common
  'phone': 'Τηλέφωνο',
  'email': 'Email',
  'location': 'Τοποθεσία',
  'greece': 'Ελλάδα',
  'whatsapp': 'WhatsApp',
  'call.now': 'Κλήση Τώρα',

  // Features
  'features.certified.title': 'Πιστοποιημένος Επαγγελματίας',
  'features.certified.desc': 'Premium Ποιότητα',
  'features.materials.title': 'Υλικά υψηλής ποιότητας',
  'features.materials.desc': 'Γρήγορη Ανταπόκριση',
  'features.service.title': 'Εξυπηρέτηση την ίδια μέρα',
  'features.service.desc': 'Εγγυημένη Εργασία',
  'features.warranty.title': 'Πλήρης εγγύηση',
  'features.warranty.desc': 'Επαγγελματικές Υπηρεσίες',
  'features.section.title1': 'Γιατί να μας',
  'features.section.title2': 'Εμπιστευτείτε',
  'features.section.subtitle': 'Επαγγελματική Αριστεία σε Κάθε Λεπτομέρεια',

  // About
  'about.stats.customers': 'Ικανοποιημένοι Πελάτες',
  'about.stats.experience': 'Χρόνια Εμπειρίας',
  'about.stats.projects': 'Ολοκληρωμένα Έργα',
  'about.stats.hours': 'Ωρών Υπηρεσία',
  'about.title': 'Σχετικά με την Εταιρεία μας',
  'about.subtitle': '10+ Χρόνια Αριστείας στις Υδραυλικές Υπηρεσίες',
  'about.description': 'Από το 2014, ο Kyriakis Plumber παρέχει υψηλής ποιότητας υδραυλικές υπηρεσίες σε όλη την Ελλάδα. Ειδικευόμαστε σε σύγχρονες υδραυλικές λύσεις, επισκευές έκτακτης ανάγκης και πλήρεις εγκαταστάσεις συστημάτων χρησιμοποιώντας μόνο premium υλικά και προηγμένες τεχνικές.',
  'about.licensed.title': 'Αδειοδοτημένος & Ασφαλισμένος',
  'about.licensed.desc': 'Πλήρως αδειοδοτημένος επαγγελματίας με ολοκληρωμένη ασφαλιστική κάλυψη',
  'about.emergency.title': '24/7 Υπηρεσία Έκτακτης Ανάγκης',
  'about.emergency.desc': 'Διαθεσιμότητα όλο το εικοσιτετράωρο για επείγουσες υδραυλικές επισκευές',
  'about.quality.title': 'Premium Ποιότητα',
  'about.quality.desc': 'Μόνο τα καλύτερα υλικά και οι πιο σύγχρονες τεχνικές για διαρκή αποτελέσματα',
  'about.partners': 'Αξιόπιστοι Συνεργάτες',
  'about.contact.title': 'Επικοινωνήστε Σήμερα',
  'about.contact.desc': 'Έτοιμοι να παρέχουμε την καλύτερη εξυπηρέτηση για όλες τις υδραυλικές σας ανάγκες',
  'about.certified': 'Πιστοποιημένος',
  'about.premium': 'Premium',

  // Contact
  'contact.badge': 'Επικοινωνία',
  'contact.title1': 'Επικοινωνήστε',
  'contact.title2': 'μαζί μας',
  'contact.subtitle': 'Έτοιμοι να λύσουμε τα υδραυλικά σας προβλήματα; Επικοινωνήστε μαζί μας για γρήγορη, αξιόπιστη εξυπηρέτηση. Διαθέσιμοι 24/7 για επείγοντα περιστατικά.',
  'contact.info': 'Στοιχεία Επικοινωνίας',
  'contact.phone.subtitle': 'Διαθέσιμοι 24/7 για επείγοντα',
  'contact.email.subtitle': 'Απάντηση εντός 24 ωρών',
  'contact.location.title': 'Περιοχή Εξυπηρέτησης',
  'contact.location.value': 'Όλη η Ελλάδα',
  'contact.location.subtitle': 'Οικιακές & εμπορικές ιδιοκτησίες',
  'contact.whatsapp.subtitle': 'Γρήγορα μηνύματα & φωτογραφίες',
  'contact.call': 'Κλήση',
  'contact.form.title': 'Στείλτε μας Μήνυμα',
  'contact.form.subtitle': 'Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.',
  'contact.form.name': 'Πλήρες Όνομα *',
  'contact.form.name.placeholder': 'Το όνομά σας',
  'contact.form.email': 'Διεύθυνση Email *',
  'contact.form.phone': 'Αριθμός Τηλεφώνου',
  'contact.form.service': 'Υπηρεσία',
  'contact.form.service.placeholder': 'Επιλέξτε υπηρεσία',
  'contact.form.service.emergency': 'Έκτακτη Επισκευή',
  'contact.form.service.installation': 'Εγκατάσταση Σωληνώσεων',
  'contact.form.service.heating': 'Ενδοδαπέδια Θέρμανση',
  'contact.form.service.solar': 'Ηλιακά Συστήματα',
  'contact.form.service.boiler': 'Εγκατάσταση Λεβήτων',
  'contact.form.service.other': 'Άλλο',
  'contact.form.message': 'Μήνυμα *',
  'contact.form.message.placeholder': 'Περιγράψτε τις υδραυλικές σας ανάγκες...',
  'contact.form.submit': 'Αποστολή Μηνύματος',
  'contact.form.sending': 'Αποστολή...',
  'contact.emergency.title': 'Επείγον Υδραυλικό Πρόβλημα;',
  'contact.emergency.subtitle': 'Μην περιμένετε! Καλέστε μας αμέσως για 24/7 υπηρεσία έκτακτης ανάγκης.',
  'contact.emergency.button': 'Κλήση Γραμμής Έκτακτης Ανάγκης',
  'contact.error.title': 'Σφάλμα',
  'contact.error.required': 'Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.',
  'contact.success.title': 'Επιτυχής Αποστολή!',
  'contact.success.message': 'Το μήνυμά σας εστάλη επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.',
  'contact.error.send.title': 'Σφάλμα Αποστολής',
  'contact.error.send.message': 'Παρουσιάστηκε πρόβλημα κατά την αποστολή. Δοκιμάστε ξανά ή επικοινωνήστε τηλεφωνικά.',

  // Services Page
  'services.page.badge': 'Ολοκληρωμένες Υδραυλικές Υπηρεσίες',
  'services.page.title1': 'Υδραυλικές',
  'services.page.title2': 'Υπηρεσίες',
  'services.page.title3': 'για κάθε ανάγκη',
  'services.page.subtitle': 'Εξειδικευμένες λύσεις με σύγχρονη τεχνολογία και premium υλικά',
  'services.page.contact.now': 'Επικοινωνία Τώρα',
  'services.page.free.estimate': 'Δωρεάν Εκτίμηση',
  'services.page.benefits.consultation': 'Δωρεάν Εκτίμηση & Συμβουλευτική',
  'services.page.benefits.materials': 'Premium Υλικά & Εργασία',
  'services.page.benefits.warranty': 'Εκτεταμένη Εγγύηση',
  'services.page.benefits.response': 'Γρήγορη Ανταπόκριση',
  'services.page.section.title1': 'Επαγγελματικές',
  'services.page.section.title2': 'Υπηρεσίες',
  'services.page.section.subtitle': 'Ολοκληρωμένες λύσεις για κάθε υδραυλική ανάγκη',
  'services.page.duration': 'Διάρκεια',
  'services.page.warranty': 'Εγγύηση',
  'services.page.features': 'Χαρακτηριστικά:',
  'services.page.quote': 'Προσφορά',
  'services.page.call.now': 'Κλήση Τώρα',
  'services.page.cta.title1': 'Χρειάζεστε',
  'services.page.cta.title2': 'Επαγγελματική Βοήθεια;',
  'services.page.cta.subtitle': 'Επικοινωνήστε μαζί μας για δωρεάν συμβουλευτική και προσφορά προσαρμοσμένη στις ανάγκες σας',

  // Detailed Services Page
  'detailed.page.badge': 'Ολοκληρωμένες Υδραυλικές Υπηρεσίες',
  'detailed.page.title1': 'Επαγγελματικές',
  'detailed.page.title2': 'Υδραυλικές',
  'detailed.page.title3': 'Λύσεις',
  'detailed.page.subtitle': 'Εξειδικευμένες υπηρεσίες για κάθε υδραυλική ανάγκη με εγγυημένη ποιότητα',
  'detailed.page.benefits.certified': 'Πιστοποιημένοι Επαγγελματίες',
  'detailed.page.benefits.equipment': 'Premium Υλικά & Εξοπλισμός',
  'detailed.page.benefits.warranty': 'Εκτεταμένη Εγγύηση',
  'detailed.page.benefits.availability': '24/7 Διαθεσιμότητα',
  'detailed.page.section.title1': 'Οι Υπηρεσίες',
  'detailed.page.section.title2': 'μας',
  'detailed.page.section.subtitle': 'Ολοκληρωμένες λύσεις για κάθε υδραυλική ανάγκη',
  'detailed.page.services.label': 'Υπηρεσίες:',
  'detailed.page.emergency.call': 'Κλήση Έκτακτης Ανάγκης',
  'detailed.page.quote': 'Προσφορά',
  'detailed.page.cta.title1': 'Επικοινωνήστε',
  'detailed.page.cta.title2': 'μαζί μας',
  'detailed.page.cta.subtitle': 'Εξειδικευμένες λύσεις για κάθε υδραυλική ανάγκη. Δωρεάν συμβουλευτική και προσφορά.',

  // Service Categories
  'service.pipes.title': 'Εγκατάσταση & Επισκευή Σωλήνων',
  'service.pipes.desc': 'Πλήρεις υπηρεσίες εγκατάστασης, επισκευής και αντικατάστασης σωλήνων για οικιστικά και εμπορικά ακίνητα.',
  'service.pipes.1': 'Εγκατάσταση σωλήνων νερού',
  'service.pipes.2': 'Συστήματα αποχέτευσης',
  'service.pipes.3': 'Ανίχνευση διαρροών σωλήνων',
  'service.pipes.4': 'Επισκευές έκτακτης ανάγκης',

  'service.bathroom.title': 'Υδραυλικά Μπάνιου & Κουζίνας',
  'service.bathroom.desc': 'Πλήρεις υδραυλικές λύσεις για μπάνια και κουζίνες, από εξαρτήματα έως πλήρεις ανακαινίσεις.',
  'service.bathroom.1': 'Εγκατάσταση εξαρτημάτων',
  'service.bathroom.2': 'Επισκευή νεροχύτη & βρύσης',
  'service.bathroom.3': 'Συστήματα ντους',
  'service.bathroom.4': 'Υδραυλικά κουζίνας',

  'service.water.heater.title': 'Υπηρεσίες Θερμοσίφωνα',
  'service.water.heater.desc': 'Εγκατάσταση, συντήρηση και επισκευή όλων των τύπων συστημάτων θέρμανσης νερού.',
  'service.water.heater.1': 'Εγκατάσταση λέβητα',
  'service.water.heater.2': 'Επισκευή θερμοσίφωνα',
  'service.water.heater.3': 'Συντήρηση συστήματος',
  'service.water.heater.4': 'Αναβαθμίσεις ενεργειακής απόδοσης',

  'service.boiler.install.title': 'Εγκατάσταση Λεβητοστασίου',
  'service.boiler.install.desc': 'Πλήρης εγκατάσταση και σχεδιασμός λεβητοστασίων για οικιστικά και εμπορικά κτίρια.',
  'service.boiler.install.1': 'Σχεδιασμός λεβητοστασίου',
  'service.boiler.install.2': 'Εγκατάσταση λέβητα',
  'service.boiler.install.3': 'Σύνδεση δικτύου θέρμανσης',
  'service.boiler.install.4': 'Δοκιμές και παραλαβή',

  'service.boiler.service.title': 'Service Λεβητοστασίου',
  'service.boiler.service.desc': 'Επαγγελματική συντήρηση και επισκευή λεβητοστασίων για βέλτιστη απόδοση.',
  'service.boiler.service.1': 'Ετήσια συντήρηση λέβητα',
  'service.boiler.service.2': 'Καθαρισμός καυστήρα',
  'service.boiler.service.3': 'Έλεγχος ασφαλείας',
  'service.boiler.service.4': 'Επισκευές βλαβών',

  'service.solar.title': 'Ηλιακά Συστήματα',
  'service.solar.desc': 'Εγκατάσταση και συντήρηση ηλιακών συστημάτων για οικονομική θέρμανση νερού.',
  'service.solar.1': 'Εγκατάσταση ηλιακών συλλεκτών',
  'service.solar.2': 'Σύνδεση με υπάρχον σύστημα',
  'service.solar.3': 'Συντήρηση ηλιακών',
  'service.solar.4': 'Αναβαθμίσεις συστημάτων',

  'service.residential.title': 'Οικιακά Υδραυλικά',
  'service.residential.desc': 'Πλήρεις υδραυλικές υπηρεσίες για σπίτια, διαμερίσματα και οικιστικά συγκροτήματα.',
  'service.residential.1': 'Επιθεωρήσεις σπιτιού',
  'service.residential.2': 'Προληπτική συντήρηση',
  'service.residential.3': 'Αναβαθμίσεις εξαρτημάτων',
  'service.residential.4': 'Ανίχνευση διαρροών',

  'service.commercial.title': 'Εμπορικά Υδραυλικά',
  'service.commercial.desc': 'Επαγγελματικές υδραυλικές υπηρεσίες για επιχειρήσεις, γραφεία και εμπορικές εγκαταστάσεις.',
  'service.commercial.1': 'Εμπορικές εγκαταστάσεις',
  'service.commercial.2': 'Συμβόλαια συντήρησης',
  'service.commercial.3': 'Συμμόρφωση κώδικα',
  'service.commercial.4': 'Αναβαθμίσεις συστήματος',

  'service.emergency.title': 'Υπηρεσίες Έκτακτης Ανάγκης',
  'service.emergency.desc': 'Υδραυλικές υπηρεσίες έκτακτης ανάγκης 24/7 για επείγουσες καταστάσεις και πρόληψη ζημιών από νερό.',
  'service.emergency.1': 'Διαθεσιμότητα 24/7',
  'service.emergency.2': 'Επισκευή σπασμένου σωλήνα',
  'service.emergency.3': 'Πρόληψη πλημμύρας',
  'service.emergency.4': 'Διακοπές έκτακτης ανάγκης',

  // Not Found Page
  'notfound.title': '404',
  'notfound.message': 'Ουπς! Η σελίδα δεν βρέθηκε',
  'notfound.home': 'Επιστροφή στην Αρχική'
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const language: Language = 'GR';

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
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