'use client';
import Image from "next/image";

const PersonalBanner = () => {
  return (
    <personalbanner>
  <div className="flex items-center justify-center pt-10">
    <div className="px-6 w-full flex flex-col items-center md:flex-row md:justify-between font-mono md:max-w-3xl lg:max-w-4xl">
      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-6xl lg:text-7xl">Harry Fry</h1>
        <div className="flex mt-4 space-x-4 justify-center md:justify-start">
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
      </div>
      <div className="lg:w-48 lg:h-48 mt-6 md:mt-0">
        <Image
          className="rounded-full aspect-square object-cover"
          src="/images/IMG_5973.JPG"
          alt="Image of Harry"
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  </div>
</personalbanner>

  );
}

PersonalBanner.displayName = 'PersonalBanner';

export default PersonalBanner;
