import ProductCard from './ProductCard';

function ProductList() {
    return (
        <>
            <div className="content">
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default ProductList;
