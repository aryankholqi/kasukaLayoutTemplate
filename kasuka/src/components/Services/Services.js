import React, { Fragment, useRef } from 'react'
import "./Services.css"
import Calling from './Calling'

export default function Services() {
    const services = useRef([
        { id: 1, src: "bi bi-balloon", title: "لورم اپیسوم", text: "برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد" },
        { id: 2, src: "bi bi-file-earmark-text", title: "اما همانطور که مشاهده می کنید", text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { id: 3, src: "bi bi-stopwatch", title: "درد های بزرگ", text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { id: 4, src: "bi bi-globe-americas", title: "هیچکس دیگر", text: "اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم" },
        { id: 5, src: "bi bi-tv", title: "لولا را پاک کنید", text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" },
        { id: 6, src: "bi bi-truck", title: "دیوان دان", text: "روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد" },
    ])
    return (
        <Fragment>
            <div className='container'>
                <div className='services-title'>
                    <p className='text-muted'>خدمات</p>
                    <h2>خدمات ما را بررسی کنید</h2>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        {services.current.slice(0, 2).map((service) => (
                            <div className='service-box' key={service.id}>
                                <i className={service.src}></i>
                                <h4 className='service-title'>{service.title}</h4>
                                <p className='service-text text-muted'>{service.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className='col-md-4'>
                        {services.current.slice(2, 4).map((service) => (
                            <div className='service-box' key={service.id}>
                                <i className={service.src}></i>
                                <h4 className='service-title'>{service.title}</h4>
                                <p className='service-text text-muted'>{service.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className='col-md-4'>
                        {services.current.slice(4, 6).map((service) => (
                            <div className='service-box' key={service.id}>
                                <i className={service.src}></i>
                                <h4 className='service-title'>{service.title}</h4>
                                <p className='service-text text-muted'>{service.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Calling />
        </Fragment>
    )
}
