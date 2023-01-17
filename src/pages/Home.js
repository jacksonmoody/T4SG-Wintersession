import Title from '../components/Title';
import HowBlockingWorks from '../components/HowBlockingWorks';
import OtherProfiles from '../components/OtherProfiles';
import LinkComponent from '../components/LinkComponent';

function Home() {
    return (
        <div className="Home">
            <Title />
            <HowBlockingWorks />
            <LinkComponent />
            <OtherProfiles />
        </div>
    );
}

export default Home;
