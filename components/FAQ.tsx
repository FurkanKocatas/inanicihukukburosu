'use client';

import React, { useState } from 'react';
import Section from './Section';
import { Plus, Minus } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
    {
        question: "Danışmanlık ücretli mi?",
        answer: "Avukatlık Asgari Ücret Tarifesi gereğince hukuki danışmanlık hizmetleri ücretlidir. Ancak ilk değerlendirme görüşmelerimiz için ofisimizle iletişime geçebilirsiniz."
    },
    {
        question: "Randevu nasıl alabilirim?",
        answer: "Web sitemizdeki iletişim formunu doldurarak, telefon numaramızı arayarak veya WhatsApp hattımız üzerinden bize ulaşarak randevu oluşturabilirsiniz."
    },
    {
        question: "Hangi şehirlerde hizmet veriyorsunuz?",
        answer: "Ofisimiz Mersin'in Mut ilçesinde bulunmaktadır. Ancak başta Mersin genelinde olmak üzere, Türkiye'nin her yerinde müvekkillerimize hukuki hizmet sağlamaktayız."
    },
    {
        question: "Belgeleri nasıl iletmeliyim?",
        answer: "Belgelerinizi ofisimize elden teslim edebilir, e-posta yoluyla gönderebilir veya kargo ile iletebilirsiniz. Gizlilik prensibimiz gereği tüm belgeleriniz korunmaktadır."
    },
    {
        question: "Dava süreci ne kadar sürer?",
        answer: "Her davanın niteliği, mahkemelerin iş yükü ve delil durumuna göre süreç değişmektedir. Hukuki inceleme yapıldıktan sonra tahmini bir süre verilebilmektedir."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="faq" className="bg-slate-50/50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-widest mb-3">Merak Edilenler</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Sıkça Sorulan Sorular</h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-200"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-slate-50"
                        >
                            <span className={clsx("font-semibold text-lg", openIndex === index ? "text-navy-900" : "text-slate-700")}>
                                {faq.question}
                            </span>
                            <span className="text-gold-600 ml-4">
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </span>
                        </button>

                        <div
                            className={clsx(
                                "overflow-hidden transition-all duration-300 ease-in-out",
                                openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                            )}
                        >
                            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
