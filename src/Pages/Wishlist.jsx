
const Wishlist = ({ product }) => {
  const { name, image, price, category, material,} = product;


  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-5 my-5 p-4 border-2 rounded-lg border-gray-300">
        <figure className="flex justify-center items-center bg-gray-200 rounded-lg p-4">
          <img className="rounded-sm w-full"
            src={image} alt={name} style={{ width: "200px" }}/>
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
          <div>
            <button className="btn bg-green-500 text-white mr-10">
            Buy Now
          </button>
          <button className="btn text-red-500">
            Delete
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
