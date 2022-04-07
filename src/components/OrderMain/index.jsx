import CreateOrder from "../CreateOrder";

export default function OrderMain(){
    return(
        <main className="order-main">
            <h1 className="main-title">Crie seu pedido</h1>
            <h3>Preencha as informações para a criação do pedido:</h3>

            <CreateOrder/>

        </main>
    )
}