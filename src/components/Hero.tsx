import './Hero.css'

export default function Hero() {
  const tags = [
    { text: 'CINEMATOGRAPHY', fill: false, rotationAngle: -15, delay: 0 },
    { text: 'EDITING', fill: true, rotationAngle: -8, delay: 0.1 },
    { text: 'MOTION GRAPHICS', fill: false, rotationAngle: -3, delay: 0.2 },
    { text: 'PROFESSIONAL', fill: true, rotationAngle: 5, delay: 0.3 },
    { text: 'VFX', fill: false, rotationAngle: 12, delay: 0.4 },
    { text: 'STORYTELLING', fill: false, rotationAngle: -10, delay: 0.5 },
    { text: 'COLOR GRADING', fill: true, rotationAngle: 8, delay: 0.6 },
    { text: 'CINEMATIC', fill: true, rotationAngle: -12, delay: 0.7 },
    { text: 'POST-PRODUCTION', fill: false, rotationAngle: 6, delay: 0.8 },
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="interactive-gradient"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-main-title">ANISH</h1>
          <h2 className="hero-main-title-sub">AGRAWAL</h2>

          <div className="tags-container">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`floating-tag ${tag.fill ? 'filled' : 'outlined'}`}
                style={{
                  animationDelay: `${tag.delay}s`,
                  transform: `rotate(${tag.rotationAngle}deg)`,
                }}
              >
                <span className="tag-text">{tag.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}
