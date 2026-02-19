import Image from 'next/image'
import React, { useState } from 'react'
import { flushSync } from 'react-dom'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'next-i18next'

const CERTS = [
  '/assets/certificados/image.png',
  '/assets/certificados/image copy.png',
  '/assets/certificados/image copy 2.png',
  '/assets/certificados/image copy 3.png',
  '/assets/certificados/image copy 4.png',
  '/assets/certificados/image copy 5.png',
  '/assets/certificados/image copy 6.png',
  '/assets/certificados/image copy 7.png',
  '/assets/certificados/image copy 8.png',
  '/assets/certificados/image copy 9.png',
]

// Duplicamos para el loop infinito sin saltos
const TRACK = [...CERTS, ...CERTS]

const CertificatesCarousel = () => {
  const { t } = useTranslation('common')
  const [selected, setSelected] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const startVT = (cb: () => void) => {
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      ;(document as any).startViewTransition(() => flushSync(cb))
    } else {
      cb()
    }
  }

  const openCert = (src: string, trackIndex: number) => {
    setActiveIndex(trackIndex)
    startVT(() => setSelected(src))
  }

  const closeCert = () => {
    startVT(() => {
      setSelected(null)
      setActiveIndex(null)
    })
  }

  return (
    <section className='bg-[#09101a] pt-[4rem] pb-[5rem]'>
      <h2 data-aos='fade-down' className='heading mb-[3rem]'>
        {t('certifications.heading')} <span className='text-yellow-400'>{t('certifications.headingHighlight')}</span>
      </h2>

      {/* Carrusel */}
      <div className='relative w-full overflow-hidden cert-fade-mask'>
        <div className='flex cert-scroll-track'>
          {TRACK.map((src, i) => (
            <div
              key={i}
              className='flex-shrink-0 mx-[1rem] w-[280px] sm:w-[320px] md:w-[360px] group cursor-pointer'
              onClick={() => openCert(src, i)}
            >
              <div
                className='relative overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-[1.03] group-hover:border-yellow-400/40'
                style={activeIndex === i ? { viewTransitionName: 'cert-active' } : {}}
              >
                {/* Fondo difuminado con los colores de la imagen */}
                <Image
                  src={src}
                  alt=''
                  aria-hidden
                  width={360}
                  height={260}
                  className='absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-60 saturate-150'
                  draggable={false}
                />
                {/* Imagen principal */}
                <Image
                  src={src}
                  alt={`Certificado ${(i % CERTS.length) + 1}`}
                  width={360}
                  height={260}
                  className='relative z-10 w-full h-[220px] sm:h-[240px] object-contain'
                  draggable={false}
                />
                <div className='absolute inset-0 z-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4'>
                  <span className='text-white text-sm font-semibold tracking-wide uppercase opacity-90'>{t('certifications.viewCert')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8'
          onClick={closeCert}
        >
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/80 backdrop-blur-sm' />

          {/* Contenedor de la imagen expandida */}
          <div
            className='relative z-10 max-w-[90vw] max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-2xl'
            style={{ viewTransitionName: 'cert-active' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fondo difuminado del modal */}
            <Image
              src={selected}
              alt=''
              aria-hidden
              fill
              className='object-cover blur-2xl opacity-50 saturate-150 scale-110'
              draggable={false}
            />
            {/* Imagen modal principal */}
            <Image
              src={selected}
              alt='Certificado'
              width={1200}
              height={900}
              className='relative z-10 w-full h-auto max-h-[85vh] object-contain'
              draggable={false}
            />
            {/* Botón cerrar */}
            <button
              onClick={closeCert}
              className='absolute top-3 right-3 z-20 bg-black/60 hover:bg-yellow-400 text-white hover:text-black rounded-full p-1.5 transition-colors duration-200'
              aria-label='Cerrar'
            >
              <XMarkIcon className='w-6 h-6' />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default CertificatesCarousel
