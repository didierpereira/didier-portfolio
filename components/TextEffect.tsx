import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'next-i18next';

const TextEffect = () => {
  const { t } = useTranslation('common');
  const titles = t('textEffect', { returnObjects: true }) as string[];

  // Build sequence: [title, delay, title, delay, ...]
  const sequence = titles.flatMap((title) => [title, 1500]);

  return (
    <TypeAnimation
      sequence={sequence}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;