import "./style.scss"
import {logoLight , imgBerger_menu} from "src/assets"

const NavbarHome = () => {
    return <>
        <div className="pt-5">
            <div className="navbar  flex items-center text-white hidden lg:block ">
                <div className="navbar-start">
                    <div className="flex  gap-5">
                        <img src={logoLight}  className="cursor-pointer" alt=""/>
                        <span className="cursor-pointer">Testimonials</span>
                        <span className="cursor-pointer">Pricing</span>
                    </div>
                </div>
                <div className="navbar-end ">
                    <div className="btn_header">
                        <span>Get Started for free</span>
                    </div>
                </div>
            </div>
            <div className="navbar  flex items-center text-white block lg:hidden ">
                <div className="navbar-start">
                    <img src={logoLight}  className="cursor-pointer" alt="" />
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns={imgBerger_menu} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Get Started for free</a></li>
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