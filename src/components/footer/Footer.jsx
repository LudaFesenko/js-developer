import "./styled.css";
import gitHub from "../../img/icons/gitHub.svg";
import instagram from "../../img/icons/instagram.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social-item">
              <a
                href="https://github.com/LudaFesenko"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="gitHub" className="social-img" />
              </a>
            </li>

            <li className="social-item">
              <a href="#!">
                <img src={instagram} alt="instagram" className="social-img" />
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/liudmyla-fesenko-58a579188/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="linkedIn" className="social-img" />
              </a>
            </li>
          </ul>

          <div className="copyright">
            <p>© 2023 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
