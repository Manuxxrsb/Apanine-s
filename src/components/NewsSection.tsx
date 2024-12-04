import React from "react";

const NewsSection = () => {
  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80",
      title: "Nuevo programa de apoyo familiar",
      description:
        "Lanzamos una nueva iniciativa para brindar más apoyo a las familias.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80",
      title: "Evento benéfico anual",
      description: "Únete a nuestro evento benéfico para recaudar fondos.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80",
      title: "Historias de éxito",
      description: "Conoce las historias inspiradoras de nuestras familias.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mantente informado con nuestras noticias más recientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-rose-600 font-medium hover:text-rose-700">
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
