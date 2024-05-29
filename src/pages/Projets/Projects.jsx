import "./Projects.css";

function Projects() {
  const projectsList = [
    {
      title: "L'office de tourisme de la Lune",
      link: "https://office-de-tourisme-de-la-lune.vercel.app",
      image: "/sites/projet-1.png",
      description:
        "Il s'agit d'un projet réalisé en 2 semaines en groupe de 5 dans le cadre de ma formation suivie à la Wild Code School. L'objectif était de réaliser un site internet d'une page sur l'office de tourisme de la Lune. Les outils et languages utilisés sont : HTML, CSS et JavaScript",
    },
    {
      title: "Ready Player Found",
      link: "https://office-de-tourisme-de-la-lune.vercel.app",
      image: "/sites/projet-2.png",
      description:
        " Il s'agit d'un projet réalisé en 4 semaines en groupe de 4. Le site a été réalisé via React sur le framework pédagogique Harmonia en utilisant l'API Rawg.",
    },
    {
      title: "Lille au vert",
      link: "https://lille-au-vert.vercel.app/",
      image: "/sites/protojam.png",
      description:
        "Il s'agit d'un projet réalisé en 36h par groupe de 3. Le sujet était la nature et la déconnexion. Nous avons utilisé ReactJS pour réaliser un site simple et clair qui invite à la deconnexion. Pour cela, nous avons mis des fonctionnalités simples telles qu'un filtre, une unique activité obtenue de manière random, des pop-ups qui invitent à faire son choix et quitter le site... Les outils et langages utilisés sont :",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Mes projets</h2>
      <div className="projet1">
        <hr />
        {projectsList.map((project) => (
          <div key={project.name}>
            <h3 className="project-title">{project.title}</h3>
            <div className="info-projet">
              <a href={project.link} target="_blank">
                <img src={project.image} className="projects-sites" />
              </a>
              <p className="description-projects">{project.description}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
