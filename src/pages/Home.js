import Title from '../components/Title';
import HowBlockingWorks from '../components/HowBlockingWorks';
import OtherProfiles from '../components/OtherProfiles';
import LinkComponent from '../components/LinkComponent';
import CreateProfile from '../components/NewProfile'
import '../styling/Home.css'

function Home() {
    return (
        <div className="Home">
            <Title />
            <div className="blocking-explanation">
                <HowBlockingWorks />
                <LinkComponent />
            </div>
            <CreateProfile />
            <h1>Home</h1>
            <h3>How To View Other Profiles</h3>
            <OtherProfiles />
        </div>
    );
}

export default Home;
