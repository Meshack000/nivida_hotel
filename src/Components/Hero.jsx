import { useState, useEffect, useRef } from "react";

// ╔══════════════════════════════════════════════════════════════╗
// ║                  🎬 YOUR VIDEO IMPORTS                       ║
// ╠══════════════════════════════════════════════════════════════╣
import a from "../VIDEOS/a.mp4";
import b from "../VIDEOS/b.mp4";
import c from "../VIDEOS/c.mp4";
import d from "../VIDEOS/d.mp4";
import e from "../VIDEOS/f.mp4";
// ╚══════════════════════════════════════════════════════════════╝

// ╔══════════════════════════════════════════════════════════════╗
// ║        NIVIDA HOTEL — HERO COMPONENT                         ║
// ║        Inspired by: jagerhof.net                             ║
// ║                                                              ║
// ║  Clean, full-bleed video. Minimal white text. One bold       ║
// ║  serif headline that rotates through slide phrases.          ║
// ║  No bars, no stats, no eyebrow text. Just atmosphere.        ║
// ╚══════════════════════════════════════════════════════════════╝

const SLIDES = [
    { src: a, phrase: "in Luxury." },
    { src: b, phrase: "at the Table." },
    { src: c, phrase: "in Stillness." },
    { src: d, phrase: "the Moment." },
    { src: e, phrase: "with Purpose." },
];

const SLIDE_DURATION = 6000;

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [phraseVisible, setPhraseVisible] = useState(true);
    const [paused, setPaused] = useState(false);
    const videoRefs = useRef([]);
    const intervalRef = useRef(null);

    // Auto-advance
    useEffect(() => {
        if (paused) return;
        intervalRef.current = setInterval(() => {
            setPhraseVisible(false);
            setTimeout(() => {
                setCurrent((p) => (p + 1) % SLIDES.length);
                setPhraseVisible(true);
            }, 400);
        }, SLIDE_DURATION);
        return () => clearInterval(intervalRef.current);
    }, [current, paused]);

    // Phrase entrance on mount
    useEffect(() => {
        setPhraseVisible(false);
        const t = setTimeout(() => setPhraseVisible(true), 300);
        return () => clearTimeout(t);
    }, [current]);

    // Video sync
    useEffect(() => {
        videoRefs.current.forEach((v, i) => {
            if (!v) return;
            if (i === current) {
                v.currentTime = 0;
                paused ? v.pause() : v.play().catch(() => { });
            } else {
                v.pause();
            }
        });
    }, [current, paused]);

    const goTo = (i) => {
        if (i === current) return;
        clearInterval(intervalRef.current);
        setPhraseVisible(false);
        setTimeout(() => {
            setCurrent(i);
            setPhraseVisible(true);
        }, 350);
    };

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap"
                rel="stylesheet"
            />

            <section
                className="relative w-full h-screen overflow-hidden"
                style={{ backgroundColor: "#0D0D0B" }}
            >
                {/* ── Video Layers ── */}
                {SLIDES.map((slide, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 transition-opacity duration-1000"
                        style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
                    >
                        <video
                            ref={(el) => (videoRefs.current[i] = el)}
                            src={slide.src}
                            className="absolute inset-0 w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                            autoPlay={i === 0}
                        />
                    </div>
                ))}

                {/* ── Overlay: subtle dark gradient, heavier at bottom ── */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(13,13,11,0.25) 0%, rgba(13,13,11,0.05) 40%, rgba(13,13,11,0.55) 80%, rgba(13,13,11,0.82) 100%)",
                    }}
                />
                {/* Slight left fade for text legibility */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(13,13,11,0.45) 0%, transparent 50%)",
                    }}
                />

                {/* ── Main content: bottom-left anchored, Jägerhof-style ── */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end px-10 md:px-16 lg:px-20 pb-24 md:pb-28">

                    {/* Static prefix */}
                    <div className="overflow-hidden mb-1">
                        <p
                            className="text-[13px] tracking-[0.22em] uppercase font-light"
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                color: "rgba(255,255,255,0.45)",
                            }}
                        >
                            Your Home,
                        </p>
                    </div>

                    {/* Rotating phrase — large serif */}
                    <div className="overflow-hidden mb-10" style={{ minHeight: "clamp(64px, 10vw, 120px)" }}>
                        <h1
                            className="leading-none font-normal italic transition-all duration-400"
                            style={{
                                fontFamily: "'EB Garamond', serif",
                                fontSize: "clamp(52px, 9vw, 112px)",
                                color: "#FFFFFF",
                                opacity: phraseVisible ? 1 : 0,
                                transform: phraseVisible ? "translateY(0px)" : "translateY(16px)",
                                transition: "opacity 0.4s ease, transform 0.4s ease",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {SLIDES[current].phrase}
                        </h1>
                    </div>

                    {/* Bottom row: CTA left + slide indicators right */}
                    <div className="flex items-end justify-between">

                        {/* CTA */}
                        <div className="flex items-center gap-6">
                            <a
                                href="#rooms"
                                className="group flex items-center gap-3 transition-all duration-300"
                                style={{
                                    fontFamily: "'Jost', sans-serif",
                                    color: "rgba(255,255,255,0.85)",
                                    fontSize: "12px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    fontWeight: 400,
                                    textDecoration: "none",
                                }}
                            >
                                <span
                                    className="inline-block transition-all duration-300 group-hover:w-10"
                                    style={{
                                        width: "28px",
                                        height: "1px",
                                        backgroundColor: "rgba(255,255,255,0.5)",
                                    }}
                                />
                                Book Your Stay
                            </a>
                            <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "12px" }}>·</span>
                            <a
                                href="#about"
                                className="transition-all duration-300"
                                style={{
                                    fontFamily: "'Jost', sans-serif",
                                    color: "rgba(255,255,255,0.38)",
                                    fontSize: "12px",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    fontWeight: 300,
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
                                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.38)")}
                            >
                                Explore Hotel
                            </a>
                        </div>

                        {/* Slide indicators */}
                        <div className="flex items-center gap-3">
                            {SLIDES.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className="transition-all duration-300"
                                    style={{
                                        width: i === current ? "28px" : "6px",
                                        height: "1px",
                                        backgroundColor:
                                            i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.2)",
                                    }}
                                    aria-label={`Slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Scroll nudge ── */}
                <div
                    className="absolute bottom-8 right-10 md:right-16 lg:right-20 z-30 flex flex-col items-center gap-2"
                    style={{ opacity: 0.35 }}
                >
                    <div
                        className="animate-pulse"
                        style={{
                            width: "1px",
                            height: "48px",
                            background:
                                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.7))",
                        }}
                    />
                </div>
            </section>
        </>
    );
}