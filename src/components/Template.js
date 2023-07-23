import React, { useState } from 'react'
import { GatsbyImage } from "gatsby-plugin-image"


function Template({title, image}) {
    const [modalStatus, setModalStatus] = useState('closed');

    const openModal = () => {
        setModalStatus('open');
    }

    const closeModal = () => {
        setModalStatus('closed');
    }


    return (
        <div className="template">
            <div className="theme-img" onClick={e => { e.stopPropagation(); openModal();}}>
                <GatsbyImage image={image} title={title} />
            </div>
            <h2>{title}</h2>
            <div className={`img-modal ${modalStatus}`}>
                <div className="button-container">
                    <span onClick={closeModal}>X</span>
                </div>
                <div className="modal-img">
                    <GatsbyImage image={image} width="550" title={title} />
                </div>
            </div>
        </div>
    )
}

export default Template

