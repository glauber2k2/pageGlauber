'use client'

import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

interface WppProps {}

const Wpp: FunctionComponent<WppProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'backInOut', duration: 2 }}
      className='flex gap-8 md:flex-row items-center justify-center md:h-full md:gap-20 h-screen flex-col-reverse'
    >
      <motion.img
        className='w-1/2 object-scale-down md:w-auto'
        src='/stickwpp.png'
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      />
      <span className='md:w-1/3 '>
        <h1 className='font-DMSerif text-3xl md:text-6xl tracking-widest font-bold mb-10'>
          contate-me
        </h1>
        <article className='font-thin text-xs md:text-lg ml-8 mb-4'>
          Caso tenha duvidas, ou queira fazer um orçamento, fique a vontade em
          me contatar clicando no botão abaixo.
        </article>

        <article className='font-thin text-xs md:text-lg ml-8 mb-8'>
          Venha tirar sua duvida ou falar sobre a necessidade do seu negocio,
          totalmente livre de compromisso.
        </article>

        <span className='flex md:items-center md:gap-8 flex-col md:flex-row gap-2'>
          <button className='font-DMSerif flex items-center gap-2 hover:underline tracking-widest'>
            <FaWhatsapp />
            whatsapp
          </button>
          <button className='font-DMSerif flex items-center gap-2 hover:underline tracking-widest'>
            <FaLinkedin />
            linkedin
          </button>
          <button className='font-DMSerif flex items-center gap-2 hover:underline tracking-widest'>
            <FaInstagram />
            instagram
          </button>
        </span>
      </span>
    </motion.div>
  )
}

export default Wpp
