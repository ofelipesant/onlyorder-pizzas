import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Orders from "../pages/Orders";

export default function OrderRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/pedidos"} element={<Orders/>}/>
            </Routes>
        </BrowserRouter>
    )
}