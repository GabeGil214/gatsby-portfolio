import * as React from 'react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
        <ThemeToggle />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout