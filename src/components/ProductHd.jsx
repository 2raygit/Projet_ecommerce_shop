import PropTypes from 'prop-types';
import { TbArrowRight } from "react-icons/tb";

export const ProductHd = (props) => {
  const { product } = props;
  return (
    <div className='flex flex-items-center flex-wrap gap-x-2 medium-16 my-4 capitalize'>
      Home
      <TbArrowRight /> 
      Shop
      <TbArrowRight />
      {product.category}
      <TbArrowRight />
      {product.name}
    </div>
  );
};

ProductHd.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
