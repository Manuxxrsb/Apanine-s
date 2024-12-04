import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "El apoyo de Apanines ha sido fundamental para nuestra familia.",
      author: "María González",
      role: "Madre de familia",
    },
    {
      quote: "Gracias a los programas, hemos visto un gran progreso.",
      author: "Carlos Ruiz",
      role: "Padre de familia",
    },
    {
      quote: "La fundación nos ha dado esperanza y herramientas.",
      author: "Ana Martínez",
      role: "Madre de familia",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Definiendo nuestro Propósito, Misión y Meta
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Welcome to the Culture section of our news, where we explore the
            latest trends and topics in our community.
          </p>
          <button className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors">
            Leer más
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
