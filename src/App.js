import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart } from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    const { cart } = await commerce.cart.add(productId, quantity);

    //Add to cart the response
    setCart(cart);
  };

  //update quantity

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  //Remove from cart

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  //Empty entire cart

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
