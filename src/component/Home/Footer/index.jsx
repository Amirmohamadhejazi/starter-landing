import { Link } from "react-router-dom";
import {logoLight } from "src/assets"

const Footer = ()=>{
    return <>
    <div className="bg-[#6016fc] text-black py-16 lg:py-24">
            <div className="container">
                <div className="flex  flex-col lg:flex-row  justify-between align-center px-2 lg:px-0 text-white">
                    <div className="lg:basis-1/3">
                        <img src={logoLight} className="mb-4" alt=""/>
                        <span className="text-lg  ">With linkProfile, you can create a one page website that links to all your social media profiles in less than 5 minutes of setup.</span>
                    </div>
                    <div className="lg:basis-2/3 justify-between flex-wrap lg:justify-end flex gap-12 lg:gap-24 mt-6 lg:mt-0">
                        <div className="flex flex-col">
                            <Link to={"./"} ><span className="font-Bold text-xl">Sitemap</span></Link>
                            <Link to={"./"} ><span className="mt-4">Home</span></Link>
                            <Link to={"./"} ><span className="mt-2">pricing</span></Link>
                            <Link to={"./"} ><span className="mt-2">Testimonials</span></Link>
                        </div>
                        <div className="flex flex-col">
                            <Link to={"./"} ><span className="font-Bold text-xl">Resources</span></Link>
                            <Link to={"./"} ><span className=" mt-4">Support</span></Link>
                            <Link to={"./"} ><span className="mt-2">Contact</span></Link>
                            <Link to={"./"} ><span className="mt-2">FAQ</span></Link>

                        </div>
                        <div className="flex flex-col">
                            <Link to={"./"} ><span className="font-Bold text-xl">Company</span></Link>
                            <Link to={"./"} ><span className=" mt-4">About</span></Link>
                            <Link to={"./"} ><span className="mt-2">Customers</span></Link>
                            <Link to={"./"} ><span className="mt-2">Blog</span></Link>
                           
                        </div>
                        <div className="flex flex-col">
                            <span className="font-Bold text-xl">Account</span>
                            <span className=" mt-4">
                                <Link to={"./signup"} >Login</Link>
                            </span>
                            <span className="mt-2">
                                <Link to={"./signup"} >Register</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
}

export default Footer