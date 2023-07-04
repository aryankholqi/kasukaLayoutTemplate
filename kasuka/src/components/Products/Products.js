import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import productDatas from './productDatas'
import "./Products.css"

export default function Products() {
    const products = useRef(productDatas)
    
    return (
        <div className='container'>
            <p className='text-warning text-right '>نمونه کارها</p>
            <h1 className='text-right'>نمونه کارهای مارا بررسی کنید</h1>
            <div className='buttons'>
                <button type='button' className='btn btn-outline-warning product-btn active'>همه</button>
                <button type='button' className='btn btn-outline-warning product-btn'>برنامه</button>
                <button type='button' className='btn btn-outline-warning product-btn'>محصول</button>
                <button type='button' className='btn btn-outline-warning product-btn'>اینترنت</button>
            </div>
            <div className='products-grid'>
                {products.current.map((product) => (
                    <section key={product.id} className={product.class}>
                        {/* <img src={product.src} alt="logo" className='img-fluid product-img'/> */}
                        <div className='product' style={{ backgroundImage: `url(${product.src})` }}>
                            <div>
                                <h3 className='product-title'>{product.title}</h3>
                                <p className='text-muted product-text'>{product.text}</p>
                                <div className='product-links'>
                                    <Link to={`product/${product.id}`}><i className="bi bi-link-45deg product-icon"></i></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
