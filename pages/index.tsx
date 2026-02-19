import About from "@/components/About";
// import Blog from '@/components/Blog'
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import CertificatesCarousel from "@/components/CertificatesCarousel";
// import Skills from '@/components/Skills'
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

const HomePage: React.FC = () => {
  const [isOpenMenu, SetIsOpenMenu] = useState(false);

  const handleOpenMenu = (): void => SetIsOpenMenu(!isOpenMenu);

  useEffect(() => {
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Nav handleOpenMenu={handleOpenMenu} />
      <MobileNav isOpenMenu={isOpenMenu} handleOpenMenu={handleOpenMenu} />
      <section id="inicio" className="section-anchor">
        <Hero />
      </section>
      <div className="relative z-30">
        <section id="sobre-mi" className="section-anchor">
          <About />
        </section>
        <section id="servicios" className="section-anchor">
          <Services />
        </section>
        {/* <Skills /> */}
        <section id="proyectos" className="section-anchor">
          <Projects />
        </section>
        <Testimonial />
        <CertificatesCarousel />
        {/* <Blog /> */}
        <section id="contacto" className="section-anchor">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
