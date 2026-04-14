// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";


// const companies = [
//   {
//     id: "quantum",
//     roman: "01",
//     name: "Shigan Quantum Technologies",
//     sector: "Deep Technology",
//     est: "Est. 2009",
//     tagline:
//       "Advancing the boundaries of quantum computation and photonic systems for next-generation scientific infrastructure.",
//     videoId: "9RZreu5z_Gc", // ✅ correct ID (with 'u')
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="2" />
//         <path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2" />
//         <path d="M12 6a6 6 0 0 1 0 12" />
//         <line x1="2" y1="12" x2="6" y2="12" />
//         <line x1="18" y1="12" x2="22" y2="12" />
//       </svg>
//     ),
//   },
//   {
//     id: "industries",
//     roman: "02",
//     name: "Shigan Industries",
//     sector: "Manufacturing & Engineering",
//     est: "Est. 1994",
//     tagline:
//       "Precision engineering and heavy manufacturing solutions forming the structural backbone of modern industrial infrastructure.",
//     videoId: "pXkn0-cNcfk",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="16" width="4" height="6" />
//         <rect x="9" y="11" width="4" height="11" />
//         <rect x="16" y="6" width="4" height="16" />
//         <polyline points="2 10 7 5 12 8 17 2" />
//       </svg>
//     ),
//   },
//   {
//     id: "evoltz",
//     roman: "03",
//     name: "Shigan eVoltz",
//     sector: "Electric Mobility",
//     est: "Est. 2017",
//     tagline:
//       "Engineering the transition to sustainable mobility through high-performance EV drivetrains and intelligent charging ecosystems.",
//     videoId: "CXTWMFFUKrQ",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//         <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
//       </svg>
//     ),
//   },
//   {
//     id: "nexgen",
//     roman: "04",
//     name: "Shigan Nexgen",
//     sector: "Emerging Technologies",
//     est: "Est. 2019",
//     tagline:
//       "Building AI-driven platforms and software ecosystems that redefine the interface between human intelligence and machine capability.",
//     videoId: "Wjsb6YPXNWU",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="3" />
//         <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
//       </svg>
//     ),
//   },
//   {
//     id: "fuel",
//     roman: "05",
//     name: "Shigan Fuel Systems",
//     sector: "Propulsion & Energy",
//     est: "Est. 2003",
//     tagline:
//       "Designing precision fuel injection, hydrogen propulsion, and advanced combustion architectures for critical-performance applications.",
//     videoId: "csgiSpA12v8",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 2C8 6 6 10 6 13a6 6 0 0 0 12 0c0-3-2-7-6-11z" />
//         <path d="M10 17c0 1.1.9 2 2 2s2-.9 2-2" />
//       </svg>
//     ),
//   },
// ];

// // ─── Single Panel ─────────────────────────────────────────────────────────────
// function CompanyPanel({ company, index, total, isActive, onActivate }) {
//   const panelRef     = useRef(null);
//   const videoWrapRef = useRef(null);
//   const overlayRef   = useRef(null);
//   const accentBarRef = useRef(null);
//   const iconBoxRef   = useRef(null);
//   const dividerRef   = useRef(null);
//   const taglineRef   = useRef(null);
//   const nameRef      = useRef(null);
//   const sectorRef    = useRef(null);
//   const arrowRef     = useRef(null);
//   const estRef       = useRef(null);

//   // Track if this panel's video has ever been loaded
//   const [videoMounted, setVideoMounted] = useState(index === 0);

//   // Run GSAP animation whenever isActive changes
//   useEffect(() => {
//     if (isActive) {
//       // mount the video iframe
//       setVideoMounted(true);

