import React from 'react'

import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
  return (
    <>
    <div>
        <Header/>
    </div>
    <div>
        {children}
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Layout