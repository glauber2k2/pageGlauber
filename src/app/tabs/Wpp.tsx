'use client'

import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'

interface WppProps {}

const Wpp: FunctionComponent<WppProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
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

        <article className='font-thin text-xs md:text-lg ml-8'>
          Venha tirar sua duvida ou falar sobre a nescidade do seu negocio,
          totalmente livre de compromisso.
        </article>
      </span>
    </motion.div>
  )
}

export default Wpp
