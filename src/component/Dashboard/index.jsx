import HomeDashboard from "src/component/Dashboard/HomeDashboard/index.jsx";
import Analytic from "src/component/Dashboard/Analytics/index.jsx";
import Account from "src/component/Dashboard/Account/index.jsx";
import NavbarDashboard from "./NavbarDashboard";
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineHome } from 'react-icons/hi';
import { SiGoogleanalytics } from 'react-icons/si';
import { TbSettings } from 'react-icons/tb';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import {
    VideoCover,
    logoDark,
    Dribble,
    Blogger,
    Discord,
    Youtube,
    LinkedIn,
    Twitter
} from "src/assets";
import "./style.scss"
import { useState } from "react";
const Dashboard = ()=>{
    const [AddedSocial , setAddedSocial] = useState([])
    let SocialData = [
        {
            name:"Dribble",
            img:`${Dribble}`,
            bg:"bg-[#ea4c89]",
            id:0
        },
        {
            name:"Blogger",
            img:`${Blogger}`,
            bg:"bg-[#fc4f08]",
            id:1
        },
        {
            name:"Discord",
            img:`${Discord}`,
            bg:"bg-[#7289da]",
            id:2
        },
        {
            name:"Youtube",
            img:`${Youtube}`,
            bg:"bg-[#ff0000]",
            id:3
        },
        {
            name:"LinkedIn",
            img:`${LinkedIn}`,
            bg:"bg-[#0e76a8]",
            id:4
        },
        {
            name:"Twitter",
            img:`${Twitter}`,
            bg:"bg-[#00acee]",
            id:5
        },
    ]
    const [AllSocial , setAllSocial] = useState(SocialData)
    const [tab,setTab] = useState(1)


    
    const AddHandle = (data)=>{
        let FilterArray = AllSocial.filter((item)=>item !== data)
        setAllSocial(FilterArray)
        setAddedSocial([...AddedSocial,data])
    }
    const RemoveHandle = (data)=>{
        let FilterArray = AddedSocial.filter((item)=>item !== data)
        setAddedSocial(FilterArray)
        setAllSocial([...AllSocial, data])

    }
    return <>
        <div className="dashboard min-h-screen bg-[#f8f9fb]">
            <div className="container  px-2 lg-px-0 ">
            <NavbarDashboard/>
                <div className="flex gap-5 mt-6">
                    <div className="basis-1/4 h-screen rounded-md bg-[#dcdcdc] flex flex-col justify-between p-5">
                        <div className="flex flex-col gap-3">  
                            <div className={`flex gap-3 items-center cursor-pointer ${tab == 1 && 'text-[#6016fc]'}`}>
                                <HiOutlineHome className="text-xl"/>
                                <p className="text-lg font-Bold" onClick={()=>setTab(1)}>Home</p>
                            </div>
                            <div className={`flex gap-3 items-center cursor-pointer ${tab == 2 && 'text-[#6016fc]'}`}>
                                <SiGoogleanalytics className="text-xl"/>
                                <p className="text-lg font-Bold"  onClick={()=>setTab(2)}>Analytics</p>
                            </div>
                            <div className={`flex gap-3 items-center cursor-pointer ${tab == 3 && 'text-[#6016fc]'}`}>
                                <VscAccount className="text-xl"/>
                                <p className="text-lg font-Bold"  onClick={()=>setTab(3)}>Account</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">   
                            <div className={`flex gap-3 items-center cursor-pointer ${tab == 4 && 'text-[#6016fc]'}`}>
                                <TbSettings className="text-xl"/>
                                <p className="text-lg font-Bold" onClick={()=>setTab(4)}>Publish</p>
                            </div>
                            <div className={`flex gap-3 items-center cursor-pointer ${tab == 5 && 'text-[#6016fc]'}`}>
                                <TbSettings className="text-xl"/>
                                <p className="text-lg font-Bold" onClick={()=>setTab(5)}>Setting</p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/4 rounded-md bg-white  bg-[#dcdcdc]  p-5" >
                        {
                            tab === 1 && <>
                            
                            <p className="text-xl font-Bold">
                             Wellcome, Stephanie mark
                        </p>

                        <div className="mt-5 flex border-2">
                            <div className="w-full">
                                <img src={VideoCover} alt="" />
                            </div>

                            <div className="flex  ml-4 flex-col gap-3">
                                <p className="text-xl font-Bold">How Freelancing Has Changed My Life with Anderson Matthew</p>
                                <p className="text-gray-500 font-Bold">Tune in to this episode of interviewing freelancers from around the world and how linkProfile has helped. In this episode, Anderson goes over his strategies to get your first online client and how to do outreach.</p>
                                <p className="text-gray-500 font-Bold">Anderson also goes over how linkProfile managed to secure a $60k client.</p>
                            </div>

                            
                        </div>

                        {/* <span>website</span> */}

                        <div className="flex flex-row gap-3">
                        <div className="flex w-[35%] flex-col gap-3 min-h-[26rem]">
                        <p className="mb-3 font-Bold">Available Social Media</p>
                            {
                                AllSocial.map((items)=><div className={`w-full min  flex justify-between rounded-md p-4 text-white  cursor-pointer ${items.bg}`} key={items.id} onClick={()=>AddHandle(items)}>
                                    <div className="flex gap-2">
                                        <img src={items.img} alt=""/>
                                        <span>{items.name}</span>
                                    </div>
                                    <HiOutlinePlusSm className="text-2xl"/>
                                </div>)
                            }
                        </div>
                        <div className="flex w-[35%] flex-col gap-3  min-h-[26rem]">
                            <p className="mb-3 font-Bold">Currently added</p>
                            {
                                AddedSocial.map((items)=><div className={`w-full min  flex justify-between rounded-md p-4 text-white  cursor-pointer ${items.bg}`} key={items.id} onClick={()=>RemoveHandle(items)}>
                                    <div className="flex gap-2">
                                        <img src={items.img} alt=""/>
                                        <span>{items.name}</span>
                                    </div>
                                    <MdClose className="text-2xl"/>
                                </div>)
                            }
                        </div>
                        </div>


                            </>
                        }

                        {tab === 2 && <>2</>}
                        {tab === 3 && <>3</>}
                        {tab === 4 && <>4</>}
                        {tab === 5 && <>5</>}
                    </div>
                    
                </div>
                
            </div>
        </div>
    </>
}

export default Dashboard