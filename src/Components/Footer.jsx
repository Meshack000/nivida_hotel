import LOGO from "../IMAGES/logo.png";

const NAV_LINKS = [
    { label: "Rooms & Suites", href: "#rooms" },
    { label: "Dining", href: "#dining" },
    { label: "Spa & Wellness", href: "#spa" },
    { label: "Experiences", href: "#experiences" },
    { label: "About", href: "#about" },
];

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
];

const SOCIALS = [
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "#",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "#",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <>
            <style>{`
        .footer {
          background-color: #0D0D0B;
          color: #F8F5F0;
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Top CTA band */
        .footer-cta {
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 80px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* Main grid */
        .footer-main {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
          padding: 72px 80px 56px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        /* Bottom bar */
        .footer-bottom {
          padding: 24px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-book-btn {
          display: inline-block;
          padding: 14px 36px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.75);
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 400;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .footer-book-btn:hover {
          background: #B89A5E;
          border-color: #B89A5E;
          color: #fff;
        }

        .footer-nav-link {
          display: block;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          font-weight: 300;
          padding: 5px 0;
          transition: color 0.3s ease;
        }

        .footer-nav-link:hover {
          color: rgba(255,255,255,0.85);
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: border-color 0.3s ease, color 0.3s ease;
        }

        .footer-social-btn:hover {
          border-color: #B89A5E;
          color: #B89A5E;
        }

        @media (max-width: 1024px) {
          .footer-cta {
            padding: 60px 40px;
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-main {
            grid-template-columns: 1fr 1fr;
            padding: 56px 40px 48px;
            gap: 40px;
          }
          .footer-bottom {
            padding: 20px 40px;
          }
        }

        @media (max-width: 640px) {
          .footer-cta {
            padding: 48px 24px;
          }
          .footer-main {
            grid-template-columns: 1fr;
            padding: 48px 24px 40px;
            gap: 36px;
          }
          .footer-bottom {
            padding: 20px 24px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

            <footer className="footer">

                {/* ── CTA Band ── */}
                <div className="footer-cta">
                    <div>
                        <p
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                fontSize: "11px",
                                letterSpacing: "0.26em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.3)",
                                fontWeight: 300,
                                marginBottom: "16px",
                            }}
                        >
                            Ready to arrive?
                        </p>
                        <h2
                            style={{
                                fontFamily: "'EB Garamond', serif",
                                fontSize: "clamp(32px, 4vw, 56px)",
                                color: "#fff",
                                fontWeight: 400,
                                lineHeight: 1.1,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Your stay at Nivida{" "}
                            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>
                                awaits.
                            </em>
                        </h2>
                    </div>

                    <a href="#" className="footer-book-btn">
                        Reserve a Room
                    </a>
                </div>

                {/* ── Main Grid ── */}
                <div className="footer-main">

                    {/* Col 1 — Brand */}
                    <div>
                        <img
                            src={LOGO}
                            alt="Nivida Hotel"
                            style={{
                                height: "36px",
                                objectFit: "contain",
                                filter: "brightness(0) invert(1)",
                                marginBottom: "24px",
                                display: "block",
                            }}
                        />
                        <p
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                fontSize: "13px",
                                lineHeight: 1.8,
                                color: "rgba(255,255,255,0.35)",
                                fontWeight: 300,
                                maxWidth: "280px",
                                marginBottom: "32px",
                            }}
                        >
                            A sanctuary of quiet luxury in the heart of Kumasi, Ghana. Where
                            every detail is considered and every moment, yours.
                        </p>

                        {/* Socials */}
                        <div style={{ display: "flex", gap: "10px" }}>
                            {SOCIALS.map((s) => (
                                <a key={s.label} href={s.href} className="footer-social-btn" aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 — Navigate */}
                    <div>
                        <p
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                fontSize: "10px",
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.25)",
                                fontWeight: 400,
                                marginBottom: "20px",
                            }}
                        >
                            Navigate
                        </p>
                        {NAV_LINKS.map((link) => (
                            <a key={link.label} href={link.href} className="footer-nav-link">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Col 3 — Contact */}
                    <div>
                        <p
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                fontSize: "10px",
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.25)",
                                fontWeight: 400,
                                marginBottom: "20px",
                            }}
                        >
                            Contact
                        </p>
                        {[
                            { label: "Phone", value: "+233 30 000 0000" },
                            { label: "Email", value: "hello@nividahotel.com" },
                            { label: "Address", value: "Kumasi, Ghana" },
                        ].map((item) => (
                            <div key={item.label} style={{ marginBottom: "16px" }}>
                                <p
                                    style={{
                                        fontFamily: "'Jost', sans-serif",
                                        fontSize: "10px",
                                        letterSpacing: "0.16em",
                                        textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.2)",
                                        fontWeight: 300,
                                        marginBottom: "4px",
                                    }}
                                >
                                    {item.label}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "'Jost', sans-serif",
                                        fontSize: "13px",
                                        color: "rgba(255,255,255,0.5)",
                                        fontWeight: 300,
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Col 4 — Hours */}
                    <div>
                        <p
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                fontSize: "10px",
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.25)",
                                fontWeight: 400,
                                marginBottom: "20px",
                            }}
                        >
                            Hours
                        </p>
                        {[
                            { label: "Front Desk", value: "24 / 7" },
                            { label: "Restaurant", value: "7am — 11pm" },
                            { label: "Spa", value: "8am — 9pm" },
                            { label: "Pool", value: "6am — 10pm" },
                        ].map((item) => (
                            <div key={item.label} style={{ marginBottom: "16px" }}>
                                <p
                                    style={{
                                        fontFamily: "'Jost', sans-serif",
                                        fontSize: "10px",
                                        letterSpacing: "0.16em",
                                        textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.2)",
                                        fontWeight: 300,
                                        marginBottom: "4px",
                                    }}
                                >
                                    {item.label}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "'Jost', sans-serif",
                                        fontSize: "13px",
                                        color: "rgba(255,255,255,0.5)",
                                        fontWeight: 300,
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className="footer-bottom">
                    <p
                        style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.18)",
                            fontWeight: 300,
                            letterSpacing: "0.06em",
                        }}
                    >
                        © {new Date().getFullYear()} Nivida Hotel. All rights reserved.
                    </p>

                    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                        {LEGAL_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    fontFamily: "'Jost', sans-serif",
                                    fontSize: "11px",
                                    color: "rgba(255,255,255,0.18)",
                                    fontWeight: 300,
                                    letterSpacing: "0.06em",
                                    textDecoration: "none",
                                    transition: "color 0.3s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.18)")}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
}