import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCartStore from '../store/cartStore';

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const addItem = useCartStore((state) => state.addItem);

    useEffect(() => {
        // Fetch product from API
        // For now, we'll use dummy data
        const dummyProduct = {
            id: productId,
            name: 'T-Shirt',
            price: 19.99,
            image: 'https://via.placeholder.com/400',
            description: 'A comfortable and stylish t-shirt featuring your favorite artist.',
        };
        setProduct(dummyProduct);
    }, [productId]);

    const handleAddToCart = () => {
        addItem(product);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <button
                        onClick={handleAddToCart}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

