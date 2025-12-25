"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import MarqueeStrip from "./MarqueeStrip";
import { MARQUEE_ITEMS } from "./data";

type HeroData = {
    kicker: string;
    titleA: string;
    titleB: string;
    desc: string;
    trust: readonly string[];
    ctas: readonly { label: string; href: string; kind: "primary" | "ghost" | "soft" }[];
    slides: readonly {
        tag: string;
        metricTitle: string;
        metricSub: string;
        title: string;
        desc: string;
        ui: "balance" | "transfer" | "offer";
        ctas: readonly { label: string; href: string; kind: "primary" | "ghost" }[];
    }[];
};

function SlideUI({ kind }: { kind: "balance" | "transfer" | "offer" }) {
    return (
        <div className=" rounded-16 border border-black/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.02)),radial-gradient(420px_260px_at_20%_20%,rgba(6,182,212,0.12),transparent_55%)] p-3.5 grid gap-2.5 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.20),rgba(0,0,0,0.05)),radial-gradient(420px_260px_at_20%_20%,rgba(6,182,212,0.16),transparent_55%)]" aria-hidden="true">
            {kind === "balance" && (
                <>
                    <div className="flex gap-2.5">
                        <div className="flex-1 p-2.5 px-3 rounded-14 border border-black/8 bg-black/3 dark:border-white/10 dark:bg-white/4">
                            <b className="block text-xs">Balance</b>
                            <span className="block text-(--muted2) text-[11px] mt-0.5">$ 12,850.00</span>
                        </div>
                        <div className="flex-1 p-2.5 px-3 rounded-14 border border-black/8 bg-black/3 dark:border-white/10 dark:bg-white/4">
                            <b className="block text-xs">Rewards</b>
                            <span className="block text-(--muted2) text-[11px] mt-0.5">$ 340.00</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-end h-11.5 p-2.5 px-3 rounded-14 border border-black/8 bg-black/3 dark:border-white/10 dark:bg-white/4">
                        {[18, 26, 34, 22, 40].map((h, i) => (
                            <div key={i} style={{ height: h }} className="w-2.5 rounded-lg bg-linear-to-b from-cyan-500/95 to-violet-500/88" />
                        ))}
                    </div>
                </>
            )}
            {kind === "transfer" && (
                <>
                    <div className="flex gap-2.5">
                        <div className="flex-1 p-2.5 px-3 rounded-14 border border-black/8 bg-black/3 dark:border-white/10 dark:bg-white/4">
                            <b className="block text-xs">To</b>
                            <span className="block text-(--muted2) text-[11px] mt-0.5">+8801•••••••</span>
                        </div>
                        <div className="flex-1 p-2.5 px-3 rounded-14 border border-black/8 bg-black/3 dark:border-white/10 dark:bg-white/4">
                            <b className="block text-xs">Amount</b>
                            <span className="block text-(--muted2) text-[11px] mt-0.5">$ 1,500</span>
                        </div>
                    </div>
                    <div className="p-2.5 px-3 rounded-14 border border-black/8 bg-black/3 dark:border-white/10 dark:bg-white/4">
                        <b className="block text-xs">Status</b>
                        <span className="block text-(--muted2) text-[11px] mt-0.5">Delivered • Receipt saved</span>
                    </div>
                </>
            )}
            {kind === "offer" && (
                <>
                    <div className="flex gap-2.5">
                        <div className="flex-1 p-2.5 px-3 rounded-14 border border-black/8 bg-black/3 dark:border-white/10 dark:bg-white/4">
                            <b className="block text-xs">Offer</b>
                            <span className="block text-(--muted2) text-[11px] mt-0.5">15% Cashback</span>
                        </div>
                        <div className="flex-1 p-2.5 px-3 rounded-14 border border-black/8 bg-black/3 dark:border-white/10 dark:bg-white/4">
                            <b className="block text-xs">Coupon</b>
                            <span className="block text-(--muted2) text-[11px] mt-0.5">Auto applied</span>
                        </div>
                    </div>
                    <div className="p-2.5 px-3 rounded-14 border border-black/8 bg-black/3 dark:border-white/10 dark:bg-white/4">
                        <b className="block text-xs">Receipt</b>
                        <span className="block text-(--muted2) text-[11px] mt-0.5">Saved to Wallet • Shareable</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default function Hero({ data }: { data: HeroData }) {
    const [idx, setIdx] = useState(0);

    const heroVariants = {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const slide = data.slides[idx];

    return (
        <section id="hero">
            <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-6 items-stretch">
                <motion.section
                    className="flex-1 rounded-24 border border-black/10 bg-[radial-gradient(900px_520px_at_20%_15%,rgba(6,182,212,0.16),transparent_55%),radial-gradient(900px_520px_at_70%_25%,rgba(124,58,237,0.16),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.72))] shadow-(--shadow) p-8.5 relative overflow-hidden dark:border-white/10 dark:bg-[radial-gradient(900px_520px_at_20%_15%,rgba(6,182,212,0.25),transparent_55%),radial-gradient(900px_520px_at_70%_25%,rgba(124,58,237,0.28),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]"
                    aria-label="Hero"
                    variants={heroVariants}
                    initial="hidden"
                    animate="show"
                >
                    <div className="mb-3.5">
                        <span className="inline-flex items-center gap-2 px-3 py-2 border border-(--border) bg-[linear-gradient(180deg,var(--surface),transparent)] rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.18)] text-xs tracking-wide text-(--muted) backdrop-blur-[10px]">
                            <span className="w-2 h-2 rounded-full bg-[linear-gradient(135deg,var(--p2),var(--p1))] shadow-[0_0_0_4px_rgba(6,182,212,0.12)]" />
                            {data.kicker}
                        </span>
                    </div>

                    <h1 className="m-0 mb-3.5 text-[clamp(30px,3.2vw,48px)] leading-[1.08] tracking-[-0.6px]">
                        {data.titleA}{" "}
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,var(--p2),var(--p1))]">
                            {data.titleB}
                        </span>
                    </h1>

                    <p className="m-0 mb-5.5 text-(--muted) max-w-[56ch] text-base leading-relaxed">{data.desc}</p>

                    <div className="flex gap-2.5 flex-wrap mb-4.5">
                        {data.ctas.map((c) => (
                            <Button
                                key={c.href + c.label}
                                className={cn("rounded-full font-bold h-12 px-6", c.kind === "primary" ? "btnPrimary" : "border border-(--border)")}
                                variant={c.kind === "primary" ? "default" : c.kind === "soft" ? "secondary" : "ghost"}
                                asChild
                            >
                                <a href={c.href}>
                                    {c.label} {c.kind === "primary" ? <span aria-hidden="true" className="ml-1">→</span> : null}
                                </a>
                            </Button>
                        ))}
                    </div>

                    <div className="flex gap-3.5 flex-wrap text-(--muted) text-sm mt-1.5" role="list">
                        {data.trust.map((t) => (
                            <span key={t} className="inline-flex items-center gap-2 px-2.5 py-2 border border-dashed border-black/10 rounded-full dark:border-white/20" role="listitem">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.section>

                <aside className="rounded-24 border border-black/10 bg-linear-to-b from-white/88 to-white/72 shadow-(--shadow-soft) relative overflow-hidden p-4.5 dark:border-white/10 dark:bg-linear-to-b dark:from-white/5 dark:to-white/3" aria-label="Hero carousel">
                    <motion.div
                        aria-hidden="true"
                        className="absolute -top-[90px] -right-[90px] w-[420px] h-[420px] rounded-full border border-black/5 dark:border-white/14 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.12),transparent_55%)] blur-[0.2px] pointer-events-none"
                    >
                        <div className="absolute inset-[55px] rounded-full border border-black/5 dark:border-white/12 bg-[radial-gradient(circle_at_60%_30%,rgba(124,58,237,0.12),transparent_55%)]" />
                    </motion.div>

                    <div className="h-full flex flex-col gap-3">
                        <div className="flex-[1_1_auto] relative rounded-18 overflow-hidden border border-(--border) bg-[radial-gradient(600px_300px_at_30%_20%,rgba(6,182,212,0.18),transparent_60%),radial-gradient(600px_300px_at_70%_30%,rgba(124,58,237,0.18),transparent_60%),linear-gradient(180deg,rgba(0,0,0,0.02),transparent)] dark:linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))" >
                            <AnimatePresence mode="wait">
                                <motion.article
                                    key={idx}
                                    className="absolute inset-0 p-4.5 grid grid-rows-[auto_auto_1fr_auto] gap-2.5"
                                    initial={{ opacity: 0, x: 16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -16 }}
                                    transition={{ duration: 0.42 }}
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="inline-flex items-center gap-2 px-2.5 py-2 rounded-full border border-(--border) bg-black/4 dark:bg-white/5 text-(--muted) text-xs">{slide.tag}</span>
                                        <div className="flex gap-2.5 items-center p-2.5 px-3 rounded-14 border border-black/8 bg-black/4 backdrop-blur-[10px] dark:border-white/10 dark:bg-black/12">
                                            <span className="w-2.5 h-2.5 rounded-full bg-linear-to-br from-(--p3) to-(--p2) shadow-[0_0_0_4px_rgba(34,197,94,0.12)]" aria-hidden="true" />
                                            <div>
                                                <strong className="block text-xs text-(--text)">{slide.metricTitle}</strong>
                                                <span className="block text-[11px] text-(--muted2) mt-px">{slide.metricSub}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="m-0 text-xl tracking-tight">{slide.title}</h3>
                                    <p className="m-0 text-(--muted) text-[13.5px] leading-relaxed max-w-[62ch]">{slide.desc}</p>

                                    <SlideUI kind={slide.ui} />

                                    <div className="flex gap-2.5 flex-wrap mt-2" >
                                        {slide.ctas.map((c) => (
                                            <Button
                                                key={c.href + c.label}
                                                variant={c.kind === "primary" ? "default" : "ghost"}
                                                size="sm"
                                                className={cn("rounded-full font-bold h-9 px-4", c.kind === "primary" ? "btnPrimary" : "border border-(--border)")}
                                                asChild
                                            >
                                                <Link href={c.href}>
                                                    {c.label}
                                                </Link>
                                            </Button>
                                        ))}
                                    </div>
                                </motion.article>
                            </AnimatePresence>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                            <div className="flex gap-2 items-center" aria-label="Carousel dots">
                                {data.slides.map((_, i) => {
                                    const active = i === idx;
                                    return (
                                        <motion.button
                                            key={i}
                                            type="button"
                                            aria-label={`Slide ${i + 1}`}
                                            className={cn("h-2 rounded-full border border-black/10 cursor-pointer transition-all duration-300", active ? "w-10 bg-linear-to-r from-(--p2) to-(--p1)" : "w-7 bg-black/10 dark:bg-white/14 dark:border-white/10")}
                                            onClick={() => setIdx(i)}
                                            whileTap={{ scale: 0.98 }}
                                        />
                                    );
                                })}
                            </div>

                            <div className="flex gap-2.5">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-10.5 w-10.5 rounded-full border border-(--border) bg-black/5 dark:bg-white/5"
                                    onClick={() => setIdx((i) => (i - 1 + data.slides.length) % data.slides.length)}
                                    aria-label="Previous"
                                >
                                    ←
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-10.5 w-10.5 rounded-full border border-(--border) bg-black/5 dark:bg-white/5"
                                    onClick={() => setIdx((i) => (i + 1) % data.slides.length)}
                                    aria-label="Next"
                                >
                                    →
                                </Button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <MarqueeStrip items={MARQUEE_ITEMS} />
        </section>
    );
}