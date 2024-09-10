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

// Вземи бутона и SVG контейнера
const homeButton = document.getElementsById('homeButton');
const svgContainer = document.getElementById('svgContainer');
const animatedSVG = document.getElementById('animatedSVG');

// Слушай за клик върху бутона "Home"
homeButton.addEventListener('click', function () {
  // Покажи SVG контейнера
  svgContainer.classList.remove('hidden');

  // Добави клас за стартиране на анимацията
  animatedSVG.classList.add('animate');

  // Изчакай времето за анимация (1 секунда) и след това скрий SVG
  setTimeout(function () {
    // Скрий SVG след анимацията
    svgContainer.classList.add('hidden');
    animatedSVG.classList.remove('animate');
  }, 2000); // Продължителност на анимацията
});
