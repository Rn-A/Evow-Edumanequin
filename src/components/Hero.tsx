import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

const bannerImages = [
  "/src/assets/banner1.jpg",
  "/src/assets/banner2.jpg",
  "/src/assets/banner3.jpg",
  "/src/assets/banner4.jpg",
  "/src/assets/banner5.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
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

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      {/* Background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-maroon/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex gap-4 items-center bg-white rounded-2xl py-2 px-4 shadow-sm border border-black/5 mb-8 w-fit mx-auto md:mx-0">
              <img src="/src/assets/kemendikbud.jpg" alt="UMP" className="h-10 object-contain" />
              <div className="w-[1px] h-8 bg-gray-200"></div>
              <img src="/src/assets/ump.png" alt="Dikti" className="h-10 object-contain" />
              <div className="w-[1px] h-8 bg-gray-200"></div>
              <div className="font-bold text-blue-600 tracking-tight flex items-center justify-center">
                <img src="/src/assets/kbmk.png" alt="Dikti" className="h-10 object-contain" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 text-dark text-balance">
              Evow Edumanequin: Inovasi Alat Edukasi RJP untuk <br />
              <span className="text-dark">Indonesia Tanggap Darurat</span>
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 text-balance leading-relaxed">
              Latih keterampilan Resusitasi Jantung Paru (RJP) dengan alat edukatif yang murah, akurat, dan mudah diakses. Mempersiapkan masyarakat agar sigap menyelamatkan nyawa sejak dini.
            </p>

            <div className="flex items-center gap-6 mt-6 md:justify-start justify-center">
              <a href="#" className="flex items-center gap-2 text-sm text-dark/70 hover:text-maroon transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                evowedumanequin.official
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-dark/70 hover:text-maroon transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
                Evowedumanequin.Store
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-dark/70 hover:text-maroon transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                evowedumanequin
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Illustration/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative w-full max-w-lg md:max-w-none"
        >
          {/* Main Slide Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="aspect-[16/10] bg-white rounded-3xl shadow-2xl shadow-dark/10 overflow-hidden relative group">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={bannerImages[currentIndex]}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
              >
                <ChevronRight size={24} />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {bannerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>

          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-maroon/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
