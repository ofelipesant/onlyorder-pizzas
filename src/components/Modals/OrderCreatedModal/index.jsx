import { Link } from "react-router-dom";
import {BsFillCheckSquareFill} from 'react-icons/bs'
import './order-created-modal.sass'

export default function OrderCreatedModal(){
    return(
        <div className="order-created-modal">
            <BsFillCheckSquareFill className="check-icon-modal"/>
            <h3 className="modal-message">Pedido criado!</h3>
            <span>Veja ele <Link to="/pedidos" className="link">na lista</Link></span>
        </div>
    )
}