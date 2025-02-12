document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('.content');
    const translations = {
    en: {
        home: "Home",
        history: "History",
        coffees: "Coffees",
        "bar-snacks": "Bar Snacks",
        desserts: "Desserts",
        about: "About Us",
        welcome: "Welcome to Encanto Café",
        welcomeText: "Experience the magic of freshly brewed coffee and indulge in our delightful treats.",
        historyTitle: "Our History",
        historyText: "Founded in 1990, Encanto Café has been serving quality coffee for over three decades.",
        // Add more translations as needed
    },
    es: {
        home: "Inicio",
        history: "Historia",
        coffees: "Cafés",
        "bar-snacks": "Tapas",
        desserts: "Postres",
        about: "Sobre Nosotros",
        welcome: "Bienvenido a Encanto Café",
        welcomeText: "Experimenta la magia del café recién hecho y disfruta de nuestros deliciosos manjares.",
        historyTitle: "Nuestra Historia",
        historyText: "Fundado en 1990, Encanto Café ha servido café de calidad durante más de tres décadas.",
        // Add more translations as needed
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
});

