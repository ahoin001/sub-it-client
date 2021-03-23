import React from 'react';

import "tailwindcss/dist/base.css"

import AnimationRevealPage from "../../helpers/AnimationRevealPage"
import Hero from "../../treeponents/hero/BackgroundAsImage"
import Features from '../../treeponents/features/TwoColWithSteps'
import Summary from '../../treeponents/features/ThreeColWithSideImage'

import Footer from '../../treeponents/footers/MiniCenteredFooter'

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