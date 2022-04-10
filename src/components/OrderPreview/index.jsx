import { useContext } from "react"
import { OrderContext } from "../../contexts/orderContext"

export default function OrderPreview(){
    const {productsSelected, customerName, totalValue, orders, setOrders} = useContext(OrderContext)

    const createOrder = async () => {
        
        let orderCreated = orders
    
        let productsRegister = productsSelected.map((element) => {
            return [element.productName, element.productPrice]
        })


        let productsFormated = productsRegister.forEach((element) => {
            console.log(`name: ${element[0]} // price: ${element[1]}`)  
        })
        

        orderCreated.push({
            name: customerName,
            totalValue: totalValue,
            products: [
               
                
            ]
        })

        await setOrders(orderCreated)

        console.log(orders)
        console.log(productsRegister)
        
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