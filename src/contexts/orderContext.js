import { createContext , useState } from "react";

export const OrderContext = createContext()

export function OrderContextProvider({children}){
    const [productsSelected, setProductsSelected] = useState([])
    const [totalValue, setTotalValue] = useState()
    const [customerName, setCustomerName] = useState()
    const [orders, setOrders] = useState([])
    const [productsInOrder, setProductsInOrder] = useState([])
    const [showModal, setShowModal] = useState(false)

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
            setOrders,
            productsInOrder,
            setProductsInOrder,
            showModal,
            setShowModal
        }}>

            {children}

        </OrderContext.Provider>
    )
}