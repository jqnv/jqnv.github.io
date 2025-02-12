document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const sections = document.querySelectorAll('.content');
  const translations = {
    en: {
      home: "Home",
      history: "History",
      coffees: "Coffees",
      barSnacks: "Bar Snacks",
      desserts: "Desserts",
      about: "About Us",
      welcome: "Welcome to Encanto Café",
      welcomeText: "Experience the magic of freshly brewed coffee and indulge in our delightful treats.",
      historyTitle: "Our History",
      historyText: "Founded in 1990, Encanto Café has been serving quality coffee for over three decades.",
      coffeesText: "Explore our range of handcrafted coffees from around the world.",
      barSnacksText: "Enjoy our selection of savory snacks that pair perfectly with your coffee.",
      dessertsText: "Satisfy your sweet tooth with our decadent desserts.",
      aboutText: "Learn more about our mission to bring you the best coffee experience."
    },
    es: {
      home: "Inicio",
      history: "Historia",
      coffees: "Cafés",
      barSnacks: "Tapas",
      desserts: "Postres",
      about: "Sobre Nosotros",
      welcome: "Bienvenido a Encanto Café",
      welcomeText: "Experimenta la magia del café recién hecho y disfruta de nuestros deliciosos manjares.",
      historyTitle: "Nuestra Historia",
      historyText: "Fundado en 1990, Encanto Café ha servido café de calidad durante más de tres décadas.",
      coffeesText: "Explora nuestra gama de cafés artesanales de todo el mundo.",
      barSnacksText: "Disfruta de nuestra selección de aperitivos salados que combinan perfectamente con tu café.",
      dessertsText: "Satisface tu antojo dulce con nuestros postres exquisitos.",
      aboutText: "Aprende más sobre nuestra misión para ofrecerte la mejor experiencia de café."
    }
  };

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Handle navigation clicks
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');

      // Hide all sections
      sections.forEach(section => {
        section.style.display = 'none';
      });

      // Show target section
      document.querySelector(targetId).style.display = 'block';

      // Close mobile menu
      navLinks.classList.remove('active');
    });
  });

  // Show home section by default
  document.querySelector('#home').style.display = 'block';

  // Change language function
  function changeLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = translations[lang][key] || element.textContent;
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // Add event listeners for language buttons
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      changeLanguage(lang);
    });
  });

  // Set default language
  changeLanguage('en');
});
