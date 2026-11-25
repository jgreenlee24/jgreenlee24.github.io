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
          <a href="#lab-notes">Lab Notes <span>Coming soon</span></a>
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

function ContactIcon({ kind }) {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {kind === 'github' && <>
        <path d="M8.5 19c-3.6 1.1-3.4-2.6-5.5-3.2M15.5 21v-3.6c0-1-.3-1.7-.8-2.2 3.1-.4 5.3-1.5 5.3-5a4 4 0 0 0-1.1-2.9c.3-1 .3-2.2-.2-3.3-1.2 0-2.3.5-3.2 1.2a11 11 0 0 0-7 0C7.6 4.5 6.5 4 5.3 4c-.5 1.1-.5 2.3-.2 3.3A4 4 0 0 0 4 10.2c0 3.5 2.2 4.6 5.3 5-.5.5-.8 1.2-.8 2.2V21"/>
      </>}
      {kind === 'linkedin' && <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10.5v6m4-6v6m0-3.5a2.5 2.5 0 0 1 5 0v3.5" />
        <circle cx="8" cy="7.5" r=".65" fill="currentColor" stroke="none" />
      </>}
      {kind === 'email' && <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 7.5 8.5 6 8.5-6" />
      </>}
    </svg>
  )
}

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>
}

function Project({ project }) {
  return (
    <article className={`project project--${project.theme}`} id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className="section-inner">
        <div className="project-grid">
          <div className="project-copy">
            <SectionLabel>{project.category}</SectionLabel>
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
        <SectionLabel>Toolkit</SectionLabel>
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
            <p className="hero-currently"><strong>Currently:</strong> {profile.currently}</p>
          </div>
        </section>
        <section id="work" aria-labelledby="work-title">
          <h2 className="visually-hidden" id="work-title">Selected work</h2>
          {projects.map((project) => <Project key={project.id} project={project} />)}
        </section>
        <SkillList />
        <section className="page-section page-section--about" id="about" aria-labelledby="about-title">
          <div className="section-inner">
            <SectionLabel>Off the clock</SectionLabel>
            <h2 id="about-title">A little more about me</h2>
            <div className="readable">{profile.about.map((line) => <p key={line}>{line}</p>)}</div>
          </div>
        </section>
        <section className="page-section" id="lab-notes" aria-labelledby="lab-notes-title">
          <span id="blog" className="section-anchor" aria-hidden="true" />
          <div className="section-inner">
            <SectionLabel>Lab Notes</SectionLabel>
            <h2 id="lab-notes-title">Lab Notes <span className="upcoming">Coming soon</span></h2>
            <p>Small field notes from the workbench: things I’m building, lessons I’m learning, and ideas I’m not ready to leave alone yet.</p>
          </div>
        </section>
        <section className="page-section page-section--contact" id="contact" aria-labelledby="contact-title">
          <div className="section-inner">
            <SectionLabel>Say hello</SectionLabel>
            <h2 id="contact-title">Find me online</h2>
            <ul className="contact-links">
              <li><a href={profile.github}><ContactIcon kind="github" /><span>GitHub</span> <LinkMark /></a></li>
              <li><a href={profile.linkedin}><ContactIcon kind="linkedin" /><span>LinkedIn</span> <LinkMark /></a></li>
              <li><a href={profile.email}><ContactIcon kind="email" /><span>Email me</span> <LinkMark /></a></li>
            </ul>
          </div>
        </section>
        <footer className="site-footer">
          <div className="section-inner">
            <div className="footer-coffee">
              <Coffee />
              <p>Buy me a coffee <small>Coming later</small></p>
            </div>
            <div className="footer-signoff">
              <p className="footer-name">{profile.name}</p>
              <p>Made in Dallas, one experiment at a time.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
