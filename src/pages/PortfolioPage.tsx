import Marquee from "react-fast-marquee"
import {TbBrandJavascript, TbBrandTypescript, TbBrandReact, TbBrandNodejs, TbBrandVite, TbBrandNextjs, TbBrandGithub, TbBrandGit, TbBrandDocker, TbBrandHtml5, TbBrandLinkedin, TbBrandX, TbMail, TbBrandWhatsapp, TbBrandFigma, TbLink} from "react-icons/tb"
import {SiNestjs} from "react-icons/si"
import { Link } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner"
import Navbar from "../components/Navbar"
import { motion, MotionConfig } from 'motion/react'
import pronotes from '../assets/pronotes.png'
import tictactoePied from '../assets/tictactoe-pied.png'


export const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({
        behavior: 'smooth'
    })
}

const PortfolioPage = () => {

    const stacks = [
        {title: "HTML & CSS", icon: TbBrandHtml5},
        {title: "Javascript", icon: TbBrandJavascript},
        {title: "Typescript", icon: TbBrandTypescript},
        {title: "React", icon: TbBrandReact},
        {title: "Node.js", icon: TbBrandNodejs},
        {title: "Vite", icon: TbBrandVite},
        {title: "Next", icon: TbBrandNextjs},
        {title: "Nest Js", icon: SiNestjs},
        {title: "Git", icon: TbBrandGit},
        {title: "Github", icon: TbBrandGithub},
        {title: "Docker", icon: TbBrandDocker},
        {title: "Figma", icon: TbBrandFigma},
    ]

    const socials = [
        {name: "Linkedin", icon: TbBrandLinkedin, link: "https://www.linkedin.com/in/benjamin-likita-0b0b3b1b0/"},
        {name: "Github", icon: TbBrandGithub, link: "https://github.com/BenjaminLikita"},
        {name: "X", icon: TbBrandX, link: "https://github.com/BenjaminLikita"}
    ]

    type IFormData = {
        name: string
        email: string
        message: string
    }

    const [formData, setFormData] = useState<IFormData>(
        {email: "", message: "", name:""}
    )

    const onsubmit = (e: FormEvent<HTMLFormElement>) => {
        const promise = new Promise((res, rej) => {
            const rand = Math.round(Math.random())
            setTimeout(() => rand === 0 ? rej("") : res("") , 2000)
        })
        e.preventDefault()
        toast.promise(promise, {
            loading: "Sending...",
            success: () => {
                setFormData({email: "", message: "", name:""})
                return "Sent succesfully"
            },
            error: () => "Something went wrong"
        })
    }

    const onchange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id, value} = e.target

        setFormData(prev => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    const projects = [
        {
            title: "Pro Notes",
            description: "Pro Notes is a note-taking app that allows users to create, edit, and delete notes. It also supports speech to textfunctionality on web browsers that support the feature.",
            image: pronotes,
            githubUrl: "https://github.com/BenjaminLikita/pro-notes",
            link: "https://pro-notes-beta.vercel.app/",
            stacks: ["React", "Vite", "TypeScript"]
        },
        {
            title: "Tictactoe Pied",
            description: "Tictactoe Pied is a simple tictactoe game built with React, Vite, and TypeScript. It features a responsive design and a simple AI that makes the game more challenging.",
            image: tictactoePied,
            githubUrl: "https://github.com/BenjaminLikita/tictactoe",
            link: "https://tictactoe-pied3.vercel.app/",
            stacks: ["React", "Vite", "TypeScript"]
        },
    ]

  return (
    <main className="text-white">
        <MotionConfig transition={{ duration: 2, type: 'spring', bounce: 0.6 }}>
            <Navbar />
            
            <section className="bg-black-1 grid place-items-center pt-36 pb-24 md:py-52 relative overflow-hidden" id="home">
                {/* doodles start */}
                    <div className="absolute top-[60px] left-[1%] [30px] h-[40px] w-[80px] border border-[#131d27] rounded-t-full rotate-[-60deg]"></div>
                    <div className="absolute top-[200px] left-[1%] [20px] size-[80px] bg-[#75797d] rounded-full"></div>
                    <div className="absolute top-[400px] left-[2%] [50px] h-[60px] w-[25px] border border-[#131d27]"></div>
                    <div className="absolute top-[200px] left-[13%] [250px] h-[20px] w-[7px] bg-[#513119]"></div>
                    <div className="absolute top-[290px] left-[12%] [220px] size-[3px] bg-[#75797d] rounded-full"></div>
                    <div className="absolute top-[380px] left-[13%] [250px] h-[4px] w-[50px] bg-[#513119]"></div>
                    <div className="absolute top-[510px] left-[15%] [180px] size-[80px] border border-[#131d27] rounded-full before:absolute before:size-[80px] before:border before:border-[#131d27] before:rounded-full before:bottom-[30%] before:left-[30%]"></div>
                    <div className="absolute top-[550px] left-[32%] [450px] size-[20px] bg-[#303c49]"></div>
                    <div className="absolute top-[550px] left-[45%] [650px] h-[5px] w-[15px] bg-[#513119]"></div>
                    <div className="absolute top-[500px] left-[60%] [850px] size-16 border border-[#303c49] before:size-16 before:absolute before:bg-[#513119] before:top-[30%] before:right-[30%]"></div>
                    <div className="absolute top-[500px] left-[78%] [1050px] size-[20px] border border-[#303c49]"></div>
                    <div className="absolute top-[420px] left-[90%] [1050px] size-[80px] border border-[#303c49]"></div>
                    <div className="absolute top-[380px] left-[83%] [150px] size-[60px] bg-[#513119]"></div>
                    <div className="absolute top-[350px] left-[95%] [20px] size-[30px] bg-[#75797d] rounded-full"></div>
                    <div className="absolute top-[250px] left-[90%] [20px] size-[50px] border border-[#75797d] rounded-full"></div>
                    <div className="absolute top-[200px] left-[83%] [150px] size-[10px] bg-[#513119]"></div>
                    <div className="absolute top-[100px] left-[93%] [30px] h-[40px] w-[80px] bg-[#303c49] rounded-b-full rotate-[-30deg]"></div>
                {/* doodles end */}
                <div className="space-y-5 text-center w-[90%] m-auto z-0">
                    <motion.span initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}  className="inline-block rounded-full border border-gray-2 p-2 tracking-[3px] text-[8px] md:text-[10px] font-bold text-gray-2">FULLSTACK DEVELOPER</motion.span>
                    <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-bold text-4xl md:text-5xl">Benjamin Likita</motion.h1>
                    <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-[60%] text-center m-auto">I transform ideas into digital realities, focusing on creating unique and engaging experiences for users.</motion.p>
                    <motion.button initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-secondary inline-block md:hidden py-3 px-5 rounded-full font-semibold" onClick={scrollToContact}>Reach out</motion.button>
                </div>
            </section>

            <section className="bg-black-2 py-20 px-5">
                <span className="tracking-[3px] block text-[10px] font-semibold text-gray-2">STACKS</span>
                <p className="font-semibold text-lg">Technologies I Work With</p>
                <div className="pt-3">
                    <Marquee gradientWidth={"120px"} gradient gradientColor="#001122">
                        {
                            stacks.map(stack => (
                                <div key={stack.title} className="border border-gray-2 rounded-2xl size-[170px] md:size-[200px] flex flex-col justify-center items-center space-y-5 mx-5">
                                    <h1 className="text-secondary font-semibold text-lg md:text-xl">{stack.title}</h1>
                                    <stack.icon className="size-[40px] md:size-[50px]" strokeWidth="1" fill="transparent"  color="#F7770F" />
                                </div>
                            ))
                        }
                    </Marquee>
                </div>
            </section>

            <section className="bg-[#162C42] py-20 px-5 space-y-5" id="projects">
                <span className="tracking-[3px] block text-[10px] font-semibold text-center text-gray-2">PROJECTS</span>
                <p className="font-semibold text-center text-lg">Check Out Some of My Recent Work</p>
                <div className="pt-3 flex flex-col gap-3">
                    {
                        projects.map(({ description, image, link, githubUrl, stacks, title }) => (
                            <div key={title} className="border border-gray-2/20 rounded-2xl p-5 bg-black-2 flex flex-col md:flex-row gap-5">
                                <div className="flex-[1] rounded-xl overflow-hidden">
                                    <img src={image} className="object-cover h-[100%]" alt={title} />
                                </div>
                                <div className="flex flex-col flex-[2] space-y-3 gap-10 ustify-between">
                                    <div className="flex flex-col space-y-3">
                                        <h1 className="font-normal md:font-medium text-xl md:text-3xl">{title}</h1>
                                        <p className="text-sm md:text-base">{description}</p>
                                        <div className="flex items-center gap-3">
                                            {
                                                stacks.map(stack => (
                                                    <span className="py-2 px-4 rounded-full border font-light text-sm overflow-hidden" key={stack}>
                                                        {stack}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 mb-0">
                                        <Link to={githubUrl} target="_blank" className="font-light flex items-center gap-1 border-b"><TbBrandGithub /> Github</Link>
                                        <Link to={link} target="_blank" className="font-light flex items-center gap-1 border-b"><TbLink /> Live url</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            
            <section className="bg-black-1 py-20 px-5 space-y-5" id="about">
                <div className="flex flex-col md:flex-row gap-5">
                    <motion.div viewport={{ once: true, amount: .5 }} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="rounded-2xl p-5 bg-black-2 border border-gray-2/10 space-y-3 flex-[3]">
                        <span className="text-sm">👋Hey, I'm</span>
                        <h1 className="text-3xl font-semibold">Benjamin Likita</h1>
                        <div className="space-y-5 text-sm md:text-base">
                            <p>I’m a Computer Science student from Nigeria, currently interning at Partitie Innovation Hub. As a full-stack developer, I focus on building responsive and high-performing applications, leveraging React and Next.js on the frontend. I’m also delving deeper into artificial intelligence, excited by its potential to transform industries and create impactful solutions.</p>

                            <p>With solid experience in cloud technologies, databases, and programming languages like Python and TypeScript, I’m always eager to collaborate on projects that drive real-world value. Outside of work, I enjoy playing online games, watching anime, and sharpening my skills through side projects and learning new technologies.</p>

                            <p>I’m open to connecting and working with like-minded individuals to bring innovative ideas to life!</p>
                        </div>
                    </motion.div>
                    <motion.div viewport={{ once: true, amount: .5 }} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="rounded-2xl p-5 bg-black-2 border border-gray-2/10 space-y-3 flex-[2] grid place-items-center relative overflow-hidden">
                        {/* doodles start */}
                        <div className="absolute top-[10%] [20px] left-[10%] [850px] size-10 border border-[#513119] before:size-10 before:absolute before:bg-[#303c49] before:top-[30%] before:right-[30%]"></div>
                        <div className="absolute top-[10%] [20px] left-[80%] [30px] h-[40px] w-[80px] bg-[#303c49] rounded-b-full rotate-[-30deg]"></div>
                        <div className="absolute top-[45%] [180px] left-[10%] [150px] size-[10px] bg-[#513119]"></div>
                        <div className="absolute top-[70%] [240px] left-[10%] [30px] size-[40px] bg-[#303c49] rounded-full"></div>
                        <div className="absolute top-[50%] [180px] right-[-2%] [150px] size-[50px] bg-[#513119] rotate-[45deg]"></div>
                        <div className="absolute top-[80%] [300px] left-[80%] [30px] size-[40px] border border-[#303c49] rounded-full"></div>
                        <div className="absolute bottom-[2%] left-[40%] [150px] h-[5px] w-[30px] bg-[#513119]"></div>
                        {/* doodles end */}
                        <img src="./profile_pic.jpeg" className="rounded-full w-[50%] border-[4px] border-[#513119] brightness-75" alt="profile_image" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3">
                    {
                        socials.map((social, idx) => (
                            <motion.div viewport={{ once: true, amount: .5 }} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx / 5, type: 'spring', bounce: .6 }}>
                                <Link to={social.link} key={social.name} className="border border-gray-2/20 rounded-xl flex justify-center items-center p-5 gap-3 hover:scale-105 transition-all duration-300 cursor-pointer bg-black-2">
                                    <social.icon size={30} strokeWidth="1" fill="transparent" /><p>{social.name}</p>
                                </Link>
                            </motion.div>
                        ))
                    }
                </div>
            </section>

            <section className="bg-black-2 px-5 py-20" id="contact">
                <div className="flex flex-col md:flex-row gap-10 items-center">

                    <motion.div viewport={{ once: true, amount: .5 }} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="space-y-5">
                        <h1 className="font-bold text-3xl">Let's talk?</h1>
                        <p>If you have any questions, proposals, or just want to have a chat, feel free to get in touch.</p>
                        <Link to={"mailto:benjaminlikita3@gmail.com"} className="border border-gray-2/20 rounded-xl flex justify-center items-center p-5 gap-3 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <TbMail size={30} strokeWidth="1" /><p>Mail</p>
                        </Link>
                        <Link to={"https://wa.me/+2348104156868"} className="border border-gray-2/20 rounded-xl flex justify-center items-center p-5 gap-3 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <TbBrandWhatsapp size={30} strokeWidth="1" /><p>Whatsapp</p>
                        </Link>
                    </motion.div>

                    <hr className="h-[1px] md:h-[500px] w-[100%] md:w-[2px] bg-gray-2/20 border-none block " />

                    <motion.div viewport={{ once: true, amount: .5 }} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="flex-grow w-full">
                        <form onSubmit={onsubmit} className="space-y-5">
                            <div className="space-y-1">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Insert your name" className="bg-gray-5 p-3 rounded-xl border border-gray-2/20 w-full" value={formData.name} onChange={onchange} required/>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" placeholder="Insert your e-mail" className="bg-gray-5 p-3 rounded-xl border border-gray-2/20 w-full" value={formData.email} onChange={onchange} required/>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="message">Message</label>
                                <textarea rows={5} name="message" id="message" placeholder="Write your message" className="bg-gray-5 p-3 rounded-xl border border-gray-2/20 w-full resize-none" value={formData.message} onChange={onchange} required />
                            </div>

                            <input type="submit" value="Send Message" className="border border-gray-2/40 py-4 px-6 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer" />
                        </form> 
                    </motion.div>
                </div>
            </section>
        </MotionConfig>
    </main>

  )
}

export default PortfolioPage