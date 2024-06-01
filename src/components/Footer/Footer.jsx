import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="images-footer">
        <a href="https://github.com/audreybaudry" target="_blank">
          <img
            src="/reseaux-sociaux/Github_icon.svg"
            className="image-footer"
          />
        </a>
        <a href="https://www.linkedin.com/in/audrey-baudry/" target="_blank">
          <img src="/reseaux-sociaux/linkedin.svg" className="image-footer" />
        </a>
        <a href="mailto:audrey.baudry@outlook.fr">
          <img
            src="/reseaux-sociaux/mail.svg"
            className="image-footer mail-footer"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
