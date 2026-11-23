import "./background.css";

function Background() {
  return (
    <section className="background-section">
      <div className="background-header">
        <h4>BACKGROUND</h4>
        <h1>Building with purpose.</h1>
        <p>
          A quick look at the experience, education, and interests behind my
          work.
        </p>
      </div>

      <div className="background-grid">
        <article className="background-card">
          <span className="background-label">Experience</span>
          <h2>Full-Stack Intern</h2>
          <h3>EXPS Nexus · Aug 2026 – Sep 2026</h3>
          <p>
            Built a real-time video conferencing application with WebRTC and
            Socket.io, including JWT authentication, protected routes, REST
            APIs, and PostgreSQL persistence through Prisma.
          </p>
          <div className="background-tags">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Express</span>
            <span>Socket.io</span>
            <span>PostgreSQL</span>
            <span>WebRTC</span>
          </div>
        </article>

        <article className="background-card">
          <span className="background-label">Education</span>
          <h2>B.Tech, Computer Science</h2>
          <h3>Birla Institute of Technology, Mesra · Jaipur Campus</h3>
          <p>
            Expected graduation in 2028 with a current CGPA of 8.29. Focused
            on software development, problem solving, and practical systems.
          </p>
          <div className="background-stat">
            <strong>8.29</strong>
            <span>Current CGPA</span>
          </div>
        </article>

        <article className="background-card background-card-wide">
          <span className="background-label">Beyond the code</span>
          <h2>Curious, competitive, security-minded.</h2>
          <p>
            Winner of the HackRepo Hackathon 2025 and second runner-up at the
            Smart India Hackathon 2025 internal round. I also practice
            cybersecurity through PortSwigger labs and have hands-on exposure
            to ethical hacking, network security, and vulnerability assessment.
          </p>
          <div className="background-tags">
            <span>HackRepo Winner</span>
            <span>SIH Runner-up</span>
            <span>Ethical Hacking</span>
            <span>Video Editing</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Background;
