import { useState } from 'react'
import { PhotoSlider } from 'react-photo-view'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './a.css';

// import required modules
import { EffectCreative } from 'swiper/modules';


const MinSCreenEvantImage = ({ images }) => {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    return (
        <div
            className="md:hidden w-full"
        >
            <>
                <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    modules={[EffectCreative]}
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                onClick={() => {
                                    setVisible(true)
                                    setIndex(index)
                                }}
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