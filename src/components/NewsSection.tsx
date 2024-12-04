import React from "react";

const NewsSection = () => {
  const news = [
    {
      image: "rifa.png",
      title: "¡Participa en la Rifa de la Fundación Apanines!",
      description:
        "Estamos rifando MUCHOS premios y tú puedes ser uno de los ganadores. 🏆🎁 ¡No te pierdas esta oportunidad de apoyar una causa que marca la diferencia!   📅 Fecha del sorteo: 30 de noviembre de 2024",
    },
    {
      image: "notice2.png",
      title: "Patagonien Quartett en concierto",
      description:
        "Ayer compartimos un mágico momento junto a los amigos de @patagonienquartett que nos regalaron una selección de piezas musicales desde vals, tango, polka, cumbia, emocionandonos con Te recuerdo Amanda de Victor Jara y cerrando con un clásico de Led Zeppeling. Sin duda un regalo para el alma. ",
    },
    {
      image: "notice3.png",
      title: "última sesion del taller de deporte",
      description:
        "Estamos en la última sesion del taller de deporte del año, nuestros agradecimientos a @complejodeportivomelisoccer por entregarnos esta oportunidad que tan bien hace a nuestros niños, niñas y jóvenes. Agradecimientos especiales a la profe Natalia Arancibia por su dedicación y amor entregado en cada sesión.    Nos vemos el próximo año...",
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
                <button className="text-custom-azul font-medium hover:text-custom-naranjo">
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
