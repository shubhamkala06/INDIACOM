import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { BVICAM } from './DataConstants'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <img src={BVICAM+"images/1.jpg"}></img>
        </div>
        <div className="embla__slide">
            <img src={BVICAM+"images/2.jpg"}></img>
        </div>
        <div className="embla__slide">
            <img src={BVICAM+"images/3.jpg"}></img>
        </div>
        <div className="embla__slide">
            <img src={BVICAM+"images/4.jpg"}></img>
        </div>
        <div className="embla__slide">
            <img src={BVICAM+"images/5.jpg"}></img>
        </div>
        <div className="embla__slide">
            <img src={BVICAM+"images/6.jpg"}></img>
        </div>
        <div className="embla__slide">
            <img src={BVICAM+"images/7.jpg"}></img>
        </div>
      </div>
    </div>
  )
};