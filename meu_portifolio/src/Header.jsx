import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

const Header = () => {
    function clicar_menu() {
        const navList = document.querySelector('.nav-list');
        navList.classList.toggle('active');

        const buttonMenu = document.getElementById('button');
        if(buttonMenu.style.transform === 'rotate(180deg)'){
            buttonMenu.style.transform = 'rotate(0deg)';
        } else {
            buttonMenu.style.transform = 'rotate(180deg)';
        }

        buttonMenu.style.transition = "0.5s";
    }
  return (
    <header className='header'>
            <div className="container-header">
                <h1>ARIEL MARINHO</h1>
                <nav>
                    <FontAwesomeIcon icon={faBars} onClick={clicar_menu} className='button-nav' id='button'/>
                    <ul className='nav-list'>
                        <li className='menu-mobile-link'><Link to='inicio' smooth={true} duration={800}>Início</Link></li>
                        <li className='menu-mobile-link'><Link to='aboutme' smooth={true} duration={800}>Sobre</Link></li>
                        <li className='menu-mobile-link'><Link to='project' smooth={true} duration={800}>Projetos</Link></li>
                        <li className="menu-mobile-link"><Link to='tecnologias' smooth={true} duration={800}>Tecnologias</Link></li>
                        <li className="menu-mobile-link"><Link to='education' smooth={true} duration={800}>Educação</Link></li>
                        <li className='menu-mobile-link'><Link to='contact' smooth={true} duration={800}>Contato</Link></li>
                    </ul>
                </nav>
            </div>
            
            <div className='box'></div>
    </header>
  )
}

export default Header
