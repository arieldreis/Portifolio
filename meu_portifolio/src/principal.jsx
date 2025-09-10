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
            <div className="paragraphs">
              <p id=''>Olá, me chamo Ariel Marinho! Sou estudante do 2º ano do Ensino Médio Técnico em Desenvolvimento de
                Sistemas na Escola Técnica Abdias do Nascimento. Tenho grande interesse em desenvolvimento de
                software e estou sempre aprendendo novas tecnologias para evoluir como programador.
              </p>
              <p id=''>Atualmente, meu foco é em Java, JavaScript e Python, mas também gosto de explorar projetos que unam
                criatividade, inovação e impacto positivo. Já desenvolvi aplicações web, sites dinâmicos e sistemas voltados
                para resolver problemas do dia a dia, sempre buscando escrever códigos organizados e de fácil
                manutenção.
              </p>
              <p id=''>Sou apaixonado por resolver desafios, aprender coisas novas e compartilhar conhecimento. Além disso,
                tenho interesse em desenvolvimento mobile e em áreas como Inteligência Artificial e ciência de dados,
                que me motivam a continuar estudando e expandindo minhas habilidades.
              </p>
              <p id=''>Meu objetivo é me tornar desenvolvedor back-end e contribuir para projetos que realmente façam a
                diferença, combinando tecnologia com soluções criativas.
              </p>
            </div>
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
          <h2>Educação</h2>
          <ul className="skills-list">
            <li> Ensino Médio Técnico em Desenvolvimento de Sistemas – Escola Técnica Abdias do Nascimento (2024 – 2026)</li>
            <li> Aprendizado em Java, JavaScript, Python, HTML, CSS e PHP.</li>
            <li> Foco em desenvolvimento full-stack, programação orientada a objetos, banco de dados e projetos práticos.</li>
            <li> Aprendizado com soluções de Inteligência Artificial no GitHub</li>
          </ul>
          <h2>Experiência em Projetos</h2>
          <ul>
            <li> Desenvolvimento Web Front-end</li>
            <ul className='skills-list'>
              <li> Criação de sites dinâmicos com HTML, CSS e JavaScript, incluindo um site de filmes para entretenimento.</li>
              <li> Uso de design responsivo, personalização com CSS dinâmico e integração de elementos interativos.</li>
            </ul>
            <li> Projetos Acadêmicos e Pessoais</li>
            <ul className='skills-list'>
              <li> Desenvolvimento de sistemas em Java e Python, aplicando lógica de programação, funções, listas e POO.</li>
              <li> Projetos em PHP com MySQL para CRUD e manipulação de dados.</li>
              <li> Experiências com bibliotecas em Python, como Tkinter (interfaces gráficas) e PyAutoGUI (automação).</li>
            </ul>
            <li> Hackaton – Projeto Rotina Inteligente (2025)</li>
            <ul className='skills-list'>
              <li> Participação em hackaton com projeto focado em educação, economia de água e energia.</li>
              <li> Trabalho em equipe com foco em inovação e impacto social.</li>
            </ul>
          </ul>
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
