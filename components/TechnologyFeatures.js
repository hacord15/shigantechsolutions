// components/TechnologyFeatures.js
export default function TechnologyFeatures() {
    const features = [
      { icon: 'fas fa-microchip', label: 'MPFI System (+15% Efficiency)' },
      { icon: 'fas fa-chart-line', label: 'Closed Loop Control' },
      { icon: 'fas fa-shield-alt', label: 'Engine Protection' },
      { icon: 'fas fa-tachometer-alt', label: 'Speed Limiter' },
      { icon: 'fas fa-diagnoses', label: 'OBD-II Diagnostic' },
    ];
  
    return (
      <section className="section">
        <div className="container">
          <h2>Advanced Technology Features</h2>
          <div className="tech-list">
            {features.map((feat, idx) => (
              <span key={idx} className="tech-item">
                <i className={feat.icon}></i> {feat.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }