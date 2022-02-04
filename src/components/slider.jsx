import React, {useState} from 'react';
import SliderArrows from "./sliderArrows";
import img1 from "../assets/slider/1.jpg";
import img2 from "../assets/slider/2.jpg";
import img3 from "../assets/slider/3.jpg";

const Slider = () => {

    const imgsData = [
        {id: 1, src: img1},
        {id: 2, src: img2},
        {id: 3, src: img3},
    ]

    const [img, setImg] = useState(0)

    const nextSlideHandler = () => {
        if (img + 1 > imgsData.length - 1) {
            setImg(0)
        } else {
            setImg(prevState => prevState+1)
        }
    }

    const prevSlideHandler = () => {
        if (img - 1 < 0) {
            setImg(imgsData.length - 1)
        } else {
            setImg(prevState => prevState-1)
        }
    }

    return (
        <>
            <div
                style={{background: `url(${imgsData[img].src})`}}
                className="sliderScreen"
            >

            </div>
            <SliderArrows next={nextSlideHandler} prev={prevSlideHandler} />
        </>
    );
};

export default Slider;
