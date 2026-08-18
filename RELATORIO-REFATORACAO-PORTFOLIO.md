# Relatório — Refatoração visual e estrutural do portfólio

## 1. Objetivo da alteração

Transformar o portfólio de apresentação pessoal (React + Vite) em uma
peça de nível profissional para busca de vagas no Brasil e no exterior,
corrigindo bugs reais encontrados na auditoria, eliminando duplicação de
código/estilo, reorganizando as traduções e substituindo a estética de
"template" (glow neon, glassmorphism, gradientes laranja, hovers
exagerados) por um design system minimalista e consistente.

## 2. Principais problemas encontrados na auditoria

- **Bugs reais:**
  - `certificate_list` (EN) tinha uma entrada com a chave `Name` (maiúscula) em vez de `name` — o card correspondente renderizava sem título.
  - Classes Tailwind quebradas em `Projects.jsx`: `**gap-12**` e `**aspect-video**` (asteriscos literais, provavelmente colados de um markdown) — nunca eram aplicadas.
  - Todas as imagens/PDFs usavam o caminho absoluto `"/EnricoBessaPortifolio/..."` escrito à mão em ~7 arquivos — quebra silenciosamente se o repositório for renomeado ou o projeto for hospedado em outro caminho.
  - `getResumeUrl`/seleção de idioma comparavam `i18n.language === 'pt'` exatamente; variantes como `pt-BR` (comuns quando detectadas do navegador) caíam sempre no conteúdo em inglês.
  - `CTA_Profiles.jsx` era um componente morto (não importado em lugar nenhum) e, mesmo assim, apontava para imagens sem o prefixo de base do Vite — quebraria em produção se fosse usado.
- **Duplicação:** três implementações diferentes de "rodapé com redes sociais" (`CTA.jsx`, `CTA_Profiles.jsx` e um bloco extra dentro de `Contact.jsx`), cada uma com um conjunto diferente de links e nenhuma reaproveitando a outra. As seções de Formação e Experiência em `About.jsx` eram JSX quase idêntico duplicado.
- **Design:** gradientes/glow laranja, glassmorphism, hovers com `scale`/`rotate`, sombras coloridas — exatamente o estilo "chamativo/template" que o briefing pediu para evitar. Paleta de cores do `tailwind.config.js` (`primary`, `accent`, `secondary`...) nunca era usada por nenhum componente.
- **Traduções:** todas as strings soltas em um único arquivo `translation.jsx` sem agrupamento; textos de UI (rodapé) sem chave de tradução; ícones sem `aria-label`.
- **Assets duplicados:** pasta `portifolio/images/` era uma cópia integral (e morta) de `portifolio/public/images/` — nunca era servida pelo Vite.

## 3. Estratégia adotada

- Criar uma fonte única de contato (`src/constants/contact.js`) e de resolução de assets (`src/constants/paths.js`), eliminando strings hardcoded repetidas.
- Reorganizar as traduções em `src/translation/locales/{en,pt}.js`, agrupadas por seção (`navigation`, `hero`, `about`, `projects`, `contact`, `footer`), com `src/translation/i18n.js` cuidando apenas da inicialização do i18next.
- Extrair um `Hero`, um `SocialLinks` (usado no Hero, no rodapé e implicitamente disponível para a página de Contato) e um `Footer` único, renderizado uma vez em `App.jsx` — removendo as três implementações divergentes.
- Extrair `SkillsGrid` e `TimelineSection` (reaproveitado para Formação e Experiência) para tirar a duplicação de `About.jsx`.
- Repensar o design visual em tokens CSS (`:root` em `index.css`): uma paleta neutra escura com um único accent (azul), bordas e sombras discretas, sem glow/gradiente, hovers sutis (`translateY` pequeno), respeitando `prefers-reduced-motion`.
- Corrigir os bugs listados acima como parte da própria reorganização (não exigiu retrabalho isolado).

## 4. Arquivos alterados

