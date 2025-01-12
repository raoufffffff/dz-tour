import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ImageZoum = ({ images }) => {


    return (
        <PhotoProvider

        >
            <div className="w-full flex-wrap justify-around hidden md:flex">
                {images.map((item, index) => (
                    <PhotoView key={index} src={item}>
                        <img
                            className='w-[32%] lg:w-[28%] rounded-lg h-[200px] my-2'
                            src={item} alt="img" />
                    </PhotoView>
                ))}
            </div>
        </PhotoProvider>
    )
}

export default ImageZoum