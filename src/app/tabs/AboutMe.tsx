'use client'

import { FunctionComponent } from 'react'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'backInOut', duration: 2 }}
      className='flex gap-8 md:flex-row items-center justify-center md:h-full md:gap-20 h-screen flex-col-reverse max-h-screen'
    >
      <motion.img
        className='w-1/2 object-scale-down md:w-auto'
        src='/stickmanlaptop.png'
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      />
      <span className='md:w-1/3 space-y-10'>
        <h1 className='font-DMSerif text-3xl md:text-6xl tracking-widest font-bold '>
          i&apos;m glauber.
        </h1>
        <article className='font-thin text-xs md:text-lg ml-8'>
          Sou programador front-end, e fazem 3 anos que trabalho com criação de
          websites. Comigo você conseguirá dar um UP na sua presença online.
        </article>
        <button className='flex items-center gap-2 bg-emerald-800 px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors duration-300'>
          <FaWhatsapp />
          quero saber mais
        </button>
      </span>
    </motion.div>
  )
}

export default AboutMe
