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
                            <Link to="/property" className="primary_btn" >View Propertie</Link>
                            <Link to="/addproperty" className="secondary_btn" >Sell Properties</Link>
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Home;