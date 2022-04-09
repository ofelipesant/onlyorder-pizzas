import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext()

export function OrderContextProvider({children}){
    const [productsSelected, setProductsSelected] = useState([])
    const [totalValue, setTotalValue] = useState()

    return(
        <OrderContext.Provider value={{productsSelected, setProductsSelected, totalValue}}>
            {children}
        </OrderContext.Provider>
    )
}