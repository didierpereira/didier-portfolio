import { useTranslation } from "next-i18next"
import TestimonialSlider from "./TestimonialSlider"

const Testimonial = () => {
  const { t } = useTranslation("common")
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem]">
      <h1 className="heading">
        {t("testimonial.heading")}{" "}
        <span className="text-yellow-400">
          {t("testimonial.headingHighlight")}
        </span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        <TestimonialSlider />
      </div>
    </div>
  )
}

export default Testimonial
