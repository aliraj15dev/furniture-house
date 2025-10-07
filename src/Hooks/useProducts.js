import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = () =>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios.get('https://raw.githubusercontent.com/shakilahmedatik/homeDecor/refs/heads/main/public/furnitureData.json')
        .then(data=>setProducts(data.data))
        .catch(error=>setError(error))
        .finally(()=>setLoading)
    },[])

    return {products, loading, error}
}

export default useProducts;