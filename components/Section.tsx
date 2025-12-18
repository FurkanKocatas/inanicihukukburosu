import React from 'react';
import clsx from 'clsx';

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
    dark?: boolean;
}

export default function Section({ id, className, children, dark = false }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                "section-padding scroll-mt-24", // scroll-margin-top ensures header doesn't cover content
                dark ? "bg-navy-900 text-offwhite" : "bg-offwhite text-navy-900",
                className
            )}
        >
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
}
