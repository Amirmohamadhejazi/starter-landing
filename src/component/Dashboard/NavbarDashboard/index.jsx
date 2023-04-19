import { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
 import { MdKeyboardArrowDown } from 'react-icons/md';
 import { setUser } from "src/Redux/Slices/dashboard/dashboardSlice";
 import {
  VideoCover,
  Dribble,
  Blogger,
  Discord,
  Youtube,
  LinkedIn,
  Twitter,
  Analytics1
} from "src/assets";
import {
  logoDark,
  Avatar1,
  Avatar2,
  Avatar3
} from "src/assets";

import {useLocation, useNavigate} from "react-router-dom";

const NavbarDashboard = ()=>{

  const {user} = useSelector((state) => state.dashboard)

  console.log(user)
  const navigate = useNavigate();
  const location = useLocation();
  const logout = ()=>{
    navigate('/starter-landing');
    localStorage.removeItem('starter-landing')
  }
  // const dispatch = useDispatch()
  // const [account , setAccount] = useState(1)


  // let user1 = {name:"Stephanie mark" , social:[{
  //   name:"Dribble",
  //   img:`${Dribble}`,
  //   bg:"#ea4c89",
  //   id:0
  // },
  // {
  //   name:"Blogger",
  //   img:`${Blogger}`,
  //   bg:"#fc4f08",
  //   id:1
  // }], Available:[{
  //   name:"Discord",
  //   img:`${Discord}`,
  //   bg:"#7289da",
  //   id:2
  // },
  // {
  //   name:"Youtube",
  //   img:`${Youtube}`,
  //   bg:"#ff0000",
  //   id:3
  // },
  // {
  //   name:"LinkedIn",
  //   img:`${LinkedIn}`,
  //   bg:"#0e76a8",
  //   id:4
  // },
  // {
  //   name:"Twitter",
  //   img:`${Twitter}`,
  //   bg:"#00acee",
  //   id:5
  // }] }

  // let user2 = {name:"Sara Smith" , social:[{
  //   name:"Dribble",
  //   img:`${Dribble}`,
  //   bg:"#ea4c89",
  //   id:0
  // },
  // {
  //   name:"Blogger",
  //   img:`${Blogger}`,
  //   bg:"#fc4f08",
  //   id:1
  // },
  // {
  //   name:"Twitter",
  //   img:`${Twitter}`,
  //   bg:"#00acee",
  //   id:5
  // }], Available:[{
  //   name:"Discord",
  //   img:`${Discord}`,
  //   bg:"#7289da",
  //   id:2
  // },
  // {
  //   name:"Youtube",
  //   img:`${Youtube}`,
  //   bg:"#ff0000",
  //   id:3
  // },
  // {
  //   name:"LinkedIn",
  //   img:`${LinkedIn}`,
  //   bg:"#0e76a8",
  //   id:4
  // }] }

  // let user3 = {name:"Nathanial 🚀" , social:[{
  //   name:"Dribble",
  //   img:`${Dribble}`,
  //   bg:"#ea4c89",
  //   id:0
  // },
  // {
  //   name:"Blogger",
  //   img:`${Blogger}`,
  //   bg:"#fc4f08",
  //   id:1
  // },
  // {
  //   name:"Discord",
  //   img:`${Discord}`,
  //   bg:"#7289da",
  //   id:2
  // },], Available:[
  // {
  //   name:"Youtube",
  //   img:`${Youtube}`,
  //   bg:"#ff0000",
  //   id:3
  // },
  // {
  //   name:"LinkedIn",
  //   img:`${LinkedIn}`,
  //   bg:"#0e76a8",
  //   id:4
  // },
  // {
  //   name:"Twitter",
  //   img:`${Twitter}`,
  //   bg:"#00acee",
  //   id:5
  // }] }



  // useEffect(()=>{
  //   dispatch(setUser(account === 1 ? user1 :account === 2 ? user2 : user3))
  // },[account])
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
      </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 left-[-100%]">
        <li>
          <div >
            <img src={Avatar1} alt="" />
            <span className="font-Bold ">Stephanie mark</span>
          </div>
        </li>
        <li>
          <div >
            <img src={Avatar2} alt="" />
            <span className="font-Bold ">Sara Smith</span>
          </div>
        </li>
        <li>
          <div >
            <img src={Avatar3} alt="" />
            <span className="font-Bold ">Nathanial 🚀</span>
          </div>
        </li>
      </ul>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
      <div className="flex items-center gap-2 ml-1 cursor-pointer">
        <span className="font-Bold ">{user.name}</span>
            {/* <span className="font-Bold ">{account === 1 ? "Stephanie mark" :account ===2 ? "Sara Smith" :"Nathanial 🚀"}</span> */}
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
        <li onClick={()=>logout()}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </>
}

export default NavbarDashboard