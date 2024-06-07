import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="container-profile">
        <img src="/audrey-baudry.jpg" className="photo-profile" />
        <div className="info-profile">
          <p className="bienvenue-profile">Bienvenue sur mon porfolio</p>
          <h2 className="name-profile">Audrey BAUDRY</h2>
          <p className="job-profile">DÉVELOPPEUSE WEB</p>
          <h2>Mes réseaux sociaux : </h2>
          <div className="images">
            <a href="https://github.com/audreybaudry" target="_blank">
              <img
                src="/reseaux-sociaux/Github_icon.svg"
                className="image-soc"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/audrey-baudry/"
              target="_blank"
            >
              <img src="/reseaux-sociaux/linkedin.svg" className="image-soc" />
            </a>
            <a href="mailto:audrey.baudry@outlook.fr">
              <img
                src="/reseaux-sociaux/mail.svg"
                className="image-soc image-mail"
              />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="button">
        <a href="#a-propos">
          <button className="button-profile">À propos de moi</button>
        </a>
      </div>
      <div className="about-profile">
        <div id="a-propos">
          <h3 className="about-titles">À propos de moi</h3>
          <p>
            Je m'appelle Audrey Baudry. Jusqu'au début de l'année 2024, j'étais
            formatrice en Français Langue Étrangère et en Savoirs de base.
            Depuis cette période, j'ai entamé une reconversion professionnelle.{" "}
            <br />
            Je suis actuellement une formation de "Développeur Web Full Stack" à
            la Wild Code School de Lille. <br />
            Cette formation intensive de cinq mois me permet d'acquérir des
            compétences solides dans le domaine du dévelopement web. Au cours de
            cette formation, j'ai découvert plusieurs notions de frontend telles
            que HTML, CSS, JavaScript, React, et Node.js, ainsi que des notions
            de backend avec Express et MySQL. <br />
            En plus des quêtes et des cours, qui facilitent l'apprentissage de
            ces nouvelles compétences, nous réalisons également des projets en
            groupe qui permettent une montée en compétence notamment grâce à
            l'entraide et au pair coding.
          </p>
          <div>
            <h2 className="about-titles">Formation</h2>
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
              <p>
                Formation de 5 mois du 26 février au 26 juillet à la Wild Code
                School de Lille
              </p>
            </div>
          </div>
          <div className="cv">
            <button
              onClick={() => window.open("/CV-Audrey_Baudry.pdf", "_blank")}
              className="button-cv"
            >
              Télécharger mon CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
