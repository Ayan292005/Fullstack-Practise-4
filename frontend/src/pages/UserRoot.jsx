import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from "react-router"

function UserRoot() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserRoot
