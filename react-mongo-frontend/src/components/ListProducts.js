// src/components/ListProducts.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';

const ListProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>List of Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListProducts;
