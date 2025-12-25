"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    return (
        <section id="newsletter">
            <div className="p-5.5! rounded-22! border border-(--border) bg-black/[0.02] shadow-(--shadow-soft) dark:bg-white/4">
                <div className="flex flex-col md:flex-row items-end justify-between gap-5 mb-3.5">
                    <div>
                        <h2 className="m-0 mb-1.5! text-[clamp(22px,2.2vw,34px)] tracking-[-0.4px]">
                            Newsletter Subscription
                        </h2>
                        <p className="m-0 text-(--muted) max-w-[72ch] leading-[1.55]">Weekly updates, offers, and feature launches.</p>
                    </div>
                </div>

                <form className="flex gap-3 max-w-[480px] mt-6 flex-wrap" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="flex-1 min-w-[240px] h-12 bg-black/3 border border-(--border) rounded-full px-5 text-(--text) text-sm backdrop-blur-[10px] outline-none transition-all focus:border-(--p2) focus:bg-black/5 placeholder:text-(--muted2) dark:bg-white/5 dark:focus:bg-white/8"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className="rounded-full h-12 px-8 font-bold btnPrimary" type="submit">
                        Subscribe
                    </Button>
                </form>
                <p className="mt-4 text-(--muted) text-xs">No spam, only the good stuff. Unsubscribe anytime.</p>
            </div>
        </section>
    );
}