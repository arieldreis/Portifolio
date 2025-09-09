import React from 'react'
import Header from './Header'
import ArielImg from './assets/myImage.jfif'
import Footer from './footer.jsx'

const principal = () => {
  return (
    <>
      <Header />
      <main className='container-main'>
        <section className='aboutMe'>
          <h1>Sobre Mim</h1>
          <div className="sameRow">
            <p>Olá, me chamo Ariel Marinho! Sou estudante do 2º ano do Ensino Médio Técnico em Desenvolvimento
              de Sistemas na Escola Técnica Abdias do Nascimento. Tenho grande interesse em desenvolvimento de
              software e estou sempre aprendendo novas tecnologias para evoluir como programador. Meu foco atual 
              é em Java, JavaScript e Python, mas também gosto de explorar projetos que unam criatividade e inovação.
            </p>
            <img src={ArielImg} alt="Imagem do Desenvolvedor Ariel Marinho" className='myImg'/>
          </div>
        </section>
        <section className="projects">
          <h1>Projetos</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis beatae vitae maiores 
            repellendus cupiditate, qui eum nostrum suscipit accusantium minus architecto possimus voluptas dolorem, unde distinctio voluptate facere earum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis beatae vitae maiores 
            repellendus cupiditate, qui eum nostrum suscipit accusantium minus architecto possimus voluptas dolorem, unde distinctio voluptate facere earum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis beatae vitae maiores 
            repellendus cupiditate, qui eum nostrum suscipit accusantium minus architecto possimus voluptas dolorem, unde distinctio voluptate facere earum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis beatae vitae maiores 
            repellendus cupiditate, qui eum nostrum suscipit accusantium minus architecto possimus voluptas dolorem, unde distinctio voluptate facere earum?
            </p>
        </section>
        <section className="skills">
          <h1>Habilidades e Tecnologias</h1>
          <ul className='skills-list'>
            <li> Desenvolvimento web front-end: HTML, CSS, JavaScript e React </li>
            <li> Back-end e lógica de programação: Java, Python e NodeJs</li>
            <li> Versionamento de código: Git e GitHub (controle de versões e colaboração em projetos)</li>
            <li> Banco de dados: MySql (gerenciamento e consultas)</li>
            <li> Experiência prática em integração de sistemas e desenvolvimento de projetos pessoais</li>
          </ul>
          <h2>Idiomas</h2>
          <ul className="skills-list">
            <li> Inglês: Intermediário-Avançado</li>
            <li> Francês: Básico</li>
            <li> Espanhol: Básico</li>
          </ul>
        </section>
        <section className="education">
          <h1>Experiência e Educação</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis beatae vitae maiores 
            repellendus cupiditate, qui eum nostrum suscipit accusantium minus architecto possimus voluptas dolorem, unde distinctio voluptate facere earum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis beatae vitae maiores 
            repellendus cupiditate, qui eum nostrum suscipit accusantium minus architecto possimus voluptas dolorem, unde distinctio voluptate facere earum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis beatae vitae maiores 
            repellendus cupiditate, qui eum nostrum suscipit accusantium minus architecto possimus voluptas dolorem, unde distinctio voluptate facere earum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis beatae vitae maiores 
            repellendus cupiditate, qui eum nostrum suscipit accusantium minus architecto possimus voluptas dolorem, unde distinctio voluptate facere earum?
            </p>
        </section>
        <section className="contact">
          <h1>Contato</h1>
          <form action="https://formspree.io/f/meolnegz" method="post">
            <label htmlFor="Nome">Nome</label>
            <input type="text" name="nomeuser" id="nomeuser" />

            <label htmlFor="Email">E-mail</label>
            <input type="email" name="emailuser" id="emailuser" />

            <label htmlFor="Mensagem">Mensagem</label>
            <textarea name="msguser" id="msguser"></textarea>

            <button type="submit">ENVIAR</button>
          </form>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default principal
