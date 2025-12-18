'use client';

import React, { useActionState } from 'react';
import Link from 'next/link';
import Section from './Section';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { submitContact } from '@/app/actions';

import { Turnstile } from '@marsidev/react-turnstile';

const initialState = {
    success: false,
    message: null,
    error: null
};

export default function Contact() {
    const [state, formAction, isPending] = useActionState(submitContact, initialState);

    // Captcha State
    const [turnstileStatus, setTurnstileStatus] = React.useState<'pending' | 'solved' | 'error' | 'expired'>('pending');

    return (
        <Section id="contact" dark className="relative">
            <div className="absolute inset-0 bg-navy-900/50 z-0" />

            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-widest mb-3">Bize Ulaşın</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">İletişim</h3>
                <p className="text-slate-300 text-lg">
                    Hukuki sorunlarınız için bizimle iletişime geçin. Size en kısa sürede dönüş yapalım.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-navy-800 p-3 rounded-lg text-gold-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Adres</h4>
                            <p className="text-slate-300">Pamir Elif Plaza, Karşıyaka, Hilmi Aydın Cd.<br /> No:15 Kat:3 Daire:301, 33000 Mut/Mersin</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-navy-800 p-3 rounded-lg text-gold-600">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Telefon</h4>
                            <Link href="tel:+905531208871" className="text-slate-300 hover:text-gold-600 transition-colors">
                                0553 120 88 71
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-navy-800 p-3 rounded-lg text-gold-600">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">E-posta</h4>
                            <p className="text-slate-300">info@avahmetmirzainanici.com.tr</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-navy-800 p-3 rounded-lg text-gold-600">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Çalışma Saatleri</h4>
                            <p className="text-slate-300">Pazartesi – Cuma: 09:00 – 17:00</p>
                            <p className="text-slate-400 text-sm mt-1">Hafta Sonu: Kapalı</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl p-8 shadow-xl">
                    <h4 className="text-navy-900 font-bold text-2xl mb-6">Mesaj Gönderin</h4>

                    <form action={formAction} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-navy-800">Ad Soyad</label>
                                <input name="name" id="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-600 focus:ring-1 focus:ring-gold-600 outline-none transition-all text-navy-900 bg-slate-50" placeholder="Adınız Soyadınız" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-navy-800">E-posta</label>
                                <input name="email" id="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-600 focus:ring-1 focus:ring-gold-600 outline-none transition-all text-navy-900 bg-slate-50" placeholder="ornek@email.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-semibold text-navy-800">Konu</label>
                            <input name="subject" id="subject" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-600 focus:ring-1 focus:ring-gold-600 outline-none transition-all text-navy-900 bg-slate-50" placeholder="Danışmak istediğiniz konu" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-navy-800">Mesaj</label>
                            <textarea name="message" id="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-600 focus:ring-1 focus:ring-gold-600 outline-none transition-all text-navy-900 bg-slate-50 resize-none" placeholder="Mesajınız..."></textarea>
                        </div>

                        {/* Cloudflare Turnstile */}
                        <div className="min-h-[65px]">
                            <Turnstile
                                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                                options={{ theme: 'light' }}
                                onSuccess={() => setTurnstileStatus('solved')}
                                onError={() => setTurnstileStatus('error')}
                                onExpire={() => setTurnstileStatus('expired')}
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isPending || turnstileStatus !== 'solved'}
                                className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-slate-400"
                            >
                                {isPending ? 'Gönderiliyor...' : 'Gönder'}
                                {!isPending && <Send size={18} />}
                            </button>
                        </div>

                        {state?.error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm mt-4">
                                <AlertCircle size={16} />
                                {state.error}
                            </div>
                        )}

                        {state?.success && (
                            <div className="bg-green-50 text-green-700 p-3 rounded-lg flex items-center gap-2 text-sm mt-4">
                                <CheckCircle size={16} />
                                {state.message}
                            </div>
                        )}

                        <p className="text-xs text-slate-500 mt-4 text-center">
                            Gönder butonuna basarak kişisel verilerimin iletişim amaçlı işlenmesini kabul ediyorum.
                        </p>
                    </form>
                </div>
            </div>
        </Section>
    );
}
