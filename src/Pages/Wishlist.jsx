import React from "react";

const Wishlist = ({ product }) => {
  const { name, image, price, category, material } = product;

  return (
    <div>
      <div className="flex gap-5 my-5">
        <figure>
          <img
            className="w-full bg-gray-200 p-5 rounded-lg"
            src={image}
            alt={name}
            style={{ width: "200px" }}
          />
        </figure>
        <div className="space-y-2">
          <h2 className="text-2xl">
            <span className="font-bold">Name:</span> {name}
          </h2>
          <p>Category: {category}</p>
          <p className="text-xl">
            <span className="font-bold">Price:</span> ${price}
          </p>
          <p>Material: {material}</p>
          <button className="btn">
            Wishlish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
