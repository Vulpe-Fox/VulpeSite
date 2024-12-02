import React, { useEffect, useState } from 'react';

import '../styles/ImageTransition.css';

const ImageTransition = (pageSize, imageArray) => { 
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

    const images = imageArray.map((element, i) => {
            const maxFocusHeightSquare = maxFocusHeight*maxFocusHeight;
            const focusRange = scrolled-(maxFocusHeight+i*imageHeight);
            return (
                <img 
                    src={element}
                    alt={"image"+i}
                    className="image"
                    style={{ 
                        opacity: `${(-focusRange*focusRange/maxFocusHeightSquare+1)*100}%`,
                        height: `${imageHeight}` 
                    }}
                />
            )
    })

    console.log(images);

    return (
        <div className={`image-container`}>
            {images}
        </div>
    );
}

export default ImageTransition;