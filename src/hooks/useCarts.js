import { useEffect, useState } from "react";
import { getStoredcart } from "../utilities/fakedb";

const useCarts = (products) =>{
    const [cart,setCart] = useState([]);

    useEffect( () =>{
        const addedCart = getStoredcart();
        const savedCart = [];
        for(const id in addedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const  quantity = addedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart); 
    },[products])

    return [cart,setCart];
}

export default useCarts;