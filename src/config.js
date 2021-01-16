module.exports = {
  email: 'juan@juanoa.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://go.juanoa.com/github',
    },
    {
      name: 'Instagram',
      url: 'https://go.juanoa.com/instagram',
    },
    {
      name: 'Twitter',
      url: 'https://go.juanoa.com/twitter',
    },
    {
      name: 'Linkedin',
      url: 'https://go.juanoa.com/linkedin',
    },
  ],

  navLinks: [
    {
      name: 'Sobre mi',
      url: '/#about',
    },
    {
      name: 'Experiencia',
      url: '/#jobs',
    },
    {
      name: 'Proyectos',
      url: '/#projects',
    },
    {
      name: 'Contacto',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#5564eb',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
