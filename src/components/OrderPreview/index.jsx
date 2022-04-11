import { useContext } from "react"
import { OrderContext } from "../../contexts/orderContext"


export default function OrderPreview(){
    const {
            productsSelected, 
            setProductsSelected,
            customerName, 
            setCustomerName,
            totalValue, 
            setTotalValue,
            orders, 
            setOrders, 
            productsInOrder, 
            setProductsInOrder
    } = useContext(OrderContext)

    const createOrder = async () => {
        
        let orderCreated = orders
        let newProductsInOrder = productsInOrder
        let productsRegister = productsSelected.map((element) => {
            return [element.productName, element.productPrice]
        })

         productsRegister.forEach((element) => {
            newProductsInOrder.push({
                name: element[0],
                price: element[1]
            })
        })

        setProductsInOrder(newProductsInOrder)
        
        orderCreated.push({
            customerName: customerName,
            totalValueOrder: totalValue,
            products: productsInOrder
        })

        await setOrders(orderCreated)
        localStorage.setItem('orders', JSON.stringify(orders))

        setProductsInOrder([])
        setTotalValue(0)
        setProductsSelected([])
        setCustomerName('')

        console.log(orders)
          
    }

    return(
        <section className="order-preview">
           <p className="preview-customer-name">{customerName}</p>
            {productsSelected && productsSelected.map((element, index) => {
                    return(
                        <div key={index} className="preview-item">
                            <p className="preview-product-name"> {element.productName} </p>
                            <span className="preview-product-price">{`R$${element.productPrice}.00`}</span>

                        </div>
                    )
                })} 
                
                <div className="order-total-value">
                    {totalValue > 0 ? `Total: R$${totalValue}.00` : null}
                </div>

                {
                productsSelected != '' ? 
                    (<button className="create-order-butotn" onClick={createOrder}>CRIAR PEDIDO</button>) : null
                }
        </section>
    )
}