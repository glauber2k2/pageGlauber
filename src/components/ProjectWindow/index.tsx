'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FaChevronLeft,
  FaChevronRight,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { LuRocket } from 'react-icons/lu'
import {
  SiDjango,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

interface Repository {
  name: string
  description: string
  topics: string[]
  homepage: string
}

interface IconTech {
  [key: string]: JSX.Element
}

const iconTech: IconTech = {
  css: <FaCss3 />,
  next: <SiNextdotjs />,
  react: <FaReact />,
  javascript: <FaJs />,
  typescript: <SiTypescript />,
  tailwind: <SiTailwindcss />,
  node: <FaNodeJs />,
  python: <SiPython />,
  django: <SiDjango />,
}

export default function ProjectWindow() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  useEffect(() => {
    // Fazer uma solicitação usando fetch
    fetch('https://api.github.com/users/glauber2k2/repos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível obter os repositórios.')
        }
        return response.json()
      })
      .then((data) => {
        // Filtrar os repositórios com descrição começada por "*"
        const filteredRepositories = data.filter(
          (repo: Repository) =>
            repo.description && repo.description.startsWith('*')
        )
        setRepositories(filteredRepositories)

        // Armazenar os repositórios filtrados no estado "repositories"
      })
      .catch((error) => {
        console.error(error)
        setRepositories([])
      })
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % repositories.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + repositories.length) % repositories.length
    )
  }

  return (
    <>
      {repositories.length === 0 && (
        <div className='h-full flex justify-center items-center gap-4'>
          <div className='loader border-t-2 rounded-full border-zinc-500  animate-spin aspect-square w-8 flex justify-center items-center' />
          <h1 className='text-sm animate-pulse'>Loading</h1>
        </div>
      )}

      {repositories.length > 0 && (
        <>
          <motion.div
            className='flex items-center md:h-full gap-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'backInOut', duration: 1 }}
          >
            <button onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <div className='grid md:grid-cols-3 md:h-full md:gap-8 gap-4'>
              {Array.from({ length: 3 }).map((_, index) => {
                const repoIndex = (currentIndex + index) % repositories.length
                const repo = repositories[repoIndex]

                return (
                  <Dialog key={repoIndex}>
                    <DialogTrigger>
                      <motion.img
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ velocity: 1 }}
                        src={`https://raw.githubusercontent.com/glauber2k2/${repo.name}/main/public/thumb.png`}
                        alt=''
                        className='h-full w-full object-cover rounded-xl opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Visitar {repo.name} ?</DialogTitle>
                        <DialogDescription>
                          {repo.description && repo.description.slice(1)}
                        </DialogDescription>
                      </DialogHeader>
                      <div className='flex items-center gap-2'>
                        {repo.topics.map((tec, index) => (
                          <span key={index}>{iconTech[tec]}</span>
                        ))}
                      </div>

                      <img
                        src={`https://raw.githubusercontent.com/glauber2k2/${repo.name}/main/public/thumb.png`}
                        alt=''
                        className='h-full w-full object-cover rounded-xl opacity-70'
                      />

                      <Link
                        href={repo.homepage}
                        className='ml-auto bg-zinc-200 hover:bg-zinc-50 transition-colors duration-300 text-black py-2 px-4 rounded-lg font-semibold items-center flex gap-2'
                      >
                        <LuRocket />
                        quero conhecer
                      </Link>
                    </DialogContent>
                  </Dialog>
                )
              })}
            </div>
            <button onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'backInOut', duration: 2, delay: 1 }}
            className='text-xs text-white/50 animate-pulse'
          >
            Confira alguns de meus trabalhos
          </motion.h1>
        </>
      )}
    </>
  )
}
