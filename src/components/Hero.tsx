import React from "react";

const Hero = () => {
  const images = ["front.png"];

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[0]}
          alt="Personas ayudándose mutuamente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
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
