'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black shadow-lg p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white">
              <span className="sr-only">Abrir menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/1280px-SpaceX-Logo.svg.png" alt="" className='w-[20vh]' />
            </div>
            <div className="ml-10 space-x-4 hidden sm:block ">
              <Link href="/" className="text-white hover:text-indigo-800 transition-all duration-200">
                Inicio
              </Link>
              <Link href="/planets" className="text-white hover:text-indigo-800 transition-all duration-200">
                Planetas
              </Link>
              <Link href="/about" className="text-white hover:text-indigo-8000 transition-all duration-200">
                Acerca de
              </Link>
              <Link href="/contact" className="text-white hover:text-indigo-800 transition-all duration-200">
                Contacto
              </Link>
            </div>
          </div>


          <div className="sm:block sm:ml-6 ">
            <button className="bg-indigo-800 text-white px-6 py-2 rounded-sm hover:bg-gradient-to-l hover:from-indigo-800 hover:to-black transition-all duration-200 transform hover:scale-105">
              CONTACTA A NUESTRA AGENCIA EXPLORADORA
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
