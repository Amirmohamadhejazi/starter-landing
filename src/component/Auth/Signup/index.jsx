import "./style.scss"
import {Link } from "react-router-dom";
import {
    logoDark,
    Dribble,
    Blogger,
    Discord,
    Youtube,
    LinkedIn,
    Twitter
} from "src/assets";
import {useEffect, useState} from 'react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

const Signup = ()=>{
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        name: '',
        link: '',
        social:[],
        available:[],
    });
    const [AddedSocial , setAddedSocial] = useState([])
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
    const [AllSocial , setAllSocial] = useState(SocialData)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        setFormData({...formData, social: AddedSocial , available:AllSocial})
    };

    const goToNextStep = (event) => {

        step === 2 && localStorage.setItem("starter-landing" , JSON.stringify(formData))
        event.preventDefault();
        setStep((prevStep) => prevStep + 1);
    };




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
    const ResetSelected = (data)=>{
        setAddedSocial([])
        setAllSocial(SocialData)
    }

    useEffect(()=>{
        console.log("formData")
        console.log(formData)
        console.log("formData")
    },[formData])
    return <>
        <div className="Sing_up">
            <div className="min-h-screen">

                <div className="container ">
                    <div className="px-2 lg-px-0 pt-6 flex flex-col">
                        <div className="flex justify-center">
                            <Link to={"/starter-landing/"}>
                                <img src={logoDark}  className="cursor-pointer" alt=""/>
                            </Link>
                        </div>
                        <div className="mt-16 flex justify-center">
                            <div className="w-full lg:basis-1/3 relative">
                                <div className="w-full flex flex-row justify-between absolute top-[-26px]">
                                    <div className={`rounded-full font-Bold flex-center w-[50px] h-[50px]  hover:bg-[#6016fc]  hover:text-white border-2 text-xl cursor-pointer ${step === 1 ? "bg-[#6016fc] text-white" :"bg-white"}`}>1</div>
                                    <div className={`rounded-full font-Bold flex-center w-[50px] h-[50px]  hover:bg-[#6016fc]  hover:text-white border-2 text-xl cursor-pointer ${step === 2 ? "bg-[#6016fc] text-white" :"bg-white"}`}>2</div>
                                    <div className={`rounded-full font-Bold flex-center w-[50px] h-[50px]  hover:bg-[#6016fc]  hover:text-white border-2 text-xl cursor-pointer ${step === 3 ? "bg-[#6016fc] text-white" :"bg-white"}`}>3</div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        {step === 1 && (
                            <form onSubmit={goToNextStep}>
                                <div className="flex items-center justify-center flex-col gap-8 mt-24">
                                    <div className="text-center">
                                        <h1 className="font-Bold text-3xl">Lets get you setup in less than 5 minutes!</h1>
                                        <p className="font-Regular text-xl mt-6">You have a custom website after finishing this setup</p>
                                    </div>
                                <div  className="w-[100%] lg:w-[35%] ">
                                    <label className={`block text-gray-700 font-bold mb-2`}  htmlFor="name">Full Name </label>
                                    <input className="custom-Input  appearance-none"
                                           type="text"
                                           id="name"
                                           name="name"
                                           value={formData.name}
                                           onChange={handleInputChange}
                                           required
                                           placeholder="John Doe" />
                                </div>
                                <div  className="w-[100%] lg:w-[35%] ">
                                    <label className={`block text-gray-700 font-bold mb-2`}  htmlFor="link">Your linkProfile Link</label>
                                    <input className="custom-Input  appearance-none"
                                           type="text"
                                           id="link"
                                           name="link"
                                           value={formData.link}
                                           onChange={handleInputChange}
                                           required
                                           placeholder="https://linkProfile/steph"/>
                                </div>

                                <div  className="w-[100%] lg:w-[35%] ">
                                    <button  type="submit" className="font-bold py-4 px-4 w-full rounded bg-[#6016fc] text-white">
                                        Next
                                    </button>
                                </div>

                                </div>
                            </form>
                        )}
                        {step === 2 && (
                                <form  onSubmit={goToNextStep} className="flex items-center justify-center flex-col gap-8 mt-24">
                                    <div className="text-center">
                                        <h1 className="font-Bold text-3xl">Choose your social media profiles</h1>
                                        <p className="font-Regular text-xl mt-6">Add the social media profiles you like to be displayed on your website</p>
                                    </div>
                                    {
                                        AddedSocial.length > 2 && <p className="text-Bold text-md text-white bg-purple-500 rounded-md p-2 cursor-pointer" onClick={(e)=>ResetSelected(e)}>Reset Selections</p>
                                    }
                                    <div className="w-[100%] items-center lg:w-[60%]  flex-col lg:flex-row gap-5 flex">
                                        <div className="w-full lg:basis-1/2 p-8 rounded-lg  border-2 border-gray-200">
                                            <p className="mb-3 font-Bold">Available Social Media</p>
                                            <div className="flex flex-col gap-3  min-h-[19rem] ">
                                                {
                                                    AllSocial.map((items)=><div className={`w-full flex justify-between rounded-md  px-4 py-2 text-white  cursor-pointer`} style={{backgroundColor: items.bg}} key={items.id} onClick={()=>AddHandle(items)}>
                                                        <div className="flex gap-2">
                                                            <img src={items.img} alt=""/>
                                                            <span>{items.name}</span>
                                                        </div>
                                                        <HiOutlinePlusSm className="text-2xl"/>
                                                    </div>)
                                                }
                                            </div>

                                        </div>
                                        <div className="w-full  lg:basis-1/2 p-8  rounded-lg  border-2 border-gray-200 ">
                                            <p className="mb-3 font-Bold">Currently added</p>
                                            <div className="flex flex-col gap-3  min-h-[19rem] ">
                                                {
                                                    AddedSocial.map((items)=><div className={`w-full min  flex justify-between rounded-md  px-4 py-2 text-white  cursor-pointer `} style={{backgroundColor: items.bg}}  key={items.id} onClick={()=>RemoveHandle(items)}>
                                                        <div className="flex gap-2">
                                                            <img src={items.img} alt=""/>
                                                            <span>{items.name}</span>
                                                        </div>
                                                        <MdClose className="text-2xl"/>
                                                    </div>)
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    <div className="w-full lg:w-[60%] flex justify-end">
                                        <button type="submit" onClick={()=>handleSubmit()} className="font-bold w-[200px] lg:w-[30%] py-4 px-4  rounded bg-[#6016fc] text-white">
                                            Next
                                        </button>
                                    </div>

                                </form>

                        )}

                        {step === 3 &&
                            <div className="flex items-center justify-center flex-col gap-8 mt-24">
                                <div className="text-center">
                                    <h1 className="font-Bold text-3xl">That's It</h1>
                                    <p className="font-Regular text-xl mt-6">You have more customization in your dashboard.</p>
                                </div>
                                <div  className="w-[100%] lg:w-[35%] ">
                                    <Link to={"/starter-landing/dashboard"}>
                                        <button  type="submit" className="font-bold py-4 px-4 w-full rounded bg-[#6016fc] text-white">
                                            Go to dashboard
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Signup

