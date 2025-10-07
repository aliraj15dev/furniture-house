import {ToastContainer } from "react-toastify";
import {setItem } from "../../public/localStorage";
import useProducts from "../Hooks/useProducts";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { Id } = useParams();
  const productId = Number(Id);

  const productData = useProducts();
  const { products } = productData;

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product Not Found or Loading...</div>;
  }

  const { name, image, category, price, material, id } = product;

  const handleWishList = (id) =>{
    setItem(id)
  }

  return (
    <div className="max-w-9/10 mx-auto my-10">
      <h1 className="text-4xl font-semibold">Product Details</h1>
      <div className="flex gap-5 my-5">
        <figure>
          <img className='w-full bg-gray-200 p-5 rounded-lg' src={image} alt={name} style={{ width: "200px" }} />
        </figure>
        <div className="space-y-2">
          <h2 className="text-2xl"><span className="font-bold">Name:</span> {name}</h2>
          <p>Category: {category}</p>
          <p className="text-xl"><span className="font-bold">Price:</span> ${price}</p>
          <p>Material: {material}</p>
          <button  onClick={()=>handleWishList(id)} className="btn">Wishlish</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );

};

export default ProductDetails;
