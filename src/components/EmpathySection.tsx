import React from "react";

const EmpathySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Ponte en los zapatos de cada uno de nuestros usuarios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
                alt="Experiencia de usuario"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-600">
                Comprende las experiencias diarias y los desafíos que enfrentan
                nuestras familias.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1517486430290-35657bdcef51?auto=format&fit=crop&q=80"
                alt="Apoyo comunitario"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-600">
                Descubre cómo nuestra comunidad trabaja junta para superar
                obstáculos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
