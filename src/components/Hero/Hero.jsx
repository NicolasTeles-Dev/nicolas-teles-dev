import './Hero.css'

export default function Hero({ language }) {
  const copy = language === 'pt'
    ? { photo: 'Foto de Nicolas', role: 'Desenvolvedor Full Stack', greeting: 'Olá, eu sou', intro: 'Programador Full Stack focado em soluções criativas e eficientes.', projects: 'Ver Projetos', stack: 'Tecnologias que utilizo' }
    : { photo: 'Photo of Nicolas', role: 'Full Stack Developer', greeting: 'Hello, I am', intro: 'Full Stack Developer focused on creative and efficient solutions.', projects: 'View Projects', stack: 'Technologies I use' }
  const technologies = [
    ['html', 'HTML'],
    ['css', 'CSS'],
    ['js', 'JavaScript'],
    ['ts', 'TypeScript'],
    ['jquery', 'Jquery'],
    ['php', 'PHP'],
    ['nodejs', 'Node.js'],
    ['laravel', 'Laravel'],
    ['vue', 'Vue'],
    ['tailwindcss', 'Tailwind'],
    ['mysql', 'MySQL'],
    ['postgresql', 'PostgreSQL'],
    ['docker', 'Docker'],
    ['git', 'Git'],
    ['linux', 'Linux']
  ]

  return (
    <section id="hero" className="hero">
      <div className="hero-tech-art" aria-hidden="true">
        <span className="hero-grid" />
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />
        <span className="hero-diamond hero-diamond-one" />
        <span className="hero-diamond hero-diamond-two" />
        <span className="hero-code">&lt;/&gt;</span>
      </div>
      <div className="hero-content">
        <div className="hero-intro">
          <img className="userPhoto" src="/img/perfil.jpeg" alt={copy.photo} />
          <p className="hero-eyebrow">{copy.role}</p>
          <h2>{copy.greeting} <span>Nicolas</span></h2>
          <p>{copy.intro}</p>
          <a href="#projects" className="btn"><span>{copy.projects}</span></a>
        </div>

        <aside className="stack-showcase" aria-label={copy.stack}>
          <p className="stack-label">{copy.stack}</p>
          <div className="stack-carousel">
            <div className="stack-track">
              {[...technologies, ...technologies].map(([id, name], index) => (
                <div className="stack-item" key={`${id}-${index}`} aria-hidden={index >= technologies.length}>
                  <img src={`https://skillicons.dev/icons?i=${id}`} alt="" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
