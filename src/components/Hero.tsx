import React from "react";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80",
  ];

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[0]}
          alt="Personas ayudándose mutuamente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">Juntos cambiamos vidas</h1>
          <p className="text-xl">
            Ofrecemos un apoyo integral para las familias en situación de
            discapacidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;