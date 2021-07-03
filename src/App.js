
import React from 'react';
import Header from './components/header/Header';
import Logo from'./components/LogoNav/LogoNavigation';
import Banner from './components/Banner/Banner';
import Test from './components/Test/Test';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
        <Header />
        <Logo />
        <Banner />
        <Test/>
        <Footer/>
    </div>
  )
}

export default App;