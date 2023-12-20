import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  FaProjectDiagram,
  FaRegUserCircle,
  FaSignature,
  FaUsers,
} from 'react-icons/fa'
import AboutMe from './tabs/AboutMe'
import MyProjects from './tabs/MyProjects'
import MyWork from './tabs/MyWork'
import Social from './tabs/Social'

function Home() {
  return (
    <div className=' h-screen md:p-14 md:pb-28'>
      <Tabs
        defaultValue='home'
        className=' h-full flex flex-col justify-center'
      >
        <TabsContent value='home'>
          <AboutMe />
        </TabsContent>

        <TabsContent value='projects'>
          <MyProjects />
        </TabsContent>

        <TabsContent value='work'>
          <MyWork />
        </TabsContent>

        <TabsContent value='social'>
          <Social />
        </TabsContent>

        <TabsList className='fixed bottom-0 md:bottom-10 left-[50%] translate-x-[-50%] w-screen md:w-auto'>
          <TabsTrigger value='home' className='flex items-center gap-2'>
            <FaRegUserCircle />
            <p className='hidden md:flex'>sobre mim</p>
          </TabsTrigger>
          <TabsTrigger value='projects' className=''>
            <FaProjectDiagram />
            <p className='hidden md:flex'>meus projetos</p>
          </TabsTrigger>
          <TabsTrigger value='work' className=''>
            <FaSignature />
            <p className='hidden md:flex'> meu trabalho</p>
          </TabsTrigger>
          <TabsTrigger value='social' className='flex items-center gap-2'>
            <FaUsers />
            <p className='hidden md:flex'> minhas redes</p>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

export default Home
