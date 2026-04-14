// app/services/dual-fuel/page.js
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Dual Fuel Systems | Shigan TechSolutions',
  description: 'Diesel-CNG/LNG dual fuel retrofit solutions for heavy-duty vehicles, locomotives, and off-highway equipment. Seamless switching with up to 60% diesel replacement.',
};

export default function DualFuelPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.tag}>Dual Fuel Systems</span>
          <h1>Best of <span className={styles.highlight}>Both Worlds</span></h1>
          <p>Seamless diesel‑CNG/LNG dual fuel technology – retain diesel backup while saving fuel and reducing emissions</p>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overview}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <h2>Why Dual Fuel?</h2>
              <p>Shigan’s dual fuel systems allow diesel engines to operate on a mixture of diesel and natural gas (CNG or LNG), replacing up to 60% of diesel with cleaner, cheaper gas. Perfect for fleets that need flexibility – switch seamlessly between dual fuel and 100% diesel mode.</p>
              <ul className={styles.benefitList}>
                <li><i className="fas fa-check-circle"></i> Up to 60% diesel replacement</li>
                <li><i className="fas fa-check-circle"></i> 25‑35% reduction in operating costs</li>
                <li><i className="fas fa-check-circle"></i> Lower CO₂, NOx, and particulate matter</li>
                <li><i className="fas fa-check-circle"></i> Seamless on‑the‑fly mode switching</li>
              </ul>
            </div>
            <div className={styles.overviewImage}>
              <img src="https://images.pexels.com/photos/842540/pexels-photo-842540.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dual Fuel Engine" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Advanced Dual Fuel Technology</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <i className="fas fa-sync-alt"></i>
              <h3>Seamless Switching</h3>
              <p>Driver‑selectable or automatic transition between dual fuel and diesel mode.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-microchip"></i>
              <h3>Intelligent ECU</h3>
              <p>Real‑time gas injection control based on load, RPM, and temperature.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-chart-line"></i>
              <h3>Closed‑Loop Lambda Control</h3>
              <p>Optimises air‑fuel ratio for maximum efficiency and lowest emissions.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-shield-alt"></i>
              <h3>Engine Protection</h3>
              <p>Knock detection, over‑speed protection, and automatic diesel‑only fallback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className={styles.applications}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Ideal for Diverse Applications</h2>
          <div className={styles.appGrid}>
            <div className={styles.appCard}>
              <i className="fas fa-truck"></i>
              <h3>Commercial Vehicles</h3>
              <p>Buses, trucks, and prime movers – maximise fuel savings without range anxiety.</p>
            </div>
            <div className={styles.appCard}>
              <i className="fas fa-train"></i>
              <h3>Railway Locomotives</h3>
              <p>High‑horsepower dual fuel for freight and passenger trains.</p>
            </div>
            <div className={styles.appCard}>
              <i className="fas fa-ship"></i>
              <h3>Marine Vessels</h3>
              <p>Dual fuel for inland and coastal vessels – comply with emission norms.</p>
            </div>
            <div className={styles.appCard}>
              <i className="fas fa-hard-hat"></i>
              <h3>Off‑Highway & Mining</h3>
              <p>HEMM, excavators, and generators – robust design for harsh environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Upgrade to Dual Fuel Today</h2>
          <p>Get a free feasibility assessment and ROI calculation for your fleet.</p>
          <Link href="/contact" className="btn btn-primary">Contact Our Experts →</Link>
        </div>
      </section>
    </main>
  );
}