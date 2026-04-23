import { motion } from 'motion/react';
import { Target, Rocket, Sun, Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: "M. Hanif Prasetya Adhi, S.Kep.,M.Kep",
    role: "Pembina",
    image: "/assets/hanif.png",
    instagram: ""
  },
  {
    name: "Isnaini Suci Ramadhani",
    role: "Ketua Tim",
    image: "/assets/isna.png",
    instagram: "@isnasucira"
  },
  {
    name: "Rendra Aji Syaputra",
    role: "Web Developer",
    image: "/assets/rendra.png",
    instagram: "@rendraaji_s"
  },
  {
    name: "Fata Nur Almaidah",
    role: "Ahli Medis",
    image: "/assets/alma.png",
    instagram: "@almaidahft"
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-maroon/10 text-maroon px-4 py-1.5 rounded-full font-bold text-sm mb-4"
          >
            Tim Kami
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-dark mb-6"
          >
            Profil <span className="text-maroon">Tim Evow Edumanequin</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark/70 text-lg"
          >
            Kami adalah tim yang berdedikasi untuk meningkatkan kesiapsiagaan masyarakat dalam menghadapi situasi darurat medis melalui inovasi teknologi.
          </motion.p>
        </div>

        {/* Visi Misi Tujuan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full border-2 border-maroon text-maroon flex items-center justify-center mb-6 shrink-0">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{val.title}</h3>
                <p className="text-dark/70 leading-relaxed font-medium">
                  {val.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Team Section Layout */}
        <div className="lg:flex gap-12 items-stretch">

          {/* Large Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-[55%] aspect-[5/4] rounded-[3rem] overflow-hidden shadow-2xl shadow-dark/10 mb-8 lg:mb-0 relative group"
          >
            <img
              src="/assets/tim.png"
              alt="Tim Evow Edumanequin Belajar"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Symmetrical Member Cards */}
          <div className="lg:w-[45%] flex flex-col justify-between gap-5">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                className="bg-white rounded-[2rem] p-5 flex items-center gap-5 shadow-sm border border-black/5 hover:shadow-xl hover:shadow-maroon/5 group transition-all duration-300"
              >
                <div className="relative shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 rounded-[1.5rem] object-cover shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-dark text-lg md:text-xl group-hover:text-maroon transition-colors">{member.name}</h4>
                  <p className="text-dark/50 text-sm md:text-base font-medium">{member.role}</p>
                </div>

                {member.instagram && (
                  <motion.a
                    href={
                      member.instagram.startsWith('http')
                        ? member.instagram
                        : `https://www.instagram.com/${member.instagram.replace('@', '')}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:flex items-center gap-2 bg-[#1A1A1A] text-white px-5 py-3 rounded-2xl text-sm font-semibold hover:bg-black transition-colors shrink-0"
                  >
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
