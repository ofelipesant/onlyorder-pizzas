import { OrderContextProvider } from "../../contexts/orderContext";
import CreateOrder from "../CreateOrder";
import OrderPreview from "../OrderPreview";

export default function OrderMain(){
    return(
        <main className="order-main"> 
        <OrderContextProvider>
                <CreateOrder/>
                <OrderPreview/>
        </OrderContextProvider>
            
        </main>
    )
}