import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      // Animação de entrada: desliza de -100px para 0 e aumenta a opacidade
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo e Nome */}
        <div className="flex items-center gap-3">
          <motion.img 
            src="/header-logo2.svg" 
            alt="Logo Auto Escola" 
            className="w-20 h-20 object-contain"
            // Leve efeito de escala na logo ao carregar
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <h2 className="text-xl font-bold tracking-tight text-[#0B1F92]">Mr. Rocha</h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex gap-8">
            {['Início', 'Sobre', 'Cursos', 'Contato'].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                // Anima cada link individualmente com um pequeno atraso (stagger)
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-sm font-medium text-slate-600 hover:text-[#0B1F92] transition-colors relative group"
              >
                {item}
                {/* Linha animada no hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0B1F92] transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex md:hidden items-center justify-center p-2 text-slate-600"
        >
          <span className="material-symbols-outlined">menu</span>
        </motion.button>

      </div>
    </motion.header>
  );
};

export default Header;