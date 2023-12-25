import "./styled.css";
import cv from "../../assets/liudmyla_fesenko_develop.pdf";

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="header-tittle">
          <strong>
            Hi, my name is <em>Liydmila</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header-text">
          <p>with passion for learning and creating.</p>
        </div>

        <a href={cv} target="_blank" rel="noreferrer" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
