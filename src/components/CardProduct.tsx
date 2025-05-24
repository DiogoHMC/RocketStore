import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CartIcon from "../assets/shopping-cart.png";

type ProductText = {
    id: number;
    text: string;
    price: number;
    imageSrc: string;
    description?: string;
    slug: string;
}

function CardProducts(props: ProductText) {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent Link navigation when clicking the button
        addToCart({
            id: props.id,
            text: props.text,
            price: props.price,
            quantity: 1,
            imageSrc: props.imageSrc
        });
    };

    return (
        <div className="bg-[#EFEFEF] rounded-lg p-4 hover:shadow-lg transition-shadow">
            <Link to={`/product/${props.slug}`} className="block">
                <div className="flex justify-center text-center">
                    <h1 className="text-xl font-bold text-[#333333]">{props.text}</h1>
                </div>
                <div className="flex justify-center p-5">
                    <div className="relative inline-block p-2 bg-[#BCC6A8] rounded-lg">
                        <img 
                            src={props.imageSrc} 
                            alt={props.text} 
                            className="w-full h-48 object-cover rounded-md relative z-10" 
                        />
                    </div>
                </div>
            </Link>
            <div className="flex justify-around items-center mt-4">
                <p className="text-xl font-medium rounded-md bg-[#BCC6A8] px-4 py-2">${props.price}</p>
                <button 
                    onClick={handleAddToCart}
                    className="flex items-center space-x-2 rounded-md bg-[#A3B8BF] px-4 py-2 hover:bg-[#7F99A1] transition-colors"
                >
                    <img src={CartIcon} alt="Cart icon" className="w-4 h-4" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
}

export default CardProducts;