import './About.css'

export default function About({ language }) {
  const copy = language === 'pt'
    ? {
        title: 'Sobre Mim',
        first: <>Sou técnico em informática formado pelo IFC com foco em <span>programação full stack</span>. Tenho experiência desenvolvendo sistemas web e mobile, sempre buscando unir<span> desempenho, segurança e boas práticas de código</span>.</>,
        second: <>Gosto de criar <span>interfaces modernas</span> e intuitivas, integrando o design com a lógica do backend. Trabalho com linguagens como <span>JavaScript, Python e PHP</span>, além de frameworks como<span> React, Laravel, Flutter e FastAPI</span>.</>,
        third: <>Meu objetivo é evoluir constantemente e desenvolver projetos que gerem<span> impacto real</span> seja otimizando processos, automatizando tarefas ou criando experiências digitais que façam sentido.</>,
      }
    : {
        title: 'About Me',
        first: <>I am an IT technician graduated from IFC, focused on <span>full-stack development</span>. I have experience building web and mobile systems, always aiming to combine<span> performance, security and coding best practices</span>.</>,
        second: <>I enjoy creating <span>modern</span>, intuitive interfaces, integrating design with backend logic. I work with languages such as <span>JavaScript, Python and PHP</span>, as well as frameworks including<span> React, Laravel, Flutter and FastAPI</span>.</>,
        third: <>My goal is to keep growing and build projects that create<span> real impact</span>, whether by optimizing processes, automating tasks or creating meaningful digital experiences.</>,
      }
  return (
    <section id="about" className="about">
      <h2>{copy.title}</h2>
      <p>{copy.first}</p>
      <p>{copy.second}</p>
      <p>{copy.third}</p>
    </section>
  )
}
