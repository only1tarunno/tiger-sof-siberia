import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/topics">topics</NavLink>
      </li>
      <li>
        <NavLink to="/projects">projects</NavLink>
      </li>
      <li>
        <NavLink to="/feature">feature</NavLink>
      </li>
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
      <li>
        <NavLink to="/getInvolved">Get Involved</NavLink>
      </li>
    </>
  );
};

export default Links;
