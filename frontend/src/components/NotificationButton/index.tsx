import icon from "../../assets/img/notification-icon.svg"
import { BASE_URL } from "../../utils/request";
import axios from 'axios';

import './styles.css'
import { toast } from "react-toastify";


type props = {
saleId: Number;
}

function handleClick(id :number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(Response => {
            toast.info("SMS enviado com sucesso");
        })
    
}
function NotificationButton( {saleId} : props) {

    return (

        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>


    )
}

export default NotificationButton