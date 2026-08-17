import './Hero.css'

export default function Hero() {
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
      <div className="hero-content">
        <div className="hero-intro">
          <img className="userPhoto" src="/img/perfil.jpeg" alt="Foto de Nicolas" />
          <p className="hero-eyebrow">Portfólio · Desenvolvedor Full Stack</p>
          <h2>Olá, eu sou <span>Nicolas</span></h2>
          <p>Programador Full Stack focado em soluções criativas e eficientes.</p>
          <a href="#projects" className="btn"><span>Ver Projetos</span></a>
        </div>

        <aside className="stack-showcase" aria-label="Tecnologias que utilizo">
          <p className="stack-label">Tecnologias que utilizo</p>
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
