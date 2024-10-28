// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';

// import required modules
// import { EffectCards, Pagination } from "swiper";

// image imports
import img1 from "../../assets/selfie1.jpg"
import img2 from "../../assets/selfie2.JPEG"
import img3 from "../../assets/milly.jpg"
import img4 from "../../assets/lily.jpg"
import img5 from "../../assets/jaca.JPEG"
import {EffectCards, Pagination} from "swiper/modules";

const GalleryCards = () => {
    return (
        <div>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Pagination]}
                pagination={{
                    clickable: true,
                    type: "fraction",

                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="card-img" src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img5} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GalleryCards