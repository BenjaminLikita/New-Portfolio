// import NavBar from '@/components/NavBar'
import { motion } from "framer-motion"
import img from "../assets/my_image.jpg"
import img2 from "../assets/drawing.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import ts from "../assets/ts.png"
import react from "../assets/react.png"
import redux from "../assets/redux.png"
import nextjs from "../assets/nextjs.png"
import nodejs from "../assets/nodejs.png"
import python from "../assets/python.png"
import django from "../assets/django.svg"
import flask from "../assets/flask.png"
import purpledots from "../assets/purple-dot-box.png"
import clsx from "clsx"
import { useEffect, useState } from "react"
import NavBar from "@/components/NavBar"
import "../styles.css"
import Reveal from "@/components/Reveal"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"


function Home() {

  const [page, setPage] = useState<number>(1)
  const [color, setColor] = useState<String>("")
  const [smallActive, setSmallActive] = useState<Boolean>(false)
  const colors = ["", "white", "blue", "white"]

  const technologies = [
    {url: html, language: "Html"},
    {url: css, language: "Css"},
    {url: js, language: "Javascript"},
    {url: ts, language: "Typescript"},
    {url: react, language: "React"},
    {url: redux, language: "Redux"},
    {url: nextjs, language: "Next"},
    {url: nodejs, language: "NodeJs"},
    {url: python, language: "Python"},
    {url: django, language: "Django"},
    {url: flask, language: "Flask"},
  ]
  
  window.addEventListener("scroll", () => {
    if(window.scrollY > 10){
      setSmallActive(true)
    }
    else{
      setSmallActive(false)
    }
  })
  
  useEffect(() => {

    setColor(colors[0]);
    setPage(1);
    window.scroll({top: 0, behavior: "smooth"}) 
    const sections = document.querySelectorAll("section")
    const button = document.querySelectorAll("#button")
    button.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sections[i].scrollIntoView({behavior: "smooth"})
        setColor(colors[i])
        setPage(i + 1)
      })
    })
  }, [])


  

  
  
  return (
    <div>
    <motion.div
    // initial={{ x: 100, opacity: 0 }}
    // animate={{ x: 0, opacity: 1 }}
    // transition={{ duration: .8, type: "spring", bounce: .6 }}
    >

    <NavBar color={color} page={page} small={smallActive} />

    <div className="hidden fixed md:bottom-[25px] bottom-[45%] right-[65px] md:flex flex-col items-center gap-5 p-1 z-40">
      <div
      id="button"
      className={clsx("border border-[#4831d4] cursor-pointer duration-300 transition-all", {
        "bg-[#bff659d2] border-[#bff659d2]": color === "blue",
        "border-[#4831d4] border-[1.5px] w-[12px] h-[12px]": page === 1,
        "rotate-[45deg] w-[6px] h-[6px] bg-[#4831d4]": page !== 1
      })}></div>
      <div
      id="button"
      className={clsx("border border-[#4831d4] cursor-pointer duration-300 transition-all", {
        "bg-[#bff659d2] border-[#bff659d2]": color === "blue",
        "border-[#4831d4] border-[1.5px] w-[12px] h-[12px]": page === 2,
        "rotate-[45deg] w-[6px] h-[6px] bg-[#4831d4]": page !== 2
      })}></div>
      <div
      id="button"
      className={clsx("border border-[#4831d4] cursor-pointer duration-300 transition-all", {
        "bg-[#bff659d2] border-[#bff659d2]": color === "blue",
        "border-[#4831d4] border-[1.5px] w-[12px] h-[12px]": page === 3,
        "rotate-[45deg] w-[6px] h-[6px] bg-[#4831d4]": page !== 3
      })}></div>
      <div
      id="button"
      className={clsx("border border-[#4831d4] cursor-pointer duration-300 transition-all", {
        "bg-[#bff659d2] border-[#bff659d2]": color === "blue",
        "border-[#4831d4] border-[1.5px] w-[12px] h-[12px]": page === 4,
        "rotate-[45deg] w-[6px] h-[6px] bg-[#4831d4]": page !== 4
      })}></div>
    </div>

    <section className="w-[100vw] h-[95vh] sm:h-[90vh] md:h-[100vh] block sm:flex">
      <div className="z-[-2] bg-[#4831d4] w-[100%] sm:w-[70%] h-[100%] sm:h-[100%] md:h-[100%] pt-[120px] md:pt-[150px] pl-[6%] text-3xl md:text-5xl font-bold relative">
        <div className="w-[88%] m-auto">
          <Reveal animate="slide-left">
            <div>
              <h1 className="inline-block text-[#c8f279]">Full Stack <br/> Developer</h1><span className="text-white">.</span>
            </div>
          </Reveal>
          <p className="text-sm text-gray-50 font-normal mt-5 w-[80%]">An inquisitive Computer Science student with a love for cutting-edge tech.</p>
          <div className="flex w-[80%] text-[#c8f279] sm:w-[80%] md:w-[70%] text-xs sm:text-sm font-normal gap-10 absolute bottom-10">
            <Reveal animate="slide-right">
              <p>Dedicated to continuous learning and staying ahead in the software development field.</p>
            </Reveal>
            <Reveal animate="slide-left">
              <p>Always exploring new technologies to enhance my coding skills.</p>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="bg-[#bff659d2] w-[100%] sm:w-[30%] h-[0%] sm:h-[100%] sm:relative flex z-[-2]">
        <img
        style={{filter: "contrast(1.5) brightness(.9)"}}
        className="absolute top-0 sm:w-[85%] md:w-[70%] lg:w-[55%] w-[55%] h-[30%] sm:h-[45%] md:h-[40%] lg:h-[45%] ml-[5%] sm:ml-[-30%] mt-2 sm:mt-[50%] lg:mt-[40%] translate-x-[25%] translate-y-[110%] sm:translate-x-0 sm:translate-y-0 z-10"
        src={img} alt="" />

        <div
        className="sm:w-[85%] md:w-[70%] lg:w-[55%] w-[30%] h-[50%] sm:h-[45%] md:h-[40%] lg:h-[45%] ml-[5%] sm:ml-[-30%] mt-2 sm:mt-[50%] lg:mt-[40%] sm:border absolute top-[3%] left-[6%] -z-10"
        ></div>
      </div>

    </section>


    <section className='w-[100vw] h-[65vh] sm:h-[75vh] md:h-[100vh] bg-white'>
      <div className="w-[70%] md:w-[80%] flex flex-col translate-x-[15%] translate-y-[15%] md:translate-y-[40%]">
        <div className="w-[100%] md:w-[50%]">
          <Reveal animate="slide-down">
            <h1 className="text-2xl md:text-4xl font-bold text-[#4831d4]">DESIGN</h1>
          </Reveal>
          <Reveal animate="slide-up">
            <p className="text-sm lg:text-base leading-tight font-normal text-[#3D1558] mt-3">My creativity and attention to detail help me create visually appealing and impactful designs. I love bringing ideas to life through visuals and making them stand out. Let's create something amazing together! 🎨✨</p>
          </Reveal>
        </div>
        <div className="w-[100%] md:w-[50%] md:self-end pt-10">
          <Reveal animate="slide-right">
            <h1 className="text-2xl md:text-4xl font-bold text-[#4831d4]">ENGINEERING</h1>
          </Reveal>
          <Reveal animate="slide-left">
            <p className="text-sm lg:text-base leading-tight font-normal text-[#3D1558] mt-3">My problem-solving skills, attention to detail, and technical expertise allow me to create robust and efficient solutions. I thrive on challenges and enjoy finding innovative ways to tackle complex problems. Let's engineer greatness together! 🛠️🚀.</p>
          </Reveal>
        </div>
        <img
        className="absolute hidden md:block w-[23%] right-5 rotate-[20deg] lg:right-[10%] lg:w-[20%]"
        src={purpledots} alt="" />
        <img
        className="absolute hidden md:block w-[30%] lg:w-[23%] bottom-[-20%] left-[10%]"
        src={img2} alt="" />
      </div>
    </section>

    <section className='w-[100vw] h-[70vh] sm:h-[100vh] bg-[#4831d4]'>
      <div className="pt-[10%] md:pt-[5%] lg:pt-[10%] text-gray-100 w-[80%] m-auto">
        <h1 className="text-3xl font-bold mb-2">TECHNOLOGIES</h1>
        <div className="grid grid-cols-3 md:grid-cols-5">
          {technologies.map((tech, i) => (
            <IconDiv key={i} url={tech.url} language={tech.language} delay={i / 15} />
          ))}
        </div>
      </div>
    </section>

    <section className='w-[100vw] h-[45vh] sm:h-[60vh] md:h-[100vh] bg-gray-50'>
      <div className="bg-white p-20 py-16 translate-y-[5vh] md:translate-y-[20vh] w-[90%] m-auto text-[#3e3198] relative">
        
        <div className=" md:h-[50vh] w-[100%] md:translate-x-[20%] md:translate-y-[25%] lg:translate-x-[30%] lg:translate-y-[20%]">
          <Reveal animate="slide-left">
            <div className="w-[100%]">
              <h1 className="text-[#3e3198] text-3xl md:text-4xl font-bold mb-[10%]">I build & design stuff</h1>
              <p className="text-sm md:text-base">Open source projects, web apps and experimentals.</p>
              <Link
              to={""}
              className="border-[#4831d4] group flex justify-center text-xs md:text-base gap-5 items-center relative border px-8 py-4 mt-5 before:bg-[#4831d4] before:absolute before:w-[0%] before:h-[100%] before:top-0 before:left-0 hover:before:w-[100%] before:transition-all duration-500 before:duration-700 hover:text-white before:z-[-1] delay[10ms] font-semibold text-[#4831d4]"
              >SEE MY WORKS<BsArrowRight size={25}/>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    </motion.div>
    </div>
  )
}

interface IconDivProps {
  url: string,
  language: string,
  delay: number
}
const IconDiv = ({url, language, delay}: IconDivProps) => {
  return(
    <div className="flex flex-col items-center pt-3">
      <Reveal animate="slide-down" delay={delay}>
        <img
        className="w-[50px] lg:w-[70px] mt-3 place-items-center"
        src={url.normalize()} alt="" />
      </Reveal>
      <Reveal animate="slide-up" delay={delay}>
        <h2 className="pt-2 text-lg font-semibold">{language}</h2>
      </Reveal>
    </div>
  )
}

export default Home
