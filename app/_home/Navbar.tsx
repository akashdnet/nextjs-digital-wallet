"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


import { Button } from "@/components/ui/button";
import Link from "next/link";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { MEGA_MENU, NAV_LINKS, SITE } from "./data";


export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [megaOpen, setMegaOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const megaVariants = {
        hidden: { opacity: 0, y: 10, x: "-50%", pointerEvents: "none" as const },
        show: { opacity: 1, y: 0, x: "-50%", pointerEvents: "auto" as const, transition: { duration: 0.22 } },
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-[14px] bg-[linear-gradient(180deg,rgba(247,248,255,0.82),rgba(247,248,255,0.58))] border-b border-(--border) dark:bg-[linear-gradient(180deg,rgba(7,10,18,0.70),rgba(7,10,18,0.35))] dark:border-white/8 mb-5">
            <div className="container">
                <div className="flex items-center justify-between min-h-[74px]">
                    <Link className="flex items-center gap-2.5 font-black tracking-wide" href="#home" aria-label={`${SITE.name} home`}>
                        <span className="w-9 h-9 rounded-12 bg-[radial-gradient(12px_12px_at_30%_30%,rgba(255,255,255,0.55),transparent_40%),linear-gradient(135deg,var(--p2),var(--p1))] shadow-[0_12px_26px_rgba(124,58,237,0.26)] relative after:content-[''] after:absolute after:inset-[9px] after:rounded-10 after:bg-[rgba(7,10,18,0.18)] after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]" aria-hidden="true" />
                        <span className="text-base">
                            {SITE.name} <small className="block font-bold text-(--muted) text-xs mt-px">{SITE.tagline}</small>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-4.5 font-bold text-(--muted)" aria-label="Primary">
                        {NAV_LINKS
                            .filter((l) => l.label !== "Blog")
                            .slice(0, 4)
                            .map((l) => (
                                <a key={l.href} href={l.href} className="px-2.5 py-2.5 rounded-full hover:bg-black/5 hover:text-(--text) dark:hover:bg-white/6 transition-colors">
                                    {l.label}
                                </a>
                            ))}

                        <div
                            className="relative"
                            onMouseEnter={() => setMegaOpen(true)}
                            onMouseLeave={() => setMegaOpen(false)}
                        >
                            <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-full font-bold text-(--muted) hover:text-(--text)"
                                aria-haspopup="true"
                                aria-expanded={megaOpen}
                                onClick={() => setMegaOpen(!megaOpen)}
                            >
                                Blog <span className="opacity-80">▾</span>
                            </Button>

                            <AnimatePresence>
                                {megaOpen && (
                                    <motion.div className="absolute left-1/2 top-[calc(100%+10px)] w-[min(860px,calc(100vw-32px))] p-4 rounded-18 border border-(--border) bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.72))] shadow-(--shadow) backdrop-blur-lg -translate-x-1/2 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] dark:border-white/10" role="menu" initial="hidden" animate="show" exit="hidden" variants={megaVariants}>
                                        <div className="grid grid-cols-[1.1fr_0.9fr_0.9fr] gap-3.5">
                                            <div className="border border-(--border) rounded-16 p-3.5 bg-black/3 dark:bg-white/5">
                                                <h4 className="m-0 mb-1.5 text-sm">{MEGA_MENU.title}</h4>
                                                <p className="m-0 text-(--muted) text-[13px] leading-relaxed">{MEGA_MENU.desc}</p>
                                                <div className="mt-3 flex gap-2.5 flex-wrap">
                                                    {MEGA_MENU.quick.map((q) => (
                                                        <Button
                                                            key={q.href}
                                                            variant={q.kind === "soft" ? "secondary" : "ghost"}
                                                            size="sm"
                                                            className="rounded-full h-8 px-3 text-xs"
                                                            asChild
                                                        >
                                                            <Link href={q.href}>
                                                                {q.label}
                                                            </Link>
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>

                                            {MEGA_MENU.cols.map((col, idx) => (
                                                <div key={idx} className="flex flex-col gap-2.5">
                                                    {col.map((item) => (
                                                        <Link key={item.title} href={item.href ?? "#blog"} className="flex gap-2.5 items-start p-3 rounded-14 border border-transparent bg-black/2 transition-all hover:bg-black/4 hover:border-(--border) hover:-translate-y-px dark:bg-white/3 dark:hover:bg-white/6">
                                                            <span className="w-8.5 h-8.5 rounded-12 grid place-items-center bg-cyan-500/12 border border-cyan-500/22 text-(--text) font-black shrink-0">{item.icon}</span>
                                                            <div>
                                                                <strong className="block text-[13px] text-(--text)">{item.title}</strong>
                                                                <span className="block text-xs text-(--muted) mt-0.5">{item.desc}</span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a href="#contact" className="px-2.5 py-2.5 rounded-full hover:bg-black/5 hover:text-(--text) dark:hover:bg-white/6 transition-colors">Contact</a>
                    </nav>

                    <div className="flex items-center gap-2.5">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full h-10.5 w-10.5 border border-(--border) bg-white/5 dark:bg-black/5"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <SunIcon className="w-5 h-5" />
                            ) : (
                                <MoonIcon className="w-5 h-5" />
                            )}
                        </Button>
                        <Button className="rounded-full font-bold btnPrimary" asChild>
                            <Link href="#cta">
                                Get Started <span aria-hidden="true">→</span>
                            </Link>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full h-10.5 w-10.5 border border-(--border) bg-white/5 dark:bg-black/5 md:hidden"
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open menu"
                        >
                            ≡
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
