import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useProducts from "../Hooks/useProducts";
import { getItemsFLS } from "../../public/localStorage";

const Charts = () => {
  //   const product = products.map((product) => product);
  const wishlist = getItemsFLS();
  const wishlistIds = wishlist.map((Ids) => Ids);
  const { products } = useProducts();
  const wishlistProducts = products.filter((product) =>
    wishlistIds.includes(product.id)
  );

  return (
    <div className="max-w-9/10 mx-auto my-10">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={wishlistProducts}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="price" fill="#8884d8" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
