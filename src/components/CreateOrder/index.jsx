import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { productSettings } from "../../config/productsSettings"


export default function CreateOrder(){
    const {register, handleSubmit} = useForm()
    const [customerName, setCustomerName] = useState()
    const [productsSelected, setProductsSelected] = useState([])
    const [productName, setProductName] = useState([])
    
    const addProduct = (data) => {
        data.productName = productName
        console.log(data)
        productsSelected.push(data.productPrice)
        setCustomerName(data.customerName)
        
        console.log(productsSelected)
        console.log(productName)
    }

    const removeProduct = () => {
        productsSelected.pop()
        console.log(productsSelected)
    }

    const selectRadio = (event) => {
        productName.push(event.target.id)
    }

    return(
        <section className="create-order">
            <form onSubmit={handleSubmit(addProduct)}>
                <label>Informe o nome do cliente:</label>
                <input type={"text"} className="input-customer" {...register("customerName", {required:true})}/>

                <p>Selecione o produto e depois clique no botão de incluir:</p>

                {productSettings.map((element, index) => {
                    return(
                        <div key={index}>
                            <label htmlFor="products">{element.name}</label>
                            <span className="price-product">{`R$${element.price.toFixed(2)}`}</span>

                            <input 
                            {...register("productPrice",{required: true})}
                            onClick={selectRadio}
                            id={element.name}
                            value={element.price}
                            type="radio" 
                            className="product-option"/>
                        </div>  
                    )
                })}

                <input type="submit" value="+" onSubmit={addProduct}/>
                <input type="button" value="-" onClick={removeProduct} />
            </form>

            <div className="preview">
                <p>{customerName}</p>
                {productsSelected.map((element, index) => {
                    return(
                        <p key={index}>{element}</p>
                    )
                })}
            </div>

        </section>
    )
}

