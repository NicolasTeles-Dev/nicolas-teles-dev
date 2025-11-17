import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img className='userPhoto' src="/img/perfil.jpeg" alt="Foto de Nicolas" />
      <h2>Olá, eu sou <span>Nicolas</span></h2>
      <p>Programador Full Stack focado em soluções criativas e eficientes.</p>
      <div className="Skillsicons">
        <img width={840} src="https://skillicons.dev/icons?i=html,css,js,ts,php,python,nodejs,laravel,react,tailwindcss,mysql,dart,flutter" />
      </div>
      <a href="#projects" className="btn"><span>Ver Projetos</span></a>
    </section>
  )
}
