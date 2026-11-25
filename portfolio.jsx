import React from 'react'
import { createRoot } from 'react-dom/client'
import { Brain, Coffee, SkillMark, Trail } from './art.jsx'
import { profile, projects, skills } from './content.js'
import portrait from './justin-greenlee.webp'
import landscapes from './create-landscapes-dfw.webp'
import './style.css'

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="About this site">
      <div className="sidebar-inner">
        <a href="#top" className="identity">
          <img className="portrait" src={portrait} width="780" height="960" alt="" />
          <span className="identity-name">{profile.name}</span>
          <span className="identity-role">{profile.role}</span>
        </a>
        <nav aria-label="Portfolio">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#blog">Blog <span>Coming soon</span></a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="coffee"><Coffee /><span>fueled by coffee</span></div>
      </div>
    </aside>
  )
}

function ProjectArtwork({ theme }) {
  if (theme === 'scatterbrain') return <Brain />
  if (theme === 'pathlings') return <Trail />
  return <img className="project-art landscape-image" src={landscapes} width="1348" height="926" alt="Create Landscapes DFW homepage showing its seasonal services and request-a-quote button" decoding="async" />
}

function LinkMark() {
  return (
    <svg className="link-mark" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 12 12 4m-6 0h6v6"/>
    </svg>
  )
}

function Project({ project }) {
  return (
    <article className={`project project--${project.theme}`} id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className="section-inner">
        <div className="project-grid">
          <div className="project-copy">
            <h3 id={`${project.id}-title`}>{project.theme === 'landscapes' ? <>Create<br />Landscapes DFW</> : project.name}</h3>
            <p>{project.summary}</p>
            {project.theme === 'scatterbrain' && <span className="yellow-stroke" aria-hidden="true" />}
            <span className={`status ${project.open ? 'status--live' : ''}`}>{project.status}</span>
          </div>
          <ProjectArtwork theme={project.theme} />
        </div>
        <details className="project-details" open={project.open || undefined}>
          <summary aria-label={`Project details: ${project.name}`}>
            <span className="detail-switch" aria-hidden="true" />
            Project details
          </summary>
          <div className="detail-body">
            {project.details.map((part) => <p key={part}>{part}</p>)}
            {project.href && <a href={project.href}>{project.linkLabel} <LinkMark /></a>}
          </div>
        </details>
      </div>
    </article>
  )
}

function SkillList() {
  return (
    <section className="skills page-section" aria-labelledby="skills-title">
      <div className="section-inner">
        <h2 id="skills-title">What I build with</h2>
        <dl>
          {skills.map(({ group, items }) => (
            <div className="skill-row" key={group}>
              <dt>{group}</dt>
              <dd>
                <ul>{items.map((name) => <li key={name}><SkillMark name={name} /><span>{name}</span></li>)}</ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Sidebar />
      <main id="main" tabIndex="-1">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="section-inner">
            <h1 id="hero-title">{profile.heading}</h1>
            <p>{profile.intro}</p>
            <p className="hero-note">{profile.philosophy}</p>
          </div>
        </section>
        <section id="work" aria-labelledby="work-title">
          <h2 className="visually-hidden" id="work-title">Selected work</h2>
          {projects.map((project) => <Project key={project.id} project={project} />)}
        </section>
        <SkillList />
        <section className="page-section page-section--about" id="about" aria-labelledby="about-title">
          <div className="section-inner">
            <h2 id="about-title">A little more about me</h2>
            <div className="readable">{profile.about.map((line) => <p key={line}>{line}</p>)}</div>
          </div>
        </section>
        <section className="page-section" id="blog" aria-labelledby="blog-title">
          <div className="section-inner">
            <h2 id="blog-title">Blog <span className="upcoming">Coming soon</span></h2>
            <p>Notes on things I’m making and what I learn along the way.</p>
          </div>
        </section>
        <section className="page-section page-section--contact" id="contact" aria-labelledby="contact-title">
          <div className="section-inner">
            <h2 id="contact-title">Find me online</h2>
            <ul className="contact-links">
              <li><a href={profile.github}>GitHub <LinkMark /></a></li>
              <li><a href={profile.linkedin}>LinkedIn <LinkMark /></a></li>
              <li><a href={profile.email}>Email me <LinkMark /></a></li>
            </ul>
          </div>
        </section>
        <footer className="site-footer">
          <div className="section-inner">
            <span>{profile.name}</span>
          </div>
        </footer>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
