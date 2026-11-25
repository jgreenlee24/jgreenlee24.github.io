export const profile = {
  name: 'Justin Greenlee',
  role: 'Senior full stack developer in Dallas',
  heading: 'Hi, I’m Justin.',
  intro: 'I’m a senior full stack developer in Dallas. I build websites for small businesses, and I’m starting Scatterbrain Labs because I miss trying a weird idea just to see what happens.',
  philosophy: 'I get the same feeling running D&D. I’ll spend a week building a world, and my friends will show up and do the one thing I didn’t plan for. That’s usually when it gets good.',
  currently: 'building Pathlings, shaping Scatterbrain Labs, and making awesome websites for local businesses.',
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
    category: 'Studio & creative lab',
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
    category: 'Personal app',
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
    category: 'Client website',
    summary: 'A landscaping website built to turn visits into quote requests.',
    status: 'Live',
    open: true,
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
