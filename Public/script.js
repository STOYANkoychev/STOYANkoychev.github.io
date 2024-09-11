document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const sectionLinks = document.querySelectorAll('.section-link');

  const sections = {
    home: () => import('../Templates/home.js').then((module) => module.default(content)),
    education: () => import('../Templates/education.js').then((module) => module.default(content)),
    'professional-experience': () =>
      import('../Templates/professional-experience.js').then((module) => module.default(content)),
    skills: () => import('../Templates/skills.js').then((module) => module.default(content)),
    projects: () => import('../Templates/projects.js').then((module) => module.default(content)),
    contact: () => import('../Templates/contact.js').then((module) => module.default(content)),
  };

  sectionLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const section = event.target.getAttribute('data-section');
      if (sections[section]) {
        sections[section]();
      }
    });
  });

  // Load default section
  sections.home();
});

