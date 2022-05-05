import React from 'react'
import Image from 'next/image'

const Carousel = ({name}) => {
    return (
        <div id={`${name}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="4" aria-label="Slide 4"></button>
                
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <Image src='/img/Carousel/Carousel1.png' layout="responsive" width={1400} height={700} alt="Imagen Informacion Listica"/>
                </div>
                <div className="carousel-item">
                    <Image src="/img/Carousel/Carousel2.png" layout="responsive" width={1400} height={700} alt="Imagen Idear"/>
                </div>
                <div className="carousel-item">
                    <Image src="/img/Carousel/Carousel3.png" layout="responsive" width={1400} height={700} alt="Imagen Diseñar"/>
                </div>
                <div className="carousel-item">
                    <Image src="/img/Carousel/Carousel4.png" layout="responsive" width={1400} height={700} alt="Imagen Crear"/>
                </div>
                <div className="carousel-item">
                    <Image src="/img/Carousel/Carousel5.png" layout="responsive" width={1400} height={700} alt="Imagen Resolver"/>
                </div>


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${name}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${name}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel