import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay },
    }),
};

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const STATS = [
    { number: "16+", label: "Years of Excellence" },
    { number: "48", label: "Curated Rooms" },
    { number: "3", label: "Dining Experiences" },
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <>
            <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 90vh;
        }
        .about-image-wrap {
          position: relative;
          overflow: hidden;
          min-height: 520px;
        }
        .about-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 72px;
        }
        .about-stats {
          display: flex;
          gap: 48px;
          margin-bottom: 52px;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-image-wrap {
            min-height: 420px;
            max-height: 480px;
          }
          .about-content {
            padding: 56px 32px;
          }
          .about-stats {
            gap: 32px;
          }
        }
        @media (max-width: 480px) {
          .about-content {
            padding: 48px 24px;
          }
          .about-stats {
            gap: 24px;
          }
        }
      `}</style>

            <section
                id="about"
                ref={ref}
                style={{
                    backgroundColor: "#F8F5F0",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <div className="about-grid">

                    {/* Left — Image */}
                    <motion.div
                        className="about-image-wrap"
                        variants={fadeLeft}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=85&fit=crop"
                            alt="Nivida Hotel interior"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to right, transparent 60%, rgba(248,245,240,0.35) 100%)",
                            }}
                        />

                        {/* Floating badge */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0.7}
                            style={{
                                position: "absolute",
                                bottom: "36px",
                                left: "36px",
                                backgroundColor: "rgba(13,13,11,0.8)",
                                backdropFilter: "blur(10px)",
                                padding: "18px 26px",
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "'Jost', sans-serif",
                                    fontSize: "10px",
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.4)",
                                    fontWeight: 300,
                                    marginBottom: "6px",
                                }}
                            >
                                Established
                            </p>
                            <p
                                style={{
                                    fontFamily: "'EB Garamond', serif",
                                    fontSize: "30px",
                                    color: "#fff",
                                    fontWeight: 400,
                                    fontStyle: "italic",
                                    lineHeight: 1,
                                }}
                            >
                                2008
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right — Content */}
                    <motion.div
                        className="about-content"
                        variants={fadeRight}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {/* Eyebrow */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0.2}
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                fontSize: "11px",
                                letterSpacing: "0.26em",
                                textTransform: "uppercase",
                                color: "#B89A5E",
                                fontWeight: 300,
                                marginBottom: "20px",
                            }}
                        >
                            Our Story
                        </motion.p>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0.3}
                            style={{
                                fontFamily: "'EB Garamond', serif",
                                fontSize: "clamp(34px, 4vw, 56px)",
                                color: "#1C1C1A",
                                fontWeight: 400,
                                lineHeight: 1.1,
                                letterSpacing: "-0.01em",
                                marginBottom: "28px",
                            }}
                        >
                            A Place Built on{" "}
                            <em style={{ fontStyle: "italic", color: "#6B6860" }}>
                                Warmth &amp; Intention.
                            </em>
                        </motion.h2>

                        {/* Gold rule */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0.38}
                            style={{
                                width: "36px",
                                height: "1px",
                                backgroundColor: "#B89A5E",
                                marginBottom: "28px",
                            }}
                        />

                        {/* Body */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0.45}
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                fontSize: "15px",
                                lineHeight: 1.85,
                                color: "#6B6860",
                                fontWeight: 300,
                                marginBottom: "18px",
                                maxWidth: "480px",
                            }}
                        >
                            Nestled in the heart of Kumasi, Nivida Hotel was born from a simple
                            belief — that true luxury is not found in excess, but in the quiet
                            details. The crisp linen. The perfectly brewed morning cup. The staff
                            who remembers your name.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0.55}
                            style={{
                                fontFamily: "'Jost', sans-serif",
                                fontSize: "15px",
                                lineHeight: 1.85,
                                color: "#6B6860",
                                fontWeight: 300,
                                marginBottom: "44px",
                                maxWidth: "480px",
                            }}
                        >
                            Since 2008, we have welcomed travellers, dreamers, and creators —
                            each finding their own version of home within our walls. Every corner
                            is curated. Every moment, considered.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            className="about-stats"
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0.65}
                        >
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <p
                                        style={{
                                            fontFamily: "'EB Garamond', serif",
                                            fontSize: "36px",
                                            color: "#1C1C1A",
                                            fontWeight: 400,
                                            lineHeight: 1,
                                            marginBottom: "6px",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {stat.number}
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "'Jost', sans-serif",
                                            fontSize: "10px",
                                            letterSpacing: "0.18em",
                                            textTransform: "uppercase",
                                            color: "#6B6860",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            custom={0.75}
                        >
                            <a
                                href="#"
                                style={{
                                    display: "inline-block",
                                    textDecoration: "none",
                                    fontFamily: "'Jost', sans-serif",
                                    fontSize: "11px",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "#1C1C1A",
                                    fontWeight: 500,
                                    borderBottom: "1px solid #1C1C1A",
                                    paddingBottom: "3px",
                                    transition: "color 0.3s ease, border-color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#B89A5E";
                                    e.currentTarget.style.borderColor = "#B89A5E";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "#1C1C1A";
                                    e.currentTarget.style.borderColor = "#1C1C1A";
                                }}
                            >
                                Discover Our Story
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}