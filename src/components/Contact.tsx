import { useState } from 'react'
import { FiMail, FiMessageCircle, FiMapPin,  } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Hi Anish,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}`
    )

    window.location.href = `mailto:anishagrawal404@gmail.com?subject=${subject}&body=${body}`

    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to bring your vision to life? Let's create something amazing together
        </p>

        <div className="contact-content">
          <div className="contact-info">
             <a href="mailto:anishagrawal@gmail.com">
            <div className="info-item">
              <div className="info-icon">
                <FiMail size={24} />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>anishagrawal404@gmail.com</p>
              </div>
            </div>
            </a>

<a href="https://www.instagram.com/nerdy_anish/" target="_blank" rel="noopener noreferrer">
            <div className="info-item">
              <div className="info-icon">
                <FiMessageCircle size={24} />
              </div>
              
              <div className="info-text">
                
                
                <h4>Instagram</h4>
                <p >Dm me on Instagram</p>
                
              </div>
              
            </div>
            </a>
            

            <div className="info-item">
              <div className="info-icon">
                <FiMapPin size={24} />
              </div>
              <div className="info-text">
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
