import React, { useState } from 'react';
import './offers.css'; // Optional: Add your styles here

const Offers = ({ cart, setCart }) => {
  const [showPopup, setShowPopup] = useState(false);

  const productsonoffers = [
    {
      id: 1,
      title: "iPhone 14 Pro",
      image: "/image/I2.webp", // Replace with your image paths
      description: "Get the latest iPhone 14 Pro with 10% off!",
      price: "999",
      offerPrice: "899.10",
    },
    {
      id: 2,
      title: "iPhone 14",
      image: "/image/I3.webp",
      description: "Grab iPhone 14 now with a discount!",
      price: "528.58",
      offerPrice: "475.72",
    },
    {
      id: 3,
      title: "Samsung Galaxy S21",
      image: "/image/on.webp",
      description: "Experience the power of the Samsung Galaxy S21 with a sleek design.",
      price: "249",
      offerPrice: "224",
    },
    {
      id: 4,
      title: "OnePlus 9",
      image: "/image/s21.webp",
      description: "Get the OnePlus 9 for an incredible performance at an amazing price!",
      price: "599.99",
      offerPrice: "539",
    },
    {
      id: 5,
      title: "Google Pixel 6",
      image: "/image/gog.png",
      description: "Capture stunning photos with the Google Pixel 6's advanced camera system.",
      price: "399",
      offerPrice: "359",
    },
    {
      id: 6,
      title: "Sony WH-1000XM4 Headphones",
      image: "/image/hea.png",
      description: "Enjoy top-quality sound and noise cancellation with these premium headphones.",
      price: "348",
      offerPrice: "313",
    },
    {
      id: 7,
      title: "Apple MacBook Air",
      image: "/image/apple.png",
      description: "The new MacBook Air is lightweight and powerful, perfect for work or play.",
      price: "1299",
      offerPrice: "1169",
    },
    {
      id: 8,
      title: "Samsung Galaxy Watch 4",
      image: "/image/image.png",
      description: "Stay fit and connected with the Samsung Galaxy Watch 4.",
      price: "189",
      offerPrice: "170",
    },
  ];

  // Add to Cart function
  const addToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }

    // Show the pop-up after adding to cart
    setShowPopup(true);

    // Hide the pop-up after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="offers">
      <h1>Products on Offer</h1>
      <ul>
        {productsonoffers.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '150px', height: 'auto' }}
            />
            <p>Original Price: ${product.price}</p>
            <p>Offer Price: ${product.offerPrice}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* Pop-Up when item is added to cart */}
      {showPopup && (
        <div className="popup">
          <p>Item added to cart!</p>
        </div>
      )}
    </div>
  );
};

export default Offers;
