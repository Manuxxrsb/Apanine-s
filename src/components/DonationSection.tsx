import React from "react";
import { Globe, BookOpen, Activity } from "lucide-react";

const DonationSection = () => {
  const causes = [
    {
      icon: <Globe className="h-12 w-12 text-rose-600" />,
      title: "Cambio climático y asuntos globales",
      description: "Trabajamos por un futuro sostenible e inclusivo.",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-rose-600" />,
      title: "Inclusión educativa",
      description: "Facilitamos el acceso a una educación de calidad.",
    },
    {
      icon: <Activity className="h-12 w-12 text-rose-600" />,
      title: "Servicios de rehabilitación",
      description: "Ofrecemos servicios especializados de rehabilitación.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tú puedes ayudar a un montón de familias con una pequeña donación
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 flex justify-center">{cause.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {cause.title}
              </h3>
              <p className="text-gray-600 text-center">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
