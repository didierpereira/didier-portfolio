import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const ERIKA_IMAGE = 'https://media.licdn.com/dms/image/v2/D5603AQH0EGeYawb1Iw/profile-displayphoto-scale_200_200/B56Zwvv62yK4Ac-/0/1770327618363?e=1773273600&v=beta&t=DkxlnoTniUa5HBTlVsAiJYO2pi_0W2Q0xSBD-wpxihY'

const ERIKA_REVIEW = 'Tengo el gusto de trabajar actualmente con Didier y realmente es una persona con la que da gusto trabajar. Es muy detallista, curioso y siempre está buscando aprender algo nuevo o mejorar lo que ya está hecho. Tiene muy buen criterio para el desarrollo, cuida mucho la experiencia de usuario, la calidad del código y los detalles visuales, y no se queda solo con que algo funcione, sino que le importa que el resultado final sea sólido y esté bien pensado para el producto. Además, es una persona muy respetuosa, positiva y con muy buena energía, algo que se nota mucho en el día a día del equipo. Sin dudas, un gran compañero y un profesional en el que se puede confiar!'

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={7000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass='item'
    >
      <ClientReview
        image={ERIKA_IMAGE}
        name='Erika Noelia Ladner'
        role='Frontend Mobile | iOS Developer | React Native'
        review={ERIKA_REVIEW}
      />
    </Carousel>
  )
}

export default TestimonialSlider