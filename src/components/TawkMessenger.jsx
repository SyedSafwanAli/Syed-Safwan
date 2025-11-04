import React, { useEffect } from 'react';

const TawkMessenger = () => {
  useEffect(() => {
    // 1. Check if the script has already been loaded to prevent duplicates
    if (!document.getElementById('tawk-script')) {
      // 2. Your specific Tawk.to script details (from your second code block)
      const TAWK_PROPERTY_ID = '69028218e75723194d8e64b7';
      const TAWK_WIDGET_ID = '1j8osobus';
      const TAWK_SRC = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;

      // 3. Create the script element
      const s1 = document.createElement('script');
      s1.id = 'tawk-script'; // Assign an ID to check for it later
      s1.type = 'text/javascript';
      s1.async = true;
      s1.src = TAWK_SRC;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');

      // 4. Find the first existing script element (s0)
      const s0 = document.getElementsByTagName('script')[0];

      // 5. Insert the new Tawk.to script before the existing one
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      } else {
        // Fallback if no scripts are found (less common)
        document.body.appendChild(s1);
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // This component doesn't render any visible UI element directly
  return null;
};

export default TawkMessenger;
