import React from 'react'
import {Fade} from 'react-reveal'

export const Projects = () => {
  return (

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
  )
}
