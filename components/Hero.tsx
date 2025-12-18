import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-800/30 -skew-x-12 transform origin-top translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-700/5 rounded-full blur-3xl" />

            <div className="container-custom px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-block bg-gold-700/10 border border-gold-700/20 rounded-full px-4 py-1">
                        <span className="text-gold-600 text-sm font-semibold tracking-wider uppercase">Profesyonel Hukuki Destek</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Hukuki Süreçlerinizde <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Güvenilir</span> ve <span className="text-gold-600">Sonuç Odaklı</span> Destek
                    </h1>

                    <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                        Mersin/Mut merkezli ofisimizle, Türkiye genelindeki bireysel ve kurumsal müvekkillerimize şeffaf, hızlı ve özenli hukuki danışmanlık sunuyoruz.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-gold-700 hover:bg-gold-600 text-white rounded-md font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-gold-900/20 flex items-center justify-center gap-2"
                        >
                            Randevu Talep Et <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="https://wa.me/905531208871"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/10 rounded-md font-semibold transition-all flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} />
                            WhatsApp’tan Yazın
                        </Link>
                    </div>
                </div>

                {/* Logo Image on the Right */}
                <div className="hidden md:flex relative h-[600px] w-full items-center justify-center">
                    <div className="relative w-full h-full max-h-[500px] max-w-[500px] flex items-center justify-center">
                        <Image
                            src="/img/logo.jpeg"
                            alt="İnanıcı Hukuk Bürosu Logo"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
