import "./style.scss"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from 'src/Redux/Slices/counter/counterSlice.js'
import {useEffect} from "react";
const Home = ()=>{
    const {value} = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    useEffect(()=>{
        setInterval(()=>{
            dispatch(increment())
        },1000)
    },[])
    return <>
        home {value}
    </>
}

export default Home