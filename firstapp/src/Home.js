import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header day="10"/>
            <h1>Lorem my first React app</h1>
            <h2>Test</h2>
            <Footer year="2023" month="Nov"/>
           
        </div>
    )
}

export default Home