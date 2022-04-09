import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OrderContextProvider } from "../contexts/orderContext";
import Home from "../pages/Home";
import Orders from "../pages/Orders";

export default function OrderRoutes(){
    return(
        <OrderContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/pedidos"} element={<Orders/>}/>
                </Routes>
            </BrowserRouter>
        </OrderContextProvider>

    )
}