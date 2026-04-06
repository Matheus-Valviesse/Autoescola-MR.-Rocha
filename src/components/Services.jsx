import React, { useState, useEffect } from 'react';
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
  const [plansData, setPlansData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_LINK;
        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados da planilha.');
        }

        const rawData = await response.json();
        
        const grouped = {};
        
        const formatCurrency = (value) => {
          if (!value) return "0,00";
          const stringValue = String(value); 
          const num = parseFloat(stringValue.replace(',', '.'));
          return isNaN(num) ? "0,00" : num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        rawData.forEach((row) => {
          if (!grouped[row.id_categoria]) {
            grouped[row.id_categoria] = [];
          }

          grouped[row.id_categoria].push({
            name: row.nome_plano,
            priceCash: formatCurrency(row.preco_a_vista),
            priceInstallment: formatCurrency(row.preco_parcelado),
            installmentsText: row.qtd_parcelas,
            highlight: row.destaque === 'V',
            features: row.beneficios ? row.beneficios.split('|').map(item => item.trim()) : []
          });
        });

        setPlansData(grouped);
      } catch (err) {
        console.error("Erro na API:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []);

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
              disabled={isLoading}
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

{isLoading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-[#0B1F92] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#0B1F92] font-bold animate-pulse">Carregando planos atualizados...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-red-50 rounded-2xl">
            <p className="text-red-500 font-bold mb-2">Ops! Tivemos um problema ao carregar os planos.</p>
            <p className="text-slate-500 text-sm">Por favor, atualize a página ou tente novamente mais tarde.</p>
          </div>
        ) : (
          /* Plan Grid */
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {plansData[activeTab]?.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col bg-white rounded-[2rem] p-6 transition-all duration-500 border-2 ${
                    plan.highlight 
                      ? 'border-[#0B1F92] shadow-2xl scale-105 z-10' 
                      : 'border-slate-50 shadow-sm hover:border-slate-200'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f9f91f] text-[#000000] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
                      <Star size={12} fill="currentColor" /> Destaque
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-black text-[#000000] mb-4">{plan.name}</h3>
                    
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">À Vista</p>
                      <div className="flex items-baseline gap-1 mb-3">
                        <span className="text-base font-bold text-[#0B1F92]">R$</span>
                        <span className="text-4xl font-black tracking-tighter text-[#000000]">{plan.priceCash}</span>
                      </div>
                      
                      <div className="pt-3 border-t border-slate-200">
                        <p className="text-[11px] text-slate-500 font-medium mb-1">
                          A Prazo (Total: R$ {plan.priceInstallment})
                        </p>
                        <p className="text-[13px] font-bold text-[#0B1F92] leading-tight">
                          {plan.installmentsText}
                        </p>
                      </div>
                    </div>
                  </div>

                  <ul className="flex-grow space-y-3 mb-8">
                    {plan.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-medium leading-tight">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handlePlanClick(plan.name)}
                    className={`group w-full py-4 rounded-xl font-black text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? 'bg-[#f9f91f] text-[#000000] hover:bg-[#eaea0c] shadow-xl shadow-yellow-100'
                      : 'bg-[#000000] text-white hover:bg-[#0B1F92]'
                  }`}>
                    ME MATRICULAR
                    <MousePointerClick size={16} className="transition-transform group-hover:scale-125" />
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

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