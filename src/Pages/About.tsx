import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
    className='w-[80%] m-auto'
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: .8, type: "spring", bounce: .6 }}
    >
        <h1>About Page</h1>

    </motion.div>
  )
}

export default About
