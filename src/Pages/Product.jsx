import { Link } from "react-router";


const Product = ({product}) => {
    const {image, name, category,id} = product


    return (
        <div className="shadow-xl border-2 border-gray-300 p-5 space-y-3 rounded-xl">
            <img className='w-full bg-gray-200 p-5 rounded-lg' src={image} alt="" />
            <h2>{name}</h2>
            <h2>{category}</h2>
            <Link to={`/productsDetails/${id}`}>
            <button className='btn'>View Details</button>
            </Link>
        </div>
    );
};

export default Product;