import React from 'react';
import Section from './Section';
import { Scale, Gavel, Briefcase, Building, FileText, Home } from 'lucide-react';

const services = [
    {
        icon: <Scale className="w-6 h-6" />,
        title: "Aile Hukuku",
        description: "Boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde hukuki destek."
    },
    {
        icon: <Gavel className="w-6 h-6" />,
        title: "Ceza Hukuku",
        description: "Soruşturma ve kovuşturma aşamalarında şüpheli, sanık veya mağdur vekilliği."
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        title: "İş Hukuku",
        description: "İşe iade, kıdem ve ihbar tazminatı, iş kazaları ve işçi-işveren uyuşmazlıkları."
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "İcra ve İflas Hukuku",
        description: "Alacak tahsili, icra takipleri, menfi tespit davaları ve iflas erteleme süreçleri."
    },
    {
        icon: <Building className="w-6 h-6" />,
        title: "Ticaret Hukuku",
        description: "Şirketler hukuku, sözleşmelerin hazırlanması, birleşme ve devralmalar."
    },
    {
        icon: <Home className="w-6 h-6" />,
        title: "Gayrimenkul Hukuku",
        description: "Tapu iptali, tescil, kira uyuşmazlıkları, tahliye davaları ve kamulaştırma."
    }
];

export default function Services() {
    return (
        <Section id="services" dark className="relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Scale size={300} className="text-white" />
            </div>

            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-widest mb-3">Uzmanlıklarımız</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Hizmet Alanlarımız</h3>
                <p className="text-slate-300 text-lg">
                    Geniş bir yelpazede hukuki hizmet sunarak, bireysel ve kurumsal ihtiyaçlarınıza özel çözümler üretiyoruz.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {services.map((service, index) => (
                    <div key={index} className="bg-navy-800 p-8 rounded-xl border border-navy-700 hover:border-gold-600/50 transition-colors group">
                        <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center text-gold-600 group-hover:bg-gold-600 group-hover:text-white transition-colors mb-6">
                            {service.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center relative z-10">
                <p className="text-slate-500 text-xs italic">
                    * Bu bilgiler bilgilendirme amaçlıdır, hukuki görüş yerine geçmez. Detaylı bilgi için lütfen iletişime geçiniz.
                </p>
            </div>
        </Section>
    );
}
