import { useState } from 'react'
import { PhotoSlider } from 'react-photo-view'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

const MinSCreenEvantImage = ({ images }) => {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    return (
        <div
            className="md:hidden"
        >
            <>
                <Swiper
                    className="mySwiper"
                    navigation={true}
                    modules={[Navigation]}
                >
                    {images.map((e, i) => (
                        <SwiperSlide
                            key={i}>
                            <img
                                onClick={() => {
                                    setVisible(true)
                                    setIndex(i)
                                }}
                                className='w-11/12 mx-auto h-[200px]'
                                src={e} />
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