import PropTypes from 'prop-types';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import all_products from "../assets/all_products";
import { Item } from "../components/Item";
export default function Category({ category, banner }) {
  return (
    <section className="max_padd_container py-12 xl:py-26">
      <div>
        <div>
          <img src={banner} alt="" className="block my-7 mx-auto" />
        </div>
        <div className="flexBetween my-8 mx-2">
          <h5>
            <span>Vous êtes dans la catégorie : {category}</span>
          </h5>
          <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/15" >
            Trier par
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        {/* container */}
        <div className="grid grid-cols-1 xs:grid-cols-2  md:grid-cols-3  xl:grid-cols-4 gap-6">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
          })}
        </div>
        <div className='mt-16 text-center'>
          <button className='btn_dark_rounded'>charger plus</button>
        </div>
      </div>
    </section>
  );
}

Category.propTypes = {
  category: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};
