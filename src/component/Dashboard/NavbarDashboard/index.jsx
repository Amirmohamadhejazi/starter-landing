import {
    logoDark,
    Avatar1
} from "src/assets";
import {Link } from "react-router-dom";

import { MdKeyboardArrowDown } from 'react-icons/md';
const NavbarDashboard = ()=>{
    return <>
    <div className="flex justify-between shadow-lg p-5 rounded-lg">
        <Link to={"/starter-landing/"}>
        <img src={logoDark}  className="cursor-pointer" alt=""/>
        </Link>
        <div className="flex align-center gap-3">
            <img src={Avatar1} alt="" />
            <span className="font-Bold ">Stephanie mark</span>
            <MdKeyboardArrowDown className="text-xl"/>
        </div>
    </div>
    </>
}

export default NavbarDashboard