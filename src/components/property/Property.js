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
                return curEle.kitchen === bedroomData;
            });
            setData(updatedItem)
        }

    return (
        <>
            <Navbar></Navbar>
            <div className="seachbox">
                <input type="text" placeholder="search address (e.g general" onChange={event => { setSearchProperty(event.target.value) }} />
            </div>
            <button onClick={() => filterItem(90) }>2 bedroom</button>
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