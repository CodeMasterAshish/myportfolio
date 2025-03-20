// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Project Data
const projects = [
    {
        title: 'CarBlog Site',
        description: 'It is a carblog site where a user can read about the latest trends and what the recent compare two cars at a time.',
        image: 'https://source.unsplash.com/random',
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'A brief description of project 2 and its key features.',
        image: 'https://picsum.photos/300/200?random=2',
        link: '#'
    },
    {
        title: 'Project 3',
        description: 'A brief description of project 3 and its key features.',
        image: 'https://picsum.photos/300/200?random=3',
        link: '#'
    }
];

// Render Projects
const projectGrid = document.getElementById('projectGrid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" class="cta-button">View Project</a>
        </div>
    `;
    
    projectGrid.appendChild(projectCard);
});

// Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically handle form submission
    // For now, we'll just show an alert
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});