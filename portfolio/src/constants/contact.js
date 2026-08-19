import { asset } from './paths';

// Fonte única das informações de contato do portfólio.
// Nenhum componente deve escrever e-mail, usuário do GitHub/LinkedIn
// ou caminho do currículo diretamente — sempre importar daqui.
export const CONTACT = {
  email: 'enricobessa@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/enricobessa/',
  githubUrl: 'https://github.com/EnricoBessa',
  resumeUrlByLanguage: {
    pt: asset('curriculos/Curriculo.pdf'),
    en: asset('curriculos/Resume.pdf'),
  },
};

export const getResumeUrl = (language) => {
  // O i18next pode reportar variantes regionais (ex: "pt-BR", "en-US"),
  // por isso normalizamos para as duas chaves que de fato existem.
  const normalizedLanguage = language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  return CONTACT.resumeUrlByLanguage[normalizedLanguage];
};

export const getMailtoUrl = (subject) =>
  `mailto:${CONTACT.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
