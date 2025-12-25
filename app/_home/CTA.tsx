"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section id="cta">
            <motion.div
                className="p-6.5 rounded-24 bg-[radial-gradient(900px_340px_at_20%_20%,rgba(6,182,212,.12),transparent_60%),radial-gradient(900px_340px_at_80%_20%,rgba(124,58,237,.12),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.72))] border border-(--border) shadow-(--shadow) dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] dark:border-white/10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col md:flex-row items-end justify-between gap-5 mb-5" >
                    <div>
                        <h2 className="m-0 mb-1.5 text-[clamp(22px,2.2vw,34px)] tracking-[-0.4px]">
                            Download the App & Sign Up
                        </h2>
                        <p className="m-0 text-(--muted) max-w-[72ch] leading-[1.55]">Start today with fast onboarding, clean UI, and smart offers.</p>
                    </div>
                    <div className="flex gap-2.5 flex-wrap" >
                        <Button className="rounded-full font-bold h-12 px-6 btnPrimary" asChild>
                            <a href="#contact">Sign Up</a>
                        </Button>
                        <Button variant="ghost" className="rounded-full font-bold h-12 px-6 border border-(--border)" asChild>
                            <a href="#contact">Download</a>
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3.5">
                    <div className="p-5 rounded-(--radius) border border-(--border) bg-black/[0.02] dark:bg-white/4">
                        <h3 className="m-0 mb-2 text-base">iOS App</h3>
                        <p className="m-0 text-(--muted) text-sm leading-[1.6]">App Store-ready look with both dark and light theme support.</p>
                        <div className="flex gap-2 mt-3.5 flex-wrap">
                            <span className="px-2.5 py-1.5 rounded-full border border-(--border) bg-black/[0.03] text-(--muted) text-[11px] font-bold dark:border-white/12 dark:bg-white/4">Version 2.4</span>
                            <span className="px-2.5 py-1.5 rounded-full border border-(--border) bg-black/[0.03] text-(--muted) text-[11px] font-bold dark:border-white/12 dark:bg-white/4">4.9★</span>
                            <span className="px-2.5 py-1.5 rounded-full border border-(--border) bg-black/[0.03] text-(--muted) text-[11px] font-bold dark:border-white/12 dark:bg-white/4">Secure</span>
                        </div>
                        <div className="mt-5" >
                            <Button variant="ghost" className="rounded-full border border-(--border) h-10" asChild>
                                <a href="#contact">Open App Store</a>
                            </Button>
                        </div>
                    </div>

                    <div className="p-5 rounded-(--radius) border border-(--border) bg-black/[0.02] dark:bg-white/4">
                        <h3 className="m-0 mb-2 text-base">Android App</h3>
                        <p className="m-0 text-(--muted) text-sm leading-[1.6]">Optimized assets, fast load, and friendly for lower-end devices.</p>
                        <div className="flex gap-2 mt-3.5 flex-wrap">
                            <span className="px-2.5 py-1.5 rounded-full border border-(--border) bg-black/[0.03] text-(--muted) text-[11px] font-bold dark:border-white/12 dark:bg-white/4">Lite Ready</span>
                            <span className="px-2.5 py-1.5 rounded-full border border-(--border) bg-black/[0.03] text-(--muted) text-[11px] font-bold dark:border-white/12 dark:bg-white/4">Fast</span>
                            <span className="px-2.5 py-1.5 rounded-full border border-(--border) bg-black/[0.03] text-(--muted) text-[11px] font-bold dark:border-white/12 dark:bg-white/4">QR Pay</span>
                        </div>
                        <div className="mt-5" >
                            <Button className="rounded-full btnPrimary h-10 font-bold" asChild>
                                <a href="#contact">Open Play Store</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}