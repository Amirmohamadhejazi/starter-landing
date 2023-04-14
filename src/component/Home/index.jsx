import "./style.scss"
import { useSelector, useDispatch } from 'react-redux'
import { bg_header, Feature, heart, Avatar1, Avatar2, Avatar3, Dashboard_desktop } from "../../assets";
import Header from "src/component/Home/Header";
import { AiOutlineTwitter } from 'react-icons/ai';
const Home = ()=>{
    const {value} = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    //Light
    //Regular
    //Bold
    //SemiBold
    //Thin
    let data_comment = [
        {
            name:"Sara Smith",
            userName:"sara_smith",
            time:"10:10 Am - jan 28, 2021",
            like:3,
            img:`${Avatar1}`,
            id:"0",
        },
        {
            name:"Stephanie Mark",
            userName:"stephdesigns",
            time:"10:23 Pm - feb 8, 2021",
            like:10,
            img:`${Avatar2}`,
            id:"1",
        },
        {
            name:"Nathanial 🚀",
            userName:"nathan_bip",
            time:"1:45 Pm - jun 18, 2021",
            like:129,
            img:`${Avatar3}`,
            id:"2",
        },
    ]
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
                <div className="bg-white text-black py-24">
                    <div className="container">
                        <div className="flex " style={{justifyContent:"space-between"}}>
                            <div className="basis-1/2 pr-24 flex items-center">
                                <div>
                                    <h1 className="font-SemiBold text-3xl">Build your presence online through linkProfile.</h1>
                                    <p className="text-gray-500 text-xl mt-6">Not only can you create social media links, but you can also analyze where the traffic is coming from som you can better understand your audience and your business.</p>
                                </div>
                            </div>
                            <div className="basis-1/2 ">
                                <img src={Feature} alt=""/>
                            </div>
                        </div>

                        <div className="flex gap-5 mt-8">
                            {
                                data_comment.map((items)=>

                                    <div className="basis-1/3 border-2 bg-white rounded-lg" key={items.id}>
                                        <div className="p-6">
                                            <div className="flex items-center">
                                                <div className="flex basis-3/4">
                                                    <img className="w-10 h-10 rounded-full mr-3" src={items.img} alt="User avatar"/>
                                                    <div>
                                                        <p className="text-gray-900 font-bold text-sm ">{items.name}</p>
                                                        <p className="text-gray-700 text-sm">@{items.userName}</p>
                                                    </div>
                                                </div>
                                                <div className="basis-1/4 flex justify-end">
                                                    <AiOutlineTwitter className="text-4xl text-blue-500"/>
                                                </div>


                                            </div>
                                            <p className="text-gray-700 text-base my-4">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat tincidunt velit, vel bibendum ipsum malesuada a. Nullam at augue vel purus bibendum gravida.
                                            </p>
                                            <div className="flex gap-3 text-sm text-gray-500">
                                                <div className="flex gap-1">
                                                    <img src={heart} alt=""/>
                                                    <span>{items.like}</span>
                                                </div>
                                                <span>{items.time}</span>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#6016fc] text-white">
                    <div className="text-white container ">
                        <div >
                            <div className="text-center pt-12">
                                <h1 className="font-Semi-bold text-4xl mb-6">An easy to use dashboard</h1>

                                <span className="text-xl font-Light w-[100px]">
                                    Managing your social profiles has never been easier with the linkProfile dashboard
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src={Dashboard_desktop} className=" w-full rounded-6top mt-12" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default Home