import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

type ProductText = {
    id: number;
    text: string;
    price: number;
    imageSrc: string;
    description: string;
    slug: string;
}

function CardProducts(props: ProductText) {
    return (
        <div className="bg-[#EFEFEF] rounded-lg p-4 hover:shadow-lg transition-shadow">
            <Link 
                to={`/product/${props.slug}`}
                state={{ product: props }}
                className="block"
            >
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
                <AddToCartButton product={props} />
            </div>
        </div>
    );
}

export default CardProducts;