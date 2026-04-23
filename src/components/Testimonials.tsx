import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="urgency" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Decorative large quote mark (repurposed for visual weight) */}
      <div className="absolute -top-10 -left-10 text-white/5 pointer-events-none">
        <Quote size={300} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-maroon font-bold tracking-widest uppercase text-sm mb-3"
          >
            Urgensi Keselamatan
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Mengapa Edukasi RJP <span className="text-maroon">Sangat Krusial?</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-center text-center justify-center pt-8"
              >
                <div className="w-16 h-1 bg-maroon mb-10 rounded-full" />
                <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 max-w-4xl text-balance">
                  "Darurat jantung dapat terjadi kapan saja dan di mana saja. Mengingat <span className="text-maroon font-bold">70% kondisi henti jantung mendadak</span> terjadi di luar fasilitas medis, wawasan Resusitasi Jantung Paru (RJP) bukan lagi dominasi tenaga kesehatan, melainkan wawasan hidup mati yang wajib dimiliki oleh setiap elemen masyarakat."
                </p>
                <div className="w-16 h-1 bg-maroon mt-4 mb-10 rounded-full" />
                
                <p className="text-white/70 max-w-2xl text-lg font-light">
                   Kesiapsiagaan penolong pertama di lokasi kejadian adalah persentase terbesar peluang seseorang untuk selamat dari maut.
                </p>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
