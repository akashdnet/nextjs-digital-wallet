"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconBox, MotionCard } from "./SectionBlocks";

type Data = {
    title: string;
    lead: string;
    plans: readonly {
        badge: string;
        tone: "cyan" | "violet" | "green" | "amber";
        featured?: boolean;
        name: string;
        desc: string;
        tags: readonly string[];
        cta: { label: string; href: string; kind: "primary" | "ghost" };
    }[];
};

export default function Pricing({ data }: { data: Data }) {
    return (
        <section id="pricing">
            <div className="flex flex-col md:flex-row items-end justify-between gap-5 mb-6.5">
                <div>
                    <h2 className="m-0 mb-2.5 text-[clamp(22px,2.2vw,34px)] tracking-[-0.4px]">{data.title}</h2>
                    <p className="m-0 text-(--muted) max-w-[72ch] leading-[1.55]">{data.lead}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3.5">
                {data.plans.map((p) => {
                    if (p.featured) {
                        return (
                            <motion.article
                                key={p.name}
                                className="p-5 rounded-(--radius) border border-cyan-500/30 bg-[linear-gradient(180deg,rgba(6,182,212,0.12),rgba(255,255,255,0.03))] shadow-(--shadow) dark:bg-[linear-gradient(180deg,rgba(6,182,212,0.12),rgba(0,0,0,0.2))]"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45 }}
                            >
                                <IconBox icon={p.badge} tone={p.tone} />
                                <h3 className="m-0 mb-1.5">{p.name}</h3>
                                <p className="m-0 text-(--muted) text-sm">{p.desc}</p>
                                <div className="flex flex-wrap gap-2 mt-4 text-(--muted) text-[11px] font-bold">
                                    {p.tags.map((t) => (
                                        <span key={t} className="px-2.5 py-1.5 rounded-full border border-(--border) bg-black/[0.03] dark:bg-white/4">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-5">
                                    <Button className={cn("w-full rounded-full font-bold h-11", p.cta.kind === "primary" ? "btnPrimary" : "")} variant={p.cta.kind === "primary" ? "default" : "ghost"} asChild>
                                        <a href={p.cta.href}>
                                            {p.cta.label}
                                        </a>
                                    </Button>
                                </div>
                            </motion.article>
                        );
                    }

                    return (
                        <MotionCard key={p.name} className="p-5">
                            <IconBox icon={p.badge} tone={p.tone} />
                            <h3 className="m-0 mb-1.5">{p.name}</h3>
                            <p className="m-0 text-(--muted) text-sm">{p.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-4 text-(--muted) text-[11px] font-bold">
                                {p.tags.map((t) => (
                                    <span key={t} className="px-2.5 py-1.5 rounded-full border border-(--border) bg-black/[0.03] dark:bg-white/4">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-5">
                                <Button className={cn("w-full rounded-full font-bold h-11", p.cta.kind === "primary" ? "btnPrimary" : "border border-(--border)")} variant={p.cta.kind === "primary" ? "default" : "ghost"} asChild>
                                    <a href={p.cta.href}>
                                        {p.cta.label}
                                    </a>
                                </Button>
                            </div>
                        </MotionCard>
                    );
                })}
            </div>
        </section>
    );
}