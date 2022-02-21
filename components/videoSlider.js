import { videos } from "../media";
import React, { useEffect } from "react";
import next from "next";

function VideoSlider() {

    useEffect(() => {
        const carouselTrack = document.querySelector('.carousel__track');
        const slides = Array.from(carouselTrack.children);
        const backButton = document.querySelector('.carousel__button--left');
        const nextButton = document.querySelector('.carousel__button--right');

        const slideWidth = slides[0].getBoundingClientRect().width;
        
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + "px";
        };
        slides.forEach(setSlidePosition);

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = "translateX(-" + targetSlide.style.left + ")";
            currentSlide.classList.remove("active-slide");
            targetSlide.classList.add("active-slide")
        };

        const hideShowArrows = (slides, backButton, nextButton, targetIndex) => {
            if (targetIndex === 0) {
                backButton.classList.add("is-hidden");
                nextButton.classList.remove("is-hidden");
            } else if (targetIndex === slides.length - 1) {
                backButton.classList.remove("is-hidden");
                nextButton.classList.add("is-hidden");
            } else {
                backButton.classList.remove("is-hidden");
                nextButton.classList.remove("is-hidden");
            }
        };

        //move slide to left
        backButton.addEventListener('click', e => {
            const currentSlide = carouselTrack.querySelector(".active-slide");
            const prevSlide = currentSlide.previousElementSibling;
            const prevIndex = slides.findIndex(slide => slide === prevSlide)

            hideShowArrows(slides, backButton, nextButton, prevIndex);
            moveToSlide(carouselTrack, currentSlide, prevSlide);
        });
        //move slide to right
        nextButton.addEventListener('click', e => {
            const currentSlide = carouselTrack.querySelector(".active-slide");
            const nextSlide = currentSlide.nextElementSibling;
            const nextIndex = slides.findIndex(slide => slide === nextSlide)

            hideShowArrows(slides, backButton, nextButton, nextIndex);
            moveToSlide(carouselTrack, currentSlide, nextSlide)
        })

    })

    return(<>
        <div className="carousel">
            <div className="carousel__track-container">
                <ul className="carousel__track">
                    {videos.map(({ src, active}, i) => (
                        <li className={"carousel__slide " + active} key={i}>
                            <iframe src={src} className="carousel__video"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="carousel__button carousel__button--left is-hidden">left</button>
            <button className="carousel__button carousel__button--right">right</button>
        </div>

        <style jsx>{`

      `}</style>
    </>)
};

export default VideoSlider;