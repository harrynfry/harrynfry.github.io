'use client';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0  text-black font-mono text-center py-4 shadow-md">
      <div className="w-full max-w-5xl mx-auto flex justify-center items-center space-x-8">

        <a href="https://www.linkedin.com/in/harrynfry/" target="_blank" rel="noopener noreferrer">
          <Image
            className="hover:opacity-75 transition-opacity duration-100"
            src="/images/LI.PNG"
            alt="LinkedIn Logo"
            width={50}
            height={50}
            priority
          />
        </a>

        <a href="https://github.com/harrynfry" target="_blank" rel="noopener noreferrer">
          <Image
            className="hover:opacity-75 transition-opacity duration-100"
            src="/images/GITHUB.PNG"
            alt="GitHub Logo"
            width={50}
            height={50}
            priority
          />
        </a>
      </div>
    </footer>
  );
}
Footer.displayName = 'Footer';
export default Footer;
