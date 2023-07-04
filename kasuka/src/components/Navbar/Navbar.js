import React,{ useRef } from 'react'
import "./Navbar.css"

export default function Navbar() {
    const ulDropdownElem = useRef()
    const showDropdown = ()=>{
        ulDropdownElem.current.style.display = "block"
    }
    const hideDropdown = ()=>{
        ulDropdownElem.current.style.display = "none"
    }
    return (
        <nav className='navbar'>
            <div className='container-fluid'>
                <span className='navbar-brand'>Kasuka</span>
                <ul className='navbar-menu'>
                    <li className='nav-item'><a className='nav-link' href="#">خانه</a></li>
                    <li className='nav-item'><a className='nav-link' href="#">درباره ما</a></li>
                    <li className='nav-item'><a className='nav-link' href="#">خدمات</a></li>
                    <li className='nav-item'><a className='nav-link' href="#">نمونه کارها</a></li>
                    <li className='nav-item'><a className='nav-link' href="#">تیم</a></li>
                    <li className='nav-item d-flex align-items-center'><a className='nav-link' href="#" onMouseOver={showDropdown}>لیست کشویی<i className="bi bi-arrow-down-short primary"></i></a>
                        <ul className='navbar-dropdown-menu' ref={ulDropdownElem} onMouseLeave={hideDropdown}>
                            <li className='nav-dropdown-item'><a className='nav-dropdown-link' href="#">لیست کشویی 1</a></li>
                            <li className='nav-dropdown-item'><a className='nav-dropdown-link' href="#">لیست کشویی 2</a></li>
                            <li className='nav-dropdown-item'><a className='nav-dropdown-link' href="#">لیست کشویی 3</a></li>
                            <li className='nav-dropdown-item'><a className='nav-dropdown-link' href="#">لیست کشویی 4</a></li>
                        </ul>
                    </li>
                    <li className='nav-item'><a className="nav-link" href="#">تماس با ما</a></li>
                </ul>
                <button type='button' className='btn btn-outline-warning'>شروع</button>
            </div>
        </nav>
    )
}
