import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="container-profile">
        <img src="/audrey-baudry.png" className="photo-profile" />
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
        <a href="#about">
          <button className="button-profile">À propos de moi</button>
        </a>
      </div>
      <div className="about-profile">
        <h3 className="about-title">À propos de moi</h3>
        <p id="about">
          Je m'appelle Audrey Baudry. J'étais formatrice de Français Langue
          Etrangère et de Savoirs de base jusque début 2024 où j'ai commencé ma
          reconversion professionnelle. Je suis en ce moment une formation
          "Développeur Web Full Stack" à la Wild Code School de Lille. C'est une
          formation intensive de 5 mois qui permet d'acquérir des capacités
          d'apprentissage dans le milieu du numérique. <br /> Lors de la
          formation, j'ai pu découvrir des notions de frontend avec HTML, CSS,
          JavaScript, React, Node.js... mais aussi du backend avec Express,
          MySQL... <br /> Lors de cette formation, en plus des quêtes et cours
          qui permettent d'appréhender ces notions nouvelles, des projets en
          groupe sont réalisés.
        </p>
      </div>
    </>
  );
}

export default Profile;
