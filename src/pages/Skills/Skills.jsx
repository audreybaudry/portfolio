import "./Skills.css";

function Skills() {
  const languages = [
    {
      name: "JavaScript",
      logo: "/logo/js.png",
    },
    {
      name: "HTML5",
      logo: "/logo/html.png",
    },
    {
      name: "CSS 3",
      logo: "/logo/css.png",
    },
    {
      name: "SQL",
      logo: "/logo/sql.png",
    },
  ];

  const tools = [
    {
      name: "React",
      logo: "/logo/react.png",
    },
    {
      name: "Vite",
      logo: "/logo/vite.png",
    },
    {
      name: "Node JS",
      logo: "/logo/node.png",
    },
    {
      name: "Express",
      logo: "/logo/express.png",
    },
    {
      name: "MySQL",
      logo: "/logo/mysql.png",
    },
  ];

  return (
    <div className="skills">
      <h2 className="title-languages">Mes langages </h2>

      <div className="all-skills">
        {languages.map((language) => (
          <div className="info-skills">
            <img src={language.logo} className="logo-skills" />
          </div>
        ))}
      </div>

      <h2 className="title-tools">Mes bibliothèques et frameworks </h2>

      <div className="all-skills">
        {tools.map((tool) => (
          <div className="info-skills">
            <img src={tool.logo} className="logo-skills" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
