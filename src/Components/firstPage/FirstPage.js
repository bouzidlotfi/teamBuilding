import React from 'react'
import Footer from '../Footer/Footer'
import SectionOne from '../SectionOne'
import NavigationBar from '../SectionOne/NavigationBar'
import SectionThree from '../SectionThree'
import SectionTwo from '../SectionTwo'


function FirstPage() {
    return (
        <div className='FirstPage'>
            <NavigationBar/>
            <SectionOne/>
            <SectionThree/>
            <SectionTwo/>
            <Footer/>
        </div>
    )
}

export default FirstPage
