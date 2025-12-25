export const SITE = {
    name: "DWallet",
    tagline: "Secure • Fast • Smart",
} as const;

export const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
] as const;

export const MEGA_MENU = {
    title: "Fintech Mega Menu",
    desc: "Security, compliance, and product updates—organized like a real app navigation.",
    quick: [
        { label: "Weekly Digest", href: "#newsletter", kind: "soft" as const },
        { label: "Help Center", href: "#faq", kind: "ghost" as const },
    ],
    cols: [
        [
            { icon: "A", title: "Anti-Fraud & Security", desc: "2FA, device trust, risk engine" },
            { icon: "B", title: "BNPL & Micro-Loans", desc: "Smart limits, instant approvals" },
            { icon: "C", title: "Cashback Playbook", desc: "Partner deals, coupons, offers" },
        ],
        [
            { icon: "P", title: "Pricing & Fees", desc: "Clear charges, smart plans", href: "#pricing" },
            { icon: "S", title: "Services Directory", desc: "Top-up, remittance, bills", href: "#services" },
            { icon: "C", title: "Contact & Support", desc: "Support inbox and help flows", href: "#contact" },
        ],
    ],
} as const;

export const HERO = {
    kicker: "Number one digital wallet",
    titleA: "One app for every payment —",
    titleB: "fast & secure",
    desc:
        "A digital wallet (also known as an e-wallet or mobile wallet) is a secure electronic system that allows users to store payment information—such as credit/debit card details, bank account data, or digital currencies—on a smartphone, computer, or other device. It enables seamless and contactless transactions for online purchases, in-store payments, money transfers, and even bill payments without the need for physical cash or cards.",
    trust: ["🛡️ Secured and protected", "⚡ Instant transfers", "💰 50tk welcome gift"],
    ctas: [
        { label: "Get Started", href: "/register", kind: "primary" as const },
        // { label: "Download App", href: "#", kind: "ghost" as const },
        { label: "Explore Features", href: "#features", kind: "soft" as const },
    ],
    slides: [
        {
            "tag": "Always Watching",
            "metricTitle": "Risk Score: Low",
            "metricSub": "Realtime protection",
            "title": "Trusted Security, Every Day",
            "desc": "You’re protected by a team that puts your safety first—so your money stays safe, always.",
            "ui": "transfer",
            "ctas": [
                // { "label": "See Plans", "href": "#pricing", "kind": "primary" },
                // { "label": "How it works", "href": "#faq", "kind": "ghost" }
            ]
        },
        {
            "tag": "Built on Trust",
            "metricTitle": "Risk Score: Low",
            "metricSub": "Realtime protection",
            "title": "Where Your Wallet Feels Safe",
            "desc": "We guard your payments like our own—because your trust means everything to us.",
            "ui": "balance",
            "ctas": [
                // { "label": "See Plans", "href": "#pricing", "kind": "primary" },
                // { "label": "How it works", "href": "#faq", "kind": "ghost" }
            ]
        },
        {
            "tag": "Your Peace of Mind",
            "metricTitle": "Risk Score: Low",
            "metricSub": "Realtime protection",
            "title": "Security You Can Count On",
            "desc": "Backed by strong protection and real care for your privacy—so you can pay with confidence.",
            "ui": "offer",
            "ctas": [
                // { "label": "See Plans", "href": "#pricing", "kind": "primary" },
                // { "label": "How it works", "href": "#faq", "kind": "ghost" }
            ]
        }
    ],
} as const;

export const MARQUEE_ITEMS = [
    { "bold": "Signup Bonus", "text": "50tk for new users" },
    { "bold": "Cashback", "text": "Up to 15% back" },
    { "bold": "Bill Pay", "text": "Electricity, Gas, Internet" },
    { "bold": "Transfer Money", "text": "Send money to anyone" },
    { "bold": "Top-up", "text": "Recharge your mobile" }
] as const;

export const FEATURES = {
    title: "Features",
    lead: "Your daily essentials in one place—optimized layout for conversion and clarity.",
    cta: {
        // label: "Compare Plans", href: "#pricing" 
    },
    items: [
        { icon: "🔒", tone: "cyan", title: "Wallet Security", desc: "Advanced security features to protect your money." },
        { icon: "⚡", tone: "violet", title: "Instant Transfer", desc: "Send money to anyone in seconds." },
        { icon: "🧾", tone: "green", title: "Bill Payment", desc: "Pay your bills with ease." },
        { icon: "🔳", tone: "amber", title: "Top-up", desc: "Recharge your mobile in seconds." },
    ],
} as const;

export const SERVICES = {
    title: "Services",
    lead: "Daily essentials in one place—optimized layout for conversion and clarity.",
    items: [
        { icon: "📱", tone: "cyan", title: "Top-up", desc: "Favorites, faster flows, and smart suggestions." },
        { icon: "🔁", tone: "green", title: "Send / Receive", desc: "Contact-based transfers and shareable receipts." },
        { icon: "🌍", tone: "violet", title: "International Remittance", desc: "Lower fees with trackable status updates." },
    ],
} as const;

export const OFFERS = {
    title: "Highlights & Offers",
    lead: "Cashback, discounts, and partner deals—presented with a clean card UI.",
    cta: { label: "Claim Bonus", href: "#cta" },
    items: [
        { icon: "🎁", tone: "amber", title: "15% Cashback", desc: "Limited-time cashback on selected categories." },
        { icon: "🏷️", tone: "cyan", title: "Partner Deals", desc: "Auto discounts on QR Pay—no coupons needed." },
        { icon: "💸", tone: "green", title: "Referral Rewards", desc: "Invite friends and track bonuses in-app." },
    ],
} as const;

