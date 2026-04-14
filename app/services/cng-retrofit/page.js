// app/services/cng-retrofit/page.js
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'CNG Retrofit Solutions | Shigan TechSolutions',
  description: 'OEM-standard CNG retrofit kits for commercial vehicles, locomotives, and off-highway equipment. Reduce costs and emissions with Shigan’s proven technology.',
};

export default function CngRetrofitPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.tag}>CNG Retrofit</span>
          <h1>Convert to <span className={styles.highlight}>Cleaner Energy</span></h1>
          <p>OEM-standard mono‑fuel and dual‑fuel CNG retrofit solutions for heavy‑duty applications</p>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overview}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <h2>Why Choose CNG Retrofit?</h2>
              <p>Shigan’s CNG retrofit systems are engineered to deliver seamless power, fuel savings, and lower emissions without compromising engine performance. Our solutions are approved for commercial vehicles, state transport buses, locomotives, and off‑highway equipment.</p>
              <ul className={styles.benefitList}>
                <li><i className="fas fa-check-circle"></i> Up to 35% reduction in fuel costs</li>
                <li><i className="fas fa-check-circle"></i> Lower CO₂ and particulate emissions</li>
                <li><i className="fas fa-check-circle"></i> OEM‑grade components with warranty</li>
                <li><i className="fas fa-check-circle"></i> Seamless mono‑fuel or dual‑fuel operation</li>
              </ul>
            </div>
            <div className={styles.overviewImage}>
              <img src="https://images.pexels.com/photos/7897507/pexels-photo-7897507.jpeg?auto=compress&cs=tinysrgb&w=600" alt="CNG Retrofit Kit" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Advanced Technology Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <i className="fas fa-microchip"></i>
              <h3>MPFI System</h3>
              <p>Multi‑point fuel injection for precise air‑fuel ratio, improving efficiency by 15%.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-chart-line"></i>
              <h3>Closed‑Loop Control</h3>
              <p>Real‑time lambda feedback for optimal combustion and reduced emissions.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-shield-alt"></i>
              <h3>Engine Protection</h3>
              <p>Integrated knock detection and over‑speed protection for long engine life.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-tachometer-alt"></i>
              <h3>Speed Limiter</h3>
              <p>Compliant with government regulations for safe fleet operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className={styles.applications}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Applications</h2>
          <div className={styles.appGrid}>
            <div className={styles.appCard}>
              <i className="fas fa-truck"></i>
              <h3>Commercial Vehicles</h3>
              <p>Buses, trucks, and prime movers – retrofit for state transport and private fleets.</p>
            </div>
            <div className={styles.appCard}>
              <i className="fas fa-train"></i>
              <h3>Locomotives</h3>
              <p>High‑power CNG systems for railway shunting and mainline locomotives.</p>
            </div>
            <div className={styles.appCard}>
              <i className="fas fa-ship"></i>
              <h3>Marine</h3>
              <p>Corrosion‑resistant CNG kits for inland vessels and harbour craft.</p>
            </div>
            <div className={styles.appCard}>
              <i className="fas fa-hard-hat"></i>
              <h3>Off‑Highway</h3>
              <p>Mining and construction equipment – robust design for extreme conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Switch to CNG?</h2>
          <p>Contact our experts for a free feasibility assessment and savings estimate.</p>
          <Link href="/contact" className="btn btn-primary">Get a Quote →</Link>
        </div>
      </section>
    </main>
  );
}