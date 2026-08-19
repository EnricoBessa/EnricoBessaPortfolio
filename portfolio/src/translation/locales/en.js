import { asset } from '../../constants/paths';

// English translations, grouped by section/feature so it's easy to find
// and keep in sync with pt.js (both files must expose the same keys).
export const en = {
    navigation: {
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
        menu: 'Menu',
    },

    hero: {
        greeting: "Hi, I'm",
        name: 'Enrico Bessa',
        role: 'Software Engineering Student & Backend-Focused Developer',
        status: 'Open to new opportunities',
        tagline:
            'I build reliable, well-structured software — from backend systems in C# and .NET to full-stack web applications with React and Python.',
        ctaPrimary: 'View Projects',
        ctaSecondary: 'Get in Touch',
    },

    about: {
        intro:
            "I am a Software Engineering student at PUC Minas and hold a Technical degree in Computer Science from Cotemig. I have interned at several companies, working with Python, C#, .NET, HTML5, CSS, and relational databases. I'm looking for opportunities to apply and grow my software development skills, valuing teamwork to reach shared goals.",
        skillsTitle: 'Skills',
        educationTitle: 'Education',
        educationIntro:
            'I studied at Cotemig, where I took my first steps in computer science, and I am currently pursuing a degree in Software Engineering at PUC Minas.',
        experienceTitle: 'Experience',
        experienceIntro:
            "I've worked with different companies, sharpening my skills and collaborating with skilled teams. Here's a summary:",
    },

    projects: {
        title: 'My',
        span: 'Projects',
        intro:
            "A selection of projects that reflect my problem-solving approach, technical range, and attention to code quality. Each one taught me something new and helped me grow as a developer.",
        technologiesLabel: 'Technologies',
        viewProject: 'View project',
        list: [
            {
                name: 'Portfolio Website',
                summary:
                    'A responsive personal portfolio built to present my projects, skills, and experience professionally.',
                technologies: ['React', 'Tailwind CSS', 'i18next'],
                description:
                    'Modern, responsive interface optimized for desktop and mobile, with a modular codebase that is easy to extend and maintain.',
                iconUrl: asset('images/react.svg'),
                link: 'https://github.com/EnricoBessa/EnricoBessaPortifolio',
            },
            {
                name: 'SDG Criativa',
                summary:
                    'E-commerce platform for personalized products, developed for a real client and currently in production.',
                technologies: ['React', 'TypeScript', 'Firebase', 'Cloudinary', 'Vite'],
                description:
                    'Complete e-commerce platform featuring a product catalog, shopping cart with WhatsApp-based order checkout, and an administrative dashboard for managing products and categories. Built with React and TypeScript, using Firebase for authentication and database management and Cloudinary for product image storage.',
                iconUrl: asset('images/react.svg'),
                link: 'https://github.com/EnricoBessa/SDG-Criativa',
            },
            {
                name: 'Team & Task Management System',
                summary:
                    'A collaborative platform to organize teams, manage tasks, and streamline group productivity.',
                technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
                description:
                    'Group project built for a college course. Users can organize teams, create and assign tasks, track progress on Kanban-style boards, and collaborate in real time.',
                iconUrl: asset('images/javascript.svg'),
                link: 'https://github.com/EnricoBessa/trabalho-em-grupo_gestao-de-times-e-tarefas',
            },
            {
                name: 'AimTrainer',
                summary: 'An aim-training game built with the Pygame library.',
                technologies: ['Python', 'Pygame'],
                description: 'Focused on real-time input handling and simple, responsive game mechanics.',
                iconUrl: asset('images/python.svg'),
                link: 'https://github.com/EnricoBessa/AimTrainer',
            },
            {
                name: 'AiAgent',
                summary: 'A customizable assistant with modules for sales, inventory, scheduling, and finance.',
                technologies: ['Python', 'Ollama', 'Gemma 3B'],
                description: 'Uses a local Gemma 3B model through Ollama to generate conversational responses.',
                iconUrl: asset('images/python.svg'),
                link: 'https://github.com/EnricoBessa/AiAgent',
            },
            {
                name: 'Fitness App',
                summary: 'A Flutter app to browse workout categories and recommended or popular diets.',
                technologies: ['Flutter'],
                description: 'Cross-platform (Android/iOS) UI built with SVG assets and dynamic lists.',
                iconUrl: asset('images/flutter.svg'),
                link: 'https://github.com/EnricoBessa/FitnessApp',
            },
        ],
        certificatesTitle: 'Certificates',
        certificates: [
            {
                name: 'Technical High School Certificate in Information Technology',
                path: asset('certificados/CertificadoTecnico.jpeg'),
            },
            {
                name: "Certificate of Completion – Harvard's Computer Science Course in Brazil",
                path: asset('certificados/CertificadoCienciaComputacaoHarvard.jpg'),
            },
            {
                name: 'Certificate in Python – Python Course at Santander',
                path: asset('certificados/ceritficado_python_santander.jpg'),
            },
            {
                name: 'Artificial Intelligence Certificate – AI Course for Small and Medium-Sized Businesses',
                path: asset('certificados/certificado_cusro_ia_santander.jpg'),
            },
        ],
    },

    contact: {
        title: 'Get in Touch',
        name: 'Name',
        email: 'Email',
        message: 'Your Message',
        placeholderName: 'Maria',
        placeholderEmail: 'email@example.com',
        placeholderMessage: 'Message you want to send',
        submit: 'Submit',
        sending: 'Sending...',
        success: 'Your message has been sent.',
        errorSend: 'Something went wrong. Please try again.',
        errorName: 'Name is required.',
        errorEmailRequired: 'Email is required.',
        errorEmailInvalid: 'Email is invalid.',
        errorMessage: 'Message must be at least 10 characters.',
        socialsTitle: 'You can also find me at:',
    },

    footer: {
        tagline: 'Have a project in mind? Let’s build something together.',
        linkedinLabel: 'Open my LinkedIn profile',
        githubLabel: 'Open my GitHub profile',
        emailLabel: 'Send me an email',
        resumeLabel: 'Download my resume (PDF)',
    },
};