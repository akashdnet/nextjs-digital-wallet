"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MarqueeStrip(props: { items: readonly { bold: string; text: string }[] }) {
    const prefersReducedMotion = useReducedMotion();
    const track = [...props.items, ...props.items];

    return (
        <div
            className="flex items-center py-4 overflow-hidden border-t border-b border-(--border) bg-[linear-gradient(90deg,rgba(6,182,212,0.06),rgba(124,58,237,0.06),rgba(34,197,94,0.06))] mt-9 dark:bg-[linear-gradient(90deg,rgba(6,182,212,0.10),rgba(124,58,237,0.08),rgba(34,197,94,0.08))]"
            aria-label="Highlights"
            style={{ WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)", maskImage: "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)" }}
        >
            <motion.div
                className="flex gap-6.5 items-center min-w-max"
                animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
                transition={prefersReducedMotion ? {} : { duration: 22, ease: "linear", repeat: Infinity }}
                aria-hidden="true"
            >
                {track.map((it, idx) => (
                    <span key={idx} className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border border-(--border) bg-black/[0.03] text-(--muted) text-sm whitespace-nowrap focus-within:ring-2 focus-within:ring-cyan-500/50 transition-all dark:bg-white/4">
                        <b className="text-(--text)">{it.bold}</b> {it.text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}