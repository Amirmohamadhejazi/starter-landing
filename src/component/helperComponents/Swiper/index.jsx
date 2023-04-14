import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css'
import {AiOutlineTwitter} from "react-icons/ai";
import {heart} from "src/assets/index.jsx";

const SwiperHelper = ({dataSwiperHome}) => {
    let breakSwiper = {
        360: {
            slidesPerView: 1.3,
        },
        577: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    }

    return<>
        <div className="w-100 flex-center overflow-hidden mt-16" >
            <Swiper
                breakpoints={breakSwiper}
                className="w-100 mb-5"
                spaceBetween={20}
                freeMode={true}
            >
                <div className="flex gap-5 ">
                    {
                        dataSwiperHome.map((items)=>

                            <SwiperSlide  key={items.id}>
                                <div className="basis-1/3 border-2 bg-white rounded-lg ">
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
                                        <p className="text-gray-700 text-base my-4 min-h-[6rem] ">{items.comment}</p>
                                        <div className="flex gap-3 text-sm text-gray-500">
                                            <div className="flex gap-1">
                                                <img src={heart} alt=""/>
                                                <span>{items.like}</span>
                                            </div>
                                            <span>{items.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    }
                </div>


            </Swiper>

        </div>
    </>
}

export default SwiperHelper
