import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { productSettings, sizeSettings } from "../../config/productsSettings"
import { OrderContext } from "../../contexts/orderContext"


export default function CreateOrder(){
    const {productsSelected, setProductsSelected, customerName, setCustomerName, setTotalValue} = useContext(OrderContext)
    const {register, handleSubmit} = useForm()

    const addProduct =  (data) => {
        const product = productsSelected
        product.push(data)
        setProductsSelected([...product])
        console.log(productsSelected)
    }
    

    const removeProduct = (data) => {
        const product = productsSelected
        product.pop(data)
        setProductsSelected([...product])
    }

    const changeHandler = (event) => {
        setCustomerName(event.target.value)
    }

    useEffect(() => {
        let value = 0
        productsSelected.map((element)=>{
            value = value + parseFloat(element.productPrice)
        }) 
        setTotalValue(value)
    },[productsSelected])


    return(
        <section className="create-order">
            <form onSubmit={handleSubmit(addProduct)}>
                <label>Informe o nome do cliente:</label>
                <input 
                type={"text"} className="input-customer" 
                {...register("customerName", {required:true})}
                onChange={ changeHandler }/>

                <p>Selecione o produto:</p>

                {productSettings.map((element, index) => {
                    return(
                        <div key={index}>
                            <label htmlFor="products">{element.name}</label>
                           
                            <input 
                            {...register("productName",{required: true})}
                            id={element.name}
                            value={element.name}
                            type="radio" 
                            className="product-option"/>
                        </div>  
                    )
                })}

                <p>Selecione o tamanho:</p>
                {sizeSettings.map((element, index) => {
                    return(
                        <div key={index}>
                            <label>{element.size}</label>
                            <span>(R${element.price.toFixed(2)})</span>
                            <input
                            {...register("productPrice", {required: true})}
                            value={element.price} 
                            type="radio" 
                            id="product-option" />
                        </div>
                    )
                })}

            
                <input type="submit" value="+" onSubmit={addProduct}/>
                <input type="button" value="-" onClick={removeProduct} />
            </form>
                
        </section>
    )
}

