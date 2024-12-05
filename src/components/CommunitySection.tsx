import React from "react";

const CommunitySection = () => {
  return (
    <section className="py-16 bg-custom-verde text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Únete a nosotros y descubre nuestra familia
        </h2>
        <div className="mb-8">
          <span className="text-6xl font-bold">122,098+</span>
          <p className="text-xl mt-2">Familias ayudadas</p>
        </div>
        <button className="bg-white text-custom-azul px-8 py-3 rounded-lg font-medium hover:bg-custom-naranjo transition-colors">
          Únete
        </button>
      </div>
    </section>
  );
};

export default CommunitySection;
