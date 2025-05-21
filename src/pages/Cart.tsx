
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Trash2, ArrowLeft } from "lucide-react";

const Cart = () => {
  const { items, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    // This would typically integrate with a payment processor
    alert("Checkout functionality would be implemented here!");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-heading font-semibold mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-6">
              <ShoppingBag className="h-full w-full" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Button onClick={() => navigate("/")} className="text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {items.map((item) => (
                  <CartItem 
                    key={item.product.id} 
                    product={item.product} 
                    quantity={item.quantity} 
                  />
                ))}
                
                <div className="mt-6 flex justify-end">
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                    className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleCheckout}
                  className="w-full mt-6 bg-accent hover:bg-accent/90 text-white font-medium"
                >
                  Proceed to Checkout
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-3" 
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
