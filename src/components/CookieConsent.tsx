import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }));
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-end justify-center p-4">
      <Card className="w-full max-w-2xl modern-card border-2 border-primary/20 animate-slide-up">
        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">
                {t('cookies.title') || 'Cookie Preferences'}
              </h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowBanner(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {t('cookies.description') || 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.'}
            </p>

            {showDetails && (
              <div className="space-y-4 p-4 bg-muted/30 rounded-xl border border-border/50">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Necessary Cookies</span>
                    <span className="text-sm text-muted-foreground">Always Active</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Essential for website functionality and security.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Analytics Cookies</span>
                    <span className="text-sm text-muted-foreground">Optional</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Marketing Cookies</span>
                    <span className="text-sm text-muted-foreground">Optional</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Used to deliver relevant advertisements and track campaign performance.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="hero" 
              onClick={handleAcceptAll}
              className="flex-1"
            >
              {t('cookies.acceptAll') || 'Accept All Cookies'}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleAcceptNecessary}
              className="flex-1"
            >
              {t('cookies.acceptNecessary') || 'Accept Necessary Only'}
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => setShowDetails(!showDetails)}
              className="sm:w-auto"
            >
              <Settings className="w-4 h-4 mr-2" />
              {showDetails ? 'Hide Details' : 'Customize'}
            </Button>
          </div>

          {showDetails && (
            <div className="pt-4 border-t border-border/50">
              <Button 
                variant="destructive" 
                onClick={handleReject}
                className="w-full"
                size="sm"
              >
                {t('cookies.reject') || 'Reject All Non-Essential'}
              </Button>
            </div>
          )}

          {/* Privacy Policy Link */}
          <div className="text-center pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              For more information, read our{' '}
              <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;