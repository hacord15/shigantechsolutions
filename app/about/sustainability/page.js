// app/about/sustainability/page.js
import styles from './page.module.css';

export const metadata = {
  title: 'Sustainability | Shigan TechSolutions',
  description: 'Our commitment to environmental stewardship, social responsibility, and sustainable engineering practices.',
};

export default function SustainabilityPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroTag}>Our Commitment</span>
          <h1>Driving a <span className={styles.highlight}>Sustainable Future</span></h1>
          <p>Environmental stewardship, social responsibility, and ethical governance</p>
        </div>
      </section>

      {/* Core Principles */}
      <section className={styles.principles}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our ESG Framework</h2>
          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <i className="fas fa-globe-asia"></i>
              <h3>Environmental</h3>
              <p>Reducing carbon emissions through clean fuel retrofitting and sustainable manufacturing practices.</p>
            </div>
            <div className={styles.principleCard}>
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Social</h3>
              <p>Empowering communities with clean mobility, safety training, and inclusive workforce development.</p>
            </div>
            <div className={styles.principleCard}>
              <i className="fas fa-chart-line"></i>
              <h3>Governance</h3>
              <p>Transparent operations, ethical sourcing, and compliance with global sustainability standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className={styles.impact}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Tons CO₂ reduced annually</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>25,000+</span>
              <span className={styles.statLabel}>Vehicles retrofitted</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>40%</span>
              <span className={styles.statLabel}>Average fuel cost savings</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Renewable energy at HQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className={styles.initiatives}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Key Initiatives</h2>
          <div className={styles.initiativesGrid}>
            <div className={styles.initiative}>
              <div className={styles.initiativeIcon}>
                <i className="fas fa-recycle"></i>
              </div>
              <h3>Zero Waste Manufacturing</h3>
              <p>Our facilities recycle 95% of production waste and use closed-loop water systems.</p>
            </div>
            <div className={styles.initiative}>
              <div className={styles.initiativeIcon}>
                <i className="fas fa-tree"></i>
              </div>
              <h3>Carbon Neutral Goal</h3>
              <p>Committed to achieving carbon neutrality across our operations by 2030.</p>
            </div>
            <div className={styles.initiative}>
              <div className={styles.initiativeIcon}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Skill Development</h3>
              <p>Trained 5,000+ technicians in alternative fuel systems, creating green jobs.</p>
            </div>
            <div className={styles.initiative}>
              <div className={styles.initiativeIcon}>
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Afforestation Drive</h3>
              <p>Planted 50,000+ trees in partnership with local communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={styles.certifications}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Certifications & Accreditations</h2>
          <div className={styles.certsGrid}>
            <div className={styles.certCard}>
              <i className="fas fa-certificate"></i>
              <p>ISO 14001:2025</p>
              <span>Environmental Management</span>
            </div>
            <div className={styles.certCard}>
              <i className="fas fa-certificate"></i>
              <p>ISO 50001:2025</p>
              <span>Energy Management</span>
            </div>
            <div className={styles.certCard}>
              <i className="fas fa-certificate"></i>
              <p>GREP Compliant</p>
              <span>Green Rating</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}