import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  MessageCircle, 
  Instagram, 
  Facebook 
} from 'lucide-react';

const ScheduleItem = ({ day, time, isClosed }) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-white/90 font-medium">{day}</span>
    {isClosed ? (
      <span className="text-[#fad51e] font-bold bg-[#fad51e]/10 px-2 py-0.5 rounded text-xs">Fechado</span>
    ) : (
      <span className="text-white/70 font-light">{time}</span>
    )}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#051160] text-white pt-16 pb-8 border-t border-[#000000]/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Marca */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-[#0c2091] shrink-0 shadow-lg">
                <img 
                            src="/header-logo.svg" 
                            alt="Logo Auto Escola" 
                            className="w-30 h-30 object-contain"
                            // Leve efeito de escala na logo ao carregar
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          />
              </div>
              <span className="text-2xl font-black tracking-tight text-white leading-tight">
                MR Rocha<br/>
                <span className="text-xs font-medium text-[#fad51e] uppercase tracking-widest">Auto Escola</span>
              </span>
            </div>
            <p className="text-white text-sm leading-relaxed font-light opacity-90">
              Formando condutores conscientes e seguros. A melhor estrutura e os melhores instrutores da Zona Norte para o seu aprendizado.
            </p>
          </div>

{/* --- Coluna 3: Horário (NOVO DESIGN) --- */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-bold uppercase tracking-wider text-[#fad51e] border-b border-[#fad51e]/20 pb-2 inline-block w-full">
              Horário de Atendimento
            </h3>
            
            <div className="flex flex-col gap-3">
              <ScheduleItem day="Segunda a Sexta" time="07:00 - 21:00" />
              <ScheduleItem day="Sábado" time="07:00 - 14:00" />
              <ScheduleItem day="Domingo" time="Fechado" isClosed />
            </div>
            
          </div>

          {/* Coluna 2: Navegação */}
          {/* <div className="flex flex-col gap-5">
            <h3 className="text-base font-bold uppercase tracking-wider text-[#fad51e]">Navegação</h3>
            <ul className="flex flex-col gap-3">
              {['Início', 'Cursos', 'Agendamento', 'Dúvidas Frequentes', 'Área do Aluno'].map((item) => (
                <li key={item}>
                  <a className="text-white hover:text-[#fad51e] hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2 group cursor-pointer" href="#">
                    <ChevronRight size={16} className="text-[#fad51e] opacity-50 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Coluna 3: Contato */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-bold uppercase tracking-wider text-[#fad51e]">Contato</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white">
                <MapPin className="text-[#fad51e] shrink-0 mt-0.5" size={18} />
                <span className="text-sm font-light">
                  Rua O Tempo e O Vento, n° 45<br/>
                  Anil, Rio de Janeiro - RJ
                  CEP: 22753-340
                </span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Phone className="text-[#fad51e] shrink-0" size={18} />
                <span className="text-sm font-light">(21) 96942-8303</span> /
                <span className="text-sm font-light">(21) 96579-3730</span> 
                
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail className="text-[#fad51e] shrink-0" size={18} />
                <span className="text-sm font-light">contato@mrrocha.com.br</span>
              </div>

            </div>
          </div>

          {/* Coluna 4: CTA & Social */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-[#000000]/80 border border-white/10 backdrop-blur-sm">
              <h3 className="text-base font-bold text-white">Matricule-se Online</h3>
              <p className="text-white text-xs mb-2">Tire suas dúvidas e inicie seu processo agora mesmo.</p>
              
              <a 
                href="https://wa.me/5521971388736" 
                target="_blank"
                className="flex items-center justify-center gap-2 bg-[#fad51e] hover:bg-white text-[#0c2091] font-black py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full"
              >
                <MessageCircle size={20} />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wider text-white font-bold">Outras redes</span>
              <div className="flex items-center gap-3">
                <a className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#fad51e] hover:text-[#0c2091] transition-all duration-300 cursor-pointer">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Separador */}
        <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-full mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 text-xs font-light text-white text-[14px]">
          <p className="text-center md:text-left">© 2026 Mr. Rocha Auto Escola. Todos os direitos reservados.</p>
          {/* <div className="flex flex-wrap justify-center gap-6">
            <a className="hover:text-[#fad51e] transition-colors cursor-pointer">Política de Privacidade</a>
            <a className="hover:text-[#fad51e] transition-colors cursor-pointer">Termos de Uso</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;