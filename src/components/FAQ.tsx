import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Apakah mannequin Evow Edumanequin ini mudah digunakan oleh masyarakat awam?",
    answer: "Ya, sangat mudah. Mannequin ini dedesain khusus agar user friendly. Dilengkapi dengan panduan suara interaktif berbahasa Indonesia step-by-step yang sangat membantu pemula."
  },
  {
    question: "Apakah Evow Edumanequin telah memiliki legalitas dan sertifikasi?",
    answer: "Tentu. Evow Edumanequin telah memiliki legalitas usaha resmi Nomor Induk Berusaha (NIB) dan sertifikasi Hak Kekayaan Intelektual (HKI) dari pemerintah Indonesia."
  },
  {
    question: "Apakah ada garansi jika alat mengalami kendala?",
    answer: "Ya, kami berani menjamin kualitas. Setiap pembelian paket mannequin Evow Edumanequin dilengkapi dengan garansi hardware selama 12 bulan dan dukungan teknis online 24/7."
  },
  {
    question: "Apakah ini cocok untuk pelatihan massal di sekolah / perusahaan?",
    answer: "Sangat cocok! Mannequin dari Evow Edumanequin didesain ringkas, ringan, portabel, dan menggunakan material PVC Medical Grade yang tahan banting sehingga ideal untuk pemakaian berulang dalam grup pelatihan berskala besar."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Left Header */}
        <div className="lg:w-1/3">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-maroon font-bold tracking-wider uppercase text-sm mb-3"
          >
            Pertanyaan Yang Sering Ditanyakan
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight"
          >
            Punya <span className="text-maroon">Pertanyaan?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark/60 text-lg mb-8"
          >
            Temukan jawaban dari pertanyaan yang paling sering diajukan mengenai produk inovasi Evow Edumanequin.
          </motion.p>
        </div>

        {/* Right Accordion */}
        <div className="lg:w-2/3">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                  openIndex === idx ? 'border-maroon/30 shadow-md' : 'border-dark/5 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-dark text-lg pr-8">{faq.question}</span>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === idx ? 'bg-maroon text-white' : 'bg-cream text-maroon'
                    }`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-6 pt-0 text-dark/70 leading-relaxed border-t border-gray-100 mt-2">
                        <div className="pt-4">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
