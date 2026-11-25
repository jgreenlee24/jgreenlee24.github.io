export const profile = {
  name: 'Justin Greenlee',
  role: 'Senior full stack developer in Dallas',
  heading: 'Hi, I’m Justin.',
  intro: 'I’m a senior full stack developer in Dallas. I like the part where someone asks, “Could we actually make that?” and we sit down together to find out.',
  studio: 'That’s why I started Scatterbrain Labs, an independent creative technology studio and public lab. We turn half-formed ideas into apps, websites, games, and tools, and share how they take shape so we can learn together.',
  mission: 'I’m here to invite people back into the joy of creating.',
  about: [
    'I run two homebrew D&D campaigns. I like making places that feel real enough for my friends to get curious about, then finding out which little detail they latch onto. Sometimes it’s the thing I made up ten seconds ago.',
    'I also play guitar and piano, and I spend a lot of time outside with Lala. She doubles back on hikes to make sure I’m keeping up. Usually I’m not.',
  ],
  github: 'https://github.com/jgreenlee24',
  linkedin: 'https://www.linkedin.com/in/justin-greenlee-60306497/',
  email: 'mailto:jgreenlee24@gmail.com',
}

export const projects = [
  {
    id: 'scatterbrain-labs',
    theme: 'scatterbrain',
    name: 'Scatterbrain Labs',
    tagline: '…giving half-formed ideas room to grow.',
    summary: 'An independent studio and public lab for producing small experiments in software, games, and design.',
    status: 'In development',
    details: [
      'I’ve spent years building software for other people. I wanted a place to follow my own curiosity and rediscover the joy of making things. I want to share the experiments as they take shape, messy middle included: what I tried, what surprised me, and what someone else might want to try for themselves.',
      'The studio helps make that possible. I work with small businesses and creators to turn something they care about into a website, app, or prototype.',
    ],
  },
  {
    id: 'pathlings',
    theme: 'pathlings',
    name: 'Pathlings',
    tagline: '…building a gentler way to plan the day.',
    summary: 'An app I’m building to help you plan your day, reflect, and remember what else it could hold.',
    status: 'In development',
    details: [
      'I started designing Pathlings because I needed it myself. You check in with how you feel, what’s on your plate, and what you want more of. It helps you find a way through the day that fits, including things you care about but might not remember to put on a list.',
      'A fantasy guide gives the day a little character. You might start out with a Ranger’s perspective, change course when life happens, and come back to the Campfire to reflect on the day you actually lived.',
    ],
  },
  {
    id: 'create-landscapes-dfw',
    theme: 'landscapes',
    name: 'Create Landscapes DFW',
    tagline: '…making awesome websites for local businesses.',
    summary: 'A landscaping website built to turn visits into quote requests.',
    status: 'Live',
    details: [
      'I built the WordPress site for the seasonal launch and connected the quote form to HubSpot so new requests become leads.',
    ],
    href: 'https://createlandscapesdfw.com/',
    linkLabel: 'Visit createlandscapesdfw.com',
  },
]

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'Java'] },
  { group: 'Web & backend', items: ['React', 'Vue', 'Node.js', 'PostgreSQL'] },
  { group: 'Cloud & tooling', items: ['AWS', 'GCP', 'Docker', 'Kubernetes'] },
]
