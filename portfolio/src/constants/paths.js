// Caminho base dos assets estáticos (imagens, PDFs, certificados).
// Usa a base configurada no Vite (vite.config.js -> base) em vez de repetir
// "/EnricoBessaPortifolio/" manualmente em cada constante e tradução.
// Assim o projeto continua funcionando em dev, em outro domínio ou se o
// nome do repositório mudar no futuro.
export const ASSET_BASE = import.meta.env.BASE_URL;

/**
 * Monta a URL final de um asset público a partir de um caminho relativo.
 * @param {string} relativePath caminho dentro de `public`, ex: "images/logo.png"
 */
export const asset = (relativePath) => `${ASSET_BASE}${relativePath}`;
