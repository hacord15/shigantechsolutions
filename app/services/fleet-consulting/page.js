// app/services/fleet-consulting/page.js
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Fleet Consulting | Shigan TechSolutions',
  description: 'Expert fleet consulting for alternative fuel adoption. Feasibility studies, ROI analysis, fuel infrastructure planning, and transition management.',
};

export default function FleetConsultingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.tag}>Fleet Consulting</span>
          <h1>Your <span className={styles.highlight}>Strategic Partner</span></h1>
          <p>End‑to‑end consulting for fleet transition to CNG, LNG, and dual‑fuel – from feasibility to full deployment</p>
        </div>
      </section>

      {/* Trust Badge with Logo */}
      <section className={styles.trustBadge}>
        <div className="container">
          <div className={styles.badgeContent}>
            <Image 
              src="/assests/Shigan-tech.jpg" 
              alt="Shigan TechSolutions" 
              width={120} 
              height={30} 
              priority
            />
            <p>Trusted by 500+ fleet operators across India</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.overview}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText}>
              <h2>Why Shigan Consulting?</h2>
              <p>Transitioning a fleet to alternative fuels requires careful planning, regulatory compliance, and infrastructure setup. Shigan’s consulting team brings decades of experience in helping fleet operators reduce costs and emissions with minimal disruption.</p>
              <ul className={styles.benefitList}>
                <li><i className="fas fa-check-circle"></i> Free initial feasibility assessment</li>
                <li><i className="fas fa-check-circle"></i> Detailed ROI and payback analysis</li>
                <li><i className="fas fa-check-circle"></i> Fuel station infrastructure planning</li>
                <li><i className="fas fa-check-circle"></i> Driver and technician training programs</li>
              </ul>
            </div>
            <div className={styles.overviewImage}>
              <img src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fleet Consulting" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <i className="fas fa-chart-line"></i>
              <h3>Feasibility Studies</h3>
              <p>Technical and economic assessment of your fleet’s suitability for CNG/LNG/dual‑fuel.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-calculator"></i>
              <h3>ROI & TCO Analysis</h3>
              <p>Detailed calculations of fuel savings, payback period, and total cost of ownership.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-gas-pump"></i>
              <h3>Infrastructure Planning</h3>
              <p>Design and layout of on‑site or depot‑based CNG/LNG refueling stations.</p>
            </div>
            <div className={styles.featureCard}>
              <i className="fas fa-clipboard-list"></i>
              <h3>Regulatory Compliance</h3>
              <p>Assistance with permits, approvals, and compliance with local emission norms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Consulting Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>01</span>
              <h3>Assessment</h3>
              <p>Fleet audit, fuel usage analysis, and operational review.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>02</span>
              <h3>Proposal</h3>
              <p>Customised plan with technology options, cost estimates, and timelines.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>03</span>
              <h3>Implementation</h3>
              <p>Retrofit, infrastructure setup, and training execution.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>04</span>
              <h3>Support</h3>
              <p>Post‑deployment monitoring, maintenance, and continuous optimisation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Transform Your Fleet?</h2>
          <p>Book a free consultation with our alternative fuel experts today.</p>
          <Link href="/contact" className="btn btn-primary">Request a Callback →</Link>
        </div>
      </section>
    </main>
  );
}