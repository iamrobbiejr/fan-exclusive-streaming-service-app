import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from API
        // For now, we'll use dummy data
        const dummyCategories = [
            { id: 1, name: 'Apparel', image: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Accessories', image: 'https://via.placeholder.com/150' },
            { id: 3, name: 'Collectibles', image: 'https://via.placeholder.com/150' },
        ];
        setCategories(dummyCategories);
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <Link key={category.id} to={`/category/${category.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{category.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;

