import { motion } from 'motion/react';
import { ArrowRight, Check, X, Star } from 'lucide-react';

const packages = [
  {
    image: "/assets/paket2.jpg",
    title: "Paket Basic",
    description: "Paket ideal untuk pelatihan dasar CPR di sekolah, komunitas, dan instansi dengan anggaran terbatas.",
    price: "900.000",
    features: [
      { name: "Phantom CPR Mannequin", included: true },
      { name: "Busa Kompresi", included: true },
      { name: "Adaptor Listrik 12V", included: true },
      { name: "Indikator Lampu LED", included: true },
      { name: "Panduan Suara", included: true },
      { name: "Pelatihan Penggunaan", included: true },
      { name: "Busa Kompresi Berkualitas Premium", included: false },
      { name: "Layar LCD Touchscreen", included: false },
      { name: "Tombol Fungsi Tambahan", included: false },
      { name: "Dukungan Teknis Prioritas", included: false },
    ],
    buttonText: "Pesan Paket Basic",
    buttonVariant: "secondary",
    popular: false,
  },
  {
    image: "/assets/paket1.jpg",
    title: "Paket Plus",
    description: "Paket lengkap dengan fitur premium untuk pelatihan profesional di rumah sakit, kampus, dan institusi kesehatan.",
    price: "1.600.000",
    features: [
      { name: "Phantom CPR Mannequin", included: true },
      { name: "Busa Kompresi Berkualitas Premium", included: true },
      { name: "Adaptor Listrik 12V", included: true },
      { name: "Layar LCD Touchscreen", included: true },
      { name: "Tombol Fungsi Tambahan", included: true },
      { name: "Indikator Lampu LED", included: true },
      { name: "Panduan Suara", included: true },
      { name: "Pelatihan Penggunaan", included: true },
      { name: "Dukungan Teknis Prioritas", included: true },
    ],
    buttonText: "Pesan Paket Plus",
    buttonVariant: "primary",
    popular: true,
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-maroon/10 text-maroon px-4 py-1.5 rounded-full font-bold uppercase text-sm mb-4"
          >
            Paket Layanan
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-dark mb-6"
          >
            Pilih Paket <span className="text-maroon">Terbaik Anda</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark/70 text-lg"
          >
            Kami menyediakan dua paket yang dapat disesuaikan dengan kebutuhan dan anggaran institusi Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col relative border ${pkg.popular ? 'border-maroon shadow-xl' : 'border-maroon/10 shadow-lg'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-maroon text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                  <Star size={14} className="fill-white" /> Terpopuler
                </div>
              )}

              <div className="aspect-square rounded-2xl overflow-hidden mb-6 mt-4">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-2xl font-bold text-dark mb-2">{pkg.title}</h3>
              <p className="text-dark/60 text-sm mb-6 min-h-[40px]">{pkg.description}</p>

              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-dark">Rp</span>
                <span className="text-5xl font-extrabold tracking-tight text-dark">{pkg.price}</span>
              </div>
              <p className="text-sm text-dark/50 -mt-4 mb-8">/ unit</p>

              <div className="mb-4">
                <p className="font-bold text-xs uppercase tracking-wider text-dark mb-4">YANG TERMASUK:</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className={`flex items-start gap-3 ${feature.included ? 'text-dark' : 'text-dark/40 line-through'}`}>
                      {feature.included ? (
                        <div className="shrink-0 rounded-full border-2 border-green-500 text-green-500 p-0.5 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="shrink-0 rounded-full border-2 border-dark/30 text-dark/30 p-0.5 mt-0.5">
                          <X size={12} strokeWidth={3} />
                        </div>
                      )}
                      <span className="text-sm font-medium">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.buttonVariant === 'primary'
                    ? 'bg-maroon text-white hover:bg-maroon-dark hover:shadow-lg hover:-translate-y-0.5'
                    : 'bg-gray-100 text-dark hover:bg-gray-200'
                    }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
