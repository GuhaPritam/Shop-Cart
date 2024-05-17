import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = createContext(null);

function ProductContextProvider(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=30')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const contextValue = {
        products: products, setProducts: setProducts
    };

    return (
        <>
            <div>
                <ProductContext.Provider value={contextValue}>
                    {props.children}
                </ProductContext.Provider>
            </div>
        </>
    );
}

ProductContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductContextProvider;
