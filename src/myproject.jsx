import { useState } from "react";
import "./myproject.css";
import civiclensimg from "./assets/civiclens.png";
import meshlyimg from "./assets/meshly.png";
import movieimg from "./assets/moviefinder.png";
import portfolioimg from "./assets/portfolio.png";
import spotifyimg from "./assets/spotify.png";

const projects = [
  {
    number: "01",
    category: "FULL-STACK COLLABORATIVE WIKI",
    title: "Meshly",
    desc: "A full-stack collaborative Wiki application with authentication, PostgreSQL, Redis caching, cloud storage, transactional emails, and AI-powered article summarization.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Redis", "Vercel AI"],
    image: meshlyimg,
    alt: "Meshly collaborative Wiki application",
    livebtn: "https://wiki-masters-gray.vercel.app/",
    gitbtn: "https://github.com/anish-123-2006/Meshly",
  },
  {
    number: "02",
    category: "AI-POWERED CIVIC PWA",
    title: "CivicLens",
    desc: "An AI-powered civic issue reporting Progressive Web App with image uploads, GPS capture, Firebase storage, Google Maps tracking, and smart routing for high-priority reports.",
    tech: ["React", "Vite", "TypeScript", "Firebase", "Google Maps API", "Gemini API"],
    image: civiclensimg,
    alt: "CivicLens civic issue reporting application",
    livebtn: "https://anish-123-2006.github.io/CivicLens/",
    gitbtn: "https://github.com/anish-123-2006/CivicLens",
  },
  {
    number: "03",
    category: "FRONTEND APPLICATION",
    title: "Portfolio Website",
    desc: "A responsive portfolio application built to present my work, skills, and developer journey through a polished, accessible interface.",
    tech: ["React", "Next.js", "TypeScript"],
    image: portfolioimg,
    alt: "Portfolio Website",
    livebtn: "https://vite-project-eight-ruby.vercel.app/",
    gitbtn: "https://github.com/anish-123-2006/portfolio2",
  },
  {
    number: "04",
    category: "MOVIE DISCOVERY APPLICATION",
    title: "Movie Finder",
    desc: "A responsive movie discovery web app fetching popular and searched movies from the TMDB API, with favorites persisted in localStorage across sessions.",
    tech: ["React", "Vite", "TMDB API"],
    image: movieimg,
    alt: "Movie Finder movie discovery application",
    livebtn: "https://moviefinder-jade.vercel.app/",
    gitbtn: "https://github.com/anish-123-2006/moviefinder",
  },
  {
    number: "05",
    category: "FRONTEND DEVELOPMENT",
    title: "Spotify Clone",
    desc: "A responsive music player web application featuring playlist management, song controls and a modern Spotify-inspired UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: spotifyimg,
    alt: "Spotify Clone",
    livebtn: "https://anish-123-2006.github.io/spotify_clone/",
    gitbtn: "https://github.com/anish-123-2006/spotify_clone",
  },
  {
    number: "06",
    category: "CYBERSECURITY TOOL",
    title: "SQLi Scanner",
    desc: "A Python-based SQL injection testing tool using basic, Boolean-based, and time-based detection with response comparison and structured JSON reports.",
    tech: ["Python", "Requests", "SQL Injection", "HTTP Analysis", "JSON"],
    alt: "SQLi Scanner cybersecurity testing tool",
    placeholderText: "Python security testing tool",
    livebtn: "https://github.com/anish-123-2006/SQLi_scanner",
    gitbtn: "https://github.com/anish-123-2006/SQLi_scanner",
  },
];

function ProjectCard({ project, reverse }) {
  return (
    <div className={`project-card ${reverse ? "reverse" : ""}`}>
      <div className="project-content">
        <span className="project-number">{project.number}</span>
        <h5>{project.category}</h5>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <div className="tech-stack">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-buttons">
          <a href={project.livebtn} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={project.gitbtn} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.alt} />
        ) : (
          <div className="project-placeholder" role="img" aria-label={project.alt}>
            <span>{project.title}</span>
            <small>{project.placeholderText}</small>
          </div>
        )}
      </div>
    </div>
  );
}

function Myproject() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  return (
    <section className="project-section">
      <div className="project-header">
        <h4>MY PROJECTS</h4>
        <h1>Things I've Built</h1>
        <p>A collection of projects showing how I approach interfaces, API integration, product thinking, and the details that make web experiences feel complete.</p>
      </div>

      {/* DESKTOP - all cards stacked */}
      <div className="projects-desktop">
        {projects.map((p, i) => (
          <ProjectCard key={p.number} project={p} reverse={i % 2 !== 0} />
        ))}
      </div>

      {/* MOBILE - one at a time slider */}
      <div className="projects-mobile">
        <div className="slider-wrapper">
          <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {projects.map((p) => (
              <div className="slide" key={p.number}>
                <ProjectCard project={p} reverse={false} />
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button className="slider-btn" onClick={prev} aria-label="Previous">&#8592;</button>
          <div className="slider-dots">
            {projects.map((_, i) => (
              <button key={i} className={`slider-dot${i === current ? " dot-active" : ""}`} onClick={() => setCurrent(i)} aria-label={`Project ${i + 1}`} />
            ))}
          </div>
          <button className="slider-btn" onClick={next} aria-label="Next">&#8594;</button>
        </div>

        <p className="slider-counter">{current + 1} / {projects.length}</p>
      </div>
    </section>
  );
}

export default Myproject;