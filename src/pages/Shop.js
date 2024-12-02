import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Shop() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('APPAREL');

    useEffect(() => {
        // Fetch products from API
        // For now, we'll use dummy data
        const dummyProducts = [
            {
                id: 1,
                name: 'Faux Leather Wrapover Skirt',
                price: 29.00,
                category: 'APPAREL',
                image: 'https://via.placeholder.com/400'
            },
            {
                id: 2,
                name: 'Pink Joey Cotton-Jersey T-Shirt',
                price: 60.00,
                category: 'APPAREL',
                image: 'https://via.placeholder.com/400'
            },
            {
                id: 3,
                name: 'Mint Joey Cotton-Jersey T-Shirt',
                price: 60.00,
                category: 'APPAREL',
                image: 'https://via.placeholder.com/400'
            },
            {
                id: 4,
                name: 'Classic Cotton Hoodie',
                price: 85.00,
                category: 'APPAREL',
                image: 'https://via.placeholder.com/400'
            },
            {
                id: 5,
                name: 'Running Shoes',
                price: 120.00,
                category: 'ACCESSORIES',
                image: 'https://via.placeholder.com/400'
            },
            {
                id: 6,
                name: 'Classic Cap',
                price: 25.00,
                category: 'COLLECTIBLES',
                image: 'https://via.placeholder.com/400'
            }
        ];


        const dummyCategories = [
            {id: 'ALL', name: "ALL", count: 51},
            { id: 'APPAREL', name: 'APPAREL', count: 38,
                description: 'Shop now',
                image: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-03-featured-category.jpg' },
            { id: 'ACCESSORIES', name: 'ACCESSORIES', count: 2,   description: 'Shop now',
                image: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-03-category-01.jpg'  },
            { id: 'COLLECTIBLES', name: 'COLLECTIBLES', count: 11, description: 'Shop now',
                image: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-03-category-02.jpg'  }
        ];

        setProducts(dummyProducts);
        setCategories(dummyCategories);
    }, []);

    const filteredProducts = activeCategory === 'ALL' ? products : products.filter(product => product.category === activeCategory);

    return (
        <div>
            {/* Banner */}
            <div className="relative h-60 mb-12">
                <img
                    src="https://images.unsplash.com/photo-1556740772-1a741367b93e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3B8ZW58MHx8MHx8fDI%3D"
                    alt="Shop Banner"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-amber-200">
                    <h1 className="text-5xl font-bold mb-4">SHOP</h1>
                    <p className="text-xl">Discover our latest collection</p>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto px-4 py-8">

                {/* Categories Section */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl text-gray-900 font-bold">Shop by Category</h2>
                        <Link
                            to="/categories"
                            className="text-amber-600 hover:text-amber-800 flex items-center"
                        >
                            Browse all categories
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((category, i) => (
                            category.id === 'ALL' ? null : (
                                    <Link
                                        key={category.id}
                                        to={`/category/${category.id}`}
                                        className={`relative overflow-hidden rounded-lg group ${category.className || ''}`}
                                    >
                                        <div className="aspect-w-3 aspect-h-2 w-full">
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <h3 className="text-lg font-semibold">{category.name}</h3>
                                                <p className="text-sm mt-1">{category.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )

                        ))}
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex gap-8 mb-12 border-b border-gray-200">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`pb-4 relative ${
                                activeCategory === category.id
                                    ? 'text-black font-semibold'
                                    : 'text-gray-500'
                            }`}
                        >
                            {category.name} ({category.count})
                            {activeCategory === category.id && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"/>
                            )}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                    {filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="group"
                        >
                            <div className="aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h2 className="text-base font-medium mb-2">{product.name}</h2>
                            <p className="text-base">${product.price.toFixed(2)}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
            );
            }

            export default Shop;

