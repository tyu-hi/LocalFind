import NavBar from '../components/NavBar'
import christine from "../components/christine.jpg"
import david from "../components/david.png"
import ina from "../components/ina.png"
import aparna from "../components/aparna.jpg"
import inman from "../components/inman.jpg"
import kasie from "../components/kasie.jpg"
import noey from "../components/noey.jpg"
import rohan from "../components/rohan.jpeg"
import sophia from "../components/sophia.jpg"
import tingyu from "../components/tingyu.png"
import naomi from "../components/naomi.jpg"

import { useNavigate } from "react-router-dom";



const AboutPage = () => {

  const navigate = useNavigate();

  return (
    <div>
        <NavBar/>

        <h1 className='about-title'>Local Find</h1>
        <p className='about-description'>We are local food hunt apps that recommend authentic local street vendors/food 
          trucks/small restaurants to the users. This project aims to increase local food owners' 
          brand visibility to the customers as the leading food reviews website often shows franchises 
          and high end popular restaurants. Therefore, the function of this project includes search functions 
          for different types of foods where multiple tags are used to narrow down relevant local vendors. The apps also 
          include built-in maps where customers can locate their destination and receive restaurant recommendations along 
          their commute.</p>
        <h2 className='about-team'>Team</h2>
        <div className='frame leads'>
        <img src={noey} className='circle'></img>
        <p className='name noey'>Noey Chinvittayakul</p>
        <p className='position plead'>Project Lead</p>
        <img src={rohan} className='circle'></img>
        <p className='name rohan'>Rohan Gandhi</p>
        <p className='position pm'>Project Manager</p>
        </div>
        <div className='frame marketing'>
        <img src={sophia} className='circle'></img>
        <p className='name sophia'>Sophia Nguyen</p>
        <p className='position plead'>Marketing</p>
        <img src={ina} className='circle'></img>
        <p className='name rohan'>Ina Chang</p>
        <p className='position pm'>Marketing</p>
        </div>
        <div className='frame ui-ux'>
        <img src={kasie} className='circle'></img>
        <p className='name kasie'>Kasie Yang</p>
        <p className='position plead'>UI/UX</p>
        <img src={christine} className='circle'></img>
        <p className='name christine'>Christine Han</p>
        <p className='position pm'>UI/UX</p>
        </div>
        <div className='frame dev'>
        <img src={tingyu} className='circle'></img>
        <p className='name sophia'>Tingyu Gong</p>
        <p className='position plead'>Frontend</p>
        <img src={inman} className='circle'></img>
        <p className='name inman'>Inman Costa</p>
        <p className='position pm'>Frontend</p>
        <img src={aparna} className='circle'></img>
        <p className='name aparna'>Aparna Hariharan</p>
        <p className='position dev-1'>Frontend</p>
        <img src={david} className='circle'></img>
        <p className='name david'>David Sai</p>
        <p className='position dev-2'>Backend</p>
        <img src={naomi} className='circle'></img>
        <p className='name naomi'>Naomi Gong</p>
        <p className='position dev-3'>Backend</p>
        </div>
    </div>
  )
}

export default AboutPage