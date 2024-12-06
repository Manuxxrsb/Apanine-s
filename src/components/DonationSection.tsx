import React from "react";
import { BookHeart, HandHeart, Heart } from "lucide-react";

const DonationSection = () => {
  const causes = [
    {
      icon: <BookHeart className="h-12 w-12 text-blue-600" />,
      title: "Inclusión educativa",
      description: "Facilitamos el acceso a una educación de calidad.",
    },
    {
      icon: <HandHeart className="h-12 w-12 text-blue-600" />,
      title: "Ambiente Familiar",
      description: "Ofrecemos servicios especializados de rehabilitación.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-12 max-w-2xl">
          Tú puedes ayudar a un montón de familias con una pequeña donación
        </h2>
        <div className="grid md:grid-cols-2 gap-8 justify-items-center max-w-4xl">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-xs"
            >
              <div className="mb-6 flex justify-center">{cause.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {cause.title}
              </h3>
              <p className="text-gray-600 text-center">{cause.description}</p>
            </div>
          ))}
        </div>
        <a
          target="_blank"
          href="https://www.flow.cl/app/web/pagarBtnPago.php?token=0d47ixi&fbclid=IwY2xjawG9YxhleHRuA2FlbQIxMAABHRmsDnV-WzT2cmA0D4qsN6PYWqlyvClTiiyfJidMntMhRBDt1kenbWX_mg_aem_IXHzzLR2h_vv4SfvC8ziwg"
        >
          <button className="bg-custom-celeste mt-12 text-white font-bold px-6 py-2 rounded-lg hover:bg-custom-naranjo transition-colors">
            Dona Aqui
          </button>
        </a>
      </div>
    </section>
  );
};

export default DonationSection;
