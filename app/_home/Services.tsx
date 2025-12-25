"use client";

import { IconBox, MotionCard } from "./SectionBlocks";

type Data = {
    title: string;
    lead: string;
    items: readonly { icon: string; tone: "cyan" | "violet" | "green" | "amber"; title: string; desc: string }[];
};

export default function Services({ data }: { data: Data }) {
    return (
        <section id="services">
            <div className="flex flex-col md:flex-row items-end justify-between gap-5 mb-6.5">
                <div>
                    <h2 className="m-0 mb-2.5 text-[clamp(22px,2.2vw,34px)] tracking-[-0.4px]">{data.title}</h2>
                    <p className="m-0 text-(--muted) max-w-[72ch] leading-[1.55]">{data.lead}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3.5">
                {data.items.map((it) => (
                    <MotionCard key={it.title}>
                        <IconBox icon={it.icon} tone={it.tone} />
                        <h3 className="m-0 mb-1.5">{it.title}</h3>
                        <p className="m-0 text-(--muted) text-sm">{it.desc}</p>
                    </MotionCard>
                ))}
            </div>
        </section>
    );
}