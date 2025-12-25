"use client";

import { motion } from "framer-motion";
import React from "react";

export function MotionCard(props: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            className={`p-4 rounded-(--radius) border border-(--border) bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-(--shadow-soft) transition-all hover:-translate-y-1 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] hover:shadow-(--shadow) light:bg-[linear-gradient(180deg,rgba(7,10,18,0.03),rgba(7,10,18,0.01))] ${props.className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {props.children}
        </motion.div>
    );
}

export function IconBox(props: { icon: string; tone: "cyan" | "violet" | "green" | "amber" }) {
    const tones = {
        cyan: "bg-cyan-500/12 border-cyan-500/22",
        violet: "bg-violet-500/12 border-violet-500/22",
        green: "bg-green-500/12 border-green-500/22",
        amber: "bg-amber-500/12 border-amber-500/22",
    };

    return (
        <div className={`w-10.5 h-10.5 rounded-14 grid place-items-center border shadow-[0_10px_24px_rgba(0,0,0,0.16)] mb-2.5 font-black ${tones[props.tone]}`}>
            {props.icon}
        </div>
    );
}