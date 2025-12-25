"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ(props: { items: readonly { q: string; a: string }[] }) {
    return (
        <section id="faq">
            <div className="flex flex-col md:flex-row items-end justify-between gap-5 mb-6.5">
                <div>
                    <h2 className="m-0 mb-2.5 text-[clamp(22px,2.2vw,34px)] tracking-[-0.4px]">FAQ</h2>
                    <p className="m-0 text-(--muted) max-w-[72ch] leading-[1.55]">Common wallet questions—animated accordion.</p>
                </div>
            </div>

            <Accordion type="single" collapsible className="w-full grid gap-2.5">
                {props.items.map((it, idx) => (
                    <AccordionItem
                        key={it.q}
                        value={`item-${idx}`}
                        className="rounded-18 border border-(--border) bg-white/4 overflow-hidden dark:bg-black/2 px-4"
                    >
                        <AccordionTrigger className="hover:no-underline font-bold text-[15px] py-4.5">
                            {it.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-(--muted) text-sm leading-relaxed pb-4.5">
                            {it.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
