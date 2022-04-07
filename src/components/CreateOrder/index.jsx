import { useState } from "react";
import { productSettings } from "../../config/productsSettings"


export default function CreateOrder(){
    const [customerName, setCustomerName] = useState()

    const handleInputName = (event) => {
        setCustomerName(event.target.value)
    }

    return(
        <section className="create-order">
            <form>
                <label>Informe o nome do cliente:</label>
                <input type={"text"} className="input-customer" onChange={handleInputName}/>

                <p>Selecione o produto e depois clique no botão de incluir:</p>

                {productSettings.map((element, index) => {
                    return(
                        <div key={index}>
                            <label htmlFor="products">{element.name}</label>
                            <span className="price-product">{`R$${element.price.toFixed(2)}`}</span>

                            <input 
                            value={element.price}
                            type="radio" 
                            name="products" 
                            id={element.name} 
                            className="product-option"/>

                        </div>  
                    )
                })}

                <input type="submit" value="+" />
            </form>

            <div>{customerName}</div>

        </section>
    )
}

