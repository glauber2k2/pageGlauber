'use client'

import { FunctionComponent, useState } from 'react'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Reorder, motion } from 'framer-motion'

interface MyProjectsProps {}

const MyProjects: FunctionComponent<MyProjectsProps> = () => {
  const [items, setItems] = useState([
    'multi-plataformas',
    'altamente responsivo',
    'site com velocidade',
    'alta taxa de conversão',
  ])
  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-full md:gap-36 '>
      <motion.span
        className='md:w-1/2 space-y-10'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'backInOut', duration: 1.5 }}
      >
        <h1 className='font-DMSerif text-4xl md:text-6xl tracking-widest font-bold'>
          my projects.
        </h1>
        <article className='font-thin text-xs md:text-lg border-l-2 border-white pl-4 ml-8'>
          Conheça um pouco dos meus projetos, aqui você pode ter ideia da
          qualidade que seu site poderá atingir e escolher ou se inspirar em
          algum template que tenho criado.
        </article>

        <Reorder.Group axis='y' values={items} onReorder={setItems}>
          <ul className='font-thin hidden md:block text-lg list-disc '>
            {items.map((item) => (
              <Reorder.Item key={item} value={item}>
                <li>{item}</li>
              </Reorder.Item>
            ))}
          </ul>
        </Reorder.Group>
      </motion.span>
      <ScrollArea className='md:w-1/2 h-full'>
        <ScrollBar className='hidden' />
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ ease: 'backInOut', duration: 3 }}
          className='grid grid-cols-1 md:gap-8 gap-4'
        >
          <motion.img src='/wavco.jpg' className='object-cover rounded-3xl ' />
          <motion.img src='/wavco.jpg' className='object-cover rounded-3xl ' />
          <motion.img src='/wavco.jpg' className='object-cover rounded-3xl ' />
          <motion.img src='/wavco.jpg' className='object-cover rounded-3xl ' />
          <motion.img src='/wavco.jpg' className='object-cover rounded-3xl ' />
          <motion.img src='/wavco.jpg' className='object-cover rounded-3xl ' />
          <motion.img src='/wavco.jpg' className='object-cover rounded-3xl ' />
          <motion.img src='/wavco.jpg' className='object-cover rounded-3xl ' />
          <motion.img src='/wavco.jpg' className='object-cover rounded-3xl ' />
        </motion.div>
      </ScrollArea>
    </div>
  )
}

export default MyProjects
