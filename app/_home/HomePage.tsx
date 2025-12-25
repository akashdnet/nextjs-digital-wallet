"use client";

import { useEffect, useState } from "react";
import Blog from "./Blog";
import Contact from "./Contact";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Features from "./Features";
import Hero from "./Hero";
import MobileDrawer from "./MobileDrawer";
import Newsletter from "./Newsletter";
import Offers from "./Offers";
import Pricing from "./Pricing";
import Services from "./Services";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

import {
    BLOG_POSTS,
    CONTACT,
    FAQ_ITEMS,
    FEATURES,
    HERO,
    NAV_LINKS,
    OFFERS,
    PRICING,
    SERVICES,
    SITE,
    STATS,
    TESTIMONIALS
} from "./data";

import { useTheme } from "next-themes";

export default function HomePage() {
    const { theme, setTheme } = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setDrawerOpen(false);
                setMegaOpen(false);
            }
        }
        if (drawerOpen || megaOpen) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [drawerOpen, megaOpen]);


    return (
        <>


            <MobileDrawer open={drawerOpen}
                site={SITE}
                links={NAV_LINKS}
                onClose={() => setDrawerOpen(false)}
                onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
            />

            <Hero data={HERO} />

            <Features data={FEATURES} />

            <Services data={SERVICES} />

            <Offers data={OFFERS} />

            <Stats data={STATS} />

            <Testimonials data={TESTIMONIALS} />

            <Blog data={BLOG_POSTS} />

            <FAQ items={FAQ_ITEMS} />

            <Newsletter />

            <Pricing data={PRICING} />

            <CTA />

            <Contact data={CONTACT} />

        </>
    );
}
