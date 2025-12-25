"use client";

import { Button } from "@/components/ui/button";
import { IconBox, MotionCard } from "./SectionBlocks";

type Data = {
    title: string;
    lead: string;
    cta: { label: string; href: string };
    items: readonly { icon: string; tone: "cyan" | "violet" | "green" | "amber"; title: string; desc: string }[];
};

export default function Offers({ data }: { data: Data }) {
    return (
        <section id="offers">
            <div className="flex flex-col md:flex-row items-end justify-between gap-5 mb-6.5">
                <div>
                    <h2 className="m-0 mb-2.5 text-[clamp(22px,2.2vw,34px)] tracking-[-0.4px]">{data.title}</h2>
                    <p className="m-0 text-(--muted) max-w-[72ch] leading-[1.55]">{data.lead}</p>
                </div>
                <Button variant="secondary" className="rounded-full shadow-sm" asChild>
                    <a href={data.cta.href}>
                        {data.cta.label}
                    </a>
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-3.5">
                {data.items.map((it) => (
                    <MotionCard key={it.title}>
                        <IconBox icon={it.icon} tone={it.tone} />
                        <h3 className="m-0 mb-1.5 text-base">{it.title}</h3>
                        <p className="m-0 text-(--muted) text-sm leading-relaxed">{it.desc}</p>
                    </MotionCard>
                ))}
            </div>
        </section>
    );
}