import React from 'react'

export function Brain() {
  return (
    <svg className="project-art brain" viewBox="0 0 300 226" aria-hidden="true" focusable="false">
      <g stroke="#1648d3" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#edf0ff" d="m8 105 40-59 57-27 64-12 65 20 47 35 17 58-38 33-16 28-43 12-12 28h-18l-12-30-31-8-20-24-41 5-40-16Z"/>
        <path fill="#ffe0f0" d="m143 60 26-53 65 20-54 20Zm-47 73 47-73 57 37-29 67Zm-69 15 13-45 56 30-29 31Zm144 16 29-67 60 56Zm0 0 30 29-12 28h-18Z"/>
        <path fill="#d4dfff" d="m105 19 38 41-53 29Zm95 78 34-70 47 35Zm0 0 98 23-38 33Zm-104 36 32 50-20-24Zm75 31-12 27 12 30Zm0 0 73 17-43 12Z"/>
        <path fill="none" d="m8 105 32-2 8-57 42 43 15-70m-65 84 50-14 53-29m-53 29 6 44 47-73 26-53m-26 53 57 37 34-70m47 35-14 43 31 15m-98-23 67 8-7 48m-60-56-29 67-75-31m164 20-89 11 73 17m-43 12-30-29-12 27m-63-58 63 58m-92-27 29-31-69 15m144 73 9-39 9 39"/>
      </g>
    </svg>
  )
}

export function Trail() {
  return (
    <svg className="project-art trail" viewBox="0 0 340 200" aria-hidden="true" focusable="false">
      <path fill="#a2a962" d="m116 74 45-38 16 11L218 9l40 34 17-11 57 46-58-33-17 9-39-29-40 34-17-10z"/>
      <path fill="#ca8c41" d="M142 95c49 1 97 6 98 21 1 11-44 18-75 29-32 12-48 28-26 45H47c7-21 40-39 77-51 28-9 67-14 69-22 2-6-21-13-51-22Z"/>
      <g fill="#fff1d7">
        <path d="M79 14c8 25 14 34 25 42H90c8 17 20 32 32 42h-21c8 14 20 26 33 35-13 4-32 4-46 2v25H71v-25c-16 3-35 3-47-1 15-9 26-22 34-36H39c13-11 23-24 31-42H54c12-11 18-24 25-42Z"/>
        <path d="M25 81c4 15 8 21 13 26h-7c4 9 9 17 16 24h-9c5 8 13 16 19 20-7 2-16 2-25 1v15h-9v-15c-8 1-18 1-25-1 8-5 13-10 19-20H9c8-6 13-15 17-24h-8c4-5 5-12 7-26Zm110 9c5 15 8 21 14 28h-8c4 9 9 15 16 21h-8c5 8 11 13 19 19-7 2-17 2-26 0v11h-8v-11c-9 2-18 2-25 0 7-5 13-12 17-19h-7c7-7 12-13 16-21h-8c4-7 7-13 8-28Z"/>
      </g>
    </svg>
  )
}

export function Coffee() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5 10c0-2 4-4 9-4s9 2 9 4v17c0 2-4 4-9 4s-9-2-9-4V10Zm0 0c0 2 4 4 9 4s9-2 9-4m1 5h2a5 5 0 1 1 0 10h-2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const marks = {
  TypeScript: 'TS', JavaScript: 'JS', Go: 'Go', Python: 'Py', Java: 'J',
  'Node.js': 'JS', AWS: 'aws', GCP: 'cloud', React: 'atom', Vue: 'vue',
  PostgreSQL: 'db', Docker: 'ship', Kubernetes: 'wheel',
}

export function SkillMark({ name }) {
  const mark = marks[name]
  const paths = {
    atom: <><ellipse rx="10" ry="4" cx="12" cy="12"/><ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(60 12 12)"/><ellipse rx="10" ry="4" cx="12" cy="12" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.1" fill="currentColor"/></>,
    vue: <><path d="M1 4h5l6 10 6-10h5L12 22Z" fill="currentColor" stroke="none"/><path d="M7 4h3l2 4 2-4h3l-5 8Z" fill="currentColor" stroke="none"/></>,
    db: <><ellipse cx="12" cy="5" rx="8.5" ry="3.5"/><path d="M3.5 5v14c0 4.7 17 4.7 17 0V5M3.5 12c0 4.7 17 4.7 17 0"/></>,
    cloud: <path d="M6 19a5 5 0 1 1 0-10c1-7 11-7 13-1a5.5 5.5 0 0 1-.5 11Z"/>,
    ship: <path d="M3 13h17l2-3v3l1 1h-3c-1 4-4 6-9 6-5 0-8-2-8-7Zm2-3h2v2H5Zm3 0h2v2H8Zm3 0h2v2h-2Zm3 0h2v2h-2Zm-3-3h2v2h-2Zm3 0h2v2h-2Zm0-3h2v2h-2Z" fill="currentColor" stroke="none"/>,
    wheel: <><path d="m12 2 8 4 2 9-5 6H7l-5-6 2-9Z"/><path d="M12 3v8m8-5-7 5m8.5 4-8.5-2m4 8-4.5-7m-5.5 7 4.5-7m-9.5 1 9-2m-7-7 7 5"/><circle cx="12" cy="12" r="2"/></>,
  }
  if (paths[mark]) {
    return <svg className="skill-mark skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[mark]}</svg>
  }
  return <span className={`skill-mark skill-text-mark ${name === 'TypeScript' || name === 'JavaScript' ? 'skill-square' : ''}`} aria-hidden="true">{mark}</span>
}
