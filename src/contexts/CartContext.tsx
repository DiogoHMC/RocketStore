import { createContext, useContext, useState, useEffect } from 'react';
import { useProducts } from './ProductContext';

type CartItem = {
    id: number;
    text: string;
    price: number;
    quantity: number;
    imageSrc: string;
}

type CartContextType = {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    getTotal: () => number;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'rocketstore_cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
    const { products } = useProducts();
    const [items, setItems] = useState<CartItem[]>(() => {
        const storedCart = localStorage.getItem(STORAGE_KEY);
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            // Validate stored cart items against current products
            return parsedCart.filter((item: CartItem) => 
                products.some(p => p.id === item.id)
            );
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addToCart = (item: CartItem) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(i => i.id === item.id);
            if (existingItem) {
                return currentItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...currentItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setItems(currentItems => currentItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(id);
            return;
        }
        setItems(currentItems =>
            currentItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const getTotal = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const clearCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            getTotal,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
} 