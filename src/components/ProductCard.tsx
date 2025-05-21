
import { Product } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer" onClick={handleClick}>
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        {product.featured && (
          <span className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg mt-2">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          <span className="text-sm text-muted-foreground">{product.category}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          variant="outline" 
          className="w-full hover:bg-primary hover:text-white"
        >
          <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
