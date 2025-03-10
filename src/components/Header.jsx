import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
// import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdMenu, MdClose } from 'react-icons/md';
import { FaOpencart } from 'react-icons/fa';

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = ()=>setMenuOpened(!menuOpened);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween  py-3 max-xs:px-2">
        {/*logo */}
        <div>
          <Link>
            <img src={logo} alt="" height={66} width={88} />
          </Link>
        </div>

        {/* navbar */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10  medium-15"}
        />

        {/* navbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex item-start flex-col gap-y-12 fixed top-20 bg-white right-8 rounded-3xl shadow-md w-64 medium-16 ring-1 p-12  ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 p-12  ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />

        {/* button */}
        <div className=" flexBetween sm:gap-x-6 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="  cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full "
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className=" cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          )}
        </div>
        <div className="flexBetween sm:gap-x-6 bold-16">
          <NavLink to={"/cart-page"} className={"flex"}>
            <FaOpencart className=" p-1 h-8 w-8 ring-1 ring-slate-900/30 rounded-full " />
            <span className=" relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
              0
            </span>
          </NavLink>
          {/* <NavLink
            to={"logout"}
            className={"btn_secondary_rounded flexCenter gap-x-2 medium-16 "}
          >
            <img src={logout} alt="logoutIcon" height={19} width={19}></img>{" "} 
            Deconnexion
          </NavLink> */}
          <NavLink
            to={"login"}
            className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
          >
            <img src={user} alt="useIcon" height={19} width={19}></img>{" "}
            connexion
          </NavLink>
        </div>
      </div>
    </header>
  );
}
