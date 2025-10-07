import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getItemsFLS = () =>{
    const allBooksId = localStorage.getItem("wishlist")

    if(allBooksId){
        const booksId = JSON.parse(allBooksId)
        return booksId;
    }
    else{
        return [];
    }
}

const setItem = (id) =>{
    const booksId = getItemsFLS()

    if(booksId.includes(id)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already Added!"
        });
        return;
    }
    else{
        booksId.push(id)
        const strBooks = JSON.stringify(booksId)
        localStorage.setItem("wishlist", strBooks)
        Swal.fire({
            title: "Added to Wishlist!",
            icon: "success",
        })
    }
}

export {setItem, getItemsFLS}