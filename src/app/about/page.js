import Image from 'next/image';

const AboutPage = () => {
    return (
      <div className="pb-20">

        <div className="flex flex-col md:flex-row justify-center pt-2 px-8">
          <div className="md:w-6/12 px-6 py-6 bg-white bg-opacity-40 items-center justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none font-mono">
            <h1 className="font-mono text-xl text-center">About me</h1>
            <p>
              After leaving school I became an apprentice chef, completing my qualifications at Bournemouth & Poole College. After a decade of experience in award winning restaurants,
              I decided it was now or never to revisit my passion for tech and attempt to earn a degree. I graduated July 2024, attaining a First Class degree with Honours from Solent University.
            </p>
          </div>
          <div className="md:w-6/12 px-6 py-6 bg-white bg-opacity-40 flex items-center justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
            <Image
              className="ring-8 ring-gray-400 ring-opacity-85 rounded-full aspect-square object-cover"
              src="/images/B6813DA4-A169-40B4-8718-0B4625531B16.JPG"
              alt="Image of Harry"
              width={200}
              height={200}
              priority
            />        
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center py-2 px-8">
          <div className="md:w-6/12 px-6 py-6 bg-white bg-opacity-40 flex items-center justify-center rounded-b-xl order-2 md:order-1 md:rounded-l-xl md:rounded-br-none md:rounded-tr-none">
            <Image
              className="ring-8 ring-slate-500 ring-opacity-70 rounded-full aspect-square object-cover"
              src="/images/a5be72c6-9cc9-4523-93cd-adb9a652d62b.JPG"
              alt="Image of Harry"
              width={200}
              height={200}
              priority
            />        
          </div>
          <div className="md:w-6/12 px-6 py-6 bg-white bg-opacity-40 items-center justify-center rounded-t-xl order-1 md:order-2 md:rounded-r-xl md:rounded-tl-none font-mono">
            <h1 className="font-mono text-xl text-center">Interests</h1>
            <p>
              My main interests are in front-end development and user experience, I love seeing how client facing technologies can designed and applied, whilst being a part of researching design decisions!
              My free time is usually spent being active, playing football, tennis or golf, or spending time with friends. 
            </p>
          </div>
        </div>

      </div>
      
    );
};

export default AboutPage;
