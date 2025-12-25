"use client";

import { MotionCard } from "./SectionBlocks";

type Data = {
    title: string;
    lead: string;
    cards: readonly {
        title: string;
        desc: string;
        tags: readonly { label: string; href: string }[];
    }[];
};

export default function Contact({ data }: { data: Data }) {
    return (
        <section id="contact">
            <div className="flex flex-col md:flex-row items-end justify-between gap-5 mb-6.5">
                <div>
                    <h2 className="m-0 mb-2.5 text-[clamp(22px,2.2vw,34px)] tracking-[-0.4px]">{data.title}</h2>
                    <p className="m-0 text-(--muted) max-w-[72ch] leading-[1.55]">{data.lead}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3.5">
                {data.cards.map((c) => (
                    <MotionCard key={c.title}>
                        <div className="flex flex-col gap-2.5">
                            <h3 className="m-0 text-base">{c.title}</h3>
                            <p className="m-0 text-(--muted) text-sm leading-relaxed">{c.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {c.tags.map((t) => (
                                    <a key={t.label} href={t.href} className="px-2.5 py-1.5 rounded-full border border-(--border) bg-black/[0.03] text-(--muted) text-xs transition-colors hover:bg-black/[0.05] hover:text-(--text) dark:bg-white/4 dark:hover:bg-white/6">
                                        {t.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </MotionCard>
                ))}
            </div>
        </section>
    );
}