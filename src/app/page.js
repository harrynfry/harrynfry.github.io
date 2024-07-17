export default function Home() {
  return (
    <main>
      <div className="px-16 pt-6 font-mono">
        <p className="text-center text-xl">
          A recent graduate of Solent University, earning a First Class degree with Honours in BSc Computing. 
        </p>
      </div>
      <div className="px-16 pt-10 font-mono text-center underline hover:italic hover:font-bold hover:no-underline text-xl hover:text-shadow">
        <a href="/docs/Harry Fry Curriculum Vitae.pdf" target="_blank" rel="noopener noreferrer" download={"HarryFryCV"}>
          Download my CV!
        </a>
      </div>
    </main>
    
  );
}
