import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartPulse, ShieldCheck, Microscope, ChevronLeft, ChevronRight } from 'lucide-react';

import edu1 from '../assets/edu1.jpg';
import edu2 from '../assets/edu2.jpg';
import edu3 from '../assets/edu3.jpg';
import edu4 from '../assets/edu4.jpg';
import edu5 from '../assets/edu5.jpg';
import edu6 from '../assets/edu6.jpg';

const aboutImages = [
  edu1,
  edu2,
  edu3,
  edu4,
  edu5,
  edu6,
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image & Graphics */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative group shadow-2xl shadow-maroon/10">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={aboutImages[currentIndex]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40 hover:scale-110"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40 hover:scale-110"
              >
                <ChevronRight size={28} />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Overlays */}
              <div className="absolute inset-0 bg-maroon/5 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
            </div>

            {/* Minimalist Accent Box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cream rounded-[2rem] -z-10 shadow-inner" />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-4 translate-x-1/2 p-5 bg-maroon text-white rounded-3xl shadow-2xl z-20 hidden md:block"
            >
              <HeartPulse size={40} />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1"
          >
            <motion.h4 variants={itemVariants} className="text-maroon font-bold tracking-wider uppercase text-sm mb-4">
              Tentang Kami
            </motion.h4>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              Akses Edukasi CPR & RJP untuk <span className="text-maroon">Semua Kalangan</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-dark/70 text-lg mb-10 leading-relaxed max-w-xl">
              Evow Edumanequin merupakan inovasi produk Mannequin Resusitasi Jantung Paru (RJP) dan sarana pelatihan pertolongan pertama yang terjangkau. Kami merancang solusi ini agar edukasi keselamatan dapat dilakukan secara luas, mudah, dan efisien untuk masyarakat awam dan institusi.
            </motion.p>

            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex gap-5 items-start">
                <div className="mt-1 p-3 bg-cream rounded-2xl text-maroon shadow-sm shadow-maroon/5">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-dark text-xl mb-2">Visi Misi Utama</h5>
                  <p className="text-dark/60 leading-relaxed">Menjadi pelopor inovasi pelatihan keselamatan kesehatan dengan produk mannequin yang berkualitas tinggi demi menurunkan angka mortalitas akibat henti jantung.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-5 items-start">
                <div className="mt-1 p-3 bg-cream rounded-2xl text-maroon shadow-sm shadow-maroon/5">
                  <Microscope size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-dark text-xl mb-2">Sertifikasi & Legalitas Terjamin</h5>
                  <p className="text-dark/60 leading-relaxed">Sudah mengantongi sertifikat NIB yang dilindungi secara resmi oleh negara serta Hak Kekayaan Intelektual (HKI).</p>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
