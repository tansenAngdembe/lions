import React from 'react'
import Nav from '../Navigation/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'

const AppLayout = () => {
  return (
    <>
    <Nav />
    <ScrollToTop />
    <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout