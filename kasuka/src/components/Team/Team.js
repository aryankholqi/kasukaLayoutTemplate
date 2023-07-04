import React, { Fragment, useState } from 'react'
import teamMembers from './teamDatas'
import "./Team.css"
export default function Team() {
    const [team, setTeam] = useState(teamMembers)
    return (
        <Fragment>
            <div className='container '>
                <p className='text-warning text-right mb-0'>تیم</p>
                <h1 className='text-right mb-5'>تیم ما را بررسی کنید</h1>
                <div className='team d-flex justify-content-around'>
                    {team.map((member) => (
                        <div className='team-member-box' key={member.id}>
                            <div className='team-member-img w-100 ml-4'>
                                <img src={member.src} alt="member" className='img-fluid' />
                            </div>
                            <div className='team-member-info text-right mt-2 pr-2'>
                                <h5 className='team-member-name mb-0'>{member.name}</h5>
                                <small className='text-muted'>{member.position}</small>
                            </div>
                            <div className='social-medias d-flex justify-content-center'>
                                <button type='button' className='social-media-btn ml-2'><i className="bi bi-twitter social-media-icon"></i></button>
                                <button type='button' className='social-media-btn ml-2'><i className="bi bi-facebook social-media-icon"></i></button>
                                <button type='button' className='social-media-btn ml-2'><i className="bi bi-instagram social-media-icon"></i></button>
                                <button type='button' className='social-media-btn ml-2'><i className="bi bi-linkedin social-media-icon"></i></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}
