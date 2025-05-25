import { useCart } from "../contexts/CartContext";
import { useState } from "react";

interface PurchaseCardProps {
  onClose: () => void;
  items?: Array<{
    id: number;
    text: string;
    price: number;
    quantity: number;
    imageSrc: string;
  }>;
}

function PurchaseCard({ onClose, items = [] }: PurchaseCardProps) {
  const { clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    clearCart();
    alert('Thank you for your purchase!');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-full md:max-w-xl z-50">
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-h-[80vh] md:max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-3 md:p-4 border-b">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Checkout</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4 overflow-y-auto flex-1">
            {items.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm md:text-base">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {/* Items list */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 md:space-x-4 border-b pb-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-lg p-2">
                      <img 
                        src={item.imageSrc} 
                        alt={item.text} 
                        className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-lg shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white text-sm md:text-base truncate">{item.text}</p>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                        <p className="font-medium text-gray-900 dark:text-white text-sm md:text-base mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <p className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">Total</p>
                    <p className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 md:gap-3 p-4 md:px-6 md:py-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg border-t border-gray-200 dark:border-gray-600">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-3 md:px-4 py-2 text-sm md:text-base font-medium text-white bg-[#B85454] hover:bg-[#B85454]/80 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B85454]"
            >
              Cancel
            </button>
            <button
              onClick={handleCheckout}
              className="w-full sm:w-auto px-3 md:px-4 py-2 text-sm md:text-base font-medium text-white bg-[#6E8890] hover:bg-[#6E8890]/80 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6E8890]"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseCard;