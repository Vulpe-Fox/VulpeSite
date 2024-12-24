import React, { useEffect, useState } from 'react';

import '../styles/ImageTransitionText.css';

const ImageTransition = (pageSize, imageArray, textArray) => { 
    const [scrolled, setScrolled] = useState(0);

    const navPixels = 100;
    const footerPixels = 200;

    useEffect(() => {
        const handleScroll = () => {
            const percentScrolled = window.scrollY / ((pageSize - 1)*window.innerHeight+navPixels+footerPixels) * 100;
            setScrolled(percentScrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pageSize]);

    // test for each for sending in images as an array
    const numImages = imageArray.length;
    const imageHeight = 100/numImages;
    const maxFocusHeight = imageHeight/2;
    const boxes = imageArray.map((element, i) => {
            const maxFocusHeightSquare = maxFocusHeight*maxFocusHeight;
            const focusRange = scrolled-(maxFocusHeight+i*imageHeight);
            var textAlignment = 50;
            var imageAlignment = "left";
            if(i % 2 === 1){
                textAlignment = 0;
                imageAlignment = "right";
            }
            return (
                <div 
                    className="image-container"
                    style={{ 
                        opacity: `${(-focusRange*focusRange/maxFocusHeightSquare+1)*100}%`,
                        backgroundImage: `url(${element})`,
                        height: `${imageHeight}%`,
                        backgroundPosition: imageAlignment
                    }}
                >
                    <div 
                        className="text-container"
                        style={{
                            left: `${textAlignment}%`
                        }}
                    >
                        <p>{textArray[i]}</p>
                    </div>
                </div>
            )
    })

    return (
        <div 
            className={`bulk-container`}
            style={{ 
                height: `${pageSize*100}vh` 
            }}
        >
            {boxes}
        </div>
    );
}

export default ImageTransition;