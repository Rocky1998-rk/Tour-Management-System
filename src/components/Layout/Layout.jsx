import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../router/Router'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
    <Header/>
    <Routers/>
    <Footer/>
    </>
  )
}

export default Layout