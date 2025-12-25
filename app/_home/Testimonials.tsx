"use client";

import { IconBox, MotionCard } from "./SectionBlocks";

type Data = {
    title: string;
    lead: string;
    items: readonly { badge: string; tone: "cyan" | "violet" | "green" | "amber"; name: string; text: string }[];
};

export default function Testimonials({ data }: { data: Data }) {
    return (
        <section id="testimonials">
            <div className="flex flex-col md:flex-row items-end justify-between gap-5 mb-6.5">
                <div>
                    <h2 className="m-0 mb-2.5 text-[clamp(22px,2.2vw,34px)] tracking-[-0.4px]">{data.title}</h2>
                    <p className="m-0 text-(--muted) max-w-[72ch] leading-[1.55]">{data.lead}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3.5">
                {data.items.map((it) => (
                    <MotionCard key={it.name}>
                        <IconBox icon={it.badge} tone={it.tone} />
                        <h3 className="m-0 mb-1.5">{it.name}</h3>
                        <p className="m-0 text-(--muted) leading-relaxed text-sm">{it.text}</p>
                    </MotionCard>
                ))}
            </div>
        </section>
    );
}