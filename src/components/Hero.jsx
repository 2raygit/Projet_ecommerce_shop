import { MdOutlineLocalOffer } from "react-icons/md"
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative bg-hero bg-center pb-12 bg-cover bg-no-repeat h-screen w-full ">
      <div className="max_padd_container relative top-32 xs:top-52">
        <h1 className="h1 capitalize max-w-[37rem]">Site Ecommerce </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quasi
          inventore tempore laudantium neque accusamus esse quos ipsa maxime,
          nesciunt recusandae, odio placeat quisquam est molestiae possimus eius
          voluptatibus perspiciatis.
        </p>

        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20">
            176k{" "}
            <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div>
        </div>
        <div className="max-xs:flex-col flex gap-2">
          <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
            Acheter maintenant{" "}
          </NavLink>
          <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
            <MdOutlineLocalOffer className="text-2xl" />
            Offres
          </NavLink>
        </div>
      </div>
    </section>
  );
}
