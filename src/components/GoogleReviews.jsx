import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import commentsData from '../data/comments.json';

const TIMER_DURATION = 15000; // 20 segundos

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 3 >= commentsData.length ? 0 : prev + 3));
  }, []);

  // Função para voltar o slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(commentsData.length - 3, 0) : prev - 3));
  }, []);

 useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, TIMER_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex, nextSlide]);
  

const visibleReviews = commentsData.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-24 bg-slate-50 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header com Setas de Navegação */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border-l-8 border-[#0B1F92] pl-6"
          >
            <h2 className="text-[#000000] text-4xl font-black uppercase tracking-tight">
              Depoimentos <span className="text-[#0B1F92]">reais</span>
            </h2>
            <p className="text-slate-500 text-lg mt-2 font-medium">
              Nota 4.9/5 no Google Business
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            <button onClick={prevSlide} className="p-3 rounded-full border-2 border-slate-200 hover:border-[#0B1F92] hover:text-[#0B1F92] transition-all active:scale-90">
              <ChevronLeft size={28} />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full border-2 border-slate-200 hover:border-[#0B1F92] hover:text-[#0B1F92] transition-all active:scale-90">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Barra de Progresso (Sinalização de Tempo) */}
        <div className="w-full h-1.5 bg-slate-200 rounded-full mb-12 overflow-hidden">
          <motion.div 
            key={`progress-${currentIndex}`}
            className="h-full bg-[#0B1F92]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{duration: TIMER_DURATION / 1000, ease: "linear" }}
          />
        </div>

        {/* Cards com AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode='wait'>
            {visibleReviews.map((review, index) => (
              <motion.div 
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-8 bg-white rounded-[2.5rem] border border-slate-50 shadow-[0_20px_50px_rgba(11,31,146,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 relative group"
              >
                <Quote className="absolute top-6 right-8 text-slate-100 group-hover:text-blue-50 transition-colors" size={40} />
                
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 italic flex-grow relative z-10">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full ring-2 ring-[#0B1F92] object-cover" />
                  <div>
                    <p className="text-[#000000] font-black text-base">{review.name}</p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      <Star size={10} fill="currentColor" className="text-yellow-400" />
                      Avaliação no Google
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;