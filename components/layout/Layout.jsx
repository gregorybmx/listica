import React from 'react'
import Header from './Header'
import Footer from './Footer';

const Layout = (props) => {
const {children} = props;
    return (
        <div>
            <section id='home'>
                <Header/>
            </section>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout