import Title from '../components/Title';
import HowBlockingWorks from '../components/HowBlockingWorks';
import OtherProfiles from '../components/OtherProfiles';
import LinkComponent from '../components/LinkComponent';
import '../styling/Home.css'

function Home() {
    return (
        <div className="Home">
            <Title />
            <div className="blocking-explanation">
                <HowBlockingWorks />
                <LinkComponent />
            </div>
            <OtherProfiles />
        </div>
    );
}

export default Home;
