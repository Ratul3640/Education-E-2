import About from "./About_us";
import Banner from "./Banner";
import Footer from "./Footer";
import Learning from "./Learning1";
import Newslater from "./Newslater";
import Slider from "./Slider";
import Teachers from "./Teachers";
import Tracks from "./Tracks";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tracks></Tracks>
            <Learning></Learning>
            <Slider></Slider>
            <Teachers></Teachers>
            <Newslater></Newslater>
            <Footer></Footer>
        </div>
    );
};

export default Home;