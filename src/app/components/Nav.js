'use client';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="w-full flex justify-center py-8 px-16">
      <ul className="flex list-none text-xl gap-5 md:gap-8 md:text-2xl lg:gap-16 lg:text-3xl ">
        <li className="font-mono underline hover:text-shadow">
          <Link href="/">Home</Link>
        </li>
        <li className="font-mono underline hover:text-shadow"> 
        <Link href="/about">About</Link>
        </li>
        <li className="font-mono underline hover:text-shadow">
        <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

Nav.displayName = 'Nav';

export default Nav;
