import React, { useState } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    // Logic for accepting the policy (e.g., store in localStorage or send data to backend)
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <p>
        Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Lesen Sie mehr in unserer 
        <a href="/privacy-policy">Datenschutzerklärung</a>.
      </p>
      <button onClick={handleAccept}>Akzeptieren</button>
    </div>
  );
};

export default CookieConsent;
