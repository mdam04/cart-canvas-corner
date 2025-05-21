
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, getAllCategories } from "@/data/products";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const categoryFilter = searchParams.get('category');
  const categories = getAllCategories();

  useEffect(() => {
    if (categoryFilter) {
      setFilteredProducts(products.filter(product => product.category === categoryFilter));
    } else {
      setFilteredProducts(products);
    }
  }, [categoryFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-heading font-semibold">
            {categoryFilter ? `${categoryFilter} Products` : "All Products"}
          </h2>
          <div>
            <span className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </span>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium text-gray-500">No products found</h3>
            <p className="mt-4 text-gray-400">
              Try searching for a different category or removing filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
