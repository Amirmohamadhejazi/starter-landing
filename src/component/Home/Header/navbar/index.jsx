import "./style.scss"
import {logoLight , imgBerger_menu} from "src/assets/index.jsx"
import { IoIosArrowForward } from 'react-icons/io';
import {Link} from "react-router-dom";
import { useState } from "react";


const NavbarHome = () => {

    const [dropDown , setDropDown] = useState(false)
    return <>
        <div className="pt-5 font-Regular">
            <div className="navbar  flex items-center text-white hidden lg:block ">
                <div className="navbar-start">
                    <div className="flex  gap-5">
                        <img src={logoLight}  className="cursor-pointer" alt=""/>
                        <Link to={"./dashboard"} >
                            <span className="cursor-pointer">Dashboard</span>
                        </Link>
                        <span className="cursor-pointer">Pricing</span>
                    </div>
                </div>
                <div className="navbar-end ">
                    <Link to={"./signup"} >
                        <div className="btn_header flex items-center">
                            <span>Get Started for free</span>
                            <IoIosArrowForward className="pl-2 text-2xl"/>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="navbar  flex items-center text-white block lg:hidden ">
                <div className="navbar-start">
                    <img src={logoLight}  className="cursor-pointer" alt="" />
                </div>
                <div className="navbar-end">
                    <div className={`dropdown ${dropDown && 'dropdown-open'}`}>
                        <div className="btn btn-ghost btn-circle" onClick={(e)=>setDropDown(!dropDown)}>
                            <img src={imgBerger_menu} alt=""/>
                        </div>
                        <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={"./signup"} >
                                <li><a>Get Started for free</a></li>
                            </Link>
                            <Link to={"./dashboard"} >
                                <li><a>Dashboard</a></li>
                            </Link>
                            <li><a>Pricing</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NavbarHome