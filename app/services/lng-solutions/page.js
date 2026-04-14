// app/services/lng-solutions/page.js
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'LNG Solutions | Shigan TechSolutions',
  description: 'OEM-standard LNG mono-fuel and dual-fuel retrofit solutions for long-haul heavy-duty applications. Reduce costs and emissions with Shigan’s proven LNG technology.',
};

export default function LngSolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.tag}>LNG Solutions</span>
          <h1>Power for the <span className={styles.highlight}>Long Haul</span></h1>
          <p>OEM‑standard LNG mono‑fuel and dual‑fuel retrofit systems for heavy‑duty trucks, locomotives, and marine vessels</p>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overview}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <h2>Why LNG?</h2>
              <p>Liquefied Natural Gas (LNG) offers higher energy density than CNG, making it ideal for long‑haul and heavy‑duty applications. Shigan’s LNG retrofit solutions deliver uncompromised performance, extended range, and significant operational savings.</p>
              <ul className={styles.benefitList}>
                <li><i className="fas fa-check-circle"></i> Up to 40% reduction in fuel costs</li>
                <li><i className="fas fa-check-circle"></i> Extended driving range (800‑1200 km per fill)</li>
                <li><i className="fas fa-check-circle"></i> Lower CO₂, NOx, and particulate emissions</li>
                <li><i className="fas fa-check-circle"></i> Seamless mono‑fuel or dual‑fuel switching</li>
              </ul>
            </div>
            <div className={styles.overviewImage}>
              <img src="https://images.pexels.com/photos/2973629/pexels-photo-2973629.jpeg?auto=compress&cs=tinysrgb&w=600" alt="LNG Truck" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Advanced LNG Technology</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <i className="fas fa-temperature-low"></i>
              <h3>Cryogenic Tank Integration</h3>
              <p>High‑efficiency vacuum‑insulated tanks with safe pressure management.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-charging-station"></i>
              <h3>High‑Pressure Fuel Delivery</h3>
              <p>Precise injection for optimal combustion and power output.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-microchip"></i>
              <h3>Smart ECU</h3>
              <p>Real‑time adaptive control for seamless diesel‑LNG switching.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-shield-alt"></i>
              <h3>Multi‑Layer Safety</h3>
              <p>Leak detection, pressure relief, and automatic shut‑off systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className={styles.applications}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Ideal for Heavy‑Duty Applications</h2>
          <div className={styles.appGrid}>
            <div className={styles.appCard}>
              <i className="fas fa-truck-moving"></i>
              <h3>Long‑Haul Trucks</h3>
              <p>60‑ton capacity, 1200km range – proven on Indian highways.</p>
            </div>
            <div className={styles.appCard}>
              <i className="fas fa-train"></i>
              <h3>Railway Locomotives</h3>
              <p>High‑horsepower LNG systems for mainline and shunting.</p>
            </div>
            <div className={styles.appCard}>
              <i className="fas fa-ship"></i>
              <h3>Marine Vessels</h3>
              <p>IMO‑compliant LNG conversion for inland and coastal ships.</p>
            </div>
            <div className={styles.appCard}>
              <i className="fas fa-industry"></i>
              <h3>Stationary Engines</h3>
              <p>Generator sets and industrial engines – reliable, clean power.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Switch to LNG?</h2>
          <p>Contact our experts for a free feasibility study and ROI analysis.</p>
          <Link href="/contact" className="btn btn-primary">Get a Quote →</Link>
        </div>
      </section>
    </main>
  );
}