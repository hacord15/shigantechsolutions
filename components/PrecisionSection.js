// components/PrecisionSection.js
export default function PrecisionSection() {
    return (
      <section className="precision-section">
        <div className="container">
          <div className="precision-grid">
            <div>
              <div className="precision-tag">
                <i className="fas fa-microchip"></i> Who We Are
              </div>
              <h2 className="precision-title">High-Precision Engineering Solutions</h2>
              <p className="precision-text">
                We are a global leader in high-precision engineering solutions, specializing in the manufacturing
                of complex products. Our offerings include <strong>build-to-print</strong> and{' '}
                <strong>build-to-specifications</strong>, covering machining, fabrication, assembly, testing, and
                custom-engineered solutions tailored to specific client requirements.
              </p>
              <a href="#" className="precision-btn">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="precision-video">
              <iframe
                src="https://player.vimeo.com/video/1165936849?h=cf30f305c6&autoplay=1&loop=0&muted=1"
                title="Corporate Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }