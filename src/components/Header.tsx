import React from "react";
import { Facebook, Twitter, Instagram, Heart } from "lucide-react";

const Cabeza = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-center w-full py-4 space-x-4 border-b">
        {/* Top bar with social icons */}
        <div className="flex-shrink-0 ">
          <img src="/logoapanines.svg" alt="Logo de la Fundación Apanines" className="h-16 w-auto" />
        </div>
        <div className="flex py-4 space-x-2 border-b">
          <a href="#" className="ml-5 pt-3 text-gray-600 hover:text-blue-600">
            <Facebook size={18} />
          </a>
          <a href="#" className="ml-5 pt-3 text-gray-600 hover:text-blue-400">
            <Twitter size={18} />
          </a>
          <a href="#" className="ml-5 pt-3 text-gray-600 hover:text-pink-600">
            <Instagram size={18} />
          </a>
        </div>
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-5 ">
            <a
              href="#"
              className="ml-5 text-gray-700 hover:text-custom-naranjo font-medium"
            >
              Nuestra causa
            </a>
            <a
              href="#"
              className="ml-5 text-gray-700 hover:text-custom-naranjo font-medium"
            >
              Qué hacemos
            </a>
            <a
              href="#"
              className="ml-5 text-gray-700 hover:text-custom-naranjo font-medium"
            >
              Cómo ayudar
            </a>
            <a
              href="#"
              className="ml-5 text-gray-700 hover:text-custom-naranjo font-medium"
            >
              Noticias
            </a>
            <a
              href="#"
              className="ml-5 text-gray-700 hover:text-custom-naranjo font-medium"
            >
              Galería
            </a>
          </nav>

          {/* Donate button */}
          <a
            target="_blank"
            href="https://www.flow.cl/app/web/pagarBtnPago.php?token=0d47ixi&fbclid=IwZXh0bgNhZW0CMTAAAR1Clogr-Yyl2eRTsuISRwpitSvmBJ1NqlZ8pLCFp7jpFJPCrh2lCQFqCcs_aem_F3-4dtgYxfAyw6NcxovSdQ"
          >
            <button className="ml-5 bg-custom-celeste text-white px-6 py-2 rounded-full font-medium hover:bg-custom-naranjo transition-colors">
              Donar
            </button>
          </a>
          
        </div>
      </div>
    </header>
  );
};

export default Cabeza;
