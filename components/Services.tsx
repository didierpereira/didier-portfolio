import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useTranslation } from "next-i18next";

const Services = () => {
  const { t } = useTranslation('common');
  const card1Items = t('services.card1Items', { returnObjects: true }) as string[];
  const card2Items = t('services.card2Items', { returnObjects: true }) as string[];
  const card3Items = t('services.card3Items', { returnObjects: true }) as string[];

  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p data-aos="zoom-in-down" className="heading">
        {t('services.heading')} <span className="text-yellow-400">{t('services.headingHighlight')}</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="flip-left">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">{t('services.card1Title')}</h2>
            <ul className="text-[15px] text-[#d3d2d2] font-bold text-left">
              {card1Items.map((item, i) => <li key={i}><h3>✅ {item}</h3></li>)}
            </ul>
          </div>
        </div>
        <div data-aos="flip-down">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">{t('services.card2Title')}</h2>
            <ul className="text-[15px] text-[#d3d2d2] font-bold text-left">
              {card2Items.map((item, i) => <li key={i}><h3>✅ {item}</h3></li>)}
            </ul>
          </div>
        </div>
        <div data-aos="flip-right">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">{t('services.card3Title')}</h2>
            <ul className="text-[15px] text-[#d3d2d2] font-bold text-left">
              {card3Items.map((item, i) => <li key={i}><h3>✅ {item}</h3></li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
