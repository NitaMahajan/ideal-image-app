"use client" // Marking this as client component
import React from 'react';
import Image from 'next/image';
import bannerMobile from '../../assets/images/banner-mobile.jpg';
import bannerDesktop from '../../assets/images/banner-desktop.jpg';
import { useRouter } from 'next/navigation';
import { FaChevronRight } from "react-icons/fa";
import ImageSlider from './ImageSlider';
import SliderComponent from './Slider';
import { config } from "@/libs/config";

// Importing image files
import whatToExpect1 from '../../assets/images/what-to-expect/1.jpg';
import whatToExpect2 from '../../assets/images/what-to-expect/2.jpg';
import whatToExpect3 from '../../assets/images/what-to-expect/3.jpg';
import whatToExpect4 from '../../assets/images/what-to-expect/4.jpg';
import whatToExpect5 from '../../assets/images/what-to-expect/5.jpg';
import before1 from '../../assets/images/real-people-real-results/before.jpg';
import before2 from '../../assets/images/real-people-real-results/before 2.jpg';
import before3 from '../../assets/images/real-people-real-results/before 3.jpg';
import before4 from '../../assets/images/real-people-real-results/before 4.jpg';
import before5 from '../../assets/images/real-people-real-results/before 5.jpg';
import after1 from '../../assets/images/real-people-real-results/after.jpg';
import after2 from '../../assets/images/real-people-real-results/after 2.jpg';
import after3 from '../../assets/images/real-people-real-results/after 3.jpg';
import after4 from '../../assets/images/real-people-real-results/after 4.jpg';
import after5 from '../../assets/images/real-people-real-results/after 5.jpg';


let images = [whatToExpect1, whatToExpect2, whatToExpect3, whatToExpect4, whatToExpect5];
const imagesResults = [{ before: before1, after: after1},{ before: before2, after: after2},{ before: before3, after: after3},{ before: before4, after: after4},{ before: before5, after: after5}]

const MainContent = () => {
    const router = useRouter();
    return (
        <div className="main-content">
            {/* Banner Ideal Image */}
            <SiteImage />

            {/* Description Section */}
            <div className="service-description">
                <div className="service-description-content">
                    <div className="service-description-title">Wrinkle Relaxers And Fillers</div>
                    <SubSection title="Why You'll Love It" points={config.idealImage.section1}/>
                    <SubSection title="How It Works" points={config.idealImage.section2}/>
                </div>

                {/* What To Expect Section Carousel */}
                <div className="what-to-expect sub-title">
                    <div className="what-to-expect-title">What to Expect</div>
                    <ImageSliderComponent imageSources={images} hasCaption={false}/>
                </div>

                {/* Real People Real Results Section Carousel */}
                <div className="real-people-real-results sub-title">
                    <div className="real-people-real-results-title">Real People, Real Results</div>
                    <ImageSlider images={imagesResults}/>
                    <div className='hide-mobile-view'>
                    <ImageSliderComponent imageSources={[before1,after1,before2,after2,before3,after3,before4,after4,before5,after5]} hasCaption={true}/>
                    </div>
                </div>

                {/* Customize Treatment Button */}
                <button className="customize-treatment-btn" onClick={() => router.push('/customize-treatment')}>
                    <p>Customize Treatment</p>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
};

const SiteImage = () => {
    return (
        <React.Fragment>
            {/* Mobile Banner */}
            <div className="banner show-mobile-view">
                <Image 
                    src={bannerMobile}
                    width={500}
                    height={500}
                    alt="Ideal Image Company Banner"
                    layout="responsive"
                />
            </div>
            {/* Desktop Banner */}
            <div className="banner hide-mobile-view">
                <div className="image-container">
                    <Image 
                        src={bannerDesktop}
                        alt="Ideal Image Company Banner"
                        objectFit="cover" 
                        layout="fill"
                    />
                </div>
                
            </div>
        </React.Fragment>
        
    );
}

type ImageSliderComponentProps = {
    imageSources: Array<any>;
    hasCaption: boolean;
}
const ImageSliderComponent = ({ imageSources, hasCaption }: ImageSliderComponentProps) => {
    
    // To render Image
    const renderImage = (src) => (<Image 
        src={src}
        width={200}
        height={150}
        alt="Ideal Image Company Banner"
        className='carousel-image'
      />);

    return (
        <SliderComponent>
        {imageSources.map((src, index) => (
            hasCaption ? // To render image with caption
            ( 
                <div className='image-caption' key={index}>
                    {renderImage(src)}
                <div>{index%2 == 0 ? 'Before': 'After'}</div>
                </div>
            ) : 
            (renderImage(src)) // To render image without caption
        ))}
    </SliderComponent>
    )
    
};

type SubSectionProps = {
    title: string;
    points: Array<string>;
}

// Title with description sections displayed on main page
const SubSection = ({ title, points }: SubSectionProps) => {
    return (
        <section className="service-description-section">
            <h2 className="sub-title">{title}</h2>
            <article>
                <ul>
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </article>
        </section>
    )
}

export default MainContent;
