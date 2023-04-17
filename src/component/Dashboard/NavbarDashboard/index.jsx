import {
    logoDark,
    Avatar1,
    Avatar2
} from "src/assets";
import {Link } from "react-router-dom";

import { MdKeyboardArrowDown } from 'react-icons/md';
const NavbarDashboard = ()=>{
    return <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
     <Link to={"/starter-landing/"}>
        <img src={logoDark}  className="cursor-pointer" alt=""/>
        </Link>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
      <div className="flex items-center gap-2 ml-1 cursor-pointer">
      <img src={Avatar1} alt="" />
            {/* <span className="font-Bold ">Stephanie mark</span>
            <MdKeyboardArrowDown className="text-xl"/> */}
      </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 left-[10%]">
        <li>
          <div className=" ">
            <img src={Avatar1} alt="" />
            <span className="font-Bold ">Amirmohamad</span>
          </div>
        </li>
        <li>
          <div className="">
            <img src={Avatar2} alt="" />
            <span className="font-Bold ">Stephanie mark</span>
          </div>
        </li>
      </ul>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
      <div className="flex items-center gap-2 ml-1 cursor-pointer">
            <span className="font-Bold ">Stephanie mark</span>
            <MdKeyboardArrowDown className="text-xl"/>
      </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </>
}

export default NavbarDashboard