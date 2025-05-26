import { useProducts } from "../contexts/ProductContext";
import CardProducts from "./CardProduct";


//main component for the home page (product's will be displayed here)
function Menu() {
    const { products } = useProducts();
    
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols3 gap-6">
                {products.map((product) => (
                    <CardProducts 
                        key={product.id}
                        id={product.id} 
                        text={product.name} 
                        price={product.price} 
                        imageSrc={product.image}
                        description={product.description}
                        slug={product.slug}
                    />
                ))}
            </div>
        </div>
    )
}

export default Menu;