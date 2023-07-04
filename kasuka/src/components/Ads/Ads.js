import React, { useRef } from 'react'
import "./Ads.css"

export default function Ads() {
    const adsContext = useRef([
        {id:1,title:"تبلیغ سختی است",text:"نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",icon:"bi bi-file-earmark-text-fill"},
        {id:2,title:"کدام یک از اینهاست",text:"کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند",icon:"bi bi-box"},
        {id:3,title:"یا کور شده است",text:"یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند",icon:"bi bi-images"},
        {id:4,title:"حقیقت مبارک",text:"آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند",icon:"bi bi-quote"},
    ])
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 ads-img'>
                <img src="./images/Ads/ads.webp" alt="ads" className='img-fluid'/>
            </div>
            <div className='col-md-6'>
                {adsContext.current.map((ad)=>(
                    <div className='ad-box' key={ad.id}>
                        <i className={ad.icon}></i>
                        <div className='ad-context'>
                            <h3 className='ad-title'>{ad.title}</h3>
                            <p className='text-muted ad-text'>{ad.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
