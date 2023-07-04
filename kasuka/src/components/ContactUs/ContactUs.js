import React, { useRef, useState } from 'react'
import "./ContactUs.css"
import contactDatas from './contactDatas'
import { json } from 'react-router-dom'

export default function ContactUs() {
    const contactInfo = useRef(contactDatas)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const idCounter = useRef(1)
    const usernameInput = useRef()
    const emailInput = useRef()
    const titleInput = useRef()
    const detailInput = useRef()
    const submitFormHandler = (event)=>{
        event.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            body:JSON.stringify({
                id:idCounter.current,
                userName:name,
                userEmail:email,
                issueTitle:title,
                issueDetail:detail
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response)=>{
            return response.json()
        })
        setName("")
        usernameInput.current.value = ""
        setEmail("")
        emailInput.current.value = ""
        setTitle("")
        titleInput.current.value = ""
        setDetail("")
        detailInput.current.value = ""
    }
    return (
        <div className='container'>
            <div className='contac-us-title'>
                <p className='text-warning text-right'>تماس با ما</p>
                <h1 className='text-right'>با ما تماس بگیرید</h1>
            </div>
            <div className='google-map-section mt-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" className='google-map w-100'></iframe>
            </div>
            <div className='row mt-5'>
                <div className='col-md-4'>
                    <div className='location d-flex align-items-center mb-4'>
                        <button type='button' className='contact-btn'><i className="bi bi-geo-alt contact-icon"></i></button>
                        <div className='location-info text-right mr-3'>
                            <h4>مکان:</h4>
                            <small className='text-muted'>{contactInfo.current.location}</small>
                        </div>
                    </div>
                    <div className='email d-flex align-items-center mb-4'>
                        <button type='button' className='contact-btn'><i className="bi bi-envelope contact-icon"></i></button>
                        <div className='email-info text-right mr-3'>
                            <h4>ایمیل:</h4>
                            <small className='text-muted'>{contactInfo.current.email}</small>
                        </div>
                    </div>
                    <div className='phone d-flex align-items-center'>
                        <button type='button' className='contact-btn'><i className="bi bi-geo-alt contact-icon"></i></button>
                        <div className='phone-info text-right mr-3'>
                            <h4>شماره تماس:</h4>
                            <small className='text-muted'>{contactInfo.current.phone}</small>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <form onSubmit={(event)=>submitFormHandler(event)}>
                        <div className='d-flex'>
                            <input type="text" placeholder='نام' className='ml-3 p-2 w-50' onChange={(event)=>setName(event.target.value)} ref={usernameInput}/>
                            <input type="email" placeholder='ایمیل' className='w-50 p-2' onChange={(event)=>setEmail(event.target.value)} ref={emailInput}/>
                        </div>
                        <input type="text" placeholder='عنوان' className='mt-3 p-2 w-100' onChange={(event)=>setTitle(event.target.value)} ref={titleInput}/>
                        <textarea cols="30" rows="5" placeholder='پیام' className='mt-3 w-100 p-2' onChange={(event)=>setDetail(event.target.value)} ref={detailInput}></textarea>
                        <button type='submit' className='btn contact-submit-btn mt-3'>ارسال پیام</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
