import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Lucas Mendes",
    category: "Categoria B",
    text: "A auto escola foi incrível! Os instrutores são muito pacientes e a metodologia de ensino é moderna. Passei de primeira e me sinto muito seguro dirigindo.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Fernanda Souza",
    category: "Categoria A",
    text: "Melhor escolha que fiz. O atendimento é rápido e os carros são novos. Recomendo para todos que querem tirar a habilitação sem estresse.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Roberto Lima",
    category: "Categoria A+B",
    text: "Profissionalismo total. Desde a matrícula até o exame prático, fui muito bem assessorado. Obrigado equipe pelo apoio em todas as etapas!",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const GoogleReviews = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-[#0B1F92] pl-6"
        >
          <h2 className="text-[#0B1F92] text-3xl md:text-4xl font-black uppercase tracking-tight">
            O que dizem nossos alunos
          </h2>
          <p className="text-slate-500 text-lg mt-2 font-medium">
            Confira como a nossa metodologia tem ajudado centenas de novos motoristas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col p-8 bg-[#f8f8f5] rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 italic flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full ring-2 ring-[#0B1F92]" />
                <div>
                  <p className="text-[#000000] font-black text-lg leading-tight">{review.name}</p>
                  <p className="text-[#0B1F92] text-sm font-bold uppercase">{review.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;