// components/BlogSection.js
export default function BlogSection() {
    const posts = [
      {
        img: '/assests/container-truck-ship-port-business-260nw-2416274335.webp',
        title: 'Exporters Achieve Cost Savings Throughout',
        date: 'Feb 28, 2026',
        comments: 24,
      },
      {
        img: 'https://images.pexels.com/photos/6334495/pexels-photo-6334495.jpeg',
        title: 'Deliveright Logistics Expands Service to West',
        date: 'Feb 28, 2026',
        comments: 24,
      },
      {
        img: 'https://images.pexels.com/photos/6334503/pexels-photo-6334503.jpeg',
        title: 'Software May Be Best Bet to Conquer Final Mile',
        date: 'Feb 28, 2026',
        comments: 24,
      },
    ];
  
    return (
      <section className="blog-section">
        <div className="container">
          <div className="blog-header">
            <h2>
              Latest Articles <span style={{ color: 'var(--accent)' }}>Updated Daily</span>
            </h2>
            <a href="#" className="btn btn-primary" style={{ background: 'var(--accent)' }}>
              More Detail <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="blog-grid">
            {posts.map((post, idx) => (
              <div key={idx} className="blog-card">
                <img className="blog-img" src={post.img} alt="blog" />
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>
                      <i className="far fa-calendar-alt"></i> {post.date}
                    </span>
                    <span>
                      <i className="far fa-comment"></i> {post.comments} Comments
                    </span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <a href="#" className="blog-link">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }