import "./Projects.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "CodeBank",
      desc: "App de educação financeira gamificada.",
      img: "/img/codebank.png",
      stacks: "html,css,js,php,mysql,flutter,dart",
    },
    {
      title: "Dashboard-Omil",
      desc: "Dashboard desenvolvido para empresa Omil, onde mostra as correções que devem ser realizadas na caldeira",
      img: "/img/omil.png",
      stacks: "html,css,js,php,python",
    },
    {
      title: "DB-Assistente",
      desc: "App Flutter de lista de compras compartilháveis.",
      img: "/img/db.jpg",
      stacks: "flutter,dart,python",
    },
    {
      title: "Visite Rio do Sul",
      desc: "LandingPage para fomentar o turismo rural de Rio do Sul, projeto feito para o Protalent com parceiria da prefeitura",
      img: "/img/visite.png",
      stacks: "laravel,php,tailwindcss",
    },
    {
      title: "Half-Life Wiki",
      desc: "App que contém conteúdos dos jogos da Valve Half-Life 1 e 2, e suas DLC's",
      img: "/img/half.png",
      stacks: "flutter,dart,python,docker",
    },    {
      title: "AgroSoy",
      desc: "Meu primeiro site, uma dashboard feita para verificar a produção de soja do Brasil",
      img: "/img/agro.png",
      stacks: "html,css,js,php,python",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>Projetos</h2>

      <div className="project-list">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {/* IMAGEM */}
            {p.img && <img src={p.img} alt={p.title} className="project-img" />}

            {/* TÍTULO */}
            <h3>{p.title}</h3>

            {/* DESCRIÇÃO */}
            <p>{p.desc}</p>

            {/* STACKS */}
            {p.stacks && (
              <img
                className="stacks-img"
                src={`https://skillicons.dev/icons?i=${p.stacks}`}
                alt="Stacks"
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
