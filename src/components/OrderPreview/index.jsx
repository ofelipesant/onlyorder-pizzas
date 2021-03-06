import'./order-preview.sass'
import { useContext, useEffect } from "react"
import { OrderContext } from "../../contexts/orderContext"
import OrderCreatedModal from '../Modals/OrderCreatedModal'


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
            setProductsInOrder,
            showModal,
            setShowModal
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
            products: productsInOrder,
        })

        await setOrders(orderCreated)
        localStorage.setItem('orders', JSON.stringify(orders))

        setProductsInOrder([])
        setTotalValue(0)
        setProductsSelected([])
        setCustomerName('')
        setShowModal(true)

        setTimeout(() => {
            setShowModal(false)
        }, 3000)
        console.log(orders)

    

    }

    useEffect(() => {
        let storedOrders = localStorage.getItem('orders')
        
        if(storedOrders == null){
            setOrders(orders)
        } else{
            setOrders( JSON.parse(storedOrders))
        }
        console.log(orders)
    },[])

    return(
        <section className="order-preview">
            <h2 className='preview-title'>Preview</h2>
           <p className="preview-customer-name">{customerName}</p>
            <div className='preview-list'>
                {productsSelected && productsSelected.map((element, index) => {
                        return(
                            <div key={index} className="preview-item">
                                <p className="preview-product-name"> {element.productName} </p>
                                <span className="preview-product-price">{`R$${element.productPrice}.00`}</span>
                            </div>
                        )
                    })}
            </div> 
                
                <div className="order-total-value">
                    {totalValue > 0 ? `Total: R$${totalValue}.00` : null}
                </div>

                {
                productsSelected != '' ? 
                    (<button className="create-order-button" onClick={createOrder}>CRIAR PEDIDO</button>) : null
                }

                { showModal && (<OrderCreatedModal/>) }
        </section>
    )
}