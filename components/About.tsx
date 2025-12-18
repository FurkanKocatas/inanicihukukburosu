import React from 'react';
import Section from './Section';
import { ShieldCheck, MessageSquare, Clock, Target } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-gold-600" />,
        title: "Gizlilik ve Özen",
        description: "Müvekkil gizliliğine en üst düzeyde önem veriyor, tüm süreçleri titizlikle yürütüyoruz."
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-gold-600" />,
        title: "Şeffaf İletişim",
        description: "Hukuki sürecinizin her aşamasında sizi bilgilendiriyor, anlaşılır bir dil kullanıyoruz."
    },
    {
        icon: <Clock className="w-8 h-8 text-gold-600" />,
        title: "Zamanında Geri Dönüş",
        description: "Sorularınıza ve taleplerinize en kısa sürede yanıt vererek süreci hızlandırıyoruz."
    },
    {
        icon: <Target className="w-8 h-8 text-gold-600" />,
        title: "Çözüm Odaklı Yaklaşım",
        description: "Karmaşık hukuki problemlerde en pratik ve etkili çözüm yollarını sunuyoruz."
    }
];

export default function About() {
    return (
        <Section id="about">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-widest mb-3">Neden Biz?</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Hakkımızda & Değerlerimiz</h3>
                <p className="text-slate-600 text-lg">
                    İnanıcı Hukuk Bürosu olarak, adaletin tecellisi için dürüstlük, şeffaflık ve profesyonellik ilkelerinden ödün vermeden çalışıyoruz.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="bg-navy-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                            {feature.icon}
                        </div>
                        <h4 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
