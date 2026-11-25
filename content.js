export const profile = {
  name: 'Justin Greenlee',
  role: 'Software engineer in Dallas',
  heading: 'Hi, I’m Justin.',
  intro: 'I’m a software engineer and freelancer in Dallas. I build for the web, run D&D campaigns, play guitar and piano, and take Lala, the best dog in the world, on long walks.',
  philosophy: 'My favorite part of making something is when it stops being an idea in my head and becomes something other people can use, play with, or make their own.',
  about: [
    'As a dungeon master, I love the moment players take a world I’ve built in a direction I never planned. Making things for the web scratches the same itch: you put something out there and people find their own way through it.',
    'Away from a screen, I’m usually playing guitar or piano, putting together a game night, or out walking with Lala.',
  ],
  github: 'https://github.com/jgreenlee24',
  linkedin: 'https://www.linkedin.com/in/justin-greenlee-60306497/',
  email: 'mailto:jgreenlee24@gmail.com',
  legacy: 'https://jgreenlee24.github.io/legacy-vue-app/',
}

export const projects = [
  {
    id: 'scatterbrain-labs',
    theme: 'scatterbrain',
    name: 'Scatterbrain Labs',
    summary: 'A creative lab for making things before you feel ready.',
    status: 'In development',
    details: [
      'I’m building Scatterbrain Labs to help curious people get past the blank page and enjoy making things again. A game, a website, or a strange little prototype can all be a place to start. I want to share how things get made, false starts included, and give people experiments they can try and make their own.',
      'The freelance studio is the other side of that work: I help small businesses and creators take an idea from a rough sketch to something they can put in people’s hands.',
    ],
  },
  {
    id: 'pathlings',
    theme: 'pathlings',
    name: 'Pathlings',
    summary: 'Gentle planning and reflection, guided by how your day feels.',
    status: 'In development',
    details: [
      'Pathlings is a personal planning tool I’m building around a simple question: what kind of day are you having? It uses your energy and commitments to help you find a way through the day that fits.',
      'Fantasy mentors make that reflection a little more playful. You might plan from a Ranger’s perspective one day and come back to the Campfire to reflect at night.',
    ],
  },
  {
    id: 'create-landscapes-dfw',
    theme: 'landscapes',
    name: 'Create Landscapes DFW',
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
