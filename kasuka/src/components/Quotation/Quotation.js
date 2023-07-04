import React, { Fragment, useEffect, useRef, useState } from 'react'
import quotationMember from './quotationDatas'
import "./Quotation.css"

export default function Quotation() {
    const members = useRef(quotationMember)
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            if (count == members.current.length-1) {
                setCount(0)
            } else {
                setCount((prevCount)=>{
                    return prevCount + 1
                })
            }
        },4000)
        return () => {
            clearInterval(intervalId)
        }
    },[count])
    return (
        <Fragment>
            <div className='quotation-section'>
                <div className='profile rounded-circle'>
                    <img src={quotationMember[count].src} alt="logo" className='profile-img rounded-circle'/>
                </div>
                <h4 className='full-name'>{quotationMember[count].name}</h4>
                <small className='position text-muted'>{quotationMember[count].position}</small>
                <p className='quote'>{quotationMember[count].text}</p>
            </div>
        </Fragment>
    )
}
