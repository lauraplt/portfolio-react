import React from 'react'
import './About.css'

import profile_img from '../../assets/profile_img.svg'

const About = () => {
    return ( 
        <div className='about' >
            <div className="about-title">
                <h1>About me</h1>
            </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, illum ipsum ducimus laboriosam consequuntur odit. Officia voluptas, aliquid aliquam ratione est cupiditate assumenda inventore laboriosam qui odit eveniet, consequuntur debitis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus deserunt quis illum odio, alias minima nostrum ipsam tempore repudiandae. Exercitationem numquam fuga qui consequuntur rerum animi, dolore atque iure?</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"> <p> HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"> <p> React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"> <p> JavaScript</p><hr style={{width:"60%"}}/></div>
            </div>
        </div>
    </div>

        </div>
    )
}

export default About 
