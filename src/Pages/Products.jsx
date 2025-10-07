import { useState } from "react";
import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const productsData = useProducts();
  const { products } = productsData;

  const [searchValue, setSearchValue] = useState('')

    const handleSearchValue = e =>{
        setSearchValue(e.target.value)
    }
    const strSearchValue = searchValue.trim().toLowerCase()

    const searchedProduct = strSearchValue ? products.filter(product=>product.name.toLowerCase().includes(strSearchValue)):products

  return (
    <div className="max-w-9/10 mx-auto my-10 space-y-2">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">All Product <span className="text-lg font-normal">Total ({searchedProduct.length}) Found</span></h1>

          <input onChange={handleSearchValue} value={searchValue} type="search" placeholder="Search Products" className="border-1 p-2 border-gray-400 rounded-xl"/>

        </div>
      <div className="grid grid-cols-3 gap-5">
        {searchedProduct.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
