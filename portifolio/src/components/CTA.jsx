import React from 'react'
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CTA = () => {
    const { t, i18n } = useTranslation();

    // Seleciona o currículo baseado no idioma atual
    const resumeUrl =
        i18n.language === "pt"
            ? "/EnricoBessaPortifolio/curriculos/Curriculo.pdf"
            : "/EnricoBessaPortifolio/curriculos/Resume.pdf";

    return (
        <section className="border-t border-white/10 py-8 bg-[#0c0c0c]">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Texto minimalista */}
                <p className="text-lg font-medium text-slate-200 text-center sm:text-left leading-snug">
                    {t('cta_texto1')} <br className="sm:block hidden" /> {t('cta_texto2')}
                </p>

                {/* Ícones */}
                <div className="flex space-x-6 text-3xl">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/enricobessa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition"
                    >
                        <FaLinkedin />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/EnricoBessa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition"
                    >
                        <FaGithub />
                    </a>

                    {/* Currículo */}
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition"
                    >
                        <FaFileAlt />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTA;
