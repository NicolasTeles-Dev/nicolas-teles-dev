import './About.css'

export default function About({ language }) {
  const copy = language === 'pt'
    ? {
        title: 'Sobre Mim',
        first: <>Sou Técnico em Informática formado pelo <span>Instituto Federal Catarinense (IFC)</span>, com formação voltada ao <span>desenvolvimento Full Stack, redes de computadores e IoT</span>. Atualmente, curso Bacharelado em Sistemas de Informação, aprofundando meus conhecimentos em tecnologia e desenvolvimento de software.</>,
        second: <>Atuo profissionalmente como <span>Desenvolvedor Full Stack</span>, contribuindo para o desenvolvimento de soluções que impactam o cotidiano de milhares de pessoas em todo o Brasil. Trabalho na criação de interfaces interativas, automação de tarefas e otimização de processos, priorizando a <span>qualidade do código, a manutenibilidade</span> e a construção de aplicações robustas e escaláveis.</>,
        third: <>Tenho interesse em desenvolver <span>interfaces modernas e intuitivas</span>, integrando a experiência do usuário no front-end à lógica e às funcionalidades do back-end. Minha atuação envolve tecnologias como <span>JavaScript, PHP, Vue.js e Laravel</span>, além do interesse contínuo em expandir meus conhecimentos em Node.js e outras ferramentas do ecossistema web.</>,
        fourth: <>Busco evoluir constantemente como desenvolvedor, aplicando boas práticas de programação e explorando novas tecnologias para transformar necessidades reais em <span>soluções eficientes</span>.</>,
      }
    : {
        title: 'About Me',
        first: <>I'm an IT Technician graduated from the <span>Federal Institute of Santa Catarina (IFC)</span>, with a background in <span>Full Stack Development, Computer Networking, and IoT</span>. I'm currently pursuing a Bachelor's degree in Information Systems to further strengthen my knowledge of software engineering and technology.</>,
        second: <>I currently work as a <span>Full Stack Developer</span>, building solutions that impact the daily lives of thousands of people across Brazil. My work involves developing interactive user interfaces, automating tasks, and optimizing processes, with a strong focus on <span>code quality, maintainability</span>, and building robust, scalable applications.</>,
        third: <>I enjoy creating <span>modern, intuitive interfaces</span> and connecting frontend experiences with backend logic to deliver effective and reliable solutions. My main technologies include <span>JavaScript, PHP, Vue.js, and Laravel</span>, and I'm continuously expanding my knowledge of the web development ecosystem, including Node.js.</>,
        fourth: <>I'm committed to continuous learning, applying software development best practices, and turning real-world challenges into <span>efficient technological solutions</span>.</>,
      }
  return (
    <section id="about" className="about">
      <h2>{copy.title}</h2>
      <p>{copy.first}</p>
      <p>{copy.second}</p>
      <p>{copy.third}</p>
      <p>{copy.fourth}</p>
    </section>
  )
}
