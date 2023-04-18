import "./style.scss"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { bg_header, Feature, Avatar1, Avatar2, Avatar3, Pattern ,Checkmark, CheckmarkGray, NotAvailable , NotAvailableGray, plus, minus} from "../../assets";
import Header from "src/component/Home/Header";
import Footer from "src/component/Home/Footer";
import SwiperHelper from "src/component/helperComponents/Swiper";
import {useState} from "react";
const Home = ()=>{

    const [collapse , setCollapse] = useState(0)
    const [activeIndex, setActiveIndex] = useState(null);
    let data_comment = [
        {
            name:"Sara Smith",
            userName:"sara_smith",
            time:"10:10 Am - jan 28, 2021",
            like:3,
            img:`${Avatar1}`,
            comment:"I been using @linkProfile for the past 2 months and the amount of freelance work than i got from it is just overwhelming.",
            id:0,
        },
        {
            name:"Stephanie Mark",
            userName:"stephdesigns",
            time:"10:23 Pm - feb 8, 2021",
            like:10,
            img:`${Avatar2}`,
            comment: "Inarguably one of the best purchases i made this year, its never been this easy to create and share your portfolio.",
            id:1,
        },
        {
            name:"Nathanial 🚀",
            userName:"nathan_bip",
            time:"1:45 Pm - jun 18, 2021",
            like:129,
            img:`${Avatar3}`,
            comment: "i wasnt even aware that 90% of the people getting in toch with me were from Google, linkProfile is amazing.",
            id:2,
        },
    ]

    let ServicesData = [
        {
            mode:1,
            price:0,
            detailService:"Prefect for people starting out content creation",
            options :[true,true,false,false],
            id:0
        },
        {
            mode:2,
            price:19,
            detailService:"Perfect for people who already create content.",
            options :[true,true,true,true],
            id:1
        }
    ]

    let QuestionData = [
        {
            text:"Am i able to cancel my subscription any time?",
            detail:"Most subscription services will allow you to cancel at any time, but some may require you to fulfill a certain length of subscription before canceling or may have specific terms regarding cancellations. It's important to read the terms and conditions of any subscription service before signing up to understand the cancellation policy.If you are unsure about how to cancel your subscription, you can contact the customer service department of the service provider directly to inquire about their cancellation process.",
            id:0
        },
        {
            text:"Do you offer discounts for students?",
            detail:"Absolutely! Our whole visiom revolves around enabling creators everywhere, if you are a student, please send any official proof of your enrollment to hello@linkprofile.com and well give you one full year of linkProfile!",
            id:1
        },
        {
            text:"Can i use PayPal to subscribe to linkProfile?",
            detail:"To find out if LinkProfile accepts PayPal as a payment method, you can visit their website or contact their customer support team directly for more information. If PayPal is accepted, you should be able to select it as a payment option when subscribing to LinkProfile and follow the steps to complete the transaction using your PayPal account.",
            id:2
        },
    ]
    const handleAccordionItemClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    return <>
        <div className="Home">
            <section>
                <div className="text-white" style={{background:`url('${bg_header}') no-repeat fixed` , backgroundSize:"101% 101%"}}>
                    <div className="container">
                        <Header/>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-white text-black py-16 lg:py-24">
                    <div className="container ">
                        <div className="px-2 lg-px-0">
                            <div className="flex flex  flex-col-reverse lg:flex-row">
                                <div className="lg:basis-1/2 lg:pr-24 flex items-center  mt-6 lg:mt-0">
                                    <div>
                                        <h1 className="font-SemiBold text-2xl lg:text-3xl">Build your presence online through linkProfile.</h1>
                                        <p className="font-SemiBold text-gray-500  text-sm lg:text-xl mt-6">Not only can you create social media links, but you can also analyze where the traffic is coming from som you can better understand your audience and your business.</p>
                                    </div>
                                </div>
                                <div className="lg:basis-1/2 ">
                                    <img src={Feature} alt=""/>
                                </div>
                            </div>
                            <SwiperHelper dataSwiperHome={data_comment}/>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#6016fc] text-white">
                    <div className="text-white container  px-2 lg-px-0 ">
                        <div className="dashboard_preview ">
                            <div className="text-center pt-12">
                                <h1 className="font-Semi-bold text-4xl mb-6">An easy to use dashboard</h1>
                                <span className="text-xl font-Light w-[100px]">
                                    Managing your social profiles has never been easier with the linkProfile dashboard
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-white text-black py-16 lg:py-24">
                    <div className="container">
                        <div className="gap-4 flex flex px-2 lg:px-0 flex-col-reverse lg:flex-row">
                            <div className="lg:basis-1/4  rounded-lg hidden  lg:block">
                                <img src={Pattern} className="h-full" alt=""/>
                            </div>
                            <div className=" lg:basis-3/4   px-2">
                                <h1 className="text-3xl font-Bold ">Simple, transparent pricing to support creators everywhere around the world</h1>
                                <p className="font-Regular text-gray-400 text-xl mt-8">our pricing is competitive, and thats intentional. It emphasizes more on our vision and thats to support creators from all around the world.</p>


                                <div className="flex mt-8 px-2 lg-px-0 flex-col lg:flex-row justify-between" >
                                    {
                                        ServicesData.map((items)=>
                                            <div className={`lg:basis-2/5  rounded-lg flex-col flex gap-4  p-8 ${items.mode === 1 ? "bg-white" : "bg-[#6016fc]"}`} key={items.id}>
                                                <div>
                                                    <div className={`font-SemiBold text-lg mb-2  ${items.mode === 1 ? "text-gray-400" : "text-white"}`}>{items.mode === 1 ? "free" :"Starter"}</div>
                                                    <div  className={`font-SemiBold text-5xl mb-2 ${items.mode === 1 ? "text-gray-400" :"text-white"}`} >{items.price>0 ? <span>${items.price}<span className="text-xl">/mo</span></span> :<span>free</span>}</div>
                                                </div>
                                                <div className={`font-Regular text-xl mb-2 ${items.mode === 1 ? "text-gray-400" :"text-white"}`}>{items.detailService}</div>
                                                <div className="text-gray-400">
                                                    <div className="mb-4 mt-8 flex gap-4">
                                                        {
                                                            items.mode === 1 ? items.options[0]?<img src={Checkmark} alt=""/>: <img src={NotAvailable} alt=""/> : items.options[0]? <img src={CheckmarkGray} alt=""/>: <img src={NotAvailableGray} alt=""/>
                                                        }
                                                        <span className=" font-Bold ">Access to preset links.</span>
                                                    </div>
                                                    <div className="mb-4 flex gap-4">
                                                        {
                                                            items.mode === 1 ? items.options[1]?<img src={Checkmark} alt=""/>: <img src={NotAvailable} alt=""/> : items.options[1]? <img src={CheckmarkGray} alt=""/>: <img src={NotAvailableGray} alt=""/>
                                                        }
                                                        <span className=" font-Bold">Create share links.</span>
                                                    </div>
                                                    <div className="mb-4 flex gap-4">
                                                        {
                                                            items.mode === 1 ? items.options[2]?<img src={Checkmark} alt=""/>: <img src={NotAvailable} alt=""/> : items.options[2]? <img src={CheckmarkGray} alt=""/>: <img src={NotAvailableGray} alt=""/>
                                                        }
                                                        <span className=" font-Bold">Custom domains and links.</span>
                                                    </div>
                                                    <div className="mb-8 flex gap-4">
                                                        {
                                                            items.mode === 1 ? items.options[3]?<img src={Checkmark} alt=""/>: <img src={NotAvailable} alt=""/> : items.options[3]? <img src={CheckmarkGray} alt=""/>: <img src={NotAvailableGray} alt=""/>
                                                        }
                                                        <span className=" font-Bold">User analytics.</span>
                                                    </div>
                                                </div>
                                                <Link to={"./"} >
                                                    <button className={` font-bold py-4 px-4 w-full rounded ${items.mode === 1 ? 'bg-[#6016fc] text-white' :'bg-[#e5d9fc] text-[#6016fc]'}`}>
                                                    Subscribe
                                                </button>
                                                </Link>

                                                
                                            </div>

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-white text-black py-16 lg:py-24 px-5 lg:px-0 ">
                    <div className="container">
                        <div className="">
                            <h1 className="text-3xl font-Bold ">Frequently Asked Questions</h1>
                            {/* {
                                QuestionData.map((items)=> <div className="p-8 rounded-lg  border-2 border-gray-200 w-full clp_parent mt-8 cursor-pointer h-[auto]" onClick={(e)=>items.id === collapse ? setCollapse(undefined) : setCollapse(items.id)} key={items.id}>
                                    <div className="flex justify-between align-center">
                                        <span className={`font-bold text-lg ${items.id === collapse && ' text-[#6016fc]'}`}>{items.text}</span>
                                        <img src={items.id === collapse ? minus : plus} alt=""/>
                                    </div>
                                    <div className={`mt-4  clp_home ${items.id === collapse && "clp_home_active" }`} style={{width:"100%" }}>
                                        <span className="font-Regular text-gray-600  ">{items.detail}</span>
                                    </div>
                                </div>)
                            } */}


                            {
                                QuestionData.map((items)=> <div className={`collapse p-8 rounded-lg ${items.id === collapse && " collapse-open" }  border-2 border-gray-200 w-full clp_parent mt-8 cursor-pointer h-[auto] `} 
                                onClick={(e)=>items.id === collapse ? setCollapse(undefined) : setCollapse(items.id)} key={items.id}
                                > 
                                <div className="flex justify-between align-center">
                                        <span className={`font-bold text-lg ${items.id === collapse && ' text-[#6016fc]'}`}>{items.text}</span>
                                        <img src={items.id === collapse ? minus : plus} alt=""/>
                                    </div>
                                <div className="collapse-content mt-2">
                                    <span className="font-Regular text-gray-600  ">{items.detail}</span>
                                </div>
                                
                              </div>)
                            }

                            <p className="text-lg text-gray-600 mt-6">if you still cant find answers to one of your questions, please email us at hello@linkprofile.com and well be more than happy to assist you.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Footer/>
            </section>

        </div>
    </>
}

export default Home
