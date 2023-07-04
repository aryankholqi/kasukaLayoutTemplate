import React, { useRef } from 'react'
import "./Collabration.css"

export default function Collabration() {
    const collabrators = useRef([
        { id: 1, src: "./images/Collabrators/Belimo.png" },
        { id: 2, src: "./images/Collabrators/Citrus.png" },
        { id: 3, src: "./images/Collabrators/Grabyo.png" },
        { id: 4, src: "./images/Collabrators/Lilly.png" },
        { id: 5, src: "./images/Collabrators/Myob.png" },
    ])
    return (
        <div className='collabs-box'>
            {collabrators.current.map((collab) => (
                <div className='collab-img' key={collab.id}>
                    <img src={collab.src} alt="logo" key={collab.id} className='collab-img-img'/>
                </div>
            ))}
        </div>
    )
}
