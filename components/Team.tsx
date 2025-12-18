'use client';

import React from 'react';
import Image from 'next/image';
import Section from './Section';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const team = [
    {
        id: 'mirza',
        name: "Av. Ahmet Mirza İnanıcı",
        role: "Kurucu Avukat",
        bio: [
            "Av. Ahmet Mirza İNANICI Ankara Üniversitesi Hukuk Fakültesi mezunu olup, Mersin Barosu’na kayıtlıdır. İnanıcı Hukuk Bürosu’nun kurucu avukatı olarak mesleki faaliyetlerini sürdürmektedir. Genç ve dinamik bir büro yapısı içerisinde, özellikle disiplin hukuku, idare hukuku, gayrimenkul hukuku ve ceza hukuku alanında soruşturma ve kovuşturma evrelerine ilişkin hukuki temsil hizmeti sunmaktadır.",
            "Bunun yanı sıra kamulaştırma hukuku alanında yüksek deneyime sahip olup kamu hukuku ve özel hukuk alanlarında da dava ve hukuki danışmanlık faaliyetleri yürüten Av. Ahmet Mirza İNANICI değişen mevzuat, güncel yargı içtihatları ve doktrinsel gelişmeleri yakından takip ederek hukuki uyuşmazlıkları yürürlükteki hukuk kuralları çerçevesinde sistematik ve analitik bir yaklaşımla ele almaktadır."
        ],
        image: "/img/Mirza.jpeg"
    },
    {
        id: 'busra',
        name: "Av. Büşra Başbozkurt İnanıcı",
        role: "Kurucu Avukat",
        bio: [
            "Av. Büşra BAŞBOZKURT İNANICI Atılım Üniversitesi Hukuk Fakültesi mezunu olup, Mersin Barosu’na kayıtlıdır. İnanıcı Hukuk Bürosu’nun kurucu avukatı olarak mesleki faaliyetlerini sürdürmektedir. Genç ve dinamik bir büro yapısı içerisinde, özellikle ceza hukuku alanında soruşturma ve kovuşturma evrelerine ilişkin hukuki temsil hizmeti sunmaktadır.",
            "Ceza yargılamasında savunma hakkının etkin kullanımı ve adil yargılanma ilkesinin korunması, mesleki çalışmalarının temelini oluşturmaktadır. Bu kapsamda ceza yargılamasına ilişkin süreçler, hukuka uygunluk çerçevesinde ve dosya bazlı bir değerlendirme ile takip edilmektedir.",
            "Bunun yanı sıra vergi hukuku alanında yüksek deneyime sahip olup kamu hukuku ve özel hukuk alanlarında da dava ve hukuki danışmanlık faaliyetleri yürüten Av. Büşra BAŞBOZKURT İNANICI değişen mevzuat, güncel yargı içtihatları ve doktrinsel gelişmeleri yakından takip ederek hukuki uyuşmazlıkları yürürlükteki hukuk kuralları çerçevesinde sistematik ve analitik bir yaklaşımla ele almaktadır."
        ],
        image: "/img/Busra.jpeg"
    }
];

export default function Team() {
    return (
        <Section id="team">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-widest mb-3">Kadro</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Ekibimiz</h3>
                <p className="text-slate-600 text-lg">
                    Deneyimli, dinamik ve sürekli gelişimi hedefleyen uzman kadromuz.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {team.map((member) => (
                    <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-lg transition-all duration-300">
                        {/* Image Container - Tall Aspect Ratio */}
                        <div className="relative w-full aspect-[3/4] overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Subtle gradient at bottom only to smooth transition, not covering face */}
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/0 to-transparent" />
                        </div>

                        <div className="p-6 bg-white relative z-10">
                            <h4 className="text-xl font-bold text-navy-900">{member.name}</h4>
                            <p className="text-gold-600 font-medium text-sm mb-4">{member.role}</p>

                            <div className="text-slate-600 text-sm leading-relaxed mb-6 space-y-4">
                                {member.bio.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-slate-100">
                                <Link href="#" className="text-slate-400 hover:text-navy-900 transition-colors">
                                    <Linkedin size={20} />
                                </Link>
                                <Link href="#" className="text-slate-400 hover:text-navy-900 transition-colors">
                                    <Mail size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
