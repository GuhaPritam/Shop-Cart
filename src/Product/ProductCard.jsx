import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import Rating from './Rating';
import ProductDetail from './ProductDetails';

function ProductCard() {
  const { products, showDetails, handelProductSelect, handelAddToCart } = useContext(ProductContext);

  return (
    <>
      {showDetails && <ProductDetail />}
      {products.map((element) => (
        <figure key={element.id} className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <a href="#" onClick={() => handelProductSelect(element)}>
            <img className="w-full h-[22rem] object-cover" src={element.image} alt="" />
            <figcaption className="pt-4">
              <div className='h-[7rem]'>
                <h3 className="text-xl mb-1">{element.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">{element.category}</p>
                <div className="flex items-center space-x-1 mb-5">
                  <Rating value={element.rating.rate} />
                </div>
              </div>
              <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#" onClick={(e) => handelAddToCart(e, element)}>
                <img src="./assets/tag.svg" alt="" />
                <span>$ {element.price} | Add to Cart</span>
              </a>
            </figcaption>
          </a>
        </figure>
      ))}
    </>
  )
}

export default ProductCard;
