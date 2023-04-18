import { HiOutlinePlusSm } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
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
import "./style.scss"
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
const HomeDashboard = () =>{
    const {user} = useSelector((state) => state.dashboard)

    const [AddedSocial , setAddedSocial] = useState(user.social ? user.social : [])
    const [dataForm, setDataForm] = useState({name:"", color:"black", link:"", icon_link:""})
    const [customDataForm, setCustomDataForm] = useState([])
    const [modal, setModal] = useState(false)
    let SocialData = [
        {
            name:"Dribble",
            img:`${Dribble}`,
            bg:"#ea4c89",
            id:0
        },
        {
            name:"Blogger",
            img:`${Blogger}`,
            bg:"#fc4f08",
            id:1
        },
        {
            name:"Discord",
            img:`${Discord}`,
            bg:"#7289da",
            id:2
        },
        {
            name:"Youtube",
            img:`${Youtube}`,
            bg:"#ff0000",
            id:3
        },
        {
            name:"LinkedIn",
            img:`${LinkedIn}`,
            bg:"#0e76a8",
            id:4
        },
        {
            name:"Twitter",
            img:`${Twitter}`,
            bg:"#00acee",
            id:5
        },
    ]
    const [AllSocial , setAllSocial] = useState(user.Available ? user.Available : SocialData)
    
    useEffect(()=>{
        setAllSocial(user.Available ? user.Available : SocialData)
        setAddedSocial(user.social ? user.social : [])
    },[user])
    const AddHandle = (data)=>{
        let FilterArray = AllSocial.filter((item)=>item !== data)
        setAllSocial(FilterArray)
        setAddedSocial([...AddedSocial,data])
    }
    const RemoveHandle = (data)=>{
        if (data.custom){
                let FilterArray = AddedSocial.filter((item)=>item !== data)
                setAddedSocial(FilterArray)
        }else {
                let FilterArray = AddedSocial.filter((item)=>item !== data)
                setAddedSocial(FilterArray)
                setAllSocial([...AllSocial, data])
        }
    }

    const CustomSocial = (e) => {


        
      e.preventDefault()
      
      let NewCustomData = {
          name:dataForm.name,
          img:`${dataForm.icon_link}`,
          bg:dataForm.color,
          id:SocialData.length+customDataForm.length +1,
          custom:true
      }

      console.log(dataForm.color)
      setCustomDataForm([...customDataForm,NewCustomData])
      setAddedSocial([...AddedSocial,NewCustomData])
      setDataForm({name:"", color:"", link:"", icon_link:""})


      setModal(false)
    }
 
    return <>          
    <p className="text-xl font-Bold">
     Wellcome, {user.name}
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

        <div className="w-full lg:w-[30%] p-3  rounded-lg  border-2 border-gray-200">
            <p className="my-4 font-Bold text-center">Available Social Media</p>
            <div className="flex flex-col gap-3  min-h-[19rem] ">
                {
                    AllSocial.map((items)=><div className="w-full min  flex justify-between rounded-md px-4 py-2 text-white items-center  cursor-pointer" key={items.id} onClick={()=>AddHandle(items)}  style={{backgroundColor:`${items.bg}`}}>
                        <div className="flex gap-2 items-center">
                            <img src={items.img} className='max-h-[18px] max-h-[18px] rounded-sm' alt=""/>
                            <span>{items.name.length > 10 ? items.name.slice(0, 10)+"..." : items.name}</span>
                        </div>
                        <HiOutlinePlusSm className="text-2xl"/>
                    </div>)
                }
                <hr/>
                <label onClick={()=>setModal(true)} className=" p-3 text-center rounded-lg font-Bold border border-gray-600 cursor-pointer">
                    <span>Create custom Link</span>
                </label>

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className={`modal ${modal &&  "modal-open" }`}>
                    <div className="modal-box relative rounded-md">
                        <label onClick={()=>setModal(false)} className="  absolute right-2 top-5"><MdClose className="text-3xl text-gray-500 cursor-pointer"/></label>
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
                                <label className={`block text-gray-700 font-bold mb-2`}  htmlFor="color">Color</label>
                                <div className='w-full h-[50px]'>
                                <input
                                    type="color"
                                    className="appearance-none rounded-lg w-full h-full"
                                    value={dataForm.color}
                                    onChange={(e)=>setDataForm({...dataForm,color:e.target.value})}
                                    />
                                </div>
                                
                                <div>
                                    <label className={`block text-gray-700 font-bold mb-2`}  htmlFor="link">Link</label>
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
                                    <label className={`block text-gray-700 font-bold mb-2`}  htmlFor="icon_link">Icon Link</label>
                                    <input className="custom-Input  appearance-none "
                                        type="text"
                                        id="icon_link"
                                        name="icon_link"
                                        value={dataForm.icon_link}
                                        onChange={(e)=>setDataForm({...dataForm,icon_link:e.target.value})}
                                        required
                                        placeholder="https://cdn.com/behance.svg"/>
                                </div>

                                <button type="submit"  className="btn font-bold py-4 px-4 w-full rounded bg-[#6016fc] text-white mt-5">
                                        Add Custom Link
                                </button>
                            </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full lg:w-[30%]  p-3  rounded-lg  border-2 border-gray-200">
            <p className="my-4 font-Bold text-center">Currently added</p>
            <div className="flex flex-col gap-3  min-h-[19rem]">
                {
                    AddedSocial.map((items)=><div className="w-full min  flex justify-between rounded-md px-4 py-2 text-white items-center cursor-pointer" key={items.id} onClick={()=>RemoveHandle(items)} style={{backgroundColor:`${items.bg}`}}>
                        <div className="flex gap-2 items-center">
                            <img src={items.img} className="max-h-[18px] max-h-[18px] rounded-sm" alt=""/>
                            <span>{items.name.length > 10 ? items.name.slice(0, 10)+"..." : items.name}</span>
                        </div>
                        <MdClose className="text-2xl"/>
                    </div>)
                }
            </div>
        </div>
        <div className="w-full lg:w-[40%] flex lg:justify-start justify-center  ">
            <img src={Analytics1} className=" rounded-lg  border-2 border-gray-200" alt=""/>
        </div>
    </div>
    </>
}

export default HomeDashboard