import { createContext, useState } from "react";
import {ProductDatas,ChargerProducts,KableProducts,HedphoneProducts} from '../ProductDatas/ProductDatas'
// import {ChargerProducts} from '../ProductDatas/ProductDatas'
 export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) =>{
    const [allProducts, setAllProducts] = useState(ProductDatas);
    const [userCart , setUserCart] = useState([])
    const [isShowToast , setIsShowToast] = useState(false)
    const [isShowCart , setIsShowCart] = useState(false)
    const [ProductInformation , setProductInformation] = useState([])
    const[counterBag , setCounterBag] = useState(0)
    const [chargers , setChargers] = useState(ChargerProducts)
    const [kables , setKables] = useState(KableProducts)
    const [hedphones , setHedphones] = useState(HedphoneProducts)
   
    
    return (
        <ProductsContext.Provider value={{allProducts,setAllProducts,userCart,setUserCart,isShowToast,setIsShowToast,isShowCart,setIsShowCart,ProductInformation,setProductInformation,counterBag,setCounterBag,chargers,setChargers,kables,setKables,hedphones,setHedphones}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider