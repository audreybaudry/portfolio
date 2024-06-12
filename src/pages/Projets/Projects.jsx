import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

function Projects() {
  const projectsList = [
    {
      numero: "Projet 4",
      title: "Spot Lille Art",
      description:
        "En cours - Troisième projet à réaliser pour conclure la formation de Développeur web full stack. Pour ce projet, il s'agit de réaliser la partie front et back du site en créant la base de données.",
    },
    {
      numero: "Projet 3",
      title: "Lille au vert",
      link: "https://lille-au-vert.vercel.app/",
      image: "/sites/protojam.png",
      description:
        "Il s'agit d'un projet réalisé en 36h en groupe. Le sujet était la nature et la déconnexion. Nous avons utilisé ReactJS pour réaliser un site simple et clair qui invite à la déconnexion. Pour cela, nous avons mis des fonctionnalités simples telles qu'un filtre, une unique activité obtenue de manière random, des pop-ups qui invitent à faire son choix et quitter le site... Le site a été réalisé sur React.",
    },
    {
      numero: "Projet 2",
      title: "Ready Player Found",
      link: "https://ready-player-found.vercel.app",
      image: "/sites/projet-2.png",
      description:
        " Ready player found a été réalisé en 4 semaines en groupe de 4. Le site a été réalisé via React sur le framework pédagogique Harmonia en utilisant l'API Rawg, tout cela en commencant à appréhender la méthode Agile. Nous avons intégré plusieurs fonctionnalités telles qu'un filtre, une fonction de recherche et la pagination.",
    },
    {
      numero: "Projet 1",
      title: "Lune",
      link: "https://office-de-tourisme-de-la-lune.vercel.app",
      image: "/sites/projet-1.png",
      description:
        "Pour le premier projet de la WCS, nous avons eu 2 semaines en groupe de 5. L'objectif était de réaliser un site internet d'une page sur l'office de tourisme de la Lune. Les outils et languages utilisés sont : HTML, CSS et JavaScript",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <h2 className="projects-title">Mes projets</h2>
      <Slider {...settings}>
        {projectsList.map((project, index) => (
          <div key={index} className="project-card-container">
            <h4 className="project-numero">{project.numero}</h4>
            <h3 className="project-title">{project.title}</h3>
            <div className="info-projet">
              {project.image && (
                <img
                  src={project.image}
                  className="projects-image"
                  alt={project.title}
                />
              )}
              <p className="description-projects">{project.description}</p>
              <div className="button-link">
                {project.link && (
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="button-projects"
                  >
                    Lien vers le site
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
