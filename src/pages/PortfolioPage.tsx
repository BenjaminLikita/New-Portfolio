import Marquee from "react-fast-marquee"
import {TbBrandJavascript, TbBrandTypescript, TbBrandReact, TbBrandNodejs, TbBrandVite, TbBrandNextjs, TbBrandGithub, TbBrandGit, TbBrandDocker, TbBrandHtml5, TbBrandLinkedin, TbBrandX} from "react-icons/tb"
import {SiNestjs} from "react-icons/si"
import { Link } from "react-router-dom"


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
    ]

    const socials = [
        {name: "Linkedin", icon: TbBrandLinkedin, link: "https://www.linkedin.com/in/benjamin-likita-0b0b3b1b0/"},
        {name: "Github", icon: TbBrandGithub, link: "https://github.com/BenjaminLikita"},
        {name: "X", icon: TbBrandX, link: "https://github.com/BenjaminLikita"}
    ]
  return (
    <main className="text-white">
        <section className="bg-black-1 grid place-items-center h-[80vh]">
            <div className="space-y-5 text-center">
                <span className="rounded-full border-[2px] border-gray-2 p-2 tracking-[3px] text-[10px] font-bold text-gray-2">FULLSTACK DEVELOPER</span>
                <h1 className="font-bold text-5xl">Benjamin Likita</h1>
                <p className="w-[60%] text-center m-auto">I transform ideas into digital realities, focusing on creating unique and engaging experiences for users.</p>
                <button className="bg-secondary py-3 px-5 rounded-full font-semibold">Reach out</button>
            </div>
        </section>

        <section className="bg-black-2 py-20 px-10">
            <span className="tracking-[3px] block text-[10px] font-semibold text-gray-2">STACKS</span>
            <p className="font-semibold text-lg">Technologies I Work With</p>
            <div className="pt-3">
                <Marquee gradientWidth={"300px"} gradient gradientColor="#001122">
                    {
                        stacks.map(stack => (
                            <div className="border border-gray-2 rounded-2xl size-[200px] flex flex-col justify-center items-center space-y-5 mx-5">
                                <h1 className="text-secondary font-semibold text-xl">{stack.title}</h1>
                                <stack.icon size={50} strokeWidth="1" fill="transparent"  color="#F7770F" />
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </section>

        <section className="bg-gray1 bg-[#162C42] py-20 px-10 space-y-5">
            <span className="tracking-[3px] block text-[10px] font-semibold text-center text-gray-2">PROJECTS</span>
            <p className="font-semibold text-center text-lg">Check Out Some of My Recent Work</p>
            <div className="pt-3">
                project cards
            </div>
        </section>

        <section className="bg-black-1 py-20 px-10 space-y-5 ">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="rounded-2xl p-5 bg-black-2 border-[2px] border-gray-1/10 space-y-3 flex-[3]">
                    <span className="text-sm">👋Hey, I'm</span>
                    <h1 className="text-3xl font-semibold">Benjamin Likita</h1>
                    <div className="space-y-5">
                        <p>Meow</p>
                        <p>Meow</p>
                        <p>Meow</p>
                    </div>
                </div>
                <div className="rounded-2xl p-5 bg-black-2 border-[2px] border-gray-1/10 space-y-3 flex-[2]">
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3">
                {
                    socials.map(social => (
                        <Link to={social.link} className="border border-gray-1/20 rounded-xl flex justify-center items-center p-5 gap-3 hover:scale-105 transition-all duration-300 cursor-pointer bg-black-2">
                            <social.icon size={30} strokeWidth="1" fill="transparent" /><p>{social.name}</p>
                        </Link>
                    ))
                }
            </div>

        </section>
    </main>
  )
}

export default PortfolioPage