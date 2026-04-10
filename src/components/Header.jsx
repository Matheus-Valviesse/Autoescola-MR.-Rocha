import React,{useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', id: 'inicio' },
    { name: 'Planos', id: 'planos' }, 
    { name: 'Avaliações', id: 'avaliacoes' }, 
    { name: 'Localização', id: 'localizacao' } 
  ];

  const scrollToSection = (e, targetId) => {
    e.preventDefault(); 

    setIsMobileMenuOpen(false);
    
    setTimeout(() => {

      const element = document.getElementById(targetId);
    
      if (element) {
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }

    },100)
    
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo e Nome */}
        <div className="flex items-center gap-3">
          <motion.img 
            src="/header-logo.svg" 
            alt="Logo Auto Escola" 
            className="w-20 h-20 object-contain"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <h2 className="text-xl font-bold tracking-tight text-[#0B1F92]">MR Rocha</h2>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex gap-8">
            {navItems?.map((item, index) => (
              <motion.a 
                key={item?.name}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-sm font-medium text-slate-600 hover:text-[#0B1F92] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0B1F92] transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden items-center justify-center p-2 text-slate-600"
        >
          <span className="material-symbols-outlined"><TiThMenu/></span>
        </motion.button>
        
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-base font-bold text-slate-600 hover:text-[#0B1F92] hover:bg-blue-50 px-4 py-3 rounded-xl transition-all"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};

export default Header;