import './About.css'

export default function About() {
  const skills = [
    'Video Editing',
    'Color Correction',
    'Motion Graphics (Basic)',
    'Cinematic Transitions',
    'Audio Cleanup',
    'Storytelling Through Editing',
  ]

  const software = [
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'Basic Photoshop',
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-intro">
             PASSIONATE VIDEO EDITOR FOCUSED ON CREATING ENGAGING DIGITAL CONTENT
            </p>

            <p className="about-description">
              I’m a passionate video editor who enjoys transforming raw footage into engaging visual stories. I specialize in editing content for YouTube, social media, and short-form videos using tools like Adobe Premiere Pro and After Effects.

I focus on clean cuts, smooth pacing, modern transitions, and simple motion graphics to make videos more engaging and professional. I am continuously improving my editing and storytelling skills while working on creative projects and personal edits.
            </p>

            <p className="about-description">
              My goal is to help creators and brands present their content in a more polished, cinematic, and impactful way.
            </p>
          </div>

          <div className="about-skills">
            <h3 className="skills-title">KEY SKILLS</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  • {skill}
                </div>
              ))}
            </div>

            <h3 className="software-title">SOFTWARE</h3>
            <div className="software-list">
              {software.map((soft, index) => (
                <div key={index} className="software-item">
                  • {soft}
                </div>
              ))}
            </div>

            <div className="about-cta">
              <p className="about-quote">
                "Creating visual excellence is not just my profession, it's my passion."
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
