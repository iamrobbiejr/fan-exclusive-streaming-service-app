import React, { useState } from 'react';
import useCartStore from '../store/cartStore';
import { Info } from 'lucide-react';
import {Link} from "react-router-dom";

const Checkout = () => {
    const { items, updateQuantity, getTotalPrice, removeItem } = useCartStore();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        apartment: '',
        city: '',
        country: 'Zimbabwe',
        state: '',
        postalCode: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            removeItem(itemId);
        }else{
        updateQuantity(itemId, Number(newQuantity));
        }
    };

    const subtotal = getTotalPrice();
    const shipping = 5.00;
    const taxRate = 0.08;
    const taxes = subtotal * taxRate;
    const total = subtotal + shipping + taxes;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the order to your backend
        console.log('Order submitted:', { items, totalPrice: total, customerInfo: formData });
        alert('Order Submitted!!');
        // Redirect to a thank you page or clear the cart
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-4xl text-gray-900 font-bold mb-8">Checkout</h1>
            {items.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">Your cart is empty.</p>
                    <Link
                        to="/store"
                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h2 className="text-lg font-medium mb-4">Contact information</h2>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email
                                        address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium mb-4">Shipping information</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First
                                            name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last
                                            name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="company"
                                           className="block text-sm font-medium text-gray-700">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="address"
                                           className="block text-sm font-medium text-gray-700">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">Apartment,
                                        suite, etc.</label>
                                    <input
                                        type="text"
                                        id="apartment"
                                        name="apartment"
                                        value={formData.apartment}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="city"
                                               className="block text-sm font-medium text-gray-700">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country"
                                               className="block text-sm font-medium text-gray-700">Country</label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State
                                            / Province</label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal
                                            code</label>
                                        <input
                                            type="text"
                                            id="postalCode"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="phone"
                                           className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-lg font-medium mb-4">Order summary</h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flow-root">
                                <ul className="-my-6 divide-y divide-gray-200">
                                    {items.map((item) => (
                                        <li key={item.id} className="py-6 flex">
                                            <div
                                                className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="ml-4 flex-1 flex flex-col">
                                                <div>
                                                    <div
                                                        className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>{item.name}</h3>
                                                        <p className="ml-4">${item.price.toFixed(2)}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {item.selectedColor} | {item.selectedSize}
                                                    </p>
                                                </div>
                                                <div className="flex-1 flex items-end justify-between text-sm">
                                                    <div className="flex items-center">
                                                        <label htmlFor={`quantity-${item.id}`}
                                                               className="mr-2 text-gray-500">Qty</label>
                                                        <select
                                                            id={`quantity-${item.id}`}
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                            className="border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                                        >
                                                            {[1, 2, 3, 4, 5].map((num) => (
                                                                <option key={num} value={num}>
                                                                    {num}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => handleQuantityChange(item.id, 0)}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border-t border-gray-200 pt-4 mt-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>${subtotal.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500 mt-2">
                                    <p className="flex items-center">
                                        Shipping
                                        <Info className="ml-1 h-4 w-4"/>
                                    </p>
                                    <p>${shipping.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500 mt-2">
                                    <p className="flex items-center">
                                        Taxes
                                        <Info className="ml-1 h-4 w-4"/>
                                    </p>
                                    <p>${taxes.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between text-base font-medium text-gray-900 mt-4">
                                    <p>Total</p>
                                    <p>${total.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleSubmit}
                                >
                                    Confirm order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Checkout;

