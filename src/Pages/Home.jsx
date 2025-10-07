import { Link } from "react-router";
import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Home = () => {

  const productsData = useProducts();
  const { products } = productsData;
  const lessProducts = products.slice(0, 6);


  return (
    <div className="max-w-9/10 mx-auto my-10 space-y-2">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Some Products</h1>
        <Link to='products'><button className="btn">Show All Product</button></Link>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {lessProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
