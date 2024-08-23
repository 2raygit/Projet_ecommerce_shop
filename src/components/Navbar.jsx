import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import {MdHomeFilled } from "react-icons/md"
import {MdCategory} from "react-icons/md"
import {MdShop2} from "react-icons/md"
import {MdContacts} from "react-icons/md"

export default function Navbar({containerStyles}) {
  return (
    <nav className={containerStyles}>
      <NavLink to={"/"} className={({ isActive }) => isActive ? "active_link" :""} >
        <div className="flexCenter gap-x-1">
          <MdHomeFilled />
          Accueil
        </div>
      </NavLink>
      <NavLink to={"/mens"} className={({ isActive }) => isActive ?  "active_link":"" }>
        <div className="flexCenter gap-x-1">
          <MdCategory />
          Hommes
        </div>
      </NavLink>
      <NavLink to={"/womens"} className={({ isActive }) => isActive ?  "active_link":"" }>
        <div className="flexCenter gap-x-1">
          <MdShop2 />
          Femmes
        </div>
      </NavLink>
      <NavLink to={"/kids"} className={({ isActive }) => isActive ?  "active_link" :"" }>
        <div className="flexCenter gap-x-1">
          <MdContacts />
          Enfants
        </div>
      </NavLink>
    </nav>
  );
}

Navbar.propTypes = {
  containerStyles: PropTypes.string.isRequired,
};
