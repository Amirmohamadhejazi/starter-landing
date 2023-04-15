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
    Twitter,
    Analytics1
} from "src/assets";
import "./style.scss"
import { useState } from "react";
const Dashboard = ()=>{
    const [AddedSocial , setAddedSocial] = useState([])
    const [dataForm, setDataForm] = useState({name:"", color:"", link:"", icon_link:""})
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
        if (data.custom){
                let FilterArray = AddedSocial.filter((item)=>item !== data)
                setAddedSocial(FilterArray)
                setDataForm({name:"", color:"", link:"", icon_link:""})
        }else {
                let FilterArray = AddedSocial.filter((item)=>item !== data)
                setAddedSocial(FilterArray)
                setAllSocial([...AllSocial, data])
                setDataForm({name:"", color:"", link:"", icon_link:""})
        }


    }

    const CustomSocial = (e) => {
      e.preventDefault()
      let NewCustomData = {
          name:dataForm.name,
          img:`${dataForm.icon_link}`,
          bg:`bg-[${dataForm.color}]`,
          id:AddedSocial.length+1,
          custom:true
      }
      setAddedSocial([...AddedSocial,NewCustomData])
    }

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
                        {
                            tab === 1 && <>
                            
                            <p className="text-xl font-Bold">
                             Wellcome, Stephanie mark
                            </p>

                        <div className="mt-5 flex flex-col lg:flex-row rounded-lg border-2 border-gray-200 gap-3">
                            <div className="basis-4/12 ">
                                <img src={VideoCover} className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="basis-8/12  flex flex-col gap-3 p-5">
                                <p className="text-xl font-Bold">How Freelancing Has Changed My Life with Anderson Matthew</p>
                                <p className="text-gray-500 font-Bold">Tune in to this episode of interviewing freelancers from around the world and how linkProfile has helped. In this episode, Anderson goes over his strategies to get your first online client and how to do outreach.</p>
                                <p className="text-gray-500 font-Bold">Anderson also goes over how linkProfile managed to secure a $60k client.</p>

                                <button className="w-[200px] lg:w-[40%] p-3 text-center rounded-lg font-Bold border border-gray-600 cursor-pointer">
                                    <span>Watch Video Now</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-3 mt-5 flex-wrap lg:flex-nowrap items-center lg:items-start">

                            <div className="w-full lg:w-[30%] p-3  rounded-lg  border-2 border-gray-200 min-h-[31rem]">
                                <p className="my-6 font-Bold text-center">Available Social Media</p>
                                <div className="flex flex-col gap-3 ">
                                    {
                                        AllSocial.map((items)=><div className={`w-full min  flex justify-between rounded-md p-4 text-white items-center  cursor-pointer ${items.bg}`} key={items.id} onClick={()=>AddHandle(items)}>
                                            <div className="flex gap-2 items-center">
                                                <img src={items.img} alt=""/>
                                                <span>{items.name}</span>
                                            </div>
                                            <HiOutlinePlusSm className="text-2xl"/>
                                        </div>)
                                    }
                                    <hr/>
                                    <label htmlFor="my-modal-3" className=" p-3 text-center rounded-lg font-Bold border border-gray-600 cursor-pointer">
                                        <span>Create custom Link</span>
                                    </label>

                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative rounded-md">
                                            <label htmlFor="my-modal-3" className="  absolute right-2 top-5"><MdClose className="text-3xl text-gray-500 cursor-pointer"/></label>
                                            <h3 className="text-lg font-bold">Create a custom Social media Link </h3>

                                                <form className="w-[100%] flex flex-col gap-3 mt-5" onSubmit={CustomSocial}>
                                                    <div>
                                                        <label className={`block text-gray-700 font-bold  mb-2`}  htmlFor="name">Social Media Name</label>
                                                        <input className="custom-Input  appearance-none "
                                                               type="text"
                                                               id="name"
                                                               name="name"
                                                                value={dataForm.name}
                                                                onChange={(e)=>setDataForm({...dataForm,name:e.target.value})}
                                                               required
                                                               placeholder="i.e Behance"/>
                                                    </div>
                                                    <div>
                                                        <label className={`block text-gray-700 font-bold mb-2`}  htmlFor="color">Color</label>
                                                        <input className="custom-Input  appearance-none "
                                                               type="text"
                                                               id="color"
                                                               name="color"
                                                               value={dataForm.color}
                                                               onChange={(e)=>setDataForm({...dataForm,color:e.target.value})}
                                                               required
                                                               placeholder="i.e #053eff"/>
                                                    </div>
                                                    <div>
                                                        <label className={`block text-gray-700 font-bold`}  htmlFor="link">Link</label>
                                                        <input className="custom-Input  appearance-none "
                                                               type="text"
                                                               id="link"
                                                               name="link"
                                                               value={dataForm.link}
                                                               onChange={(e)=>setDataForm({...dataForm,link:e.target.value})}
                                                               required
                                                               placeholder="i.e https://behance.com"/>
                                                    </div>
                                                    <div>
                                                        <label className={`block text-gray-700 font-bold`}  htmlFor="icon_link">Icon Link</label>
                                                        <input className="custom-Input  appearance-none "
                                                               type="text"
                                                               id="icon_link"
                                                               name="icon_link"
                                                               value={dataForm.icon_link}
                                                               onChange={(e)=>setDataForm({...dataForm,icon_link:e.target.value})}
                                                               required
                                                               placeholder="https://cdn.com/behance.svg"/>
                                                    </div>

                                                    <button type="submit" >
                                                        <label htmlFor="my-modal-3" className="btn font-bold py-4 px-4 w-full rounded bg-[#6016fc] text-white mt-5">
                                                            Add Custom Link
                                                        </label>
                                                    </button>
                                                </form>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-[30%]  p-3  rounded-lg  border-2 border-gray-200 min-h-[31rem]">
                                <p className="my-6 font-Bold text-center">Currently added</p>
                                <div className="flex flex-col gap-3">
                                    {
                                        AddedSocial.map((items)=><div className={`w-full min  flex justify-between rounded-md p-4 text-white items-center cursor-pointer ${items.bg}`} key={items.id} onClick={()=>RemoveHandle(items)}>
                                            <div className="flex gap-2 items-center">
                                                <img src={items.img} alt=""/>
                                                <span>{items.name}</span>
                                            </div>
                                            <MdClose className="text-2xl"/>
                                        </div>)
                                    }
                                </div>
                            </div>

                            <div className="w-full lg:w-[40%] flex lg:justify-start justify-center  ">
                                <img src={Analytics1} className=" rounded-lg  border-2 border-gray-200" alt=""/>
                            </div>

                        {/*<div className="flex w-[35%] flex-col gap-3 min-h-[26rem]">*/}
                        {/*<p className="mb-3 font-Bold">Available Social Media</p>*/}
                        {/*    {*/}
                        {/*        AllSocial.map((items)=><div className={`w-full min  flex justify-between rounded-md p-4 text-white  cursor-pointer ${items.bg}`} key={items.id} onClick={()=>AddHandle(items)}>*/}
                        {/*            <div className="flex gap-2">*/}
                        {/*                <img src={items.img} alt=""/>*/}
                        {/*                <span>{items.name}</span>*/}
                        {/*            </div>*/}
                        {/*            <HiOutlinePlusSm className="text-2xl"/>*/}
                        {/*        </div>)*/}
                        {/*    }*/}
                        {/*</div>*/}
                        {/*<div className="flex w-[35%] flex-col gap-3  min-h-[26rem]">*/}
                        {/*    <p className="mb-3 font-Bold">Currently added</p>*/}
                        {/*    {*/}
                        {/*        AddedSocial.map((items)=><div className={`w-full min  flex justify-between rounded-md p-4 text-white  cursor-pointer ${items.bg}`} key={items.id} onClick={()=>RemoveHandle(items)}>*/}
                        {/*            <div className="flex gap-2">*/}
                        {/*                <img src={items.img} alt=""/>*/}
                        {/*                <span>{items.name}</span>*/}
                        {/*            </div>*/}
                        {/*            <MdClose className="text-2xl"/>*/}
                        {/*        </div>)*/}
                        {/*    }*/}
                        {/*</div>*/}
                        </div>


                            </>
                        }

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