//       gsap.timeline({ defaults: { ease: "power3.out" } })
//         .to(panelRef.current,     { background: "linear-gradient(160deg,#08141e 0%,#0d2137 100%)", duration: 0.5 }, 0)
//         .to(videoWrapRef.current, { opacity: 1, scale: 1, duration: 0.65 }, 0)
//         .to(overlayRef.current,   { opacity: 1, duration: 0.5 }, 0)
//         .to(accentBarRef.current, { scaleX: 1, duration: 0.55 }, 0.05)
//         .to(iconBoxRef.current,   { backgroundColor: "var(--accent)", color: "#fff", duration: 0.3 }, 0.1)
//         .to(dividerRef.current,   { scaleX: 1, width: "40px", backgroundColor: "var(--accent)", duration: 0.4 }, 0.15)
//         .to(taglineRef.current,   { opacity: 1, y: 0, duration: 0.45 }, 0.25)
//         .to(nameRef.current,      { color: "#fff", fontSize: "1.2rem", textShadow: "0 2px 18px rgba(0,0,0,0.7)", duration: 0.4 }, 0.1)
//         .to(sectorRef.current,    { color: "var(--energy-teal)", duration: 0.3 }, 0.1)
//         .to(arrowRef.current,     { x: 5, opacity: 1, borderColor: "rgba(255,107,53,0.7)", color: "var(--accent)", duration: 0.35 }, 0.2)
//         .to(estRef.current,       { color: "rgba(203,213,230,0.5)", duration: 0.3 }, 0.1);
//     } else {
//       gsap.timeline({ defaults: { ease: "power2.inOut" } })
//         .to(panelRef.current,     { background: "#ffffff", duration: 0.45 }, 0)
//         .to(videoWrapRef.current, { opacity: 0, scale: 1.08, duration: 0.4 }, 0)
//         .to(overlayRef.current,   { opacity: 0, duration: 0.35 }, 0)
//         .to(accentBarRef.current, { scaleX: 0, duration: 0.35 }, 0)
//         .to(iconBoxRef.current,   { backgroundColor: "#eef2ff", color: "var(--primary)", duration: 0.3 }, 0)
//         .to(dividerRef.current,   { scaleX: 0, width: "18px", duration: 0.3 }, 0)
//         .to(taglineRef.current,   { opacity: 0, y: 14, duration: 0.3 }, 0)
//         .to(nameRef.current,      { color: "var(--primary-dark)", fontSize: "0.88rem", textShadow: "none", duration: 0.35 }, 0.05)
//         .to(sectorRef.current,    { color: "#94a3b8", duration: 0.3 }, 0)
//         .to(arrowRef.current,     { x: 0, opacity: 0.4, borderColor: "#e2e8f0", color: "#cbd5e1", duration: 0.3 }, 0)
//         .to(estRef.current,       { color: "#cbd5e1", duration: 0.3 }, 0);
//     }
//   }, [isActive]);

//   // Initial GSAP state (before any animation runs)
//   useEffect(() => {
//     gsap.set(videoWrapRef.current,  { opacity: 0, scale: 1.08 });
//     gsap.set(overlayRef.current,    { opacity: 0 });
//     gsap.set(accentBarRef.current,  { scaleX: 0, transformOrigin: "left" });
//     gsap.set(taglineRef.current,    { opacity: 0, y: 14 });
//     gsap.set(dividerRef.current,    { scaleX: 0, transformOrigin: "left" });
//     gsap.set(arrowRef.current,      { x: 0, opacity: 0.4 });
//   }, []);

//   const videoSrc = `https://www.youtube.com/embed/${company.videoId}?autoplay=1&mute=1&loop=1&playlist=${company.videoId}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1`;

//   return (
//     <div
//       ref={panelRef}
//       onMouseEnter={onActivate}
//       style={{
//         // Active panel gets flex: 3.5, collapsed panels share the rest
//         flex: isActive ? "3.5" : "1",
//         transition: "flex 0.65s cubic-bezier(0.77,0,0.18,1)",
//         borderRight: index < total - 1 ? "1px solid #eef2f8" : "none",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         cursor: "pointer",
//         position: "relative",
//         overflow: "hidden",
//         background: "white",
//         minWidth: 0,
//       }}
//     >
//       {/* ── Video background ── */}
//       <div
//         ref={videoWrapRef}
//         style={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 0,
//           pointerEvents: "none",
//           overflow: "hidden",
//         }}
//       >
//         {videoMounted && (
//           <iframe
//             src={videoSrc}
//             allow="autoplay; encrypted-media"
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               width: "320%",
//               height: "320%",
//               transform: "translate(-50%, -50%)",
//               border: "none",
//               pointerEvents: "none",
//             }}
//           />
//         )}
//       </div>

//       {/* ── Gradient overlay ── */}
//       <div
//         ref={overlayRef}
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to top, rgba(4,12,24,0.96) 0%, rgba(4,12,24,0.55) 50%, rgba(4,12,24,0.2) 100%)",
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       />

//       {/* ── Top accent bar ── */}
//       <div
//         ref={accentBarRef}
//         style={{
//           position: "absolute",
//           top: 0, left: 0, right: 0,
//           height: "3px",
//           background: "linear-gradient(90deg, var(--energy-teal), var(--accent))",
//           zIndex: 10,
//           transformOrigin: "left",
//         }}
//       />

//       {/* ── TOP content ── */}
//       <div style={{ position: "relative", zIndex: 5, padding: "30px 22px 0" }}>
//         {/* Roman number */}
//         <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.16em", color: "#cbd5e1", marginBottom: "18px" }}>
//           {company.roman}
//         </div>

//         {/* Icon box */}
//         <div
//           ref={iconBoxRef}
//           style={{
//             width: "46px",
//             height: "46px",
//             borderRadius: "0.85rem",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             background: "#eef2ff",
//             color: "var(--primary)",
//             marginBottom: "14px",
//             flexShrink: 0,
//           }}
//         >
//           {company.icon}
//         </div>

//         {/* Sector */}
//         <p
//           ref={sectorRef}
//           style={{
//             fontSize: "0.6rem",
//             fontWeight: 700,
//             letterSpacing: "0.17em",
//             textTransform: "uppercase",
//             color: "#94a3b8",
//             whiteSpace: "nowrap",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//           }}
//         >
//           {company.sector}
//         </p>
//       </div>

//       {/* ── BOTTOM: always-visible name + tagline + footer ── */}
//       <div style={{ position: "relative", zIndex: 5, padding: "0 22px 26px", marginTop: "auto" }}>

//         {/* Tagline */}
//         <p
//           ref={taglineRef}
//           style={{
//             fontSize: "0.78rem",
//             lineHeight: 1.75,
//             color: "rgba(203,213,230,0.85)",
//             marginBottom: "14px",
//             opacity: 0,
//           }}
//         >
//           {company.tagline}
//         </p>

//         {/* Divider */}
//         <div
//           ref={dividerRef}
//           style={{
//             width: "18px",
//             height: "2px",
//             borderRadius: "2px",
//             background: "#e2e8f0",
//             marginBottom: "12px",
//             transformOrigin: "left",
//           }}
//         />

//         {/* Company name — sticky, always visible */}
//         <h3
//           ref={nameRef}
//           style={{
//             fontSize: "0.88rem",
//             fontWeight: 700,
//             color: "var(--primary-dark)",
//             lineHeight: 1.25,
//             letterSpacing: "-0.01em",
//             margin: "0 0 14px",
//           }}
//         >
//           {company.name}
//         </h3>

//         {/* Footer */}
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//           <span ref={estRef} style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.1em", color: "#cbd5e1" }}>
//             {company.est}
//           </span>
//           <span
//             ref={arrowRef}
//             style={{
//               width: "28px",
//               height: "28px",
//               borderRadius: "50%",
//               border: "1.5px solid #e2e8f0",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "#cbd5e1",
//               fontSize: "12px",
//               flexShrink: 0,
//               opacity: 0.4,
//             }}
//           >
//             →
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Section ──────────────────────────────────────────────────────────────────
// export default function CompaniesSection() {
//   // First panel is always active by default
//   const [activeId, setActiveId] = useState(companies[0].id);

//   const headingRef  = useRef(null);
//   const subtitleRef = useRef(null);
//   const tagRef      = useRef(null);
//   const gridRef     = useRef(null);
//   const stripRef    = useRef(null);

//   // Entrance animation
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from([tagRef.current, headingRef.current, subtitleRef.current], {
//         opacity: 0, y: 28, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.15,
//       });
//       gsap.from(gridRef.current, {
//         opacity: 0, y: 40, duration: 0.9, ease: "power3.out", delay: 0.45,
//       });
//       gsap.from(stripRef.current, {
//         opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.7,
//       });
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="section" style={{ background: "var(--bg-soft)" }}>
//       <div className="container">

//         {/* Header */}
//         <div className="section-header" style={{ marginBottom: "3.5rem" }}>
//           <p
//             ref={tagRef}
//             style={{
//               fontSize: "0.72rem",
//               fontWeight: 700,
//               letterSpacing: "0.22em",
//               textTransform: "uppercase",
//               color: "var(--energy-teal-dark)",
//               marginBottom: "0.75rem",
//             }}
//           >
//             Our Companies
//           </p>
//           <h2 ref={headingRef} style={{ marginBottom: "1rem" }}>
//             The Shigan Group
//           </h2>
//           <p
//             ref={subtitleRef}
//             className="text-gray-600 max-w-2xl mx-auto"
//             style={{ fontSize: "1rem", lineHeight: 1.7 }}
//           >
//             Five specialised companies, one unified purpose — delivering precision,
//             trust, and enduring value across the industries that shape tomorrow.
//           </p>
//         </div>

//         {/* Grid */}
//         <div
//           ref={gridRef}
//           style={{
//             display: "flex",
//             borderRadius: "1.5rem",
//             overflow: "hidden",
//             border: "1px solid #e2e8f0",
//             boxShadow: "0 20px 50px -15px rgba(0,0,0,0.14)",
//             height: "560px",
//             background: "white",
//           }}
//         >
//           {companies.map((company, index) => (
//             <CompanyPanel
//               key={company.id}
//               company={company}
//               index={index}
//               total={companies.length}
//               isActive={activeId === company.id}
//               onActivate={() => setActiveId(company.id)}
//             />
//           ))}
//         </div>

//         {/* Bottom strip */}
//         <div
//           ref={stripRef}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "2rem",
//             marginTop: "2.5rem",
//           }}
//         >
//           {["Integrity", "Precision", "Progress"].map((word, i) => (
//             <div key={word} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
//               <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#94a3b8" }}>
//                 {word}
//               </span>
//               {i < 2 && (
//                 <span style={{ display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", background: "var(--energy-teal)" }} />
//               )}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from './page.module.css';

const companies = [
  {
    id: "quantum",
    roman: "01",
    name: "Shigan Quantum Technologies",
    sector: "Deep Technology",
    est: "Est. 2009",
    tagline:
      "Advancing the boundaries of quantum computation and photonic systems for next-generation scientific infrastructure.",
    videoId: "9RZreu5z_Gc",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2" />
        <path d="M12 6a6 6 0 0 1 0 12" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    id: "industries",
    roman: "02",
    name: "Shigan Industries",
    sector: "Manufacturing & Engineering",
    est: "Est. 1994",
    tagline:
      "Precision engineering and heavy manufacturing solutions forming the structural backbone of modern industrial infrastructure.",
    videoId: "pXkn0-cNcfk",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="16" width="4" height="6" />
        <rect x="9" y="11" width="4" height="11" />
        <rect x="16" y="6" width="4" height="16" />
        <polyline points="2 10 7 5 12 8 17 2" />
      </svg>
    ),
  },
  {
    id: "evoltz",
    roman: "03",
    name: "Shigan eVoltz",
    sector: "Electric Mobility",
    est: "Est. 2017",
    tagline:
      "Engineering the transition to sustainable mobility through high-performance EV drivetrains and intelligent charging ecosystems.",
    videoId: "CXTWMFFUKrQ",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "nexgen",
    roman: "04",
    name: "Shigan Nexgen",
    sector: "Emerging Technologies",
    est: "Est. 2019",
    tagline:
      "Building AI-driven platforms and software ecosystems that redefine the interface between human intelligence and machine capability.",
    videoId: "Wjsb6YPXNWU",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: "fuel",
    roman: "05",
    name: "Shigan Fuel Systems",
    sector: "Propulsion & Energy",
    est: "Est. 2003",
    tagline:
      "Designing precision fuel injection, hydrogen propulsion, and advanced combustion architectures for critical-performance applications.",
    videoId: "csgiSpA12v8",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 6 6 10 6 13a6 6 0 0 0 12 0c0-3-2-7-6-11z" />
        <path d="M10 17c0 1.1.9 2 2 2s2-.9 2-2" />
      </svg>
    ),
  },
];

// ─── Single Panel ─────────────────────────────────────────────────────────────
function CompanyPanel({ company, index, total, isActive, onActivate }) {
  const panelRef     = useRef(null);
  const videoWrapRef = useRef(null);
  const overlayRef   = useRef(null);
  const accentBarRef = useRef(null);
  const iconBoxRef   = useRef(null);
  const dividerRef   = useRef(null);
  const taglineRef   = useRef(null);
  const nameRef      = useRef(null);
  const sectorRef    = useRef(null);
  const arrowRef     = useRef(null);
  const estRef       = useRef(null);

  const [videoMounted, setVideoMounted] = useState(index === 0);

  useEffect(() => {
    if (isActive) {
      setVideoMounted(true);

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to(panelRef.current,     { background: "linear-gradient(160deg,#08141e 0%,#0d2137 100%)", duration: 0.5 }, 0)
        .to(videoWrapRef.current, { opacity: 1, scale: 1, duration: 0.65 }, 0)
        .to(overlayRef.current,   { opacity: 1, duration: 0.5 }, 0)
        .to(accentBarRef.current, { scaleX: 1, duration: 0.55 }, 0.05)
        .to(iconBoxRef.current,   { backgroundColor: "var(--accent)", color: "#fff", duration: 0.3 }, 0.1)
        .to(dividerRef.current,   { scaleX: 1, width: "40px", backgroundColor: "var(--accent)", duration: 0.4 }, 0.15)
        .to(taglineRef.current,   { opacity: 1, y: 0, duration: 0.45 }, 0.25)
        .to(nameRef.current,      { color: "#fff", fontSize: "1.2rem", textShadow: "0 2px 18px rgba(0,0,0,0.7)", duration: 0.4 }, 0.1)
        .to(sectorRef.current,    { color: "var(--energy-teal)", duration: 0.3 }, 0.1)
        .to(arrowRef.current,     { x: 5, opacity: 1, borderColor: "rgba(255,107,53,0.7)", color: "var(--accent)", duration: 0.35 }, 0.2)
        .to(estRef.current,       { color: "rgba(203,213,230,0.5)", duration: 0.3 }, 0.1);
    } else {
      gsap.timeline({ defaults: { ease: "power2.inOut" } })
        .to(panelRef.current,     { background: "#ffffff", duration: 0.45 }, 0)
        .to(videoWrapRef.current, { opacity: 0, scale: 1.08, duration: 0.4 }, 0)
        .to(overlayRef.current,   { opacity: 0, duration: 0.35 }, 0)
        .to(accentBarRef.current, { scaleX: 0, duration: 0.35 }, 0)
        .to(iconBoxRef.current,   { backgroundColor: "#eef2ff", color: "var(--primary)", duration: 0.3 }, 0)
        .to(dividerRef.current,   { scaleX: 0, width: "18px", duration: 0.3 }, 0)
        .to(taglineRef.current,   { opacity: 0, y: 14, duration: 0.3 }, 0)
        .to(nameRef.current,      { color: "var(--primary-dark)", fontSize: "0.88rem", textShadow: "none", duration: 0.35 }, 0.05)
        .to(sectorRef.current,    { color: "#94a3b8", duration: 0.3 }, 0)
        .to(arrowRef.current,     { x: 0, opacity: 0.4, borderColor: "#e2e8f0", color: "#cbd5e1", duration: 0.3 }, 0)
        .to(estRef.current,       { color: "#cbd5e1", duration: 0.3 }, 0);
    }
  }, [isActive]);

  useEffect(() => {
    gsap.set(videoWrapRef.current,  { opacity: 0, scale: 1.08 });
    gsap.set(overlayRef.current,    { opacity: 0 });
    gsap.set(accentBarRef.current,  { scaleX: 0, transformOrigin: "left" });
    gsap.set(taglineRef.current,    { opacity: 0, y: 14 });
    gsap.set(dividerRef.current,    { scaleX: 0, transformOrigin: "left" });
    gsap.set(arrowRef.current,      { x: 0, opacity: 0.4 });
  }, []);

  const videoSrc = `https://www.youtube.com/embed/${company.videoId}?autoplay=1&mute=1&loop=1&playlist=${company.videoId}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1`;

  return (
    <div
      ref={panelRef}
      onMouseEnter={onActivate}
      className={`${styles.panel} ${index < total - 1 ? styles.panelRightBorder : ""}`}
      style={{ flex: isActive ? "3.5" : "1" }}
    >
      {/* Video background */}
      <div ref={videoWrapRef} className={styles.videoWrapper}>
        {videoMounted && (
          <iframe
            src={videoSrc}
            allow="autoplay; encrypted-media"
            className={styles.videoIframe}
          />
        )}
      </div>

      {/* Gradient overlay */}
      <div ref={overlayRef} className={styles.overlay} />

      {/* Top accent bar */}
      <div ref={accentBarRef} className={styles.accentBar} />

      {/* TOP content */}
      <div className={styles.topContent}>
        <div className={styles.roman}>{company.roman}</div>
        <div ref={iconBoxRef} className={styles.iconBox}>
          {company.icon}
        </div>
        <p ref={sectorRef} className={styles.sector}>
          {company.sector}
        </p>
      </div>

      {/* BOTTOM content */}
      <div className={styles.bottomContent}>
        <p ref={taglineRef} className={styles.tagline}>
          {company.tagline}
        </p>
        <div ref={dividerRef} className={styles.divider} />
        <h3 ref={nameRef} className={styles.companyName}>
          {company.name}
        </h3>
        <div className={styles.footer}>
          <span ref={estRef} className={styles.est}>{company.est}</span>
          <span ref={arrowRef} className={styles.arrow}>→</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────
export default function CompaniesSection() {
  const [activeId, setActiveId] = useState(companies[0].id);

  const headingRef  = useRef(null);
  const subtitleRef = useRef(null);
  const tagRef      = useRef(null);
  const gridRef     = useRef(null);
  const stripRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([tagRef.current, headingRef.current, subtitleRef.current], {
        opacity: 0, y: 28, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.15,
      });
      gsap.from(gridRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: "power3.out", delay: 0.45,
      });
      gsap.from(stripRef.current, {
        opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.7,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    
    
    <section className={styles.section}>
   
      <div className="container">
        
        <div className={styles.header}>
          <p ref={tagRef} className={styles.tag}>Our Companies</p>
          <h2 ref={headingRef} className={styles.title}>The Shigan Group</h2>
          <p ref={subtitleRef} className={styles.subtitle}>
            Five specialised companies, one unified purpose — delivering precision,
            trust, and enduring value across the industries that shape tomorrow.
          </p>
        </div>




        {/* Grid */}
        <div ref={gridRef} className={styles.grid}>
          {companies.map((company, index) => (
            <CompanyPanel
              key={company.id}
              company={company}
              index={index}
              total={companies.length}
              isActive={activeId === company.id}
              onActivate={() => setActiveId(company.id)}
            />
          ))}
        </div>

        {/* Bottom strip */}
        <div ref={stripRef} className={styles.strip}>
          {["Integrity", "Precision", "Progress"].map((word, i) => (
            <div key={word} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <span className={styles.stripWord}>{word}</span>
              {i < 2 && <span className={styles.stripDot} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}