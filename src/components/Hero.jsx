import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineVerified } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative pt-10 pb-20 lg:pt-24 lg:pb-32 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Conteúdo de Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0B1F92] w-fit mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-[16px]">
                <MdOutlineVerified />
              </span>
              <span>Matrículas Abertas 2026</span>
            </div>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
              Mr. Rocha Auto Escola: Dirija com 
              <span className="relative whitespace-nowrap text-[#0B1F92] ml-2">
                Confiança
                <svg className="absolute -bottom-2 left-0 h-3 w-full text-[#fad51e]" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                </svg>
              </span> 
              <br /> e Segurança
            </h1>

            <p className="mx-auto lg:mx-0 max-w-lg text-lg text-slate-600 sm:text-xl">
              Instrutores qualificados e frota moderna para sua aprovação rápida. Comece sua jornada rumo à habilitação hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#fad51e] px-8 text-base font-bold text-[#000000] transition-all hover:scale-[1.02] shadow-lg shadow-yellow-200">
                <FaWhatsapp className='w-8 h-8' />
                <span>Quero me Matricular</span>
              </button>
            </div>
          </motion.div>

          {/* Imagem com Badge Flutuante */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -right-20 -top-20 -z-10 h-[400px] w-[400px] rounded-full bg-blue-50 blur-3xl lg:h-[600px] lg:w-[600px]"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-900/5 bg-slate-100 aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop" 
                alt="Aula de direção" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-auto bg-white/95 backdrop-blur shadow-lg rounded-xl p-4 flex items-center gap-4 max-w-xs ring-1 ring-black/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#000000]">Aprovação Garantida</p>
                  <p className="text-xs text-slate-500">Método de ensino exclusivo</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;