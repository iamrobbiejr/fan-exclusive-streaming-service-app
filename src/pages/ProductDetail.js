import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import Breadcrumb from '../components/Breadcrumb';

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState('white');
    const [selectedSize, setSelectedSize] = useState('S');
    const addItem = useCartStore((state) => state.addItem);

    useEffect(() => {
        // Fetch product from API
        // For now, we'll use dummy data
        const dummyProduct = {
            id: productId,
            name: 'Basic Tee 6-Pack',
            category: 'Apparel',
            price: 192,
            image: 'https://via.placeholder.com/400',
            description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',

            details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
            colors: [
                { name: 'White', value: 'white' },
                { name: 'Gray', value: 'gray' },
                { name: 'Black', value: 'black' }
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
        };
        setProduct(dummyProduct);
    }, [productId]);

    const handleAddToCart = () => {
        addItem({
            ...product,
            selectedColor,
            selectedSize
        });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const breadcrumbItems = [
        { name: 'Shop', href: '/store' },
        { name: product.category, href: `/category/${product.category.toLowerCase()}` },
        { name: product.name }
    ];

    return (
        <div className="container mx-auto px-4 py-8">

            <Breadcrumb items={breadcrumbItems} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-2xl mb-6">${product.price}</p>

                    {/* Color Selection */}
                    <div className="mb-6">
                        <h2 className="text-sm font-medium mb-2">Color</h2>
                        <div className="flex gap-2">
                            {product?.colors.map((color) => (
                                <button
                                    key={color.value}
                                    onClick={() => setSelectedColor(color.value)}
                                    className={`w-8 h-8 rounded-full border-2 ${
                                        selectedColor === color.value
                                            ? 'border-amber-400'
                                            : 'border-gray-200'
                                    }`}
                                    style={{ backgroundColor: color.value }}
                                    aria-label={color.name}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-sm font-medium">Size</h2>
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                            {product?.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-2 text-sm font-medium rounded-md ${
                                        selectedSize === size
                                            ? 'bg-amber-400 text-white'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-gray-50 font-bold text-amber-600 py-3 rounded-md hover:bg-gray-200 transition-colors mb-8"
                    >
                        Add to bag
                    </button>

                    {/* Product Description */}
                    <p className="text-gray-700 mb-6">
                        {product.description}
                    </p>


                    {/* Details */}
                    <div>
                        <h2 className="font-medium mb-2">Details</h2>
                        <p className="text-gray-700">
                            {product.details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

