import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Category() {
    const { categoryId } = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch category and products from API
        // For now, we'll use dummy data
        const dummyCategory = { id: categoryId, name: 'Apparel' };
        const dummyProducts = [
            { id: 1, name: 'T-Shirt', price: 19.99, image: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Hoodie', price: 39.99, image: 'https://via.placeholder.com/150' },
            { id: 3, name: 'Cap', price: 14.99, image: 'https://via.placeholder.com/150' },
        ];
        setCategory(dummyCategory);
        setProducts(dummyProducts);
    }, [categoryId]);

    if (!category) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Banner */}
            <div className="relative h-60 mb-12">
                <img
                    src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwYXJlbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Category Banner"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-amber-200">
                    <h1 className="text-5xl font-bold mb-4">Apparel</h1>
                    <p className="text-xl">Discover various artist's apparel collection</p>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}
                              className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
            );
            }

            export default Category;

