import React from 'react';
import Section from './Section';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsApp() {
    return (
        <Section id="whatsapp" className="bg-slate-50">
            <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
                <div className="space-y-4 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold">Hızlı bir görüşmeye mi ihtiyacınız var?</h2>
                    <p className="text-green-50 text-lg max-w-xl">
                        WhatsApp üzerinden bizimle anında iletişime geçebilir, hukuki sürecinizle ilgili ilk adımı atabilirsiniz.
                    </p>
                </div>

                <Link
                    href="https://wa.me/905531208871?text=Merhaba,%20İnanıcı%20Hukuk%20Bürosu’ndan%20randevu%20almak%20istiyorum."
                    className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                >
                    <MessageCircle size={24} />
                    WhatsApp’tan Mesaj Gönder
                </Link>
            </div>
        </Section>
    );
}
