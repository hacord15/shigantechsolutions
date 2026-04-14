import moduleName from 'module'

// components/IndustryFocus.js


export default function IndustryFocus() {
    const industries = [
      {
        img: '/assests/download.jpg',
        icon: 'fas fa-car',
        title: 'Automotive',
        desc: 'Fleet retrofitting for buses, trucks & prime movers.',
      },
      {
        img: '/assests/train.jpg',
        icon: 'fas fa-train',
        title: 'Locomotive',
        desc: 'High-pressure dual fuel systems with railway compliance.',
      },
      {
        img: '/assests/marine.jpg',
        icon: 'fas fa-ship',
        title: 'Marine',
        desc: 'Commercial vessels with marine-grade hardware.',
      },
      {
        img: '/assests/highway.jpg',
        icon: 'fas fa-hard-hat',
        title: 'Off-Highway',
        desc: 'Mining & construction equipment, extreme condition ready.',
      },
    ];
  
    return (
      <section className="section">
        <div className="container">
          <h2>Industry Focus 🌐</h2>
          <div className="industry-grid">
            {industries.map((item, idx) => (
              <div key={idx} className="industry-card">
                <img className="industry-img" src={item.img} alt={item.title} />
                <div className="industry-overlay"></div>
                <div className="industry-content">
                  <div className="industry-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }