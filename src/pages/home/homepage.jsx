import React from 'react';

import "tailwindcss/dist/base.css"

import AnimationRevealPage from "../../helpers/AnimationRevealPage"
import Hero from "../../components/hero/BackgroundAsImage"
import Features from '../../components/features/TwoColWithSteps'
import Summary from '../../components/features/ThreeColWithSideImage'

import Footer from '../../components/footers/MiniCenteredFooter'

const Home = (props) => {
    return (
        <AnimationRevealPage disabled >
            <Hero login={props.login} logOut={props.logOut}/>
            <Features />
            <Summary />
            <Footer />
        </AnimationRevealPage>
    );
};

export default Home;