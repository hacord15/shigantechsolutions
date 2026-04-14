// components/OemLogos.js
'use client';

const OemLogos = () => {
  // Array of external image URLs for customer logos (working placeholders)
  const logoUrls = [
    'https://picsum.photos/id/104/120/60',  // TATA (random)
    'https://picsum.photos/id/106/120/60',  // HINO
    'https://picsum.photos/id/107/120/60',  // VOLVO
    'https://picsum.photos/id/108/120/60',  // Mahindra
    'https://picsum.photos/id/116/120/60',  // ASHOK
    'https://picsum.photos/id/119/120/60',  // VE
    'https://picsum.photos/id/121/120/60',  // GSRTC
    'https://picsum.photos/id/123/120/60',  // Municipal
    'https://picsum.photos/id/124/120/60',  // DelhiTransport
    'https://picsum.photos/id/125/120/60',  // IndianRailway
    'https://picsum.photos/id/126/120/60',  // Honda
    'https://picsum.photos/id/127/120/60',  // Cummins
    'https://picsum.photos/id/128/120/60',  // Greaves
    'https://picsum.photos/id/129/120/60',  // Escorts
    'https://picsum.photos/id/130/120/60',  // AVL
    'https://picsum.photos/id/131/120/60',  // Briggs
    'https://picsum.photos/id/132/120/60',  // Avtec
    'https://picsum.photos/id/133/120/60'   // EICHER
  ];

  // Duplicate array for seamless infinite scroll
  const allLogos = [...logoUrls, ...logoUrls];

  return (
    <section className="oem-logos-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Customers</h2>
        </div>
        <div className="oem-logos-slider">
          <div className="logos-track">
            {allLogos.map((url, idx) => (
              <div className="logo-item" key={idx}>
                <img 
                  src={url} 
                  alt={`Customer logo ${idx + 1}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/120x60?text=Logo';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OemLogos;