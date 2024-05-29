import "./CV.css";

function CV() {
  return (
    <div>
      <h2 className="top-cv">Formation</h2>
      <div className="info-formation">
        <p>
          En cours :{" "}
          <a
            href="https://www.wildcodeschool.com/fr-fr/formations-developpement-web/formation-developpeur-web"
            target="_blank"
          >
            Développeur Web Full Stack
          </a>
        </p>
        <p>Formation de 5 mois du 26 février au 26 juillet</p>
      </div>
      <h2 className="title-cv">Mon CV</h2>
      <div className="cv">
        <img className="my-cv" src="/CV-audrey-baudry.png"></img>
      </div>
    </div>
  );
}

export default CV;
