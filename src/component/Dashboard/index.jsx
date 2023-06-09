import Analytic from "src/component/Dashboard/Analytics/index.jsx";
import Account from "src/component/Dashboard/Account/index.jsx";
import NavbarDashboard from "./NavbarDashboard";
import HomeDashboard from "./HomeDashboard";
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineHome } from 'react-icons/hi';
import { SiGoogleanalytics } from 'react-icons/si';
import { TbSettings } from 'react-icons/tb';
import "./style.scss"
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
const Dashboard = ()=>{
    const [tab,setTab] = useState(1)
    const navigate = useNavigate();
    const location = useLocation();
    const localLogin = JSON.parse(localStorage.getItem('starter-landing'));
    useEffect(()=>{
        if (!localLogin){
            navigate('/starter-landing/signup');
        }
    },[location.pathname, navigate, localLogin])
    return <>
        <div className="dashboard lg:min-h-screen bg-[#f8f9fb]">
            <div className="container  px-2 lg-px-0 ">
            <NavbarDashboard/>
                <div className="flex flex-col lg:flex-row gap-5 mt-6 ">
                    <div className="basis-1/5 min-h-screen rounded-md   hidden lg:flex flex-col justify-between p-5 ">
                        <div className="flex flex-col gap-3">
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 1 && 'text-[#6016fc]'}`} onClick={()=>setTab(1)}>
                                <HiOutlineHome className="text-xl"/>
                                <p className="text-lg font-Bold">Home</p>
                            </div>
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 2 && 'text-[#6016fc]'}`}  onClick={()=>setTab(2)}>
                                <SiGoogleanalytics className="text-xl"/>
                                <p className="text-lg font-Bold">Analytics</p>
                            </div>
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 3 && 'text-[#6016fc]'}`} onClick={()=>setTab(3)}>
                                <VscAccount className="text-xl"/>
                                <p className="text-lg font-Bold">Account</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 4 && 'text-[#6016fc]'}`}>
                                <TbSettings className="text-xl"/>
                                <p className="text-lg font-Bold">Publish</p>
                            </div>
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 5 && 'text-[#6016fc]'}`}>
                                <TbSettings className="text-xl"/>
                                <p className="text-lg font-Bold">Setting</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-3 w-full justify-between flex-wrap lg:hidden bg-[#ebebeb] p-6 rounded-lg my-4">
                        <div className={`flex  gap-1 items-center cursor-pointer ${tab === 1 && 'text-[#6016fc]'}`} onClick={()=>setTab(1)}>
                            <HiOutlineHome className="text-lg"/>
                            <p className="text-md font-Bold">Home</p>
                        </div>
                        <div className={`flex gap-1 items-center cursor-pointer ${tab === 2 && 'text-[#6016fc]'}`} onClick={()=>setTab(2)}>
                            <SiGoogleanalytics className="text-lg"/>
                            <p className="text-md font-Bold" >Analytics</p>
                        </div>
                        <div className={`flex gap-1 items-center cursor-pointer ${tab === 3 && 'text-[#6016fc]'}`} onClick={()=>setTab(3)}>
                            <VscAccount className="text-lg"/>
                            <p className="text-md font-Bold" >Account</p>
                        </div>
                        <div className={`flex gap-1 items-center cursor-pointer ${tab === 4 && 'text-[#6016fc]'}`}>
                            <TbSettings className="text-lg"/>
                            <p className="text-md font-Bold">Publish</p>
                        </div>
                    </div>

                    <div className="w-full lg:basis-4/5 rounded-md bg-white  bg-[#dcdcdc]  p-5" >
                        {tab === 1 && <HomeDashboard/>}
                        {tab === 2 && <Analytic/>}
                        {tab === 3 && <Account/>}
                        {tab === 4 && <>4</>}
                        {tab === 5 && <>5</>}
                    </div>
                    
                </div>
                
            </div>
        </div>
    </>
}

export default Dashboard