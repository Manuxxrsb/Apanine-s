import React from "react";

const WhySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Descubre el porqué marcamos la diferencia
            </h2>
            <p className="text-gray-600 mb-6">
              La Fundación Apanines comenzó en 2008 como una agrupación informal
              de padres que buscaban apoyo para sus hijos en situación de
              discapacidad. En 2012, se constituyó formalmente como fundación,
              lo que impulsó el proyecto debido a las limitadas opciones de
              apoyo en la comuna de Melipilla. La fundación ha crecido desde
              entonces y actualmente atiende a 52 familias con necesidades
              especiales.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Nuestra misión</h3>
            <p className="text-gray-600">
              Brindar un espacio de desarrollo y contención para niños, niñas y
              jóvenes con discapacidad cognitiva y sus familias, especialmente
              aquellos de escasos recursos, ofreciendo apoyo integral en las
              áreas de educación, salud y desarrollo social. Nos comprometemos a
              mejorar su calidad de vida y fomentar su inclusión plena en la
              sociedad, con servicios accesibles y personalizados que promuevan
              su autonomía y bienestar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
