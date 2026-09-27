import "./Projects.css";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Motion = motion;

export default function Projects({ language }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const copy = language === "pt"
    ? { title: "Projetos", previous: "Ver projeto anterior", next: "Ver próximo projeto", select: "Selecionar projeto", details: "Ver detalhes", close: "Fechar detalhes do projeto", featured: "Projeto em destaque", technologies: "Tecnologias utilizadas em", github: "Ver no GitHub", display: "Exibir" }
    : { title: "Projects", previous: "View previous project", next: "View next project", select: "Select project", details: "View details", close: "Close project details", featured: "Featured project", technologies: "Technologies used in", github: "View on GitHub", display: "Show" };

  const projects = [
    {
      title: "CodeBank",
      desc: "App de educação financeira gamificada.",
      descEn: "Gamified financial education app.",
      img: "/img/codebank.png",
      stacks: "html,css,js,php,mysql,flutter,dart",
      github: "https://github.com/NicolasTeles-Dev",
    },
    {
      title: "Dashboard-Omil",
      desc: "Dashboard desenvolvido para empresa Omil, onde mostra as correções que devem ser realizadas na caldeira",
      descEn: "Dashboard built for Omil showing the corrections needed for its boiler.",
      img: "/img/omil.png",
      stacks: "html,css,js,php,python",
      github: "https://github.com/NicolasTeles-Dev",
    },
    {
      title: "DB-Assistente",
      desc: "Assistente Virtual com IA integrada que entende e fala com você",
      descEn: "Virtual assistant with integrated AI that understands and talks to you.",
      img: "/img/db.jpg",
      stacks: "flutter,dart,python",
      github: "https://github.com/NicolasTeles-Dev",
    },
    {
      title: "Visite Rio do Sul",
      desc: "LandingPage para fomentar o turismo rural de Rio do Sul, projeto feito para o Protalent com parceiria da prefeitura",
      descEn: "Landing page promoting rural tourism in Rio do Sul, built for Protalent in partnership with the city hall.",
      img: "/img/visite.png",
      stacks: "laravel,php,tailwindcss",
      github: "https://github.com/NicolasTeles-Dev",
    },
    {
      title: "Half-Life Wiki",
      desc: "App que contém conteúdos dos jogos da Valve Half-Life 1 e 2, e suas DLC's",
      descEn: "App featuring content from Valve's Half-Life 1 and 2 games and their DLCs.",
      img: "/img/half.png",
      stacks: "flutter,dart,python,docker",
      github: "https://github.com/NicolasTeles-Dev",
    },
    {
      title: "AgroSoy",
      desc: "Meu primeiro site, uma dashboard feita para verificar a produção de soja do Brasil",
      descEn: "My first website, a dashboard created to track Brazil's soybean production.",
      img: "/img/agro.png",
      stacks: "html,css,js,php,python",
      github: "https://github.com/NicolasTeles-Dev",
    },
  ];

  const selectProject = (index) => {
    setActiveProject(index);
  };

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    if (selectedProject !== null) {
      window.addEventListener("keydown", closeOnEscape);
    }

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject]);

  const showPreviousProject = () => {
    const previousProject = activeProject === 0 ? projects.length - 1 : activeProject - 1;
    selectProject(previousProject);
  };

  const showNextProject = () => {
    selectProject((activeProject + 1) % projects.length);
  };

  return (
    <Motion.section
      id="projects"
      className="projects"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>{copy.title}</h2>

      <div className="projects-carousel" aria-roledescription="carrossel">
        <button
          className="carousel-control"
          type="button"
          onClick={showPreviousProject}
          aria-label={copy.previous}
        >
          <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
        </button>

        <div className="project-viewport">
          <Motion.div
            className="project-list"
            animate={{ x: `-${activeProject * 100}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {projects.map((p, i) => {
              const isActive = i === activeProject;

              return (
                <Motion.article
                  key={p.title}
                  className={`project-card ${isActive ? "is-active" : ""}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  onClick={() => isActive && setSelectedProject(i)}
                  onKeyDown={(event) => {
                    if (isActive && (event.key === "Enter" || event.key === " ")) {
                      event.preventDefault();
                      setSelectedProject(i);
                    }
                  }}
                  role="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-current={isActive ? "true" : undefined}
                >
                  {p.img && <img src={p.img} alt={p.title} className="project-img" />}
                  <h3>{p.title}</h3>
                  <p>{language === 'pt' ? p.desc : p.descEn}</p>
                  <span className="project-more">
                    {copy.details}
                    <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
                  </span>
                </Motion.article>
              );
            })}
          </Motion.div>
        </div>

        <button
          className="carousel-control"
          type="button"
          onClick={showNextProject}
          aria-label={copy.next}
        >
          <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
        </button>
      </div>

      <div className="carousel-pagination" aria-label={copy.select}>
        {projects.map((project, i) => (
          <button
            key={project.title}
            className={`carousel-dot ${i === activeProject ? "is-active" : ""}`}
            type="button"
            onClick={() => selectProject(i)}
            aria-label={`${copy.display} ${project.title}`}
            aria-current={i === activeProject ? "true" : undefined}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <Motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <Motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`project-modal-${selectedProject}`}
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={copy.close}
              >
                <span className="material-symbols-outlined" aria-hidden="true">close</span>
              </button>

              <img src={projects[selectedProject].img} alt="" className="modal-image" />
              <div className="modal-content">
                <p className="modal-label">{copy.featured}</p>
                <h3 id={`project-modal-${selectedProject}`}>{projects[selectedProject].title}</h3>
                <p>{language === 'pt' ? projects[selectedProject].desc : projects[selectedProject].descEn}</p>
                <img
                  className="stacks-img"
                  src={`https://skillicons.dev/icons?i=${projects[selectedProject].stacks}`}
                  alt={`${copy.technologies} ${projects[selectedProject].title}`}
                />
                <div className="modal-actions">
                  <a href={projects[selectedProject].github} target="_blank" rel="noreferrer">
                    <span className="material-symbols-outlined" aria-hidden="true">code</span>
                    {copy.github}
                  </a>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.section>
  );
}
