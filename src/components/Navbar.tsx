import { useState } from "react"
import { Link } from "react-router-dom"
import close from "../assets/xmark-solid.svg"
import menu from "../assets/bars-solid.svg"


const Navbar = () => {
  const links = [
    {name: "Home"},
    {name: "Projects"},
    {name: "About"},
  ]
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <nav className="fixed top-2 md:top-5 left-[50%] -translate-x-[50%] bg-gray-1 w-[95%] md:w-[80%] rounded-[50px] border border-gray-2 m-auto py-3 px-7 z-[30] flex justify-between items-center gap-5">
        {/* <img src="./profile_pic.jpeg" className="w-[50px] rounded-full mr-10" alt="pp" /> */}
        <h1 className="title font-bold text-white text-3xl md:text-5xl">benji</h1>
        <div className="flex-grow hidden md:flex justify-center items-center gap-10 font-semibold text-white">
          {
            links.map(({name}) => (
              <Link key={name} to={""} className="hover:text-secondary transition-all duration-300">{name}</Link>
            ))
          }
        </div>
        <Link to={""} className="bg-secondary text-white py-3 px-5 rounded-full font-semibold hidden md:inline-block">Reach out</Link>
        <div className="block md:hidden">
          {isOpen ? <img src={close} className="size-[30px] cursor-pointer" alt="close" onClick={() => setIsOpen(false)} /> : <img src={menu} className="size-[30px] cursor-pointer" alt="menu" onClick={() => setIsOpen(true)} />}
        </div>
      </nav>

      <div className={`fixed left-[50%] -translate-x-[50%] bg-gray-1 text-white font-medium text-xl space-y-5 w-[95%] md:w-[80%] rounded-3xl border border-gray-2 m-auto py-7 px-10 z-[30] transition-all duration-700 ${isOpen ? "top-20 opacity-100" : "top-[-100%] opacity-0"}`}>
        {
          links.map(({name}) => (
            <Link key={name} to={""} className="hover:text-secondary hover:border-b-secondary mx-10 border-b block text-center transition-all duration-300">{name}</Link>
          ))
        }
      </div>
    </>
  )
}

export default Navbar