import React from 'react';
import { motion } from 'framer-motion';
import { IoStar } from "react-icons/io5";

const stats = [
  { label: 'Alunos Formados', value: '1200+' },
  { label: 'Anos de Mercado', value: '3' },
  { label: 'Taca de aprovação', value: '76%' },
  { label: 'Nota no Google', value: '4.9/5' }, // Alterado conforme solicitado
];

const Stats = () => {
  return (
    <section className="border-y border-slate-100 bg-[#0c2091]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-1 text-center"
            >
              <dt className="text-sm font-medium text-slate-400">
                {stat.label}
              </dt>
              <dd className="text-3xl font-black text-white">
                {stat.value}
              </dd>
              {/* Estrelas apenas para a nota do Google */}
              {stat.label === 'Nota no Google' && (
                <div className="flex text-yellow-400">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;