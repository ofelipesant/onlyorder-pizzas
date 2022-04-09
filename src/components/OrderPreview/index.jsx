import { useContext } from "react"
import { OrderContext } from "../../contexts/orderContext"

export default function OrderPreview(){
    const {productsSelected, customerName, totalValue} = useContext(OrderContext)

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
                    (<button className="create-order-butotn">CRIAR PEDIDO</button>) : null
                }
        </section>
    )
}