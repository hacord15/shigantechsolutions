// app/about/our-story/page.js
import Link from 'next/link';
import styles from './page.module.css';   // import the CSS module

export const metadata = {
  title: 'Our Story | Shigan TechSolutions',
  description: 'Learn about Shigan TechSolutions journey, mission, and vision in pioneering clean fuel retrofit solutions.',
};

export default function OurStoryPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div>
            <span className={styles.tag}>Our Journey</span>
            <h1>Engineering a <span className={styles.highlight}>Cleaner Tomorrow</span></h1>
            <p>From humble beginnings to becoming India's trusted leader in alternative fuel retrofitting</p>
          </div>
        </div>
      </section>

      {/* Story Intro */}
      <section className="section">
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.text}>
              <h2>The Shigan Story</h2>
              <p>Founded with a vision to revolutionize the automotive retrofit industry, Shigan TechSolutions has grown from a small engineering workshop into a technology-driven powerhouse. Our journey began over 25 years ago as part of the Shigan Group, with a focus on precision manufacturing and innovation.</p>
              <p>Today, we stand at the forefront of India's clean fuel transition, having successfully retrofitted thousands of vehicles across automotive, locomotive, marine, and off-highway sectors. Our OEM-standard mono-fuel and dual-fuel systems are trusted by industry giants including TATA Motors, Ashok Leyland, and Indian Railways.</p>
              <p>We believe that the future of mobility is sustainable, and our mission is to make that future accessible today.</p>
            </div>
            <div className={styles.image}>
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Shigan TechSolutions facility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`${styles.missionVision} section`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}><i className="fas fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>To empower fleet operators and industries with cutting-edge, cost-effective alternative fuel solutions that reduce emissions and operational costs while maintaining OEM-grade performance and safety.</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}><i className="fas fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>To be the global leader in clean mobility retrofitting, driving the transition to a carbon-neutral transportation ecosystem through innovation, quality, and partnerships.</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}><i className="fas fa-heart"></i></div>
              <h3>Our Values</h3>
              <p>Integrity, Engineering Excellence, Customer-Centricity, Sustainability, and Continuous Innovation are the pillars that guide everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Key Milestones</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <span className={styles.year}>1998</span>
                <h4>Foundation of Shigan Group</h4>
                <p>Started as a precision engineering and manufacturing company serving automotive OEMs.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <span className={styles.year}>2015</span>
                <h4>Foray into Alternative Fuels</h4>
                <p>Began R&D on CNG retrofit systems for commercial vehicles.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <span className={styles.year}>2018</span>
                <h4>First Large-Scale Deployment</h4>
                <p>Successfully retrofitted 500+ state transport buses with CNG kits.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <span className={styles.year}>2021</span>
                <h4>LNG & Dual Fuel Solutions</h4>
                <p>Launched LNG mono-fuel and diesel-CNG/LNG dual fuel systems for heavy-duty applications.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <span className={styles.year}>2024</span>
                <h4>Railways & Marine Expansion</h4>
                <p>Received approvals for locomotive and marine retrofit solutions, expanding to new sectors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Leadership</h2>
          <div className={styles.leadershipGrid}>
            <div className={styles.leaderCard}>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" className={styles.leaderImg} />
              <h4>Rajesh Sharma</h4>
              <p className={styles.title}>Managing Director</p>
              <p>25+ years in automotive engineering, former VP at Tata Motors.</p>
            </div>
            <div className={styles.leaderCard}>
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="CTO" className={styles.leaderImg} />
              <h4>Priya Mehta</h4>
              <p className={styles.title}>Chief Technology Officer</p>
              <p>PhD in Alternative Fuel Systems, 15+ patents in clean tech.</p>
            </div>
            <div className={styles.leaderCard}>
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="COO" className={styles.leaderImg} />
              <h4>Ankit Verma</h4>
              <p className={styles.title}>Chief Operating Officer</p>
              <p>Ex-Mahindra & Mahindra, operations and supply chain expert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div>
            <h2>Be Part of Our Journey</h2>
            <p>Join us in driving India's clean fuel revolution.</p>
            <Link href="/#contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}