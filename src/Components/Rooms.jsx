import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const ROOMS = [
  {
    id: "01",
    tag: "Deluxe",
    name: "The",
    nameItalic: "Grand Room",
    size: "48 m²",
    guests: "2 Guests",
    bed: "King Bed",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80&fit=crop",
  },
  {
    id: "02",
    tag: "Suite",
    name: "The",
    nameItalic: "Signature Suite",
    size: "72 m²",
    guests: "2 Guests",
    bed: "King Bed",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80&fit=crop",
  },
  {
    id: "03",
    tag: "Presidential",
    name: "The",
    nameItalic: "Presidential Suite",
    size: "120 m²",
    guests: "4 Guests",
    bed: "Twin Kings",
    image:
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=900&q=80&fit=crop",
  },
];

export default function Rooms() {
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        .rooms-section {
          background-color: #0D0D0B;
          padding: 120px 0 140px;
          position: relative;
          overflow: hidden;
        }
        .rooms-header {
          padding: 0 80px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 72px;
        }
        .rooms-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr 1fr;
          gap: 2px;
          padding: 0 80px;
        }
        .room-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          height: 580px;
        }
        .rooms-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 80px;
          margin-top: 48px;
        }

        @media (max-width: 1024px) {
          .rooms-header {
            padding: 0 40px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 48px;
          }
          .rooms-grid {
            grid-template-columns: 1fr 1fr;
            padding: 0 40px;
          }
          .room-card {
            height: 460px;
          }
          .room-card:nth-child(3) {
            grid-column: 1 / -1;
            height: 400px;
          }
          .rooms-bottom {
            padding: 0 40px;
          }
        }

        @media (max-width: 640px) {
          .rooms-section {
            padding: 80px 0 100px;
          }
          .rooms-header {
            padding: 0 24px;
            margin-bottom: 36px;
          }
          .rooms-grid {
            grid-template-columns: 1fr;
            padding: 0 24px;
            gap: 3px;
          }
          .room-card {
            height: 420px;
          }
          .room-card:nth-child(3) {
            grid-column: auto;
            height: 420px;
          }
          .rooms-bottom {
            padding: 0 24px;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>

      <section className="rooms-section" id="rooms" ref={ref}>

        {/* Header */}
        <div className="rooms-header">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "14px",
                fontWeight: 300,
              }}
            >
              Accommodation
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                color: "#fff",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              Where Rest Becomes{" "}
              <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.55)" }}>
                Ritual.
              </em>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.3}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              fontWeight: 300,
            }}
          >
            3 curated stays
          </motion.p>
        </div>

        {/* Grid */}
        <div className="rooms-grid">
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.id}
              className="room-card"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2 + i * 0.15}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <img
                src={room.image}
                alt={room.nameItalic}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter:
                    hovered === i ? "brightness(0.5)" : "brightness(0.72)",
                  transform: hovered === i ? "scale(1.06)" : "scale(1)",
                  transition:
                    "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.9s ease",
                }}
              />

              {/* Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(13,13,11,0.92) 0%, rgba(13,13,11,0.15) 55%, transparent 100%)",
                  zIndex: 1,
                }}
              />

              {/* Number */}
              <span
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.1em",
                  zIndex: 2,
                  fontStyle: "italic",
                }}
              >
                {room.id}
              </span>

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "32px 28px",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    fontWeight: 300,
                    marginBottom: "8px",
                  }}
                >
                  {room.tag}
                </p>

                <h3
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    color: "#fff",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {room.name}{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {room.nameItalic}
                  </em>
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "20px",
                  }}
                >
                  {[room.size, room.guests, room.bed].map((meta, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        color: "rgba(255,255,255,0.28)",
                        fontWeight: 300,
                        textTransform: "uppercase",
                      }}
                    >
                      {j > 0 && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: "rgba(255,255,255,0.15)",
                          }}
                        >
                          ·
                        </span>
                      )}
                      {meta}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    opacity: hovered === i ? 1 : 0,
                    transform:
                      hovered === i ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: 400,
                    borderBottom: "1px solid rgba(255,255,255,0.3)",
                    paddingBottom: "2px",
                  }}
                >
                  View Room
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="rooms-bottom">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.7}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              fontWeight: 300,
            }}
          >
            Nivida Hotel · Kumasi
          </motion.p>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.8}
            href="#"
            style={{
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 400,
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              paddingBottom: "2px",
            }}
          >
            View All Rooms
          </motion.a>
        </div>
      </section>
    </>
  );
}