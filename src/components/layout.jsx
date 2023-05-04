import * as React from 'react'
import Navbar from './Navbar'


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Navbar />
      <header>
        <Hero />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout