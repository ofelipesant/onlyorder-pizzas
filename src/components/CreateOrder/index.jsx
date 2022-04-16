import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { productSettings, sizeSettings } from "../../config/productsSettings"
import { OrderContext } from "../../contexts/orderContext"
import './create-order.sass'

export default function CreateOrder() {
    const { productsSelected, setProductsSelected, customerName, setCustomerName, setTotalValue } = useContext(OrderContext)
    const { register, handleSubmit } = useForm()

    const addProduct = (data) => {
        const product = productsSelected
        product.push(data)
        setProductsSelected([...product])
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
        productsSelected.map((element) => {
            value = value + parseFloat(element.productPrice)
        })
        setTotalValue(value)
    }, [productsSelected])


    return (
        <section className="create-order">
            <h1 className="main-title">Crie seu pedido</h1>
            <h3 className="main-info">Preencha as informações para a criação do pedido:</h3>

            <form onSubmit={handleSubmit(addProduct)} className="create-order-content">
                <label >Informe o nome do cliente:</label>
                <input
                    type={"text"} 
                    className="input-customer"
                    {...register("customerName", { required: true })}
                    onChange={changeHandler}
                    autoComplete="off"/>

                <p className="subtitle">Selecione o produto:</p>

                <div className="product-options-container">
                    {productSettings.map((element, index) => {
                        return (
                            <div key={index} className="product-list">
                                <input
                                    {...register("productName", { required: true })}
                                    id={element.name}
                                    value={element.name}
                                    type="radio"
                                    className="product-option" />
                                <label htmlFor="products">{element.name}</label>
                            </div>
                        )
                    })}
                </div>

                <p className="subtitle">Selecione o tamanho:</p>
                <div className="attributes-container">
                    {sizeSettings.map((element, index) => {
                        return (
                            <div key={index} className="attributes-list">
                                <input
                                    {...register("productPrice", { required: true })}
                                    value={element.price}
                                    type="radio"
                                    className="product-option" />
                                    <label>{element.size}</label>
                                    <span>(R${element.price.toFixed(2)})</span>
                            </div>
                        )
                    })}
                </div>


                <input type="submit" value="+" onSubmit={addProduct} className="order-button"/>
                <input type="button" value="-" onClick={removeProduct} className="order-button"/>
            </form>

        </section>
    )
}

