import { useState } from 'react'
import { PhotoSlider } from 'react-photo-view'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './a.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const MinSCreenEvantImage = ({ images }) => {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    return (
        <div
            className="md:hidden w-full"
        >
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                className='w-full h-full'
                                src={image} />
                        </SwiperSlide>

                    ))}

                </Swiper>
            </>
            <PhotoSlider
                images={images.map((item) => ({ src: item, key: item }))}
                visible={visible}
                onClose={() => setVisible(false)}
                index={index}
                onIndexChange={setIndex}
            />
        </div>
    )
}

export default MinSCreenEvantImage