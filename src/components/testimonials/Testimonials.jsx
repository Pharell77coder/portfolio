import React from "react";
import "./testimonials.css";
import ImagePython from "../../assets/python.jpg";
import ImageHTML from "../../assets/html.png";
import ImageCSS from "../../assets/css.png";
import ImageJS from "../../assets/js.png";
import ImagePHP from "../../assets/php.webp";
import ImageC from "../../assets/c.png";
import ImageCplus from "../../assets/cplus.jpeg";
import ImageCsharp from "../../assets/csharp.jpeg";
import ImageReactJS from "../../assets/logo.svg";
import ImageJava from "../../assets/java.png";

import { Pagination } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        id: 1, image: ImagePython, title: "Python", subtitle: "Langages de programmation",
        comment: "",
    },
    {
        id: 2, image: ImageJS, title: "Javascript", subtitle: "Langages de programmation",
        comment: "",
    },
    {
        id: 3, image: ImagePHP, title: "PHP", subtitle: "Langages de programmation",
        comment: "",
    },
    {
        id: 4, image: ImageC, title: "C", subtitle: "Langages de programmation",
        comment: "",
    },
    {
        id: 5, image: ImageCplus, title: "C++", subtitle: "Langages de programmation",
        comment: "",
    },
    {
        id: 6, image: ImageJava, title: "Java", subtitle: "Langages de programmation",
        comment: "",
    },
    {
        id: 7, image: ImageCsharp, title: "C#", subtitle: "Langages de programmation",
        comment: "",
    },
    {
        id: 8, image: ImageHTML, title: "HTML", subtitle: "Langages balisé",
        comment: "",
    },
    {
        id: 9, image: ImageCSS, title: "CSS", subtitle: "Langages de style",
        comment: "",
    },
    {
        id: 9, image: ImageReactJS, title: "React JS", subtitle: "Framework",
        comment: "",
    },
];

const testimonials = () => {
    return(
       
        <section className="testimonials container section">
            <h2 className="section__title">Mes compétences & Mes outils</h2>
            <Swiper className="testimonials__container grid"
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            pagination={{clickable: true}}
            >
                {data.map(({id, image, title, subtitle, comment}) => {
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                        <div className="thumb">
                            <img src={image} alt="" ></img>
                        </div>
                        <h3 className="testimonials__title">{title}</h3>
                        <span className="subtitle">{subtitle}</span>
                        </SwiperSlide>
                    )    
                })}
            </Swiper>
            <div className="comment">Toutes ces connaissances ont été acquises de différentes façons. Elles ont été acquises durant mes études en BTS SIO et d'autres par ma propre initiative en essayant de mettre en place des solutions. J’ai également relevé les défis organisés, ce qui permet d’effectuer des recherches et aller encore plus loin.</div>
        </section>
    )
}

export default testimonials;