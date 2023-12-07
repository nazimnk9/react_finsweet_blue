import React from 'react'
import Navbar from '../sections/navbar/Navbar'
import Footer from '../sections/footer/Footer'
import FooterNav from '../sections/footernav/FooterNav'
import LogoImg from "../assets/images/logo.png"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <Navbar logo_img={LogoImg} />
                <Outlet />
            <Footer logo_img={LogoImg} />
            <FooterNav />
        </>
    )
}

export default MainLayout