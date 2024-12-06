import React from "react";
import { Users, User, House } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: <User className="h-8 w-8 text-blue-600" />,
      title: "Terapias Individuales",
      description:
        "Cada persona es única, por eso nuestros tratamientos son personalizados. Contamos con un equipo de profesionales en fonoaudiología, terapia ocupacional y kinesiología que te acompañarán en todo momento, diseñando un plan de rehabilitación adaptado a tus necesidades específicas.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Talleres grupales",
      description:
        "Ofrecemos talleres grupales diseñados para fortalecer el vínculo entre cuidadores y niños, promoviendo el aprendizaje, desarrollo y bienestar de ambos.",
    },
    {
      icon: <House className="h-8 w-8 text-blue-600" />,
      title: "Proyectos futuros",
      description:
        "Construyamos juntos el futuro de nuestra comunidad! Te invitamos a participar en la construcción de un nuevo centro.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
