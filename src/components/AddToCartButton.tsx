import { useCart } from "../contexts/CartContext";
import CartIcon from "../assets/shopping-cart.png";

interface AddToCartButtonProps {
    product: {
        id: number;
        text: string;
        price: number;
        imageSrc: string;
    };
    variant?: 'default' | 'compact' | 'large';
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
}

function AddToCartButton({ 
    product, 
    variant = 'default',
    className = '',
    onClick 
}: AddToCartButtonProps) {
    const { addToCart } = useCart();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart({
            id: product.id,
            text: product.text,
            price: product.price,
            quantity: 1,
            imageSrc: product.imageSrc
        });
        onClick?.(e);
    };

    const baseStyles = "flex items-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6E8890]";
    
    const variants = {
        default: "space-x-2 bg-[#A3B8BF] px-4 py-2 hover:bg-[#7F99A1]",
        compact: "space-x-1 bg-[#A3B8BF] px-3 py-1 hover:bg-[#7F99A1] text-sm",
        large: "space-x-3 bg-[#A3B8BF] px-6 py-3 hover:bg-[#7F99A1] text-lg"
    };

    return (
        <button 
            onClick={handleClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            <img src={CartIcon} alt="Cart icon" className={`${variant === 'compact' ? 'w-3 h-3' : variant === 'large' ? 'w-6 h-6' : 'w-4 h-4'}`} />
            <span className="text-white">Add to Cart</span>
        </button>
    );
}

export default AddToCartButton; 