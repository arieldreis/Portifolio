import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer({ setLanguage }) {
  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "Portuguese") setLanguage("pt");
    if (value === "Spanish") setLanguage("es");
    if (value === "English") setLanguage("en");
    if (value === "French") setLanguage("fr");
  };
  return (
    <footer className='footer-container'>
        <FontAwesomeIcon icon={faGithub}  className='icones-github' onClick={() => {window.open("https://github.com/arieldreis", '_blank')}}/>
        <FontAwesomeIcon icon={faLinkedin}  className='icones-linkedin' onClick={() => {window.open("https://www.linkedin.com/in/arielmarinho16", "_blank")}}/>
        <FontAwesomeIcon icon={faWhatsapp}  className='icones-whatszapp' onClick={() => {window.open("https://wa.me/5511973487939", "_blank")}}/>
        <FontAwesomeIcon icon={faInstagram}  className='icones-instagram' onClick={() => {window.open("https://www.instagram.com/arieldreis/", "_blank")}}/>
        <div className="container_responsivo">
          <p>Email: <a href="mailto:arieldreis@gmail.com">arieldreis@gmail.com</a></p>
          <p>Brasil - São Paulo</p>
          <div className="select-language">
            <select id="language-select" onChange={handleChange}>
              <option value="Portuguese"> 🌐 Portuguese</option>
              <option value="Spanish"> 🌐 Spanish</option>
              <option value="English"> 🌐 English</option>
              <option value="French"> 🌐 French</option>
            </select>
          </div>
          <p id='direitosLicenca'>&copy; 2025 Ariel Marinho - Todos os direitos reservados</p>
        </div>
    </footer>
  )
}
