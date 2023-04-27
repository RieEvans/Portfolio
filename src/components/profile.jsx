import React, { useRef } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.vite'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import {Fade} from 'react-reveal'

import axios from 'axios'
import FileDownload from 'js-file-download'




const Profile = () => {

    const home = useRef(null)
    const projects = useRef(null)
    const abouts = useRef(null)
    const contacts = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:'smooth'
        })
    }
    
    
    const menuRef = useRef(); //useRef hook 
    const [open, setOpen] = useState(false) // for toggle menu button 

    useEffect(() => {
        let handler = (e) => {

            if(!menuRef.current.contains(e.target)){
                setOpen(false)
            }
        }

        document.addEventListener("mouseover", handler);

        return () => {
            document.removeEventListener("mouseover", handler);
        }

    })


    
    const {ref, inView} = useInView();
    const animation = useAnimation();  // for scrolling animation
    const animation2 = useAnimation(); // for scrolling animation 
   
    useEffect(() => {
        if(inView){
            animation.start({
                x:0,
                transition: {
                    type:'spring', duration:1 , bounce:0.5
                }
            })
           console.log(inView)
        }

        if(!inView){
            animation.start({
                x:50,
                duration:1, 
                bounce:0.5
            })

            console.log(inView)
        }
        

    },[inView])


    useEffect(() => {
        if(inView){
            animation2.start({
                y:0,
                transition: {
                    type:'spring', 
                    duration:2, 
                    fade:5
                }
            })
        }

        if(!inView){
            animation2.start({
                y:50,
                duration:1, 
                fade:5
            })
        }
    },[inView])

    

    const download = (e) => {
        e.preventDefault()
        axios({
            url:"http://localhost:4000",
            method:"GET",
            responseType:"blob",
        }).then((res) => {
            console.log(res)
            FileDownload(res.data,"resume.pdf")
        })
    }
   

  return (

    
        <div className='container'>

            <div className='navbar'>
                <div className='navbar-margin'>

                    <a href="#">Rie Evans</a>

                    <ul>
                        <li className='link'><a onClick={() => {scrollToSection(home)}} >Home</a> </li>
                        <li className='link'><a onClick={() => {scrollToSection(projects)}} >Projects</a> </li>
                        <li className='link'><a onClick={() => {scrollToSection(abouts)}}  >Abouts</a> </li>
                        <li className='link'><a onClick={() => {scrollToSection(contacts)}} >Contact Details</a> </li>
                    </ul>

                    <a onClick={() => {setOpen(!open)}}  href="#"><FontAwesomeIcon className='bars' icon={faBars}></FontAwesomeIcon></a>
                
                </div>
                
                

            </div>

            <div className={`menu ${open ? 'active' : 'inactive'}`} >

                <div ref={menuRef} className='list'>

                    <ul>
                        <li className='link'><a onClick={() => {scrollToSection(home)}} >Home</a> </li>
                        <li className='link'><a onClick={() => {scrollToSection(projects)}} >Projects</a> </li>
                        <li className='link'><a onClick={() => {scrollToSection(abouts)}}  >Abouts</a> </li>
                        <li className='link'><a onClick={() => {scrollToSection(contacts)}} >Contact Details</a> </li>
                    </ul>

                </div>

            </div>

            

            <div ref={home} className='home'>

                <div ref={ref} className='name-section'>
                    <p>Hello I'm</p>
                    <motion.h1 animate = {animation}
                        
                        >Riejan Evangelista
                    </motion.h1>
                    <p>Aspiring Web Developer</p>


                    <div className='socialmedia'>
                        <a className='github' href="https://github.com/RieEvans"><img src="/images/github-logo.png" /></a>
                        <a className='facebook' href="#"><img src="/images/facebook-logo.png" /></a>
                    </div>


                </div>

                <div className='welcome-section'>

                    <motion.h1 animate={animation2}>Welcome to my Portfolio</motion.h1>
                    <button className='btn' onClick={(e) => download(e)}>Resume</button>

                </div>

            </div>

            <div ref={projects} className='projects'>
            
                <h1>Projects</h1>

                <div className='projList'>

                    <Fade left>

                    <div className='proj'>
                        <div  className='img'>
                            <img  src="/images/ciscoproj.png" alt="" />
                        </div>

                        <div className='projContent'>
                            <h2>CCNA Fundamentals Module</h2>
                            <p>Created using HTML CSS JS</p>
                            <a href="https://rieevans.github.io/CiscoModuleWeb/"><button>View Project</button></a>
                            
                        </div>
                        
                    </div>

                    </Fade>

                    <Fade right>
                        <div className='proj'>

                            <div  className='img'>
                                <img  src="/images/NFT2.png" alt="" />
                            </div>

                            <div className='projContent'>
                                <h2>NFT Dashboard</h2>
                                <p>Created using HTML CSS JS</p>
                                <a href="https://rieevans.github.io/getCoins/"><button>View Project</button></a>

                            </div>

                        </div>

                    </Fade>

                    <Fade left >
                    <div className='proj'>
                        <div className='img'>
                            <img src="/images/jobhunt.png" alt="" />
                        </div>

                        <div className='projContent'>
                            <h2>Job Hunt Portal</h2>
                            <p>Created using HTML CSS JS</p>
                            <a href="https://rieevans.github.io/jobportal.github.io/index.html"><button>View Project</button></a>
                        </div>
                        
                    </div>

                    </Fade>
                   
                    
                    
                </div>

            </div>


            <div ref={abouts} className='abouts'>

                <h1>About me</h1>

                <div className='abt-ints'>

                    <Fade left>
                        <div className='profile'>
                            <img  src="/images/profile2.png" alt="" />
                        </div>
                    </Fade>
                    
                
                <Fade>
                    <div className='abt-content'>

                        <p>
                            I am <strong>Riejan Cyrus Evangelista</strong>, a fourth-year college student at ICCT Colleges in Cainta, Rizal. I am currently taking a Bachelor of Science degree in Computer Engineering. I started my web development career during the pandemic when I was feeling bored. 
                            While browsing TikTok, I saw some IT content creators flexing their projects. 
                            Due to my curiosity, I started to self-study basic design, HTML CSS structure, 
                            and JavaScript. Until my curiosity turned into a passion. I want to express my creativity and logic to create Websites 
                            and apply it to the real world.   
                        </p>

                    </div>
                </Fade>
                    

                </div>

                <div className='skillsection'>

                    <div className='skill'>

                        <div className='title'>
                            <h2>Skills</h2>
                        </div>

                        <div className='skillsList'>
                                <h2>Web Development</h2>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>REACT JS</li>
                        </div>

                        <div className='skillsList'>

                                <h2>Electronics</h2>
                                <li>Arduino</li>
                                <li>Java</li>
                        </div>

                        
                        

                    </div>

                </div>

            </div>

            <div ref={contacts} className='contact'>

                <h1>Get in Touch</h1>

                <div className='contactInfo'>
                    <h3><strong>Email:</strong></h3>
                    <p>riejanevangelista1620@gmail.com</p>
                </div>

                <div className='contactInfo'>
                    <h3><strong>Phone #:</strong></h3>
                    <p>09217446017</p>
                </div>


    </div>


            


        </div>
    
  )
}

export default Profile