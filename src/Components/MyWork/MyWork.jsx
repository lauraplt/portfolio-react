'use client'

import React, { useState } from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data.jsx'

// Composant Modal
const Modal = ({ isOpen, onClose, work }) => {
  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>{work.title}</h2>
        <p>{work.description}</p>
        <div className="modal-actions">
          <a
            href={work.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="cta github-cta"
          >
            See the project on GitHub
          </a>
          <button onClick={onClose} className="cta close-cta">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

const MyWork = () => {
  const [selectedWork, setSelectedWork] = useState(null)

  const openModal = (work) => {
    setSelectedWork(work)
  }

  const closeModal = () => {
    setSelectedWork(null)
  }

  return (
    <div id="mywork-block" className="mywork-block">
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
              <button onClick={() => openModal(work)} className="cta">
                See more
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={!!selectedWork} onClose={closeModal} work={selectedWork} />
    </div>
  )
}

export default MyWork