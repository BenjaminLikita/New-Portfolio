import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6"
import { LinkProps } from '@/App'


type NavbarProps = {
  color?: String,
  small?: Boolean,
  page?: Number,
  links: LinkProps[]
}



function NavBar({color, page, small, links}: NavbarProps) {  

  const [click, setClick] = useState<Boolean>(false)
  const [active, setActive] = useState<Boolean>(false)
  


  return (
    <div className={clsx('fixed top-[0%] left-[50%] translate-x-[-50%] w-[100%] z-50 transition-all duration-300', {
      "sm:bg-white shadow": color === "white",
      "sm:bg-[#4831d4] shadow": color === "blue",
      "bg-[#4831d4] shadow": small,
    })}>
      <div className='w-[92%] md:w-[88%] m-auto'>
      <div className='flex justify-between items-center text-white'>
        <h1 className={clsx('text-6xl py-3 md:p-0 md:text-8xl fuggles font-bold name', {
          "text-[#4831d4]": page === 2 || page === 4,
          "text-[#c8f279]": page !== 2 && page !== 4,
        })}>
          b<span className='text-4xl md:text-4xl'>enji</span>
        </h1>
        <div
        onClick={() => {
          if (click){
            setActive(false)
            setTimeout(() => {
              setClick(false)
            }, 350)
          }
          else{
            setActive(true)
            setClick(true)
          }
        }}
        className='flex flex-col gap-3 relative w-[30px] h-6 cursor-pointer z-10 mr-3'>
          <span className={clsx('block w-[30px] h-[2px] transition-all duration-300', {
            "rotate-[45deg] origin-top-left bg-[#4831DE]": click,
            "bg-[#c8f279]": !click,
            "bg-[#bff659d2]": color === "blue" && !click,
            "sm:bg-[#4831DE]": color !== "blue",
            "sm:bg-[#c8f279]": small,
          })}></span>
          <span className={clsx('block h-[2px] transition-all duration-300 self-end', {
            "rotate-[-45deg] origin-top-left w-[30px] mt-[8px] mr-[2px] bg-[#4831DE]": click,
            "w-[20px] bg-[#c8f279]": !click,
            "bg-[#bff659d2]": color === "blue" && !click,
            "sm:bg-[#4831DE]": color !== "blue",
            "sm:bg-[#c8f279]": small,
          })}></span>
      
        </div>
      </div>
      {
        click &&
        <div className={clsx('fixed top-[10%] right-[4%] md:right-[6%] md:top-[16%] w-[80%] md:w-[28%] p-10 pt-8 md:text-sm text-[#4831DE] bg-white shadow-lg', {
          "fade-in": active,
          "fade-out": !active,
        })}>
          <div className='flex flex-col transition-all fade-in text-sm md:text-xs z-50'>
            {links.map(link => (
              <Link to={link.url}
              onClick={() => setClick(false)}
              className='p-3 pl-0 border-b cursor-pointer hover:pl-3 transition-all duration-500 close'>{link.text}</Link>
            ))}
          </div>
      
          <div className='fade-in'>
            <h1 className='text-[#CBC9E2] mt-6 text-base md:text-sm'>SAY HELLO</h1>
            <div className='flex flex-col mb-5 text-sm md:text-xs'>
              <Link
              target='_blank'
              className='p-2 pl-0 cursor-pointer hover:pl-3 transition-all duration-500 close'
              to={"mailto:benjaminlikita3@gmail.com"}>
                benjaminlikita3@gmail.com
              </Link>
              <Link
              target='_blank'
              className='p-2 pl-0 cursor-pointer hover:pl-3 transition-all duration-500 close'
              to={"https://t.me/benjaminlikita"}>t.me/benjaminlikita</Link>
            </div>
            <div className='flex gap-[20px]'>
              <Link
              className="hover:translate-y-[-10px] transition-all duration-500"
              target='_blank'
              to={"https://github.com/BenjaminLikita/"}><FaGithub size={28}/></Link>
              <Link
              className="hover:translate-y-[-10px] transition-all duration-500"
              target='_blank'
              to={"https://linkedin.com/in/benjaminlikita/"}><FaLinkedin size={28}/></Link>
              <Link
              className="hover:translate-y-[-10px] transition-all duration-500"
              target='_blank'
              to={"https://x.com/LikitaBenjamin/"}><FaSquareXTwitter size={28}/></Link>
            </div>
          </div>
      </div>
      }
      </div>
    </div>
  )
}

export default NavBar
