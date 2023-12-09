import { useState } from "react"
import Links from "./links/Links"
import { motion } from "framer-motion"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        open: {
          clipPath: "circle(1200px at 50px 50px)",
          transition: {
            duration: 0.7, 
            ease: "linear", 
          },
        },
        closed: {
          clipPath: "circle(0px at 50px 50px)",
          transition: {
            duration: 0.5, 
            ease: "linear", 
          },
        },
      };
      
  return <motion.div className="sidebar" animate={open ? "open" : "closed"} >
        <motion.div className="bg" variants={variants} >
        <Links setOpen={setOpen} />
        </motion.div>
        
        <ToggleButton setOpen={setOpen}/>

    </motion.div>
  
};

export default Sidebar;