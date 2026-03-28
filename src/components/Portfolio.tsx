import './Portfolio.css'

export default function Portfolio() {
  const shortFormDriveVideos = [
    {
      title: 'Short-Form Video 1',
      href: 'https://drive.google.com/file/d/1VNEj07cDHBfxegdeYyK89-pkjy1D_iEZ/view?usp=drive_link',
      thumbnail: 'https://drive.google.com/thumbnail?id=1VNEj07cDHBfxegdeYyK89-pkjy1D_iEZ&sz=w1200'
    },
    {
      title: 'Short-Form Video 2',
      href: 'https://drive.google.com/file/d/1kKiJaFvGm8_4yYEVRMLRix2g7cZ0BTYG/view?usp=drive_link',
      thumbnail: 'https://drive.google.com/thumbnail?id=1kKiJaFvGm8_4yYEVRMLRix2g7cZ0BTYG&sz=w1200'
    },
    {
      title: 'Short-Form Video 3',
      href: 'https://drive.google.com/file/d/1hknMn3u3g2wHc14G0UNDrbScx62moUGH/view?usp=sharing',
      thumbnail: 'https://drive.google.com/thumbnail?id=1hknMn3u3g2wHc14G0UNDrbScx62moUGH&sz=w1200'
    },
    {
      title: 'Short-Form Video 4',
      href: 'https://drive.google.com/file/d/1ag00kfuDIss2Je7vK6YVAMpTeG0f5Ij0/view?usp=sharing',
      thumbnail: 'https://drive.google.com/thumbnail?id=1ag00kfuDIss2Je7vK6YVAMpTeG0f5Ij0&sz=w1200'
    },
    {
      title: 'Short-Form Video 5',
      href: 'https://drive.google.com/file/d/1a2BiaP6JUCM3A-byI2QxDSrHRdB8-XLE/view?usp=drive_link',
      thumbnail: 'https://drive.google.com/thumbnail?id=1a2BiaP6JUCM3A-byI2QxDSrHRdB8-XLE&sz=w1200'
    },
    {
      title: 'Short-Form Video 6',
      href: 'https://drive.google.com/file/d/1Foz7R-1TqyoxTK8UA_nmS2pDhACTCHBK/view?usp=sharing',
      thumbnail: 'https://drive.google.com/thumbnail?id=1Foz7R-1TqyoxTK8UA_nmS2pDhACTCHBK&sz=w1200'
    }
  ]

  const motionDriveVideos = [
    {
      title: 'Motion Video 1',
      href: 'https://drive.google.com/file/d/19djj7ArXV0Vl8-aFEUgv8BI-_IMcNmGx/view?usp=sharing',
      thumbnail: 'https://drive.google.com/thumbnail?id=19djj7ArXV0Vl8-aFEUgv8BI-_IMcNmGx&sz=w1200'
    },
    {
      title: 'Motion Video 2',
      href: 'https://drive.google.com/file/d/1dLKU9yCgHWVWWqtedXRfgum5Hkz4ZORN/view?usp=sharing',
      thumbnail: 'https://drive.google.com/thumbnail?id=1dLKU9yCgHWVWWqtedXRfgum5Hkz4ZORN&sz=w1200'
    },
    {
      title: 'Motion Video 3',
      href: 'https://drive.google.com/file/d/1IMu5haCgc33iy7CSKftUSs2qSnRrjdKS/view?usp=sharing',
      thumbnail: 'https://drive.google.com/thumbnail?id=1IMu5haCgc33iy7CSKftUSs2qSnRrjdKS&sz=w1200'
    },
    {
      title: 'Motion Video 4',
      href: 'https://drive.google.com/file/d/1ZiDAKf886wW5gFxOXd6VkeWEU1XgKmSE/view?usp=sharing',
      thumbnail: 'https://drive.google.com/thumbnail?id=1ZiDAKf886wW5gFxOXd6VkeWEU1XgKmSE&sz=w1200'
    }
  ]

  const longFormDriveVideos = [
    {
      title: 'Long-Form Video 1',
      href: 'https://drive.google.com/file/d/1_xbAgoZc9DAIhXyxq6Aq7WhdZeF9JqWv/view?usp=sharing',
      thumbnail: 'https://drive.google.com/thumbnail?id=1_xbAgoZc9DAIhXyxq6Aq7WhdZeF9JqWv&sz=w1200'
    },
    {
      title: 'Long-Form Video 2',
      href: 'https://drive.google.com/file/d/1Cc4b2JF77qStGq9slGvQd-2MRIa_L7j_/view?usp=sharing',
      thumbnail: 'https://drive.google.com/thumbnail?id=1Cc4b2JF77qStGq9slGvQd-2MRIa_L7j_&sz=w1200'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">My Work</h2>

        {/* WHO IS ANISH Section */}
        <div className="who-is-anish-section">
          <h3 className="section-subtitle">WHO IS ANISH?</h3>
          <div className="who-is-anish-content featured-reels">
            <iframe
              src="https://www.instagram.com/p/DLWdZcTRvwu/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Who is Anish"
            />
          </div>
        </div>

        {/* SHORT-FORM Subsection */}
        <div className="shortform-subsection">
          <h3 className="subsection-title">SHORT-FORM</h3>
          <p className="subsection-subtitle">
            Vertical content for social media platforms
          </p>

          <div className="shortform-drive-grid" aria-label="Short-form drive videos">
            {shortFormDriveVideos.map((video) => (
              <a
                key={video.href}
                className="shortform-drive-card"
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={video.title}
              >
                <div className="shortform-drive-thumb-wrap">
                  <img src={video.thumbnail} alt={video.title} loading="lazy" className="shortform-drive-thumb" />
                  <span className="shortform-drive-play">▶</span>
                </div>
                <span className="shortform-drive-title">{video.title}</span>
              </a>
            ))}
          </div>

        </div>

        {/* MOTION Subsection */}
        <div className="motion-subsection">
          <h3 className="subsection-title">MOTION</h3>
          <p className="subsection-subtitle">
            Motion design and animation edits
          </p>

          <div className="shortform-drive-grid" aria-label="Motion drive videos">
            {motionDriveVideos.map((video) => (
              <a
                key={video.href}
                className="shortform-drive-card"
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={video.title}
              >
                <div className="shortform-drive-thumb-wrap">
                  <img src={video.thumbnail} alt={video.title} loading="lazy" className="shortform-drive-thumb" />
                  <span className="shortform-drive-play">▶</span>
                </div>
                <span className="shortform-drive-title">{video.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* LONG-FORM Subsection */}
        <div className="longform-subsection">
          <h3 className="subsection-title">LONG-FORM</h3>
          <p className="subsection-subtitle">
            Extended edits for storytelling and deep engagement
          </p>

          <div className="longform-drive-grid" aria-label="Long-form drive videos">
            {longFormDriveVideos.map((video) => (
              <a
                key={video.href}
                className="longform-drive-card"
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={video.title}
              >
                <div className="longform-drive-thumb-wrap">
                  <img src={video.thumbnail} alt={video.title} loading="lazy" className="shortform-drive-thumb" />
                  <span className="shortform-drive-play">▶</span>
                </div>
                <span className="shortform-drive-title">{video.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* COLOR GRADING Subsection */}
        <div className="colorgrading-subsection">
          <h3 className="subsection-title">COLOR GRADING</h3>
          <p className="subsection-subtitle">
            Professional color correction and cinematic grading
          </p>

          {/* Featured Color Grading Posts */}
          <div className="featured-grading">
            <iframe
              src="https://www.instagram.com/reel/DFvWHJMTeW7/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Color Grading 1"
            />
            <iframe
              src="https://www.instagram.com/reel/DKyyjiKxpiX/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Color Grading 2"
            />
          </div>
        </div>

        {/* TRAVEL-VLOGGING Subsection */}
        <div className="travelvlogging-subsection">
          <h3 className="subsection-title">TRAVEL-VLOGGING</h3>
          <p className="subsection-subtitle">
            Travel moments edited into engaging visual stories
          </p>

          <div className="featured-travel">
            <iframe
              src="https://www.instagram.com/reel/DR48-1SD8Kg/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Travel Vlog 1"
            />
            <iframe
              src="https://www.instagram.com/reel/DSGTu3dkcXO/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Travel Vlog 2"
            />
            <iframe
              src="https://www.instagram.com/reel/DPVdDnUkTRA/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Travel Vlog 3"
            />
            <iframe
              src="https://www.instagram.com/reel/DKwU4jFxM2I/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Travel Vlog 4"
            />
          </div>
        </div>

        {/* PERSONAL WORK Subsection */}
        <div className="personalwork-subsection">
          <h3 className="subsection-title">PERSONAL WORK</h3>
          <p className="subsection-subtitle">
            Creative experiments and passion projects
          </p>

          <div className="featured-personal">
            <iframe
              src="https://www.instagram.com/p/DMxnz4dxz6u/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Personal Work 1"
            />
            <iframe
              src="https://www.instagram.com/p/DNdO4YCxylt/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Personal Work 2"
            />
            <iframe
              src="https://www.instagram.com/p/DL2fxMXv8MT/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Personal Work 3"
            />
            <iframe
              src="https://www.instagram.com/p/DR82HMHEXKW/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Personal Work 4"
            />
          </div>
        </div>

        <div className="portfolio-cta">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
