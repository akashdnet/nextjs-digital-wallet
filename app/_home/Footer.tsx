import Link from "next/link";



type FooterData = {
    about: string;
    socials: readonly { label: string; short: string; href: string }[];
    cols: readonly { title: string; links: readonly { label: string; href: string }[] }[];
};

import { Button } from "@/components/ui/button";

export default function Footer({ data }: { data: FooterData }) {
    return (
        <footer className="py-16 pb-7.5 border-t border-(--border) bg-[linear-gradient(180deg,rgba(0,0,0,0.02),transparent)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 mb-6">
                    <div className="flex flex-col col-span-2">
                        <div className="flex items-center gap-2.5 font-black tracking-wide mb-2.5" >
                            <span className="text-base">
                                DWallet <small className="block font-bold text-(--muted) text-xs mt-px">Digital Wallet</small>
                            </span>
                        </div>
                        <p className="m-0 text-(--muted) text-[13px] leading-relaxed">{data.about}</p>
                        <div className="flex gap-2.5 mt-4" aria-label="Social links">
                            {data.socials.map((s) => (
                                <Button key={s.href} variant="ghost" size="icon" className="w-10.5 h-10.5 rounded-full border border-(--border) bg-black/3 dark:bg-white/5" asChild>
                                    <Link href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                                        <span className="font-black">{s.short}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {data.cols.map((col) => (
                        <div key={col.title} className="flex flex-col col-span-1">
                            <h4 className="m-0 mb-2.5 text-sm">{col.title}</h4>
                            {col.links.map((l) => (
                                <Link key={l.href + l.label} href={l.href} className="block py-2 text-(--muted) text-[13px] hover:text-(--text) transition-colors">
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex justify-between gap-3 flex-wrap text-(--muted2) text-[12.5px] border-t border-(--border) pt-4">
                    <span>© {new Date().getFullYear()} DWallet. All rights reserved.</span>
                    <span>Built with TypeScript • Nextjs 16 • Expressjs backend • MongoDB Database</span>
                </div>
            </div>
        </footer>
    );
}
