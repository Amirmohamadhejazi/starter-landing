import "./style.scss"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from 'src/Redux/Slices/counter/counterSlice.js'
import NavbarHome from "./navbar";
import {useEffect} from "react";
import { bg_header , } from "../../assets";
const Home = ()=>{
    const {value} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return <>
        <div className="Home " style={{background:`url('${bg_header}') no-repeat fixed` , backgroundSize:"101% 101%"}}>
            <div className="container min-h-screen   ">
                <NavbarHome/>
            </div>
        </div>
    </>
}

export default Home