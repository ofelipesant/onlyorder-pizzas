import { useContext, useEffect, useState } from "react"
import { OrderContext } from "../../contexts/orderContext"

export default function OrderPreview(){
    const {productsSelected} = useContext(OrderContext)

    return(
        <section className="order-preview">
            oi
            {productsSelected && productsSelected.map((element, index) => {
                    return(
                        <div key={index}>
                            {element.productName}
                        </div>
                    )
                })} 

        </section>
    )
}