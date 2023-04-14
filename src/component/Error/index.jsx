import "./style.scss"
import {Error404_img} from "src/assets/index.jsx";

const Error = ()=>{
    return <div className="error">
        <div className="w-full min-h-screen flex justify-center align-center">
            <div className="w-[50%]">
                <img src={Error404_img} className="w-full h-full  " alt=""/>
            </div>
        </div>
    </div>
}

export default Error