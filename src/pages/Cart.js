import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import { X, Info, Check, Clock } from 'lucide-react';

const Cart = () => {
    const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
    const shippingCost = 5.00;
    const taxRate = 0.08;

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            removeItem(itemId);
        } else {
            updateQuantity(itemId, newQuantity);
        }
    };

    const subtotal = getTotalPrice();
    const tax = subtotal * taxRate;
    const total = subtotal + shippingCost + tax;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl text-gray-900 font-bold mb-8">Shopping Cart</h1>

            <div className="space-y-6">
                {items.map((item) => (
                    <div key={item.id} className="flex items-start border-t py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                                    <div className="mt-1 text-sm text-gray-500">
                                        <span className="capitalize">{item.selectedColor}</span>
                                        {item.selectedSize && (
                                            <span className="ml-2 capitalize">{item.selectedSize}</span>
                                        )}
                                    </div>
                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                        ${item.price.toFixed(2)}
                                    </p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <select
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                        className="rounded-lg p-2 border-gray-300 text-sm focus:ring-amber-50"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                            <option key={num} value={num}>
                                                {num}
                                            </option>
                                        ))}
                                    </select>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-2 flex items-center text-sm">
                                {Math.random() > 0.5 ? (
                                    <div className="flex items-center text-green-600">
                                        <Check className="h-4 w-4 mr-1" />
                                        In stock
                                    </div>
                                ) : (
                                    <div className="flex items-center text-gray-500">
                                        <Clock className="h-4 w-4 mr-1" />
                                        Ships in 5-7 days
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {items.length > 0 ? (
                <div className="mt-8 bg-gray-100 shadow-2xl rounded-lg p-6">
                    <h2 className="text-lg font-medium mb-4">Order summary</h2>

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <span className="text-gray-600">Shipping estimate</span>
                                <Info className="h-4 w-4 text-gray-400 ml-1" />
                            </div>
                            <span className="font-medium">${shippingCost.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <span className="text-gray-600">Tax estimate</span>
                                <Info className="h-4 w-4 text-gray-400 ml-1" />
                            </div>
                            <span className="font-medium">${tax.toFixed(2)}</span>
                        </div>

                        <div className="border-t pt-4 flex justify-between">
                            <span className="font-medium">Order total</span>
                            <span className="font-medium">${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <Link
                        to="/checkout"
                        className="mt-6 block w-full bg-amber-600 text-white text-center py-3 rounded-md hover:bg-amber-700 transition-colors"
                    >
                        Checkout
                    </Link>
                  <div className="text-center py-4">
                      <Link
                          to="/store"
                          className="text-indigo-800 hover:text-indigo-900 font-medium"
                      >
                          Continue Shopping
                      </Link>
                  </div>
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">Your cart is empty.</p>
                    <Link
                        to="/store"
                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;

