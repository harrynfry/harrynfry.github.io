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
    <div className="bg-grey text-black font-mono text-center py-2 z-50 border border-black bg-opacity-70">
      <p className='px-2'>Full mobile version coming soon!</p>
    </div>
  );
};
MobileAlert.displayName = 'MobileAlert';
export default MobileAlert;
