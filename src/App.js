import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.name]) {
        console.log("before: " + newCart[item.name].quantity);
        newCart[item.name].quantity += 1;
        console.log("after: " + newCart[item.name].quantity);
        return newCart;
      } 
      else {
        newCart[item.name] = { price: item.price, quantity: 1 };
        return newCart;
      }
      // console.log(item.quantity);
       
    });
  };

  const calculateTotalPrice = () => {
    return Object.values(cart).reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const bakeryName= "Zyn's Bakery"

  return (
    <div className="App">

      <h1 className="title">{bakeryName}</h1>

      <div className="display">
        <div class="menu"> 
        
          {bakeryData.map((item, index) => (
            <BakeryItem 
              key={index}
              item={item} 
              index={index} 
              name={item.name} 
              image={item.image} 
              description={item.description} 
              price={item.price} 
              addToCart={addToCart} // Correctly pass addToCart here
            />
          ))}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          {Object.keys(cart).map((key) => (
          <div key={key}>
            <b>{key}</b> - Quantity: {cart[key].quantity} - Subtotal: {cart[key].price * cart[key].quantity}
          </div>
          ))}
          <p><b>Total Price:</b> {calculateTotalPrice()}</p>
        </div>

      </div>

      
    </div>
  );
}

export default App;
