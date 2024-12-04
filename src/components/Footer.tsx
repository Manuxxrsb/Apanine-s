import React from "react";
import { Facebook, Twitter, Instagram, Heart } from "lucide-react";

const Pie = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Heart className="h-8 w-8 text-rose-600 mb-4" />
            <p className="text-gray-400">
              Brindando apoyo integral a familias en situación de discapacidad.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Autores
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Archivo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Pie;
