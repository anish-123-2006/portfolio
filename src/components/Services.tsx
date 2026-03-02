import {
  FiFilm,
  FiTrendingUp,
  FiZap,
  FiSettings,
  FiAward,
  FiPackage,
} from 'react-icons/fi'
import './Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: FiFilm,
      title: 'VIDEO EDITING',
      description:
        'Professional cutting, pacing, and storytelling for YouTube, reels, and social media content.',
    },
    {
      id: 2,
      icon: FiTrendingUp,
      title: 'MOTION GRAPHICS',
      description:
        'Clean text animations, titles, and simple motion graphics to enhance videos.',
    },
    {
      id: 3,
      icon: FiZap,
      title: 'VISUAL EFFECTS',
      description: 'Basic cinematic effects, transitions, and visual enhancements.',
    },
    {
      id: 4,
      icon: FiSettings,
      title: 'COLOR GRADING',
      description: 'Color correction and cinematic color grading for polished visuals.',
    },
    {
      id: 5,
      icon: FiAward,
      title: 'AUDIO CLEANUP',
      description: 'Basic audio cleaning, leveling, and background music mixing.',
    },
    {
      id: 6,
      icon: FiPackage,
      title: 'EXPORT & DELIVERY',
      description:
        'High-quality exports optimized for YouTube, Instagram, and other platforms.',
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Comprehensive video production solutions tailored to your needs
        </p>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <IconComponent size={40} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-accent"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
