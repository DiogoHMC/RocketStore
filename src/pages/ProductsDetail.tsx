import { useLocation } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";

function ProductsDetail() {
    const location = useLocation();
    const { product } = location.state;


    const formatDescription = (description: string) => {
        const words = description.split(' ');
        const chunks = [];
        for (let i = 0; i < words.length; i += 15) {
            chunks.push(words.slice(i, i + 15).join(' '));
        }
        return chunks.join('\n');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">

                <div className="bg-[#F5F5F5] p-6 rounded-t-lg shadow-md">
                    <h1 className="text-3xl font-bold text-center text-[#333333]">
                        {product.text}
                    </h1>
                </div>

                <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                        {/* Image Section */}
                        <div className="flex justify-center">
                            <div className="relative inline-block p-3 bg-[#BCC6A8] rounded-lg">
                                <img 
                                    src={product.imageSrc} 
                                    alt={product.text} 
                                    className="w-full h-[500px] object-cover rounded-md"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#6E8890] mb-4">
                                    Description
                                </h2>
                                <div className="prose max-w-none">
                                    {formatDescription(product.description).split('\n').map((chunk, index) => (
                                        <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                                            {chunk}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 border-t pt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-bold text-[#6E8890]">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <AddToCartButton 
                                        product={product} 
                                        variant="large"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsDetail;