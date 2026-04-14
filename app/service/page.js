// app/service/page.js
'use client';

export default function ServicePage() {
  const services = [
    {
      icon: '🔧',
      title: 'CNG Retrofit',
      description: 'Convert diesel engines to Compressed Natural Gas for reduced emissions and lower fuel costs.',
      features: ['STU approved kits', 'Warranty coverage', 'Pan‑India support']
    },
    {
      icon: '⛽',
      title: 'LNG Solutions',
      description: 'Liquefied Natural Gas systems for long‑haul trucks, locomotives, and marine vessels.',
      features: ['Cryogenic tanks', 'High pressure delivery', 'Safety certified']
    },
    {
      icon: '⚙️',
      title: 'Dual Fuel Systems',
      description: 'Seamless switching between diesel and natural gas for operational flexibility.',
      features: ['Auto‑switch technology', 'Fuel mapping', 'Performance tuning']
    },
    {
      icon: '📊',
      title: 'Fleet Consulting',
      description: 'End‑to‑end advisory for fleet conversion, ROI analysis, and deployment strategy.',
      features: ['Feasibility studies', 'Fuel savings calculator', 'Transition roadmap']
    },
    {
      icon: '🛠️',
      title: 'On‑Site Support',
      description: 'Maintenance, troubleshooting, and calibration at your depot or mine site.',
      features: ['24/7 support', 'Trained technicians', 'Spare parts inventory']
    },
    {
      icon: '📋',
      title: 'Compliance Testing',
      description: 'Certification and homologation for railway, marine, and automotive standards.',
      features: ['AIS / ISO compliance', 'Emissions testing', 'Documentation support']
    }
  ];

  return (
    <>
      <div className="service-hero">
        {/* Background Video */}
        <div className="video-background">
          <iframe
            src="https://www.youtube.com/embed/MLPAj365l4o?autoplay=1&mute=1&loop=1&playlist=MLPAj365l4o&controls=0&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Content Container */}
        <div className="service-content">
          <div className="service-header">
            <h1>Our Services</h1>
            <p className="tagline">Comprehensive dual‑fuel retrofitting & energy solutions</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 1.5rem 4rem; /* top padding for fixed navbar */
        }

        /* Video Background */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .video-background iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 177.78vh;
          min-width: 100%;
          height: 56.25vw;
          min-height: 100%;
          transform: translate(-50%, -50%);
          border: none;
        }

        /* Overlay */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1;
        }

        /* Content */
        .service-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .service-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        h1 {
          font-size: 3rem;
          color: white;
          margin-bottom: 0.5rem;
        }
        .tagline {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.7);
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 1.8rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.2);
        }
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .service-card h3 {
          font-size: 1.6rem;
          color: white;
          margin-bottom: 0.75rem;
        }
        .service-card p {
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .feature-list li {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          padding: 0.25rem 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .service-hero {
            padding: 100px 1rem 2rem;
          }
          h1 {
            font-size: 2.2rem;
          }
          .tagline {
            font-size: 1rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}