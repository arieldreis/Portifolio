import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
  return (
    <footer className='footer-container'>
        <FontAwesomeIcon icon={faGithub}  className='icones-github' onClick={() => {window.open("https://github.com/arieldreis", '_blank')}}/>
        <FontAwesomeIcon icon={faLinkedin}  className='icones-linkedin' onClick={() => {window.open("https://www.linkedin.com/in/arielmarinho16", "_blank")}}/>
        <FontAwesomeIcon icon={faWhatsapp}  className='icones-whatszapp' onClick={() => {window.open("https://wa.me/5511973487939", "_blank")}}/>
        <FontAwesomeIcon icon={faInstagram}  className='icones-instagram' onClick={() => {window.open("https://www.instagram.com/arieldreis/", "_blank")}}/>
        <p>Email: <a href="mailto:arieldreis@gmail.com">arieldreis@gmail.com</a></p>
        <p>Brasil - São Paulo</p>
        <p>&copy; 2025 Ariel Marinho - Todos os direitos reservados</p>
    </footer>
  )
}

export default footer
