import OrderMain from "../../components/OrderMain";

export default function Home(){
    return(
        <>
            <h1 className="main-title">Crie seu pedido</h1>
            <h3>Preencha as informações para a criação do pedido:</h3>
            <OrderMain/>
        </>
    )
}