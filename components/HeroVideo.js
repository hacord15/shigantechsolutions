'use client';

const HeroVideo = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Vimeo iframe — autoplay, muted, looped, background mode */}
      <iframe
        src="https://player.vimeo.com/video/1165936849?h=cf30f305c6&autoplay=1&loop=1&muted=1&background=1&autopause=0&controls=0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '177.78vh',   /* 16:9 ratio — ensures full coverage */
          minWidth: '100%',
          height: '56.25vw',   /* 16:9 ratio */
          minHeight: '100%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          pointerEvents: 'none',
        }}
        title="Hero background video"
      />

      {/* Optional dark overlay so any overlaid text stays readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.35)',
          zIndex: 1,
        }}
      />

      {/* ── Slot for hero copy / CTA — remove or customise as needed ── */}
      {/* 
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: '#fff',
          textAlign: 'center',
          padding: '0 1.5rem',
        }}
      >
        <h1>Your Headline Here</h1>
        <p>Supporting copy.</p>
      </div>
      */}
    </section>
  );
};

export default HeroVideo;