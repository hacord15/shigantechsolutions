// components/Services.js
export default function Services() {
    const services = [
      {
        img: 'https://images.pexels.com/photos/2914090/pexels-photo-2914090.jpeg',
        icon: 'fas fa-gas-pump',
        title: 'High-Capacity CNG / LNG',
        desc: 'Pioneering conversion for heavy logistics & Indian Railways.',
      },
      {
        img: 'https://images.pexels.com/photos/3042642/pexels-photo-3042642.jpeg',
        icon: 'fas fa-sync-alt',
        title: 'Dual Fuel Integration',
        desc: 'Diesel + CNG/LNG seamless switching for locomotives, HEMM.',
      },
      {
        img: 'https://images.pexels.com/photos/1309594/pexels-photo-1309594.jpeg',
        icon: 'fas fa-chart-line',
        title: 'BS-III / BS-IV Upgrades',
        desc: 'Extend engine life, reduce emissions with advanced calibration.',
      },
    ];
  
    return (
      <section id="services" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider font-semibold" style={{ color: 'var(--accent)', letterSpacing: '1px' }}>
              Premium Retrofit Solutions
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold mt-3"
              style={{
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Engineered for Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
              State-of-the-art conversion technologies delivering unmatched performance and savings
            </p>
          </div>
          <div className="services-big-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-big-card">
                <img className="service-bg-img" src={service.img} alt={service.title} />
                <div className="service-overlay"></div>
                <div className="service-card-content">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href="#" className="service-link">
                    Learn more <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }