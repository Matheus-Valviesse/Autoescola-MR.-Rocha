import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Bike, ShieldCheck, Star, MousePointerClick, CheckCircle2 } from 'lucide-react';

import plansData from '../data/plans.json';
console.log(plansData)
const categories = [
  { id: 'cat-b', label: 'Carro (B)', icon: Car },
  { id: 'cat-a', label: 'Moto (A)', icon: Bike },
  { id: 'cat-ab', label: 'Carro e Moto (AB)', icon: ShieldCheck },
  { id: 'add-b', label: 'Adição B', icon: Car },
  { id: 'add-a', label: 'Adição A', icon: Bike },
];



const PlanosSection = () => {
  const [activeTab, setActiveTab] = useState('cat-b');

  const getParcela = (totalString, numParcelas) => {
    const total = parseFloat(totalString.replace('.', '').replace(',', '.'));
    const parcela = total / numParcelas;
    return parcela.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handlePlanClick = (planName) => {
    const categoryLabel = categories.find(c => c.id === activeTab)?.label;
    const message = `Olá! Vim pelo site da Mr. Rocha. Gostaria de saber mais sobre o plano *${planName}* de *${categoryLabel}*.`;
    const link = `https://wa.me/5521971388736?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };

  return (
    <section className="w-full py-24 px-4 bg-white" id="planos">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0B1F92] font-bold text-xs uppercase tracking-widest"
          >
            Tabela de Preços
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-[#000000]">
            Sua CNH com planos que <br /> <span className="text-[#0B1F92]">cabem no bolso</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Selecione a categoria e descubra o pacote ideal para sua necessidade.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories?.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                activeTab === cat.id 
                  ? 'bg-[#0B1F92] text-white shadow-xl shadow-blue-200 scale-105' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
              }`}
            >
              <cat.icon size={20} className={activeTab === cat.id ? 'text-[#f9f91f]' : 'text-slate-400'} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Plan Grid */}
        <AnimatePresence mode='wait'>
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plansData[activeTab]?.map((plan, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col bg-white rounded-[2.5rem] p-8 transition-all duration-500 border-2 ${
                  plan.highlight 
                    ? 'border-[#0B1F92] shadow-2xl scale-105 z-10' 
                    : 'border-slate-50 shadow-sm hover:border-slate-200'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#f9f91f] text-[#000000] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <Star size={14} fill="currentColor" /> O mais procurado
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-black text-[#000000] mb-6">{plan.name}</h3>
                  
                  {/* Preço Box */}
                  <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">À Vista</p>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-lg font-bold text-[#0B1F92]">R$</span>
                      <span className="text-5xl font-black tracking-tighter text-[#000000]">{plan.priceCash}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-500">
                        Ou em até <span className="font-bold text-[#000000]">{plan.installments}x</span> de:
                      </p>
                      <p className="text-2xl font-black text-[#0B1F92]">R$ {getParcela(plan.priceInstallment, plan.installments)}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex-grow space-y-4 mb-10">
                  {plan.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                      <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handlePlanClick(plan.name)}
                  className={`group w-full py-5 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-center gap-3 ${
                  plan.highlight
                    ? 'bg-[#f9f91f] text-[#000000] hover:bg-[#eaea0c] shadow-xl shadow-yellow-100'
                    : 'bg-[#000000] text-white hover:bg-[#0B1F92]'
                }`}>
                  QUERO ME MATRICULAR
                  <MousePointerClick size={18} className="transition-transform group-hover:scale-125" />
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            * Valores referentes aos serviços de ensino da Auto Escola. <br />
            ** Não inclusos: Taxas do DETRAN (DUDA), exames médicos/psicotécnicos e cursos teóricos obrigatórios.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PlanosSection;