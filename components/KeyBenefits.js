// components/KeyBenefits.js
export default function KeyBenefits() {
    const benefits = [
      { badge: '25-35%', title: 'Lower Operation Cost' },
      { badge: '10% Better', title: 'Fuel Efficiency' },
      { badge: 'Reduced', title: 'Carbon Emissions' },
      { badge: 'OEM Standard', title: 'Quality & Genuine Parts' },
      { badge: 'Longer', title: 'Engine Life' },
    ];
  
    return (
      <section className="section">
        <div className="container">
          <h2>Key Benefits ⚡</h2>
          <div className="grid-5">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card">
                <span className="badge">{benefit.badge}</span>
                <h3>{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }