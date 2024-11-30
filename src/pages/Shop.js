import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from API
        // For now, we'll use dummy data
        const dummyProducts = [
            { id: 1, name: 'T-Shirt', price: 19.99, image: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Hoodie', price: 39.99, image: 'https://via.placeholder.com/150' },
            { id: 3, name: 'Cap', price: 14.99, image: 'https://via.placeholder.com/150' },
        ];
        setProducts(dummyProducts);
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Shop</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Shop;

