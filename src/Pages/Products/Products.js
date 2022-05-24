import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 place-items-center my-20">
                {
                    products.map((product, index) => <ProductRow key={index} product={product} index={index} />)
                }
            </div>
        </div>
    );
};

export default Products;