export const STATS = {
    title: "Stats of our services that value our users ",
    lead: "  ",
    items: [
        { value: "10M+", label: "Users" },
        { value: "500M+", label: "Transactions" },
        { value: "4.9★", label: "Store rating" },
        { value: "99.95%", label: "Uptime" },
    ],
} as const;

export const TESTIMONIALS = {
    title: "Testimonials",
    lead: "Our honarable users say about us",
    items: [
        { badge: "JD", tone: "violet", name: "Johnny, Dhaka", text: "“Smooth UI. Easy to use.”" },
        { badge: "SR", tone: "cyan", name: "Sumi, Chattogram", text: "“Transfers are truly instant. Saved receipts make tracking easy.”" },
        { badge: "MN", tone: "green", name: "Monir, Sylhet", text: "“Bill reminders help a lot, and the support experience is solid.”" },
    ],
} as const;

export const BLOG_POSTS = {
    title: "Blog & News",
    lead: "Latest fintech updates—card-based layout.",
    cta: { label: "Press inquiries", href: "#contact" },
    items: [
        { icon: "📰", tone: "cyan", title: "Digital Payments Trends 2025", desc: "Secure UX, frictionless KYC, and risk-based authentication." },
        { icon: "🔐", tone: "violet", title: "Wallet Security Best Practices", desc: "PIN hygiene, device trust, and suspicious activity handling." },
        { icon: "⚙️", tone: "green", title: "API Reliability Patterns", desc: "Idempotency, retries, and status tracking in production fintech." },
    ],
} as const;

export const FAQ_ITEMS = [
    {
        "q": "What do I need to open an account?",
        "a": "Just your phone number and a few basic details. We keep it simple—and only ask for more if it helps keep you safe, following local rules."
    },
    {
        "q": "Is my money really safe with you?",
        "a": "Yes. We protect your money like it’s our own—with strong security, constant monitoring, and a team that cares."
    },
    {
        "q": "How fast can I send money?",
        "a": "Almost instantly. And we make sure it reaches the right person—safely and on time."
    },
    {
        "q": "Do you sell my data?",
        "a": "Never. Your privacy matters to us. We don’t sell your data—ever."
    },
    {
        "q": "What if I lose my phone?",
        "a": "Don’t worry. Your account stays locked until you say it’s you. We’re always here to help you get back in—safely."
    },
    {
        "q": "Why should I trust you?",
        "a": "Because we’ve built everything around your safety, honesty, and peace of mind—not just speed or features."
    }
] as const;

export const PRICING = {
    title: "Pricing",
    lead: "Transparent plans—from starter to business-grade.",
    plans: [
        {
            badge: "S",
            tone: "cyan",
            name: "Starter",
            desc: "Free basics for send money, cash-out and top-up.",
            tags: ["$0 / mo", "Standard limits"],
            cta: { label: "Choose Starter", href: "#", kind: "ghost" as const },
        },
        {
            badge: "P",
            tone: "violet",
            featured: true,
            name: "Pro",
            desc: "Rewards boost + priority transfers + enhanced offers.",
            tags: ["$19 / mo", "Extended limits", "Email support"],
            cta: { label: "Choose Pro", href: "#", kind: "primary" as const },
        },
        {
            badge: "B",
            tone: "green",
            name: "Business",
            desc: "Merchant and API-ready setup.",
            tags: ["Custom", "Team access"],
            cta: { label: "Talk to Sales", href: "#", kind: "ghost" as const },
        },
    ],
} as const;


export const CONTACT = {
    title: "Contact",
    lead: " Got questions or need help? We’re here for you—quick, friendly, and always ready to assist. ",
    cards: [
        {
            title: "Support",
            desc: "Reach out anytime for help.",
            tags: [
                { label: "support@dwallet.com", href: "mailto:support@dwallet.com" },
                { label: "+880 1700-xxxxxx", href: "tel:+8801700xxxxxxx" },
                { label: "FAQ", href: "#faq" },
            ],
        },
        {
            title: "Business",
            desc: "For merchants and partnerships.",
            tags: [
                { label: "partners@dwallet.com", href: "mailto:partners@dwallet.com" },
                { label: "Pricing", href: "#pricing" },
                { label: "Services", href: "#services" },
            ],
        },
    ],
} as const;

export const FOOTER = {
    about:
        "Our digital wallet keeps your money safe, smooth and your trust at the heart of everything we do so you can move through your day with confidence.",
    socials: [
        { label: "Facebook", short: "f", href: "https://facebook.com" },
        { label: "X", short: "x", href: "https://twitter.com" },
        { label: "LinkedIn", short: "in", href: "https://linkedin.com" },
        { label: "YouTube", short: "yt", href: "https://youtube.com" },
    ],
    cols: [
        {
            title: "Product",
            links: [
                { label: "Features", href: "#" },
                { label: "Services", href: "#" },
                { label: "Pricing", href: "#" }
            ]
        },
        {
            title: "Company",
            links: [
                { label: "Contact", href: "#" },
                { label: "Newsletter", href: "#" },
                { label: "Testimonials", href: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { label: "Support", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Privacy", href: "#" }
            ]
        },
    ],
} as const;