import Image from "next/image";
import { useState } from "react";

const ItemCard = ({ item }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.ItemId !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.ItemId === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.ItemId === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );
  };
  return (
    <div
      key={item.ItemId}
      className="mb-8 flex-col bg-transparent border-2 rounded-lg shadow-md pb-4"
    >
      <picture className="text-center max-h-20">
        <img
          src="/pic1.jpg"
          alt="Menu Item Image"
          className="mb-4 rounded-t-lg w-auto h-auto"
        />
      </picture>

      <div className="text-center">
        <strong className="block mb-2">{item.Name}</strong>
        <div className="mb-2">${item.Price.toFixed(2)}</div>
        <button
          className="bg-brand text-white px-4 py-2 rounded my-3"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
        {cart.find((cartItem) => cartItem.ItemId === item.ItemId) && (
          <div className="mt-2">
            <button
              className="text-sm px-2 py-1"
              onClick={() => decreaseQuantity(item.ItemId)}
            >
              -
            </button>
            <span className="mx-2">
              {
                cart.find((cartItem) => cartItem.ItemId === item.ItemId)
                  .quantity
              }
            </span>
            <button
              className="text-sm px-2 py-1"
              onClick={() => increaseQuantity(item.ItemId)}
            >
              +
            </button>
            <button
              className="text-sm px-2 py-1 ml-2 text-red-500"
              onClick={() => removeFromCart(item.ItemId)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );

  <div
    key={item.ItemId}
    className="mb-8 flex-col bg-transparent border-2 rounded-lg shadow-md pb-4"
  >
    <Image
      src="/pic1.jpg"
      alt="Menu Item Image"
      width={120}
      height={120}
      className="mb-4 w-full rounded-lg"
    />
    <div className="text-center">
      <strong className="block mb-2">{item.Name}</strong>
      <div className="mb-2">${item.Price.toFixed(2)}</div>
      <button
        className="bg-brand text-white px-4 py-2 rounded"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
      {cart.find((cartItem) => cartItem.ItemId === item.ItemId) && (
        <div className="mt-2">
          <button
            className="text-sm px-2 py-1"
            onClick={() => decreaseQuantity(item.ItemId)}
          >
            -
          </button>
          <span className="mx-2">
            {cart.find((cartItem) => cartItem.ItemId === item.ItemId).quantity}
          </span>
          <button
            className="text-sm px-2 py-1"
            onClick={() => increaseQuantity(item.ItemId)}
          >
            +
          </button>
          <button
            className="text-sm px-2 py-1 ml-2 text-red-500"
            onClick={() => removeFromCart(item.ItemId)}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  </div>;
};

export default ItemCard;
