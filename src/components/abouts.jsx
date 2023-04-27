import React from 'react'
import {Fade} from 'react-reveal'

export const Abouts = () => {
  return (

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
  )
}
