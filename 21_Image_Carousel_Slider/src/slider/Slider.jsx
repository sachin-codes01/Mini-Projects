import React, { useState, useEffect, useRef } from 'react'
import './Slider.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const Slider = () => {
    const [index, setIndex] = useState(0)

    const images = [img1, img2, img3]

    const intervalRef = useRef(null)

    const nextSlide = () => {
        setIndex((image) => (image + 1) % images.length)
    }

    const prevSlide = () => {
        setIndex((image) => (image - 1 + images.length) % images.length)
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => { nextSlide() }, 3000)
        return () => clearInterval(intervalRef.current)
    }, [])

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => { nextSlide(); }, 3000)
    }

    return (
        <div className="slider">
            <button onClick={() => { prevSlide(); resetInterval(); }}>❮</button>
            <img src={images[index]} alt="slide" className="slide-image" />
            <button onClick={() => { nextSlide(); resetInterval(); }}>❯</button>
            <div className="dots">
                {images.map((_, i) => (
                    <span key={i} className={i === index ? "dot active" : "dot"} onClick={() => {
                        setIndex(i);
                        resetInterval();
                    }}></span>)
                )}
            </div>
        </div>
    )
}

export default Slider