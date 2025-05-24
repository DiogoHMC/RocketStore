import { useCart } from "../contexts/CartContext";
import { useState, useEffect } from "react";
import PurchaseCard from "./PurchaseCard";
import iconBag from "../assets/bag.png";
import { createPortal } from 'react-dom';

function CartTab() {
    const { items, updateQuantity, removeFromCart, getTotal } = useCart();
    const [isMinimized, setIsMinimized] = useState(true);
    const [showPurchaseCard, setShowPurchaseCard] = useState(false);

    // Close cart when purchase card is shown
    useEffect(() => {
        if (showPurchaseCard) {
            setIsMinimized(true);
        }
    }, [showPurchaseCard]);

    const handleCheckout = () => {
        setShowPurchaseCard(true);
        setIsMinimized(true);
    };

    if (items.length === 0) {
        return (
            <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
                <p className="text-gray-500">Your cart is empty</p>
            </div>
        );
    }

    return (
        <>
            {isMinimized ? (
                <button 
                    onClick={() => setIsMinimized(false)}
                    className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors z-40"
                >
                    <span className="relative">
                        <img src={iconBag} alt="Cart icon" className="w-6 h-6" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                            {items.length}
                        </span>
                    </span>
                    <span className="font-bold">${getTotal().toFixed(2)}</span>
                </button>
            ) : (
                <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-md z-40">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Shopping Cart</h2>
                        <button 
                            onClick={() => setIsMinimized(true)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ▼ Minimize
                        </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                        {items.map(item => (
                            <div key={item.id} className="flex items-center gap-4 mb-4 border-b pb-4">
                                <img 
                                    src={item.imageSrc} 
                                    alt={item.text} 
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <h3 className="font-medium">{item.text}</h3>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center font-bold text-lg">
                            <div className="flex items-center gap-2">
                                <span>Total:</span>
                                <span>${getTotal().toFixed(2)}</span>
                            </div>
                            <button
                                className="bg-[#6E8890] text-white px-4 py-2 rounded hover:bg-[#6E8890]/80"
                                onClick={handleCheckout}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showPurchaseCard && createPortal(
                <PurchaseCard 
                    items={items}
                    onClose={() => setShowPurchaseCard(false)} 
                />,
                document.body
            )}
        </>
    );
}

export default CartTab;
