import "../intro/intro.css"
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from "../floatingDiv/floatingDiv"
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion'


const Intro = () => {

  const transition = { duration: 2, type: 'spring' }

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="intro">

      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am </span>
          <span>Niranjan B N</span>
          <span>MERN STACK Developer with good
            knowledge in web designing and development,
            producting the Quality work</span>
        </div>

        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRHrHHPnrRskgdRSWHgXvGdDTLtrrXzsMsrcdhBMXZnWzMFntQgRplDCZrzjDvGFMCrFL" target="_blank">  <button className="button i-button"> Hire me</button></a>
        <div className="i-icons">
          <a href="https://github.com/NiranjanVeerashaiva?tab=repositories" target="_blank">  <img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/niranjan-b-n-96b6bb224/" target="_blank">    <img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/niranjan__veerashaiva/" target="_blank">   <img src={Instagram} alt="" /></a>
        </div>

      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={glassesimoji}
          src={glassesimoji} alt="" />

        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}

          style={{ top: '-4%', left: '68%' }}
          className="floating-div">
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
        </motion.div>

        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}

          style={{ top: '18rem', left: '0rem' }}
          className="floating-div"
        >
        </motion.div>



      </div>
    </div>
  );
}

export default Intro;