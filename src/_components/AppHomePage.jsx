import React, { useState, useEffect } from 'react';
import Header from "./headers/Header";
import SectionCards from "./partials/SectionCards";


const sliderCards = [
    {
        id: 1,
        img: 'https://image.dhgate.com/webp/m/0x0/f3/albu/km/m/10/6c22fe32-092f-4fee-b9b5-f9950ca1ec6c.jpg'
    },
    {
        id: 2,
        img: 'https://ae01.alicdn.com/kf/Se90f6a6a024f46ad8344be64b311763aw.jpg_640x640Q90.jpg_.webp'
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/I/81dBv3KtpDL._AC_UY1000_.jpg'
    },
];


function AppHomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % sliderCards.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            {/* header */}
            <Header />

            {/* hero */}
            <div className="heroContainer">
                {sliderCards.map((item, index) => (
                    <div
                        key={item.id}
                        className={`card ${index === currentIndex ? 'active' : ''}`} // Applica la classe 'active' alla slide corrente
                    >
                        <img src={item.img} alt={`Slide ${item.id}`} />
                    </div>
                ))}
            </div>

            {/* cards */}
            <SectionCards />
        </>
    );
};





export default AppHomePage;