"use client"

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

export type NavLink = { readonly label: string; readonly href: string };

export default function MobileDrawer(props: {
    open: boolean;
    site: { name: string; tagline: string };
    links: readonly NavLink[];
    onClose: () => void;
    onToggleTheme: () => void;
}) {
    return (
        <Sheet open={props.open} onOpenChange={(val) => !val && props.onClose()}>
            <SheetContent side="top" className="rounded-b-22 border-b border-(--border) bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] shadow-(--shadow) p-4 md:hidden dark:bg-[linear-gradient(180deg,rgba(7,10,18,0.95),rgba(7,10,18,0.85))]">
                <SheetHeader className="flex flex-row items-center justify-between mb-4 px-1.5 p-0 space-y-0">
                    <SheetTitle className="flex items-center gap-2 font-black text-left">
                        <span className="w-8 h-8 rounded-10 bg-[linear-gradient(135deg,var(--p2),var(--p1))] shadow-[0_8px_16px_rgba(124,58,237,0.22)]" />
                        <span className="text-base text-(--text)">
                            {props.site.name}
                            <small className="block font-bold text-(--muted) text-xs -mt-1">{props.site.tagline}</small>
                        </span>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-1">
                    {props.links.map((it) => (
                        <a
                            key={it.href}
                            href={it.href}
                            className="block p-3 rounded-14 font-black text-(--text) border border-transparent transition-all hover:bg-white/6 hover:border-(--border) dark:hover:bg-black/4"
                            onClick={props.onClose}
                        >
                            {it.label}
                        </a>
                    ))}
                </div>

                <div className="flex gap-2.5 mt-4">
                    <Button variant="ghost" className="flex-1 rounded-full h-12 font-bold" asChild>
                        <a href="#login" onClick={props.onClose}>Login</a>
                    </Button>
                    <Button className="flex-1 rounded-full h-12 font-bold btnPrimary" asChild>
                        <a href="#cta" onClick={props.onClose}>Sign Up</a>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
