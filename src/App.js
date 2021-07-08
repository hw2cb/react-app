import React from 'react';
import Header from './components/header/Header';
import Logo from'./components/LogoNav/LogoNavigation';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Footer from './components/footer/Footer';
import QuizContainer from './components/Quiz/QuizContainer';


const App = () => {
  return (
    <div>
        <Header />
        <Logo />
        <Banner />
        <Description />
        <QuizContainer />
        <Footer/>
    </div>
  )
}

export default App;