import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-900 text-slate-400 py-12 border-t border-navy-800">
            <div className="container-custom px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-4">İnanıcı Hukuk Bürosu</h2>
                        <p className="text-sm leading-relaxed max-w-sm">
                            Hukuki süreçlerinizde güvenilir çözüm ortağınız. Mersin/Mut merkezli büromuzda uzman kadromuzla hizmet veriyoruz.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#home" className="hover:text-gold-600 transition-colors">Ana Sayfa</Link></li>
                            <li><Link href="#about" className="hover:text-gold-600 transition-colors">Hakkımızda</Link></li>
                            <li><Link href="#services" className="hover:text-gold-600 transition-colors">Hizmet Alanlarımız</Link></li>
                            <li><Link href="#team" className="hover:text-gold-600 transition-colors">Ekibimiz</Link></li>
                            <li><Link href="#contact" className="hover:text-gold-600 transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">İletişim</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Pamir Elif Plaza, Kat:3 Daire:301</li>
                            <li>Mut / Mersin</li>
                            <li>info@inanicihukuk.com</li>
                            <li>0553 120 88 71</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs">
                        &copy; {currentYear} İnanıcı Hukuk Bürosu. Tüm hakları saklıdır.
                    </p>

                    <Link
                        href="#home"
                        className="bg-navy-800 hover:bg-gold-600 hover:text-white p-2 rounded-md transition-colors"
                        aria-label="Yukarı çık"
                    >
                        <ArrowUp size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
