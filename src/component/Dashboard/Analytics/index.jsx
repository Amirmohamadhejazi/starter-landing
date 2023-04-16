import "./style.scss"
import {Analytics1, Analytics2, Countries, TopLinksClicked} from "src/assets/index.jsx";

const Analytic = ()=>{
    return <>
        <div className="flex flex-col items-center lg:items-start ">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="lg:basis-1/2">
                    <img src={Analytics1} alt=""/>
                </div>
                <div className="lg:basis-1/2">
                    <img src={Analytics2} alt=""/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 mt-5">
                <div className="lg:basis-1/2">
                    <img src={TopLinksClicked} alt=""/>
                </div>
                <div className="lg:basis-1/2">
                    <img src={Countries} alt=""/>
                </div>
            </div>
        </div>
    </>
}

export default Analytic