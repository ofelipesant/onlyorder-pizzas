import { createContext , useState } from "react";

export const OrderContext = createContext()

export function OrderContextProvider({children}){
    const [productsSelected, setProductsSelected] = useState([])
    const [totalValue, setTotalValue] = useState()
    const [customerName, setCustomerName] = useState()
    const [orders, setOrders] = useState([])

    return(
        <OrderContext.Provider value=
        {{
            productsSelected, 
            setProductsSelected, 
            totalValue, 
            setTotalValue, 
            customerName, 
            setCustomerName,
            orders,
            setOrders
        }}>

            {children}

        </OrderContext.Provider>
    )
}