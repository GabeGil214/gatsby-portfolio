import * as React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout