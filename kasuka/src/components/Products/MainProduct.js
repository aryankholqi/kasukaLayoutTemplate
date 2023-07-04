import React, { Fragment, useState } from 'react'
import "./MainProduct.css"
import productDatas from './productDatas'
import Navbar from "../Navbar/Navbar"
import { useParams, Link } from 'react-router-dom'

export default function MainProduct() {
  const [products, setProducts] = useState(productDatas)
  let params = useParams()
  let mainProduct = products.find((product) => {
    return Number(params.id) === product.id
  })
  return (
    <Fragment>
      <Navbar />
      <div className='d-flex align-items-center justify-content-between links-section p-3'>
        <h2 className='work-title mx-3'>جزئیات نمونه کارها</h2>
        <p className='mx-4 mb-0'><Link to="/" className='home-link'>خانه </Link>/ جزئیات نمونه کارها</p>
      </div>
      <div className='row mt-5'>
        <div className='col-md-7'>
          <div className='product-pic'>
            <img src={mainProduct.src} alt="product" className='img-fluid'/>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='product-detail p-4'>
            <h2 className='detail-title'>اطلاعات پروژه</h2>
            <hr />
            <p>دسته بندی: طراحی وب سایت</p>
            <p>مشتری: شرکت ASU</p>
            <p>تاریخ پروژه: 12 شهریور 1370</p>
          </div>
          <div className='mt-5'>
            <h3>این نمونه ای از جزئیات نمونه کارها است</h3>
            <p className='mt-4 extra-text'>او برای دنیای فیزیکی بازی می کرد. چه کسی باعث می شود آنها احساس درد کنند ، و مخترع آنها نیز چنین هستند ، زیرا این کار انگیزه های خودخواهانه است. آموزش نباید با مسئولیت ها کنار گذاشته شود و نباید به عنوان مسئولیت این نیازها پذیرفته شود. لذت مقام متهمان در این است که نمی دانند در همه زمانها شایسته ترین افتخار است. اما دلیلی برای پیروی از او وجود ندارد ، زیرا وقتی او را رها می کنند.</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
