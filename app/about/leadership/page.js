// app/about/leadership/page.js
import styles from './page.module.css';

export const metadata = {
  title: 'Leadership | Shigan TechSolutions',
  description: 'Meet the visionary leaders driving Shigan TechSolutions towards a cleaner, sustainable future.',
};

// ✅ Define the teamMembers array here
const teamMembers = [
  {
    name: "Rajesh Sharma",
    title: "Managing Director",
    bio: "25+ years in automotive engineering, former VP at Tata Motors. Leads strategic vision and growth.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://linkedin.com/in/rajesh-sharma",
    email: "rajesh@shigantech.com"
  },
  {
    name: "Priya Mehta",
    title: "Chief Technology Officer",
    bio: "PhD in Alternative Fuel Systems, 15+ patents in clean tech. Heads R&D and innovation.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "https://linkedin.com/in/priya-mehta",
    email: "priya@shigantech.com"
  },
  {
    name: "Ankit Verma",
    title: "Chief Operating Officer",
    bio: "Ex-Mahindra & Mahindra, operations and supply chain expert. Ensures excellence in delivery.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    linkedin: "https://linkedin.com/in/ankit-verma",
    email: "ankit@shigantech.com"
  },
  {
    name: "Neha Gupta",
    title: "VP, Sales & Marketing",
    bio: "20+ years in B2B sales, former director at Cummins. Drives customer acquisition and partnerships.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    linkedin: "https://linkedin.com/in/neha-gupta",
    email: "neha@shigantech.com"
  }
];

export default function LeadershipPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroTag}>Our Leaders</span>
          <h1>Meet the <span className={styles.highlight}>Visionaries</span></h1>
          <p>Driving innovation in clean mobility and engineering excellence</p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className={styles.leadershipSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Leadership Team</h2>
          <div className={styles.grid}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className={styles.card}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={styles.image} 
                />
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.title}>{member.title}</p>
                <p className={styles.bio}>{member.bio}</p>
                <div className={styles.socialLinks}>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`}>
                      <i className="fas fa-envelope"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}