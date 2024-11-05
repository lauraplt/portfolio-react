import React from "react";
import './MyWork.css';
import mywork_data from '../../assets/mywork_data.jsx';

const MyWork = () => {
    return (
        <div className="mywork-block">
            <div className="mywork">
                <div className="mywork-title">
                    <h1>My work</h1>
                </div>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div className="mywork-item" key={index}>
                        <img src={work.w_img} alt="Project Thumbnail" />
                        <div className="overlay">
                            <p>{work.tech_stack}</p> 
                            <a href={work.github_link} target="_blank" rel="noopener noreferrer" className="cta">
                                See more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyWork;
