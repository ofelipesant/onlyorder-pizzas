import { useContext } from "react"
import { OrderContext } from "../../contexts/orderContext"
import './orders-card-list.sass'

export default function OrdersCardList() {
    const { orders } = useContext(OrderContext)
    console.log(orders)

    return (
        <div className="orders-list-container">
            {orders.map((element, index) => {
                return (
                    <div key={index} className="order-card">
                        <h3 className="customer-title">{element.customerName}</h3>

                        <div className="products-in-order">
                            {element.products.map((product, index) => {
                                return (
                                    <div key={index} className="products">
                                        <span>{product.name}</span>
                                        <span>{`R$${product.price}.00`}</span>
                                    </div>
                                )
                            })}
                            <p className="total-order">{`R$${element.totalValueOrder}.00`}</p>
                        </div>
                    </div>
                )

            })}

        </div>
    )
}