import {FaArrowLeftLong, FaLinkedin} from "react-icons/fa6"
import {MdDownloading} from "react-icons/md"
import { motion } from "framer-motion"
import { technologies } from "./Home"
import { Link } from "react-router-dom"
import { useEffect } from "react"




function Resume() {
    
    useEffect(() => {
        document.body.style.overflow = "visible";
    })



  return (
    <div className='bg-white flex'>
      <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .7 }}
      className='bg-gray-50 my-10 w-[85%] m-auto flex flex-col sticky top-0'>
        <div className="flex items-center gap-3 w-full justify-end p-5">
            <span className="cursor-pointer">
                <FaLinkedin color={"blue"} />
            </span>
            <div className="flex items-center gap-1 cursor-pointer">
                <MdDownloading />
                <p>Download</p>
            </div>
        </div>
        <div className="px-4 md:px-10 py-5">
            <div className='sm:flex gap-5'>
                <div className="sm:w-[30%] flex justify-between gap-5 sm:block sticky top-0 p-2">
                    <div className="mb-10 w-[200%] md:w-full">
                        <Link to={".."} className="text-[#4831d4] font-semibold text-sm">My Website</Link>
                        <p className="text-sm text-gray-700">Niger, Nigeria</p>
                        <Link to={"mailto:benjaminlikita3@gmail.com"} className="text-[#4831d4] font-semibold text-sm">Email me!</Link>
                    </div>
                    <div>
                        <h1 className="text-[#4831d4] text-md sm:text-xl font-bold">Core Technologies:</h1>
                        <ul className="flex flex-wrap sm:block">
                            {technologies.map((tech, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm sm:text-base pb-1 md:pb-3 pr-4"><span className="w-[5px] h-[5px] bg-gray-500"></span>{tech.language}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-[70%] pt-5 sm:pt-0">
                    <h1 className="text-[#4831d4] font-bold text-5xl w-[60%]">Likita Benjamin</h1>
                </div>
            </div>
            <Link to={".."} className="text-[#4831d4] flex justify-between place-items-center w-fit bg-white hover:shadow-sm py-3 px-4 gap-3"><FaArrowLeftLong />Go back</Link>
        </div>
        </motion.div>
    </div>
  )
}

export default Resume
