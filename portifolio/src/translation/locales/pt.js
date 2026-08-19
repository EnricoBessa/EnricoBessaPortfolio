import { asset } from '../../constants/paths';

// Traduções em português, agrupadas por seção/funcionalidade para facilitar
// localizar e manter em sincronia com en.js (os dois arquivos devem expor
// exatamente as mesmas chaves).
export const pt = {
    navigation: {
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato',
        menu: 'Menu',
    },

    hero: {
        greeting: 'Olá, eu sou',
        name: 'Enrico Bessa',
        role: 'Estudante de Engenharia de Software & Desenvolvedor Backend',
        status: 'Aberto a novas oportunidades',
        tagline:
            'Construo software confiável e bem estruturado — de sistemas backend em C# e .NET a aplicações web completas com React e Python.',
        ctaPrimary: 'Ver Projetos',
        ctaSecondary: 'Entrar em Contato',
    },

    about: {
        intro:
            'Sou estudante de Engenharia de Software na PUC Minas e formado como Técnico em Informática pelo Cotemig. Já atuei como estagiário em algumas empresas, trabalhando com Python, C#, .NET, HTML5, CSS e bancos de dados relacionais. Busco oportunidades para aplicar e expandir meus conhecimentos em desenvolvimento de software, valorizando o trabalho em equipe para alcançar objetivos em comum.',
        skillsTitle: 'Habilidades',
        educationTitle: 'Formação',
        educationIntro:
            'Estudei no Cotemig, onde dei meus primeiros passos na área de informática, e atualmente curso Engenharia de Software na PUC Minas.',
        experienceTitle: 'Experiência',
        experienceIntro:
            'Trabalhei com diferentes empresas, aprimorando minhas habilidades e colaborando com equipes talentosas. Aqui está um resumo:',
    },

    projects: {
        title: 'Meus',
        span: 'Projetos',
        intro:
            'Uma seleção de projetos que refletem minha capacidade de resolver problemas, meu repertório técnico e o cuidado com a qualidade do código. Cada um me ensinou algo novo e me ajudou a crescer como desenvolvedor.',
        technologiesLabel: 'Tecnologias',
        viewProject: 'Ver projeto',
        list: [
            {
                name: 'Portfolio Website',
                summary:
                    'Um portfólio pessoal responsivo, criado para apresentar meus projetos, habilidades e experiências de forma profissional.',
                technologies: ['React', 'Tailwind CSS', 'i18next'],
                description:
                    'Interface moderna e responsiva, otimizada para desktop e mobile, com código modular e fácil de manter.',
                iconUrl: asset('images/react.svg'),
                link: 'https://github.com/EnricoBessa/EnricoBessaPortifolio',
            },
            {
                name: 'SDG Criativa',
                summary:
                    'E-commerce de produtos personalizados, desenvolvido para uma cliente real e utilizado em produção.',
                technologies: ['React', 'TypeScript', 'Firebase', 'Cloudinary', 'Vite'],
                description:
                    'E-commerce completo com catálogo de produtos, carrinho com finalização via WhatsApp e painel administrativo para gerenciamento de produtos e categorias. Desenvolvido com React e TypeScript, utilizando Firebase para autenticação e banco de dados e Cloudinary para armazenamento de imagens.',
                iconUrl: asset('images/react.svg'),
                link: 'https://github.com/EnricoBessa/SDG-Criativa',
            },
            {
                name: 'Gestão de Times e Tarefas',
                summary:
                    'Plataforma colaborativa para organizar equipes, gerenciar tarefas e otimizar a produtividade em grupo.',
                technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
                description:
                    'Projeto em grupo desenvolvido para uma disciplina da faculdade. Permite organizar times, criar e atribuir tarefas, acompanhar o progresso em quadros estilo Kanban e colaborar em tempo real.',
                iconUrl: asset('images/javascript.svg'),
                link: 'https://github.com/EnricoBessa/trabalho-em-grupo_gestao-de-times-e-tarefas',
            },
            {
                name: 'AimTrainer',
                summary: 'Jogo de treino de mira construído com a biblioteca Pygame.',
                technologies: ['Python', 'Pygame'],
                description: 'Focado em tratamento de entrada em tempo real e mecânicas simples e responsivas.',
                iconUrl: asset('images/python.svg'),
                link: 'https://github.com/EnricoBessa/AimTrainer',
            },
            {
                name: 'AiAgent',
                summary: 'Assistente personalizável com módulos de vendas, estoque, agenda e finanças.',
                technologies: ['Python', 'Ollama', 'Gemma 3B'],
                description: 'Usa um modelo Gemma 3B local via Ollama para gerar respostas conversacionais.',
                iconUrl: asset('images/python.svg'),
                link: 'https://github.com/EnricoBessa/AiAgent',
            },
            {
                name: 'Fitness App',
                summary: 'Aplicativo em Flutter para explorar categorias de treino e dietas recomendadas ou populares.',
                technologies: ['Flutter'],
                description: 'Interface multiplataforma (Android/iOS) construída com SVGs e listas dinâmicas.',
                iconUrl: asset('images/flutter.svg'),
                link: 'https://github.com/EnricoBessa/FitnessApp',
            },
        ],
        certificatesTitle: 'Certificados',
        certificates: [
            {
                name: 'Certificado de Conclusão do Ensino Médio Técnico em Informática',
                path: asset('certificados/CertificadoTecnico.jpeg'),
            },
            {
                name: 'Certificado de Conclusão do Curso de Ciência da Computação de Harvard no Brasil',
                path: asset('certificados/CertificadoCienciaComputacaoHarvard.jpg'),
            },
            {
                name: 'Certificado em Python – Curso de Python do Santander',
                path: asset('certificados/ceritficado_python_santander.jpg'),
            },
            {
                name: 'Certificado de Inteligência Artificial – Curso de IA para Pequenas e Médias Empresas',
                path: asset('certificados/certificado_cusro_ia_santander.jpg'),
            },
        ],
    },

    contact: {
        title: 'Entre em Contato',
        name: 'Nome',
        email: 'Email',
        message: 'Sua Mensagem',
        placeholderName: 'Maria',
        placeholderEmail: 'email@exemplo.com',
        placeholderMessage: 'Mensagem que deseja enviar',
        submit: 'Enviar',
        sending: 'Enviando...',
        success: 'Sua mensagem foi enviada.',
        errorSend: 'Algo deu errado. Tente novamente.',
        errorName: 'O nome é obrigatório.',
        errorEmailRequired: 'O email é obrigatório.',
        errorEmailInvalid: 'O email é inválido.',
        errorMessage: 'A mensagem deve ter pelo menos 10 caracteres.',
        socialsTitle: 'Você também pode me encontrar em:',
    },

    footer: {
        tagline: 'Tem um projeto em mente? Vamos construir algo juntos.',
        linkedinLabel: 'Abrir meu perfil no LinkedIn',
        githubLabel: 'Abrir meu perfil no GitHub',
        emailLabel: 'Enviar um e-mail para mim',
        resumeLabel: 'Baixar meu currículo (PDF)',
    },
};