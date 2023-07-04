import React, { useRef } from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'
import Box from './Box'

export default function Header() {
    const boxes = useRef([
        { id: 1, icon: "bi bi-shop-window", title: "متن نمایشی" },
        { id: 2, icon: "bi bi-graph-up", title: "نمودار کیفی" },
        { id: 3, icon: "bi bi-calendar2", title: "نمونه کارها" },
        { id: 4, icon: "bi bi-brush", title: "عملکرد های پایانی" },
        { id: 5, icon: "bi bi-database", title: "اطلاعات ذخیره شده" },
    ])
    return (
        <>

            <div className='header-img'>
                <Navbar />
                <div className='header-context'>
                    <h1 className='header-title'>راه حل های قدرتمند دیجیتال با <br /><span className='header-title-brand'>Kasuka</span></h1>
                    <h5 className='header-sub-title'>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h5>
                </div>
                <div className='header-boxes'>
                    {boxes.current.map((box) => (
                        <Box icon={box.icon} title={box.title} key={box.id} />
                    ))}
                </div>
            </div>
        </>
    )
}
