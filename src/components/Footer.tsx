import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">ANISH AGRAWAL</h3>
            <p className="footer-tagline">
              Creating visual excellence through innovative video production and editing.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-info">
            <p className="footer-copyright">
              © {currentYear} ANISH AGRAWAL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
