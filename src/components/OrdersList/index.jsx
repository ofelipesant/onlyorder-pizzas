import { useContext, useEffect } from "react"
import { OrderContext } from "../../contexts/orderContext"

export default function OrdersList(){
    const {orders, setOrders} = useContext(OrderContext)
    
    let storedOrders = localStorage.getItem('orders')

    useEffect(() => {
        setOrders(JSON.parse(storedOrders))
    }, [])

    console.log(orders)

    return(
        <main>
            
        </main>
    )
}