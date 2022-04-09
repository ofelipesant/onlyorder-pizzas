import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext()

export function OrderContextProvider({children}){
    const [productsSelected, setProductsSelected] = useState([])
    const [totalValue, setTotalValue] = useState()
    const [customerName, setCustomerName] = useState()

    return(
        <OrderContext.Provider value=
        {{
            productsSelected, 
            setProductsSelected, 
            totalValue, 
            setTotalValue, 
            customerName, 
            setCustomerName
        }}>

            {children}

        </OrderContext.Provider>
    )
}