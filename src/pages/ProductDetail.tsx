
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = getProductById(parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center flex-grow">
          <h2 className="text-3xl font-semibold mb-4">Product Not Found</h2>
          <p className="text-gray-500 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-8" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="flex flex-col">
            <div>
              <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
                {product.featured && (
                  <span className="ml-2 bg-accent text-white text-sm font-medium px-2.5 py-0.5 rounded">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
              <div className="prose max-w-none mb-8">
                <p>{product.description}</p>
              </div>
            </div>
            
            <div className="mt-auto">
              <Button 
                onClick={() => addToCart(product)} 
                size="lg" 
                className="w-full md:w-auto"
              >
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
