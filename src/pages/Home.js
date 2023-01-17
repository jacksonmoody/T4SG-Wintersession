import HowBlockingWorks from '../components/HowBlockingWorks';
import Title from '../components/Title';
import OtherProfiles from '../components/OtherProfiles';
import React from 'react'

function Home() {
    return (
        <div className="Home">
            <Title />
            <HowBlockingWorks />
            <OtherProfiles />
        </div>
    );
}

export default Home;
