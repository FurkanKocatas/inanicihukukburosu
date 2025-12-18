'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Ekibimiz', href: '#team' },
    { name: 'Hizmet Alanlarımız', href: '#services' },
    { name: 'SSS', href: '#faq' },
    { name: 'İletişim', href: '#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-navy-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
            )}
        >
            <div className="container-custom px-4 flex items-center justify-between">
                <div className="text-xl md:text-2xl font-bold tracking-tight text-white">
                    <Link href="#home">İnanıcı Hukuk Bürosu</Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-white/90 hover:text-gold-600 transition-colors text-sm font-medium uppercase tracking-wide"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/905531208871"
                        className="flex items-center gap-2 bg-gold-700 hover:bg-gold-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-semibold"
                    >
                        <Phone size={16} />
                        <span>WhatsApp</span>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-navy-900 border-t border-navy-800 p-4 shadow-xl">
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-white/90 hover:text-gold-600 py-2 border-b border-navy-800 last:border-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="https://wa.me/905531208871"
                            className="bg-gold-700 text-center text-white py-3 rounded-md mt-4 font-semibold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            WhatsApp İletişim
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
