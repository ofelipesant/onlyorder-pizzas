import './orders-list.sass'
import { useContext, useEffect } from "react"
import { OrderContext } from "../../contexts/orderContext"
import OrdersCardList from "../OrdersCardList"

export default function OrdersList(){
    const {orders, setOrders} = useContext(OrderContext)
    
    let storedOrders = localStorage.getItem('orders')

    useEffect(() => {
        setOrders(JSON.parse(storedOrders))
    }, [])

    return(
        <main>
            <section className="orders-list-section">
                <OrdersCardList/>
            </section>
        </main>
    )
}