**Novos:**
- `portifolio/src/constants/paths.js`
- `portifolio/src/constants/contact.js`
- `portifolio/src/translation/locales/en.js`
- `portifolio/src/translation/locales/pt.js`
- `portifolio/src/translation/i18n.js`
- `portifolio/src/components/SocialLinks.jsx`
- `portifolio/src/components/Footer.jsx`
- `portifolio/src/components/Hero.jsx`
- `portifolio/src/components/SkillsGrid.jsx`
- `portifolio/src/components/TimelineSection.jsx`
- `RELATORIO-REFATORACAO-PORTFOLIO.md` (este arquivo)

**Modificados:**
- `portifolio/src/constants/index.js`, `experience.en.js`, `experience.pt.js`, `education.en.js`, `education.pt.js`
- `portifolio/src/main.jsx`, `App.jsx`, `App.css`, `index.css`
- `portifolio/src/components/Navbar.jsx`
- `portifolio/src/pages/About.jsx`, `Projects.jsx`, `Contact.jsx`
- `portifolio/tailwind.config.js`, `index.html`
- `README.md`

**Removidos:**
- `portifolio/src/components/CTA.jsx` e `CTA_Profiles.jsx` (substituídos por `Footer.jsx` + `SocialLinks.jsx`)
- `portifolio/src/translation/translation.jsx` (substituído por `translation/i18n.js` + `locales/`)
- `portifolio/images/` (pasta inteira — duplicata morta de `public/images/`)
- `portifolio/public/images/github-logo.svg`, `linkedin.svg`, `mail.svg`, `whatsapp.svg` (só eram usados pelo componente morto `CTA_Profiles.jsx`)

## 5. Decisões técnicas

- **Ícone de e-mail no rodapé:** usa `mailto:` com o e-mail vindo de `CONTACT.email` (`enricobessa@gmail.com`, já existente no projeto em `Contact.jsx`/`CTA_Profiles.jsx`) — nenhum e-mail novo foi inventado.
- **Footer global:** movido para `App.jsx`, fora das rotas, para aparecer de forma consistente em todas as páginas (antes só existia em About/Projects, e Contact tinha uma versão própria e mais pobre).
- **Design tokens em CSS puro** (em vez de estender `tailwind.config.js`): o projeto já misturava classes utilitárias do Tailwind com CSS global (`App.css`); manter esse padrão e centralizá-lo em variáveis CSS é a mudança de menor risco — evita depender de particularidades do Tailwind v4 na detecção de temas customizados.
- **`i18n.language.startsWith('pt')`** em vez de comparação exata: corrige o caso real de variantes regionais (`pt-BR`, `en-US`) que o `LanguageDetector` pode reportar.

## 6. Pontos de atenção

- Não foi possível rodar `npm install` / `npm run dev` / `npm run build` neste ambiente (Node.js e npm não estão disponíveis). A revisão foi feita lendo e conferindo manualmente cada arquivo (imports, chaves de tradução, JSX balanceado). **Recomendo rodar `npm install && npm run dev` localmente antes de publicar** para confirmar visualmente e checar o console do navegador.
- O texto do Hero (`hero.role`, `hero.tagline`) foi escrito a partir das informações já existentes em `about.intro`/`education` (foco em backend, C#/.NET, React, Python) — nenhuma tecnologia ou experiência nova foi inventada, apenas reorganizada em uma frase de propósito.
- A logo do favicon (`images/logo.png`) e a pasta `docs/` (build já publicado no GitHub Pages) não foram tocadas.

## 7. Como testar

```bash
cd portifolio
npm install
npm run dev
```

- Alternar PT/EN no menu e conferir que todas as seções (Hero, Sobre, Habilidades, Formação, Experiência, Projetos, Certificados, Contato, Rodapé) têm texto nos dois idiomas.
- Testar em mobile (≤375px), tablet e desktop — menu hambúrguer, grid de projetos, formulário de contato e rodapé não devem quebrar nem gerar rolagem horizontal.
- Clicar no ícone de e-mail no rodapé e confirmar que abre o cliente de e-mail com o destinatário correto.
- Enviar o formulário de contato (`Contact.jsx`) para confirmar que o EmailJS continua funcionando (depende das variáveis de ambiente em `.env.local`).
