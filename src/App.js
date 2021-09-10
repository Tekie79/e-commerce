import React, { useState, useEffect } from "react";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // Fetch Products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  // Fetch Cart

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // Add items to cart
  const handleAddCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    //Add to cart the response
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddCart} />
    </div>
  );
};

export default App;
