import React from 'react'
import Navbar from '../../components/navbarClient'
import Course from '../../components/courses/index'
import Footer from '../../components/k.footer/footer'
export default function Courses() {
    return (
        <div style={{backgroundColor:"#dededf"}}>
             <Navbar />
             <Course />
             <Footer />
        </div>
    )
}
