import React from 'react'
import Navbar from '../Navbar/Navbar';
import AboutSection from '../Sections/AboutSection';
import IntroSection from '../Sections/IntroSection';
import ContactSection from '../Sections/ContactSection';
import WorkSection from '../Sections/WorkSection';
import Footer from '../Footer/Footer';

export default function Portfolio() {
    return (
        <div>
            <Navbar/>
            <br/>
            <IntroSection/>
            <br/>
            <AboutSection/>
            <br/>
            <WorkSection/>
            <br/>
            <ContactSection/>
            <br/>
            <Footer/>
      </div>
    )
}
