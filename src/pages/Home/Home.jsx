import React from 'react';

// *** Treact Things
// import "style.css"
import "tailwindcss/dist/base.css"

import AnimationRevealPage from "../../helpers/AnimationRevealPage"
import Hero from "../../treeponents/hero/BackgroundAsImage"
import Features from '../../treeponents/features/TwoColWithSteps'
import Summary from '../../treeponents/features/ThreeColWithSideImage'

import Footer from '../../treeponents/footers/MiniCenteredFooter'

const Home = () => {
    return (
        <AnimationRevealPage disabled >
            <Hero />
            <Features />
            <Summary />
            <Footer />
        </AnimationRevealPage>
    );
};

export default Home;