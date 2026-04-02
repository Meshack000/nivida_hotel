import { useState, useEffect } from "react";
import LOGO from "../IMAGES/logo.png";

// ╔══════════════════════════════════════════════════╗
// ║        NIVIDA HOTEL — NAVBAR COMPONENT           ║
// ║        Inspired by: jagerhof.net                 ║
// ║                                                  ║
// ║  Palette: Warm off-white, deep slate, muted gold ║
// ║  --cream:   #F8F5F0  (background)                ║
// ║  --ink:     #1C1C1A  (text)                      ║
// ║  --ink-dim: #6B6860  (muted text)                ║
// ║  --gold:    #B89A5E  (accent)                    ║
// ╚══════════════════════════════════════════════════╝

const NAV_LINKS = [
    { label: "Rooms & Suites", href: "#rooms" },
    { label: "Dining", href: "#dining" },
    { label: "Spa & Wellness", href: "#spa" },
    { label: "Experiences", href: "#experiences" },
];

const MenuIcon = () => (
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M0 1h22M0 7h22M0 13h22" />
    </svg>
);

const CloseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M18 6 6 18M6 6l12 12" />
    </svg>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [heroVisible, setHeroVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 60);
            // When over hero, navbar is transparent/white-text; after, it becomes cream/dark
            setHeroVisible(scrollY < window.innerHeight * 0.8);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isLight = heroVisible && !menuOpen; // overlay = light text on dark video

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap"
                rel="stylesheet"
            />

            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    fontFamily: "'Jost', sans-serif",
                    backgroundColor: menuOpen
                        ? "#F8F5F0"
                        : isLight
                            ? "transparent"
                            : scrolled
                                ? "rgba(248,245,240,0.97)"
                                : "#F8F5F0",
                    backdropFilter: scrolled && !isLight ? "blur(12px)" : "none",
                    borderBottom: scrolled && !isLight
                        ? "1px solid rgba(28,28,26,0.08)"
                        : "none",
                }}
            >
                {/* ── Primary Navbar ── */}
                <nav
                    className={`flex items-center justify-between px-8 lg:px-14 transition-all duration-500 ${scrolled ? "h-16" : "h-20"
                        }`}
                >
                    {/* Logo */}
                    <a href="/" className="flex-shrink-0">
                        <img
                            src={LOGO}
                            alt="NIVIDA HOTEL"
                            className={`object-contain transition-all duration-500 ${scrolled ? "h-7" : "h-9"
                                }`}
                            style={{
                                filter: isLight ? "brightness(0) invert(1)" : "none",
                            }}
                        />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.label} href={link.href} label={link.label} light={isLight} />
                        ))}
                    </div>

                    {/* Desktop Right */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a
                            href="tel:+1234567890"
                            className="text-[11px] tracking-[0.12em] transition-colors duration-300"
                            style={{
                                color: isLight ? "rgba(255,255,255,0.55)" : "#6B6860",
                                fontWeight: 300,
                            }}
                        >
                            +1 234 567 890
                        </a>
                        <BookButton light={isLight} />
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setMenuOpen((p) => !p)}
                        className="lg:hidden p-1 transition-colors duration-300"
                        style={{
                            color: menuOpen ? "#1C1C1A" : isLight ? "rgba(255,255,255,0.8)" : "#1C1C1A",
                        }}
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </nav>

                {/* ── Mobile Drawer ── */}
                <div
                    className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    style={{ backgroundColor: "#F8F5F0" }}
                >
                    <div
                        className="flex flex-col px-8 pb-8 pt-2 gap-1"
                        style={{ borderTop: "1px solid rgba(28,28,26,0.06)" }}
                    >
                        {NAV_LINKS.map((link, i) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="py-4 text-[13px] tracking-[0.08em] font-light transition-colors duration-300"
                                style={{
                                    color: "#1C1C1A",
                                    borderBottom: i < NAV_LINKS.length - 1 ? "1px solid rgba(28,28,26,0.07)" : "none",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#B89A5E")}
                                onMouseLeave={(e) => (e.target.style.color = "#1C1C1A")}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-6">
                            <button
                                className="w-full py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300"
                                style={{
                                    backgroundColor: "#1C1C1A",
                                    color: "#F8F5F0",
                                }}
                            >
                                Reserve a Room
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

/* ── Sub-components ── */

function NavLink({ href, label, light }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={href}
            className="relative text-[11px] tracking-[0.12em] uppercase font-light transition-all duration-300 pb-0.5"
            style={{
                color: hovered
                    ? light
                        ? "#ffffff"
                        : "#1C1C1A"
                    : light
                        ? "rgba(255,255,255,0.55)"
                        : "#6B6860",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
            <span
                className="absolute bottom-0 left-0 h-px transition-all duration-300"
                style={{
                    width: hovered ? "100%" : "0%",
                    backgroundColor: light ? "rgba(255,255,255,0.6)" : "#B89A5E",
                }}
            />
        </a>
    );
}

function BookButton({ light }) {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            className="px-6 py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium transition-all duration-300"
            style={{
                backgroundColor: hovered
                    ? "#B89A5E"
                    : light
                        ? "rgba(255,255,255,0.12)"
                        : "#1C1C1A",
                color: hovered ? "#F8F5F0" : light ? "rgba(255,255,255,0.85)" : "#F8F5F0",
                border: light
                    ? "1px solid rgba(255,255,255,0.25)"
                    : "1px solid transparent",
                transform: hovered ? "translateY(-1px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            Book Now
        </button>
    );
}