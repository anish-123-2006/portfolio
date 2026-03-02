import './Portfolio.css'

export default function Portfolio() {
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

          {/* Featured Instagram Reels */}
          <div className="featured-reels">
            <iframe
              src="https://www.instagram.com/reel/DTYH409Ep_o/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Instagram Reel 1"
            />
            <iframe
              src="https://www.instagram.com/reel/DS2wFztEkhr/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Instagram Reel 2"
            />
            <iframe
              src="https://www.instagram.com/reel/DPYmmjQEaxF/embed/"
              width="400"
              height="711"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Instagram Reel 3"
            />
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
