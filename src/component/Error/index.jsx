import "./style.scss"
import {Error404_img} from "src/assets/index.jsx";

const Error = ()=>{
    return <div className="error">
        <div className="w-full flex justify-center">
            <img src={Error404_img} style={{  width:"70%"}} alt=""/>
        </div>
    </div>
}

export default Error