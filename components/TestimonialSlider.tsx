import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ClientReview from "./ClientReview"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const ERIKA_IMAGE =
  "https://media.licdn.com/dms/image/v2/D4D03AQExIKOPUaJGFg/profile-displayphoto-scale_400_400/B4DZ1A.ty8J4Ak-/0/1774911682500?e=1779321600&v=beta&t=cm8KTcUJii5GonQYNjeB3HcEGMCUwv-naXHLX5O-TJ8"

const ERIKA_REVIEW =
  "Tengo el gusto de trabajar actualmente con Didier y realmente es una persona con la que da gusto trabajar. Es muy detallista, curioso y siempre está buscando aprender algo nuevo o mejorar lo que ya está hecho. Tiene muy buen criterio para el desarrollo, cuida mucho la experiencia de usuario, la calidad del código y los detalles visuales, y no se queda solo con que algo funcione, sino que le importa que el resultado final sea sólido y esté bien pensado para el producto. Además, es una persona muy respetuosa, positiva y con muy buena energía, algo que se nota mucho en el día a día del equipo. Sin dudas, un gran compañero y un profesional en el que se puede confiar!"

const KERVIS_IMAGE =
  "https://media.licdn.com/dms/image/v2/D4E03AQGfqkoPtY9P9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708128862845?e=1779321600&v=beta&t=FoIpMibl2iNCGGXUfJJJLAvXUA-bSPZllqK1SG3FaFk"

const KERVIS_REVIEW =
  "Didier es un profesional altamente competente. Tuve la oportunidad de trabajar con él en un proyecto donde yo me desempeñaba como desarrollador backend y él como frontend. Su trabajo fue excelente, logrando completar las vistas correspondientes e integrarlas de manera eficiente con la API desarrollada en el backend. Fue una experiencia muy positiva, ya que es una persona comunicativa, atenta a los detalles y comprometida con la calidad del proyecto. Sin duda, es un profesional que aporta valor al equipo."

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
      itemClass="item"
    >
      <ClientReview
        image={ERIKA_IMAGE}
        name="Erika Noelia Ladner"
        role="Frontend Mobile | iOS Developer | React Native"
        review={ERIKA_REVIEW}
      />
      <ClientReview
        image={KERVIS_IMAGE}
        name="kervis vasquez"
        role="Desenvolvedor Full Stack Sênior | Laravel, React, Next.js e Nest.js | Arquitetura Limpa, APIs Escaláveis e Performance"
        review={KERVIS_REVIEW}
      />
    </Carousel>
  )
}

export default TestimonialSlider
