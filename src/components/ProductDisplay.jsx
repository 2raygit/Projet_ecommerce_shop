import PropTypes from "prop-types";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md"; // Correction de l'importation

export const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div>
      <section>
        <div className="flex flex-col gap-14 xl:flex-row">
          {/* left side */}
          <div className="flex gap-x-2 xl:flex-1">
            <div className="flex flex-col gap-[7px] flex-wrap">
              <img
                src={product_rt_1}
                alt="productImg"
                className="max-h-[99px] "
              />
              <img
                src={product_rt_2}
                alt="productImg"
                className="max-h-[99px]"
              />
              <img
                src={product_rt_3}
                alt="productImg"
                className="max-h-[99px]"
              />
              <img
                src={product_rt_4}
                alt="productImg"
                className="max-h-[99px]"
              />
            </div>
            <div>
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="flex flex-col xl:flex-[1.5">
            {/* right side */}
            <h3 className="h3">{product.name}</h3>
            <div className=" flex gap-x-2 text-secondary medium-22">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <p>(111)</p>
            </div>
            <div className=" flex gap-x-6 medium-20 my-4">
              <div className="line-through">{product.old_price}</div>
              <div className="text-secondary">{product.new_price}</div>
            </div>
            <div className="mb-4">
              <h4 className="text-bold ">Taille:</h4>
              <div className="flex gap-4 my-3">
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">
                  S
                </div>
                <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">
                  M
                </div>
                <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">
                  L
                </div>
                <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">
                  XL
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 mb-4 max-w-[555px=]">
              <button className="btn_dark_outline rounded-none uppercase regular-14 tracking-widest">
                Ajouter au panier
              </button>
              <button className="btn_dark_rounded rounded-none uppercase regular-14 tracking-widest  ">
                Acheter maintenant
              </button>
            </div>
            <p>
              <span className="medium-16 text-tertiary">Categorie : </span>
              Women |Jacket| Winter
            </p>
            <p>
              <span className="medium-16 text-tertiary">Tags : </span>
              Modern |Latest| Winter
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    old_price: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
  }).isRequired,
};
