import NavbarHome from "src/component/Home/Header/navbar/index.jsx";
import {IoIosArrowForward} from "react-icons/io";
import {ImTrophy} from "react-icons/im";
import {Website_Mockup} from "src/assets/index.jsx";

const Header = () => {
  return <>

      <NavbarHome/>

      <div className="py-[10rem]">
          <div className="flex flex-row">
              <div className="basis-1/3">
                  <div>
                      <h1 className="text-5xl font-Semi-Bold tracking-wide">One page websites to all your social
                          profiles.</h1>
                      <span className="block tracking-tighter font-Regular mt-10 tracking-widest">with linkProfile, you can create a one page website that links to all your social media profiles in less than 5 minutes of setup.</span>
                      <div className="btn_header flex inline-flex gap-4 items-center mt-10">
                          <span>Get Started for free</span>
                          <IoIosArrowForward className="pl-2 text-2xl"/>
                      </div>
                      <div className="flex items-center mt-12">
                          <div className="text-2xl text-orange-500 bg-white rounded-full p-2">
                              <ImTrophy className=""/>
                          </div>
                          <p className="underline text-white items-center ml-2 font-Semi-Bold">Awarded Website of the Year</p>
                      </div>
                  </div>
              </div>
              <div className="basis-2/3 flex justify-end">
                  <div className="w-[80%]">
                      <img src={Website_Mockup}  alt=""/>
                  </div>

              </div>
          </div>
      </div>
  </>
}

export default Header