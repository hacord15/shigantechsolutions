'use client';

import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    bg: "https://www.fr8.in/blog/wp-content/uploads/2024/07/image-27.png",
    tag: '<i class="fas fa-bolt"></i> Innovative Engineering',
    title: 'Diesel to CNG<br>(monofuel)',
    desc: 'Small & medium range application. Achieved seamless output for 55 ton truck on monofuel CNG.',
    btnText: 'Get Started',
  },
  {
    bg: 'https://img.freepik.com/premium-photo/lng-vessel-crossing-atlantic-ocean_1351224-8022.jpg?semt=ais_hybrid&w=740&q=80',
    tag: '<i class="fas fa-truck"></i> Public Transport Innovation',
    title: 'Diesel to LNG<br>(monofuel)',
    desc: 'Crafted for long haul heavy duty application. Achieved 60 ton on monofuel LNG.',
    btnText: 'Explore Solutions',
  },
  {
    bg: ' /assests/futurefuels_lng-system.jpg',
    tag: '<i class="fas fa-train"></i> Railway Transformation',
    title: 'Dual fuel system<br>(Diesel + CNG/LNG)',
    desc: 'Engineered for locomotives and heavy applications like HEMM.',
    btnText: 'View Projects',
  },
];

const HeroSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const total = slides.length;
  const wrapperRef = useRef(null);
  const autoplayRef = useRef(null);

  const goToSlide = (index) => {
    const newIndex = (index + total) % total;
    setCurrentIdx(newIndex);
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  const nextSlide = () => goToSlide(currentIdx + 1);
  const prevSlide = () => goToSlide(currentIdx - 1);

  useEffect(() => {
    goToSlide(0);
    autoplayRef.current = setInterval(() => nextSlide(), 5500);
    return () => clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    const container = document.querySelector('.slider-container');
    const handleMouseEnter = () => clearInterval(autoplayRef.current);
    const handleMouseLeave = () => {
      autoplayRef.current = setInterval(() => nextSlide(), 5500);
    };
    container?.addEventListener('mouseenter', handleMouseEnter);
    container?.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container?.removeEventListener('mouseenter', handleMouseEnter);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Touch events
  useEffect(() => {
    const container = document.querySelector('.slider-container');
    let touchStart = 0;
    const handleTouchStart = (e) => (touchStart = e.changedTouches[0].screenX);
    const handleTouchEnd = (e) => {
      const touchEnd = e.changedTouches[0].screenX;
      if (touchEnd < touchStart - 50) nextSlide();
      if (touchEnd > touchStart + 50) prevSlide();
    };
    container?.addEventListener('touchstart', handleTouchStart);
    container?.addEventListener('touchend', handleTouchEnd);
    return () => {
      container?.removeEventListener('touchstart', handleTouchStart);
      container?.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section className="hero-slider">
      <div className="slider-container">
        <div className="slider-wrapper" ref={wrapperRef}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="slide"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              <div className="slide-content">
                <span
                  className="slide-tag"
                  dangerouslySetInnerHTML={{ __html: slide.tag }}
                />
                <h2 dangerouslySetInnerHTML={{ __html: slide.title }} />
                <p>{slide.desc}</p>
                <a href="#" className="btn btn-primary">
                  {slide.btnText} <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-btn btn-prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-btn btn-next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="dots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === currentIdx ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;