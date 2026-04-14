// // components/Sectors.js
// export default function Sectors() {
//     return (
//       <section id="sectors" className="section">
//         <div className="container">
//           <h2>Solutions by Sector 🌍</h2>
//           <div className="grid-4">
//             <div className="card">
//               <h3>🚍 Automotive</h3>
//               <p>Buses, trucks & prime movers · Retrofitment & Calibration · STU Deployment</p>
//             </div>
//             <div className="card">
//               <h3>🚆 Locomotive</h3>
//               <p>CNG/LNG dual fuel systems · High-Pressure Fuel Systems · Railway Compliance</p>
//             </div>
//             <div className="card">
//               <h3>⚓ Marine</h3>
//               <p>Commercial & inland vessels · Marine-Grade Hardware · Anti-Corrosion Design</p>
//             </div>
//             <div className="card">
//               <h3>⛏️ Off-Highway</h3>
//               <p>Mining & construction equipment · High Torque Retention · Mine-Site Support</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }


// // components/Sectors.js
// export default function Sectors() {
//   return (
//     <section id="sectors" className="section">
//       <div className="container">
//         <h2>Solutions by Sector 🌍</h2>

//         {/* Two-column layout */}
//         <div className="sectors-grid">
//           {/* Left side: 4 cards */}
//           <div className="grid-4">
//             <div className="card">
//               <h3>🚍 Automotive</h3>
//               <p>Buses, trucks & prime movers · Retrofitment & Calibration · STU Deployment</p>
//             </div>
//             <div className="card">
//               <h3>🚆 Locomotive</h3>
//               <p>CNG/LNG dual fuel systems · High-Pressure Fuel Systems · Railway Compliance</p>
//             </div>
//             <div className="card">
//               <h3>⚓ Marine</h3>
//               <p>Commercial & inland vessels · Marine-Grade Hardware · Anti-Corrosion Design</p>
//             </div>
//             <div className="card">
//               <h3>⛏️ Off-Highway</h3>
//               <p>Mining & construction equipment · High Torque Retention · Mine-Site Support</p>
//             </div>
//           </div>

//           {/* Right side: autoplay YouTube video */}
//           <div className="video-wrapper">
//             <iframe
//               src="https://www.youtube.com/embed/MLPAj365l4o?autoplay=1&mute=1&loop=1&playlist=MLPAj365l4o&controls=1&modestbranding=1&rel=0&clip=UgkxNt5pKUQcxgwJ3B1k-Z3PQ27HL6dNASM6&clipt=EOj1BRjI0wY"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>

     
//     </section>
//   );
// }

// components/Sectors.js
// export default function Sectors() {
//   return (
//     <section id="sectors" className="sectors-section">
//       {/* Background Video */}
//       <div className="video-background">
//         <iframe
//           src="https://www.youtube.com/embed/MLPAj365l4o?autoplay=1&mute=1&loop=1&playlist=MLPAj365l4o&controls=0&modestbranding=1&rel=0&clip=UgkxNt5pKUQcxgwJ3B1k-Z3PQ27HL6dNASM6&clipt=EOj1BRjI0wY"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Dark Overlay for Readability */}
//       <div className="overlay"></div>

//       {/* Content on Top */}
//       {/* <div className="container content">
//         <h2>Solutions by Sector 🌍</h2>
//         <div className="grid-4">
//           <div className="card">
//             <h3>🚍 Automotive</h3>
//             <p>Buses, trucks & prime movers · Retrofitment & Calibration · STU Deployment</p>
//           </div>
//           <div className="card">
//             <h3>🚆 Locomotive</h3>
//             <p>CNG/LNG dual fuel systems · High-Pressure Fuel Systems · Railway Compliance</p>
//           </div>
//           <div className="card">
//             <h3>⚓ Marine</h3>
//             <p>Commercial & inland vessels · Marine-Grade Hardware · Anti-Corrosion Design</p>
//           </div>
//           <div className="card">
//             <h3>⛏️ Off-Highway</h3>
//             <p>Mining & construction equipment · High Torque Retention · Mine-Site Support</p>
//           </div>
//         </div>
//       </div> */}


      
//     </section>
//   );
// }

//only vedio 


// // components/Sectors.js
// "use client";
// import { useState, useEffect } from 'react';

// export default function Sectors() {
//   const categories = ['🚍 Automotive', '🚆 Locomotive', '⚓ Marine', '⛏️ Off-Highway'];
//   const [index, setIndex] = useState(0);

//   // Rotate category every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % categories.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [categories.length]);

//   const currentCategory = categories[index];

//   return (
//     <section id="sectors" className="sectors-section">
//       {/* Background Video */}
//       <div className="video-background">
//         <iframe
//           src="https://www.youtube.com/embed/MLPAj365l4o?autoplay=1&mute=1&loop=1&playlist=MLPAj365l4o&controls=0&modestbranding=1&rel=0&clip=UgkxNt5pKUQcxgwJ3B1k-Z3PQ27HL6dNASM6&clipt=EOj1BRjI0wY"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Dark Overlay for Readability */}
//       <div className="overlay"></div>

//       {/* L‑shaped Blinking Text */}
//       <div className="l-shape-text">
//         {/* Left vertical text */}
//         <div className="left-text blink">
//           {currentCategory}
//         </div>
//         {/* Bottom horizontal text */}
//         <div className="bottom-text blink">
//           {currentCategory}
//         </div>
//       </div>

//       {/* Original content (cards) can be uncommented if needed */}
//       {/* <div className="container content">...</div> */}

      
//     </section>
//   );
// }


// L shaped fonts 
// components/Sectors.js
'use client';

import { useState, useEffect } from 'react';

export default function Sectors() {
  const categories = ['Automotive', 'Locomotive', 'Marine', 'Off-Highway'];
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [loremIndex, setLoremIndex] = useState(0);

  const loremTexts = [
    'Reduces carbon emissions',
    'Lowers fuel costs',
    'Ensures fuel flexibility',
    'Extends engine life'
  ];

  // Rotate category every 2 seconds
  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setCategoryIndex((prev) => (prev + 1) % categories.length);
    }, 2000);
    return () => clearInterval(categoryInterval);
  }, [categories.length]);

  // Rotate lorem text every 3 seconds
  useEffect(() => {
    const loremInterval = setInterval(() => {
      setLoremIndex((prev) => (prev + 1) % loremTexts.length);
    }, 3000);
    return () => clearInterval(loremInterval);
  }, [loremTexts.length]);

  const currentCategory = categories[categoryIndex];

  return (
    <section id="sectors" className="sectors-section">
      {/* Background Video */}
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/MLPAj365l4o?autoplay=1&mute=1&loop=1&playlist=MLPAj365l4o&controls=0&modestbranding=1&rel=0&clip=UgkxNt5pKUQcxgwJ3B1k-Z3PQ27HL6dNASM6&clipt=EOj1BRjI0wY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Dark Overlay for Readability */}
      <div className="overlay"></div>

      {/* L‑shaped Blinking Text */}
      <div className="l-shape-text">
        {/* Left vertical text */}
        <div className="left-text blink">
          {currentCategory}
        </div>
        {/* Bottom horizontal text */}
        <div className="bottom-text blink">
          {currentCategory}
        </div>
      </div>

      {/* Big Lorem Text (bottom‑right) */}
      <div className="big-text-container">
        <p className="big-lorem blink-slow">{loremTexts[loremIndex]}</p>
      </div>

      {/* Optional: You can still show the cards if you uncomment the next section */}
      {/* <div className="container content">
        <h2>Solutions by Sector 🌍</h2>
        <div className="grid-4">
          ...cards...
        </div>
      </div> */}

     
    </section>
  );
}