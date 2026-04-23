import { Stethoscope, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          <div className="lg:col-span-4 block">
            <a href="#" className="flex items-center mb-6">

              <img
                src="/assets/evow.png"
                alt="Logo Evow Edumanequin"
                className="h-12 w-auto object-contain hover:scale-105 transition-transform"
              />
            </a>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              Solusi Pembuatan Mannequin RJP dan Pelatihan Pertolongan Pertama yang Terjangkau. Mempersiapkan masyarakat Indonesia tanggap darurat medis.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-maroon transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-maroon transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-maroon transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-maroon transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold mb-6 text-lg">Platform & Bantuan</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#features" className="text-white/60 hover:text-white transition-colors">Keunggulan Lengkap</a></li>
              <li><a href="#programs" className="text-white/60 hover:text-white transition-colors">Paket Pembelian</a></li>
              <li><a href="#testimonials" className="text-white/60 hover:text-white transition-colors">Panduan</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-white transition-colors">Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-lg">Legalitas</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Nomor Induk Berusaha</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Sertifikat HKI Negara</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold mb-6 text-lg">Hubungi Kami</h4>
            <ul className="space-y-4 text-white/60">
              <li>Universitas Muhammadiyah Purwokerto</li>
              <li>Purwokerto, Indonesia</li>
              <li>hello@evowedumanequin.com</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] opacity-40">
          <p>&copy; {new Date().getFullYear()} Evow Edumanequin. All rights reserved.</p>
          <p>Designed for Healthcare Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
