import React, { Fragment, useRef } from 'react'
import "./Achivment.css"

export default function Achivment() {
    const customers = useRef(65)
    const experience = useRef(35)
    const projects = useRef(85)
    const awards = useRef(20)
    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="./images/Achivment/achiv-pic.jpg" alt="achivment" className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <h1 className='achiv-title'>شایسته ترین لذت را به هر حال ارائه می دهد</h1>
                        <p className='achiv-sub-title'>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
                        <div className='row mt-5'>
                            <div className='col-md-6 text-right'>
                                <div className='mb-5'>
                                    <i className="bi bi-emoji-smile ml-3"></i><span className='font-weight-bold customers'>{customers.current}</span>
                                    <p>مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.</p>
                                </div>
                                <div>
                                    <i className="bi bi-clock ml-3"></i><span className='font-weight-bold customers'>{experience.current}</span>
                                    <p>سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد</p>
                                </div>
                            </div>
                            <div className='col-md-6 text-right'>
                                <div>
                                    <i className="bi bi-file-earmark-image ml-3"></i><span className='font-weight-bold customers'>{projects.current}</span>
                                    <p>پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد</p>
                                </div>
                                <div>
                                    <i className="bi bi-award ml-3"></i><span className='font-weight-bold customers'>{awards.current}</span>
                                    <p>جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}