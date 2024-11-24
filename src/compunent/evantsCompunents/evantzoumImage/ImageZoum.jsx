import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ImageZoum = ({ images }) => {


    return (
        <PhotoProvider
        >
            <div className="foo  w-full flex-wrap justify-around hidden md:flex">
                {images.map((item, index) => (
                    <PhotoView key={index} src={item}>
                        <img
                            className='w-[32%] rounded-lg my-2'
                            src={item} alt="" />
                    </PhotoView>
                ))}
            </div>
        </PhotoProvider>
    )
}

export default ImageZoum