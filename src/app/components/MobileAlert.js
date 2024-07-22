'use client';
import { useEffect, useState } from 'react';

const MobileAlert = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-grey text-black font-mono text-center py-2 z-50 border border-black">
      <p>Fully compatible mobile version coming soon!</p>
    </div>
  );
};
MobileAlert.displayName = 'MobileAlert';
export default MobileAlert;
