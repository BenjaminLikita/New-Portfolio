import NavBar from '@/components/NavBar'
import { motion } from 'framer-motion'



function Projects() {
  const projLinks = [
    {url: "/", text: "Home"},
    {url: "/resume", text: "My Résumé"}
  ]


  return (
    <motion.div
    className='w-[80%] m-auto'
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: .8, type: "spring", bounce: .6 }}
    >
      <NavBar links={projLinks}/>
      <div className="w-[80%] m-auto">
          <h1 className="text-3xl font-bold mt-[250px]">Coming Soon...</h1>
      </div>

    </motion.div>
  )
}

export default Projects
