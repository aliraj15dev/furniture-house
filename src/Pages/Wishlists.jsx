import useProducts from '../Hooks/useProducts';
import Wishlist from './Wishlist';
import { getItemsFLS } from '../../public/localStorage';

const Wishlists = () => {
    const wishlist = getItemsFLS()
    const wishlistIds = wishlist.map(Ids=>Ids)

    const {products} = useProducts()

    const wishlistProducts = products.filter(product=>wishlistIds.includes(product.id))

    const handleWishlish=()=>{
        localStorage.clear()
    }

    return (
        <div className='max-w-9/10 mx-auto my-10'>
            <div className="flex justify-between text-2xl font-semibold">
                <h2>Your Wishlish</h2>
                <button onClick={handleWishlish} className='btn'>Remove All</button>
            </div>

            {
                wishlistProducts.map(product=><Wishlist key={product.id} product={product}/>)

            }

        </div>
    );
};

export default Wishlists;