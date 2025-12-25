"use client";

type Data = {
    title: string;
    lead: string;
    items: readonly { value: string; label: string }[];
};

export default function Stats({ data }: { data: Data }) {
    return (
        <section id="stats">
            <div className="flex flex-col md:flex-row items-end justify-between gap-5 mb-6.5">
                <div>
                    <h2 className="m-0 mb-2.5 text-[clamp(22px,2.2vw,34px)] tracking-[-0.4px]">{data.title}</h2>
                    <p className="m-0 text-(--muted) max-w-[72ch] leading-[1.55]">{data.lead}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                {data.items.map((it) => (
                    <div key={it.label} className="p-4 rounded-(--radius) border border-(--border) bg-black/[0.02] shadow-(--shadow-soft) dark:bg-white/4">
                        <h3 className="m-0 mb-1 text-[clamp(28px,2.5vw,38px)] tracking-[-0.6px] bg-[linear-gradient(135deg,var(--text),var(--muted))] bg-clip-text text-transparent">
                            {it.value}
                        </h3>
                        <p className="m-0 text-(--muted) text-[11px] font-bold uppercase tracking-[0.5px]">
                            {it.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}