import { useEffect, useRef, useState } from 'react'
import './Hero.css'

export default function Hero({ language }) {
  const carouselRef = useRef(null)
  const loopWidthRef = useRef(0)
  const dragStartRef = useRef({ startX: 0, scrollLeft: 0 })
  const [isDragging, setIsDragging] = useState(false)
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
    ['sass', 'Sass'],
    ['mysql', 'MySQL'],
    ['postgresql', 'PostgreSQL'],
    ['docker', 'Docker'],
    ['git', 'Git'],
    ['linux', 'Linux']
  ]

  useEffect(() => {
    const carousel = carouselRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!carousel) return undefined

    const updateLoopWidth = () => {
      const track = carousel.firstElementChild
      const firstItem = track?.firstElementChild
      const firstItemInSecondSet = track?.children[track.children.length / 2]

      if (!firstItem || !firstItemInSecondSet) return
      loopWidthRef.current = firstItemInSecondSet.getBoundingClientRect().left - firstItem.getBoundingClientRect().left
      carousel.scrollLeft = ((carousel.scrollLeft % loopWidthRef.current) + loopWidthRef.current) % loopWidthRef.current
    }

    updateLoopWidth()
    window.addEventListener('resize', updateLoopWidth)

    if (reducedMotion) {
      return () => window.removeEventListener('resize', updateLoopWidth)
    }

    let animationFrame
    const scrollStacks = () => {
      const loopWidth = loopWidthRef.current
      if (!dragStartRef.current.isDragging && loopWidth > 0) {
        carousel.scrollLeft = (carousel.scrollLeft + 0.45) % loopWidth
      }

      animationFrame = requestAnimationFrame(scrollStacks)
    }

    animationFrame = requestAnimationFrame(scrollStacks)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', updateLoopWidth)
    }
  }, [])

  const startDragging = (event) => {
    const carousel = carouselRef.current
    if (!carousel) return

    dragStartRef.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: carousel.scrollLeft,
    }
    carousel.setPointerCapture(event.pointerId)
    setIsDragging(true)
  }

  const dragStacks = (event) => {
    const carousel = carouselRef.current
    const dragStart = dragStartRef.current
    if (!carousel || !dragStart.isDragging) return

    const loopWidth = loopWidthRef.current
    if (loopWidth <= 0) return

    const position = dragStart.scrollLeft - (event.clientX - dragStart.startX)
    carousel.scrollLeft = ((position % loopWidth) + loopWidth) % loopWidth
  }

  const stopDragging = (event) => {
    const carousel = carouselRef.current
    if (!carousel || !dragStartRef.current.isDragging) return

    dragStartRef.current.isDragging = false
    carousel.releasePointerCapture(event.pointerId)
    setIsDragging(false)
  }

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
          <h1>{copy.greeting} <span>Nicolas Teles</span></h1>
          <p>{copy.intro}</p>
          <a href="#projects" className="btn"><span>{copy.projects}</span></a>
        </div>

        <aside className="stack-showcase" aria-label={copy.stack}>
          <p className="stack-label">{copy.stack}</p>
          <div
            ref={carouselRef}
            className={`stack-carousel${isDragging ? ' is-dragging' : ''}`}
            onPointerDown={startDragging}
            onPointerMove={dragStacks}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
          >
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
