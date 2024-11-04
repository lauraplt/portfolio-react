import React from "react"
import './MyWork.css'
import mywork_data from '../../assets/mywork_data.jsx'

const MyWork = () => {
    return (
        <div>
         <div className="mywork">
            <div className="mywork-title">
                <h1>My work</h1>
            </div>
         </div>
         <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />

        })}

         </div>
        </div>
    )
}

export default MyWork