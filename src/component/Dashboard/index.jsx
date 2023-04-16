import Analytic from "src/component/Dashboard/Analytics/index.jsx";
import Account from "src/component/Dashboard/Account/index.jsx";
import NavbarDashboard from "./NavbarDashboard";
import HomeDashboard from "./HomeDashboard";
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineHome } from 'react-icons/hi';
import { SiGoogleanalytics } from 'react-icons/si';
import { TbSettings } from 'react-icons/tb';
import "./style.scss"
import { useState } from "react";
const Dashboard = ()=>{
    const [tab,setTab] = useState(1)
    return <>
        <div className="dashboard lg:min-h-screen bg-[#f8f9fb]">
            <div className="container  px-2 lg-px-0 ">
            <NavbarDashboard/>
                <div className="flex flex-col lg:flex-row gap-5 mt-6 ">
                    <div className="basis-1/5 h-screen rounded-md   hidden lg:flex flex-col justify-between p-5 ">
                        <div className="flex flex-col gap-3">
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 1 && 'text-[#6016fc]'}`}>
                                <HiOutlineHome className="text-xl"/>
                                <p className="text-lg font-Bold" onClick={()=>setTab(1)}>Home</p>
                            </div>
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 2 && 'text-[#6016fc]'}`}>
                                <SiGoogleanalytics className="text-xl"/>
                                <p className="text-lg font-Bold"  onClick={()=>setTab(2)}>Analytics</p>
                            </div>
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 3 && 'text-[#6016fc]'}`}>
                                <VscAccount className="text-xl"/>
                                <p className="text-lg font-Bold"  onClick={()=>setTab(3)}>Account</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 4 && 'text-[#6016fc]'}`}>
                                <TbSettings className="text-xl"/>
                                <p className="text-lg font-Bold" onClick={()=>setTab(4)}>Publish</p>
                            </div>
                            <div className={`flex gap-3 items-center cursor-pointer ${tab === 5 && 'text-[#6016fc]'}`}>
                                <TbSettings className="text-xl"/>
                                <p className="text-lg font-Bold" onClick={()=>setTab(5)}>Setting</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-3 w-full justify-between flex-wrap lg:hidden">
                        <div className={`flex  gap-1 items-center cursor-pointer ${tab === 1 && 'text-[#6016fc]'}`}>
                            <HiOutlineHome className="text-lg"/>
                            <p className="text-md font-Bold" onClick={()=>setTab(1)}>Home</p>
                        </div>
                        <div className={`flex gap-1 items-center cursor-pointer ${tab === 2 && 'text-[#6016fc]'}`}>
                            <SiGoogleanalytics className="text-lg"/>
                            <p className="text-md font-Bold"  onClick={()=>setTab(2)}>Analytics</p>
                        </div>
                        <div className={`flex gap-1 items-center cursor-pointer ${tab === 3 && 'text-[#6016fc]'}`}>
                            <VscAccount className="text-lg"/>
                            <p className="text-md font-Bold"  onClick={()=>setTab(3)}>Account</p>
                        </div>
                        <div className={`flex gap-1 items-center cursor-pointer ${tab === 4 && 'text-[#6016fc]'}`}>
                            <TbSettings className="text-lg"/>
                            <p className="text-md font-Bold" onClick={()=>setTab(4)}>Publish</p>
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