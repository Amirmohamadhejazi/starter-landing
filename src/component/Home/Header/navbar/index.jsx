import "./style.scss"
import {logoLight , imgBerger_menu} from "src/assets/index.jsx"
import { IoIosArrowForward } from 'react-icons/io';
import {Link} from "react-router-dom";


const NavbarHome = () => {
    return <>
        <div className="pt-5 font-Regular">
            <div className="navbar  flex items-center text-white hidden lg:block ">
                <div className="navbar-start">
                    <div className="flex  gap-5">
                        <img src={logoLight}  className="cursor-pointer" alt=""/>
                        <span className="cursor-pointer">Testimonials</span>
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
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <img src={imgBerger_menu} alt=""/>
                        </label>
                        <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={"./signup"} >
                                <li className="focus:text-red active:bg-violet-700"><a>Get Started for free</a></li>
                            </Link>
                            <li><a>Testimonials</a></li>
                            <li><a>Pricing</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NavbarHome