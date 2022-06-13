import Navbar from "../navbar/Navbar";
import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.jpg';
import './Property.css';

const Property = () => {
    const url = "https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property";
    const [data, setData] = useState([]);
    const [searchProperty, setSearchProperty] = useState([]);
    
    axios.get(url)
        .then(res => {
            const getProperties = res.data.data;
            setData(getProperties);
        }).catch(err => console.log(err))

        const filterItem = (bedroomData) =>{
            const updatedItem = data.filter((curEle) =>{
                return curEle.bedroom === bedroomData;
            });
            setData(updatedItem)
            
        }

    return (
        <>
            <Navbar></Navbar>
            <div className="text-center">
                <input type="text" placeholder="search address (e.g general" style={{width: 320, }} onChange={event => { setSearchProperty(event.target.value) }} />
            </div>
            <p className="text-center">
            <button onClick={() => filterItem(1) }  style={{width: 320, }}>1 bedroom</button>
            <button className="bg-primary" onClick={() => filterItem(4) }  style={{width: 320, }}>4 bedroom</button>
            <button onClick={() => filterItem(8) }  style={{width: 320, }}>8 bedroom</button>
            <button className="bg-primary" onClick={() => filterItem(90) }  style={{width: 320, }}>90 bedroom</button>
            </p>
            <div id="cards_landscape_wrap-2">
                <div className="container">
                    <div className="row">

                        {
                            data.filter((data) => {
                                if (searchProperty == "") {
                                    return data;
                                }
                                else if (data.address.toLowerCase().includes(searchProperty.toLowerCase())) {
                                    return data;
                                }
                            }).map((data, key) => {
                                return (

                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <a href="">
                                            <div className="card-flyer">
                                                <div className="text-box">
                                                    <div className="image-box">
                                                        <img src={data.images[1] ? data.images[0].path : logo} alt="" />
                                                    </div>
                                                    <div className="text-container">
                                                        <h6 className="card-title"> Address: {data.address}</h6>
                                                        <h6 className="card-title">no. of rooms: {data.bedroom}</h6>
                                                        <h6 className="card-title">Owner: {data.propertyOwner}</h6>
                                                        <p className="card-title">description: {data.description}</p>
                                                        <Link to={`/singleproperty/${data._id}`}>More Details</Link><br />
                                                        <Link to={`/Editproperty/${data._id}`} className="text-danger" >Update Property</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>

    );
}

export default Property;