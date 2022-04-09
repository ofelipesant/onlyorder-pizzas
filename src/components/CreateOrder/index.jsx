import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { productSettings, sizeSettings } from "../../config/productsSettings"
import { OrderContext } from "../../contexts/orderContext"


export default function CreateOrder(){
    const {productsSelected, setProductsSelected} = useContext(OrderContext)

    const {register, handleSubmit} = useForm()
   
    const addProduct =  (data) => {
        const product = productsSelected
        product.push(data)
        setProductsSelected([...product])
    }
    

    const removeProduct = (data) => {
        const product = productsSelected
        product.pop(data)
        setProductsSelected([...product])
    }

 /*    useEffect(() => {
        console.log(productsSelected)
    },[productsSelected]) */


    return(
        <section className="create-order">
            <form onSubmit={handleSubmit(addProduct)}>
                <label>Informe o nome do cliente:</label>
                <input type={"text"} className="input-customer" {...register("customerName", {required:true})}/>

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

