import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
    function contato(){
        window.scrollTo({
            bottom: 1000,
            behavior: 'smooth'
        })
    }
  return (
    <header className='header'>
            <div className="container-header">
                <h1>ARIEL MARINHO</h1>
                <nav>
                    <FontAwesomeIcon icon={faBars} onClick={clicar_menu} className='button-nav' id='button'/>
                    <ul className='nav-list'>
                        <li className='menu-mobile-link'><a href="#inicio">Início</a></li>
                        <li className='menu-mobile-link'><a href="#sobre">Sobre</a></li>
                        <li className='menu-mobile-link'><a href="#projetos">Projetos</a></li>
                        <li className='menu-mobile-link'><a href="#contato" onClick={contato}>Contato</a></li>
                    </ul>
                </nav>
            </div>
            
            <div className='box'></div>
    </header>
  )
}

export default Header
