import React, { Fragment } from 'react'
import Header from './components/Header/Header'
import Company from './components/Company/Company'
import Ads from './components/Ads/Ads'
import Services from './components/Services/Services'
import Products from './components/Products/Products'
import Achivment from './components/Achivment/Achivment'
import Quotation from './components/Quotation/Quotation'
import Team from './components/Team/Team'
import ContactUs from './components/ContactUs/ContactUs'

export default function Kasuka() {
  return (
    <Fragment>
      <Header />
      <Company />
      <Ads />
      <Services />
      <Products />
      <Achivment />
      <Quotation />
      <Team />
      <ContactUs />
    </Fragment>
  )
}
