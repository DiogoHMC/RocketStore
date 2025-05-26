import { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../products';

export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    slug: string;
}

type ProductContextType = {
    products: Product[];
    addProduct: (product: Product) => void;
    updateProduct: (id: number, product: Partial<Product>) => void;
    removeProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const STORAGE_KEY = 'rocketstore_products';

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<Product[]>(() => {
        const storedProducts = localStorage.getItem(STORAGE_KEY);
        return storedProducts ? JSON.parse(storedProducts) : initialProducts;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }, [products]);

    const addProduct = (product: Product) => {
        setProducts(currentProducts => [...currentProducts, product]);
    };

    const updateProduct = (id: number, updatedFields: Partial<Product>) => {
        setProducts(currentProducts =>
            currentProducts.map(product =>
                product.id === id ? { ...product, ...updatedFields } : product
            )
        );
    };

    const removeProduct = (id: number) => {
        setProducts(currentProducts =>
            currentProducts.filter(product => product.id !== id)
        );
    };

    return (
        <ProductContext.Provider value={{
            products,
            addProduct,
            updateProduct,
            removeProduct
        }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
} 