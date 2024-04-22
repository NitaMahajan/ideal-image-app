import { useState } from "react";
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    return (
      <div className="image-slider show-mobile-view">
        <div className="slider-content">
            <div>
                <Image 
                    src={images[currentIndex].before}
                    width={200}
                    height={150}
                    alt="Ideal Image Company Banner"
                    className='carousel-image'
                    style={{maxHeight: '40vw', maxWidth: '70vw'}}
                />
                <p>Before</p>
                <Image 
                    src={images[currentIndex].after}
                    width={200}
                    height={150}
                    alt="Ideal Image Company Banner"
                    className='carousel-image'
                    style={{maxHeight: '40vw', maxWidth: '70vw'}}
                />
                <p>After</p>
            </div>
        </div>
        <button className="slider_button slider_button--prev" onClick={prevSlide}>
            <FaChevronLeft />
        </button>
        <button className="slider_button slider_button--next" onClick={nextSlide}>
            <FaChevronRight />
        </button>
      </div>
    );
  };  

  export default ImageSlider; 