import { NavLink } from "react-router-dom";

function Project({ title, img, id }) {
  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <img src={img} alt={title} className="project-img" />
        <h3 className="project-tittle">{title}</h3>
      </li>
    </NavLink>
  );
}

export default Project;
