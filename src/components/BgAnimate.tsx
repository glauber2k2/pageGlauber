'use client'
import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'

interface BgAnimateProps {}

const BgAnimate: FunctionComponent<BgAnimateProps> = () => {
  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 2 }}
      className='fixed bg-zinc-950 w-3/5 h-full rounded-r-full -z-10 bottom-0'
    />
  )
}

export default BgAnimate
