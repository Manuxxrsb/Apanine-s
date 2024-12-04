import { Icon, User } from "lucide-react";
import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      cita: "El apoyo de Apanines ha sido fundamental para nuestra familia.",
      nombre: "María González",
      rol: "Madre de familia",
    },
    {
      cita: "Gracias a los programas, hemos visto un gran progreso.",
      nombre: "Carlos Ruiz",
      rol: "Padre de familia",
    },
    {
      cita: "La fundación nos ha dado esperanza y herramientas.",
      nombre: "Ana Martínez",
      rol: "Madre de familia",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Socios dicen...</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">"{testimonial.cita}"</p>
              <div>
                <p className="font-semibold">{testimonial.nombre}</p>
                <p className="text-gray-500 text-sm">{testimonial.rol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
