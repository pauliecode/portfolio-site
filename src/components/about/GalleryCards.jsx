// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';


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
                    <img className="card-img" src={img1} alt="Selfie with my boyfriend on the harbour!" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img2} alt="Me in my natural habitat, on the couch playing videogames" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img3} alt="My cat, Milly. A brown standard european domestic cat" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img4} alt="My other cat Lily. A siameses white cat" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="card-img" src={img5} alt="The views of the nature of my hometown in Spain, Jaca" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GalleryCards