import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Store, 
  Clock, 
  Navigation, 
  Phone, 
  MessageCircle 
} from 'lucide-react';

import { FaWhatsapp } from "react-icons/fa";

const LocationSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-[#f8f8f5] " id="contato">
      <div className="max-w-[1200px] mx-auto border border-slate-200  rounded-[2.5rem]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-black/5 lg:grid lg:grid-cols-2"
        >
          
          {/* --- Coluna Esquerda: Detalhes do Endereço --- */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-100">
            <div className="mb-6 w-fit">
              <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
                <MapPin className="text-[#0B1F92]" size={18} />
                <h4 className="text-sm font-black tracking-wide uppercase text-[#0B1F92]">Onde Estamos</h4>
              </div>
            </div>
            
            <h2 className="mb-8 text-3xl font-black leading-tight text-[#000000] lg:text-4xl">
              Venha nos visitar na <br />
              <span className="text-[#0B1F92]">Zona Norte</span>
            </h2>
            
            <div className="space-y-8">
              {/* Endereço */}
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0B1F92]">
                  <Store size={26} />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-black text-[#000000]">Nossa Unidade</h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    Rua O Tempo e O Vento, n° 45<br/>
                    Anil, Rio de Janeiro - RJ<br/>
                    CEP: 22753-340
                  </p>
                </div>
              </div>
              
              {/* Horário */}
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0B1F92]">
                  <Clock size={26} />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-black text-[#000000]">Horário de Atendimento</h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    Segunda a Sexta: 07:00 às 21:00<br/>
                    Sábado: 07:00 às 14:00
                  </p>
                </div>
              </div>

              {/* Telefones / Contato */}
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0B1F92]">
                  <Phone size={26} />
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-black text-[#000000]">Telefones</h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    (21) 96942-8303<br/>
                    (21) 96579-3730
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5521969428303" 
                target="_blank" 
                className="group flex flex-1 items-center justify-center gap-3 rounded-2xl  px-6 py-2 text-base font-black text-[#0b1f92] transition-all hover:bg-[#0b1f92] hover:text-white  active:scale-95 border-4 border-[#0b1f92] hover:scale-[1.1]"
              >
                <FaWhatsapp className='w-8 h-8' />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://www.google.com/maps/place/Autoescola+Mr+Rocha/@-22.9645795,-43.3390867,17z/data=!3m1!4b1!4m6!3m5!1s0x9bd9299b397579:0xfa29f5b7bb31ee7e!8m2!3d-22.9645845!4d-43.3365118!16s%2Fg%2F11vrdwvtm1?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#0B1F92] px-6 py-2 text-base font-black text-white transition-all hover:opacity-80 hover:shadow-lg active:scale-95 border-4 border-[#0b1f92] hover:scale-[1.1]"
              >
                <span>Traçar Rota</span>
                <Navigation size={20}  />
              </a>
            </div>
          </div>

          {/* --- Coluna Direita: Google Maps Iframe --- */}
          <div className="relative min-h-[400px] w-full bg-slate-100 lg:min-h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.610172650706!2d-43.33908672393165!3d-22.964579539940406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd9299b397579%3A0xfa29f5b7bb31ee7e!2sAutoescola%20Mr%20Rocha!5e0!3m2!1spt-PT!2sbr!4v1770270160436!5m2!1spt-PT!2sbr"
              className="absolute inset-0 h-full w-full grayscale-[20%] contrast-[1.1] opacity-90"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Mr. Rocha Auto Escola"
            />
            {/* Overlay sutil para manter o estilo da página */}
            <div className="absolute inset-0 pointer-events-none bg-[#0B1F92]/5"></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;