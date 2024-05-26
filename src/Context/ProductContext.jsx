import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showCart, setShowCart] = useState(false);
    const [cartData, setCartData] = useState([])

    function handelDeleteCart(event, itemId) {
        event.preventDefault();
        const filteredItem = cartData.filter((item) => {
            return item.id !== itemId;
        });
        setCartData([...filteredItem])
    }

    function handelAddToCart(e, element) {
        e.stopPropagation();
        const found = cartData.find((item) => {
            return item.id === element.id;
        })
        if (!found) {
            setCartData([
                ...cartData,
                element,
            ])
        } else {
            console.error(`The Product ${element.title} already added!`)
        }
    }

    function handleClose() {
        setSelectedProduct(null);
        setShowDetails(false);
    }

    function handelProductSelect(product) {
        setSelectedProduct(product);
        setShowDetails(true);
    }

    function handelShowCart() {
        setShowCart(true);
    }

    function handelCloseCart() {
        setShowCart(false);
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=30')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const contextValue = {
        products,
        setProducts,
        showDetails,
        selectedProduct,
        handleClose,
        handelProductSelect,
        showCart,
        setShowCart,
        handelShowCart,
        handelCloseCart,
        cartData,
        handelAddToCart,
        handelDeleteCart
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
    children: PropTypes.any.isRequired,
};

export default ProductContextProvider;
