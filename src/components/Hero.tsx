
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Shop the Latest Trends
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Discover premium products for every lifestyle. Quality meets affordability.
          </p>
          <div className="mt-10">
            <Button 
              onClick={() => navigate("/")}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-medium"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
