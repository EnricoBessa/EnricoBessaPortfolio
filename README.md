# Enrico Bessa — Portfólio Pessoal

Bem-vindo ao meu portfólio online! Aqui você pode conhecer meus projetos, minhas habilidades e meus certificados.

🧑‍💻 **Acesse meu site**: [Enrico Bessa Portfolio](https://enricobessa.github.io/EnricoBessaPortfolio/)

---

## Sobre mim

Sou **Enrico Bessa**, estudante de Engenharia de Software e desenvolvedor com foco em backend (C#/.NET), também atuando com JavaScript/React e Python. Neste portfólio, compartilho meus projetos mais significativos, minha formação e experiência profissional.

---

## O que você vai encontrar aqui

- **Sobre**: minha trajetória, habilidades, formação e experiência profissional.
- **Projetos**: aplicações que desenvolvi usando diferentes tecnologias — front-end, back-end, mobile — e os certificados que já concluí.
- **Contato**: formulário de contato e links para LinkedIn, GitHub, e-mail e currículo.

---

## Tecnologias usadas

- **Linguagens**: JavaScript (ES6+), HTML5, CSS3
- **Frameworks / Bibliotecas**: React, React Router, react-i18next (internacionalização)
- **Estilização**: Tailwind CSS + tokens de design em CSS puro (`src/index.css`, `src/App.css`)
- **Build**: Vite
- **Envio de e-mail**: EmailJS
- **Ferramentas**: Git, GitHub, GitHub Pages (hospedagem)

---

## Estrutura do projeto (`portifolio/src`)

```
components/     Componentes reutilizáveis (Navbar, Hero, Footer, SocialLinks, SkillsGrid, TimelineSection)
pages/          Páginas roteadas (About, Projects, Contact)
constants/      Dados estáticos (skills, experiência, formação) e configuração
                (contact.js centraliza e-mail/links; paths.js resolve URLs de assets)
translation/    i18n.js inicializa o i18next; locales/en.js e locales/pt.js
                concentram todas as strings, agrupadas por seção
                (navigation, hero, about, projects, contact, footer)
```

Todas as informações de contato (e-mail, LinkedIn, GitHub, currículo) vêm de
`src/constants/contact.js` — nenhum componente deve declarar esses valores
diretamente, evitando divergência entre telas.

---

## Rodando localmente

```bash
cd portifolio
npm install
npm run dev
```

---

## Enrico Bessa — Personal Portfolio

Welcome to my online portfolio! Here you can explore my projects, skills, and certificates.

🧑‍💻 **Access my website**: [Enrico Bessa Portfolio](https://enricobessa.github.io/EnricoBessaPortfolio/)

---

## About Me

I am **Enrico Bessa**, a Software Engineering student and backend-focused developer (C#/.NET), also working with JavaScript/React and Python. In this portfolio, I share my most meaningful projects, education, and professional experience.

---

## What You Will Find Here

- **About:** my background, skills, education, and professional experience.
- **Projects:** applications I've built using different technologies — front-end, back-end, mobile — plus the certificates I've completed.
- **Contact:** a contact form and links to LinkedIn, GitHub, email, and my resume.

---

## Technologies Used

- **Languages:** JavaScript (ES6+), HTML5, CSS3
- **Frameworks / Libraries:** React, React Router, react-i18next (internationalization)
- **Styling:** Tailwind CSS + plain-CSS design tokens (`src/index.css`, `src/App.css`)
- **Build tool:** Vite
- **Email delivery:** EmailJS
- **Tools:** Git, GitHub, GitHub Pages (hosting)

---
