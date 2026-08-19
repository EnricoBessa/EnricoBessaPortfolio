import React from 'react'
import { Link } from 'react-router-dom';


const CTA_Profiles = () => {
    return (
        <footer>
            <div className="flex justify-end flex-wrap gap-4 px-4 sm:px-6 lg:px-8">
                <a className='m-2' href="https://github.com/EnricoBessa" target="_blank" rel="noopener noreferrer">
                    <img src="/images/github-logo.svg" alt="GitHub" />
                </a>
                <a className='m-2 mt-2.5' href="https://www.linkedin.com/in/enricobessa/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedin.svg" alt="Linkedin" />
                </a>
                <a className='m-2 mt-2.5' href="https://mail.google.com/mail/?view=cm&to=enricobessa@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/mail.svg" alt="Email" />
                </a>

                <a className='m-2' href="https://wa.me/5531999481929" target="_blank" rel="noopener noreferrer">
                    <img src="/images/whatsapp.svg" alt="Whatsapp" />
                </a>
            </div>
        </footer>
    )
}

export default CTA_Profiles