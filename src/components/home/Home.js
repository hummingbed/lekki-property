import './Home.css';
import Navbar from '../navbar/Navbar';
import {
    Link
} from "react-router-dom";
const Home = () => {

    return (
        <>
            <div className="home">
                <section id="fullpage">
                    <section class="section section_1 ">
                        <div class="btn_box">
                            <Link to="/about" className="primary_btn" >Sell Propertie</Link>
                            <Link to="/home" className="secondary_btn" >Buy Properties</Link>
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Home;