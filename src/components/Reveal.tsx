import {useRef, useEffect} from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';


interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    animate: "slide-left" | "slide-right" | "slide-up" | "slide-down",
    delay?: number,
    className?: string
}

function Reveal({children, width = "fit-content", animate, delay = .15, className}: Props) {

    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    const slideUpVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    }
    const slideDownVariants = {
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
    }
    const slideLeftVariants = {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
    }
    const slideRightVariants = {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
    }

    const variants = () => {
        if(animate === "slide-left"){
            return slideLeftVariants
        }
        else if(animate === "slide-right"){
            return slideRightVariants
        }
        if(animate === "slide-up"){
            return slideUpVariants
        }
        if(animate === "slide-down"){
            return slideDownVariants
        }
    }

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
        // else{
        //     mainControls.start("hidden")
        //     slideControls.start("hidden")
        // }
    }, [isInView])

  return (
    <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
      <motion.div
      variants={variants()}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: .8, delay: delay}}
      className={className}
      >{children}</motion.div>
      {/* <motion.div
      variants={{
        hidden: { left: 0 },
        visible: { left: "100%" },
      }}
      initial="hidden"
      animate={slideControls}
      transition={{ duration: .75, ease: "easeIn" }}
      style={{
        position: "absolute",
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background: "#c8f279",
        zIndex: 20
      }}
      ></motion.div> */}
    </div>
  )
}

export default Reveal
