import { motion } from 'motion/react';
import { Stethoscope, Activity, ClipboardPlus, PlusSquare, Crosshair, Users } from 'lucide-react';

const features = [
  {
    icon: <Users size={28} />,
    title: "Simulasi CPR Realistis",
    desc: "Mannequin dirancang secara proporsional menyerupai anatomi dada manusia dewasa."
  },
  {
    icon: <Activity size={28} />,
    title: "Panduan Suara Interaktif",
    desc: "Sistem audio built-in memberikan instruksi pertolongan langkah demi langkah agar tindakan tetap sesuai durasi yang tepat."
  },
  {
    icon: <ClipboardPlus size={28} />,
    title: "Indikator Visual Real-time",
    desc: "Lampu indikator presisi memberikan umpan balik instan apabila rjp ditekan dengan kedalaman dan frekuensi yang benar."
  },
  {
    icon: <PlusSquare size={28} />,
    title: "Material Presisi",
    desc: "Terbuat dari bahan PVC Medical Grade dan Silikon yang tahan banting serta elastis selama di tekan."
  },
  {
    icon: <Crosshair size={28} />,
    title: "Portabel & Fleksibel",
    desc: "Mudah dibawa dan cocok untuk dilakukan secara indoor maupun outdoor untuk berbagai simulasi kecelakaan."
  },
  {
    icon: <Stethoscope size={28} />,
    title: "Harga Ekonomis",
    desc: "Kami membuktikan bahwa media edukasi RJP berkualitas internasional kini tidak harus memakan biaya mahal."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-maroon font-bold tracking-wider uppercase text-sm mb-3"
          >
            Core Competencies
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-dark mb-4"
          >
            Comprehensive <span className="text-maroon">Training Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-dark/60 text-lg"
          >
            Equipping your faculty and students with the most versatile simulation tools available in modern healthcare education.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="card p-8 rounded-[2rem] group cursor-default"
            >
              <div className="w-14 h-14 bg-cream text-maroon rounded-2xl flex items-center justify-center mb-6 group-hover:bg-maroon group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-dark/60 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
