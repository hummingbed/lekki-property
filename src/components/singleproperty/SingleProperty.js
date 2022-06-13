import React from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import logo from '../Assets/logo.jpg';
import './singleProperty.css';
const SingleProperty = (props) => {

    const params = useParams();
    const userId = params.id;

    const url = `https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property/` + userId;

    const [data, setData] = useState([]);

    axios.get(url)
        .then(res => {
            const getProperties = res.data.data;
            setData(getProperties);
        }).catch(err => console.log(err))

        // console.log(data.images)

    return (
        <>
            <Navbar></Navbar>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <img src={logo}  />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card"> 
                            <div class="card-body">
                                <h5 class="card-title">Address: <small className='text-primary'>{data.address}</small></h5>
                                <h5 class="card-title">Bedroom: <small className='text-primary'>{data.bedroom}</small></h5>
                                <h5 class="card-title">Type: <small className='text-primary'>{data.type}</small></h5>
                                <h5 class="card-title">no. of sittingRoom: <small className='text-primary'>{data.sittingRoom}</small></h5>
                                <h5 class="card-title">kitchen: <small className='text-primary'>{data.kitchen}</small></h5>
                                <h5 class="card-title">bathroom: <small className='text-primary'>{data.bathroom}</small></h5>
                                <h5 class="card-title">Toilet: <small className='text-primary'>{data.toilet}</small></h5>
                                <h5 class="card-title">Owner: <small className='text-primary'>{data.propertyOwner}</small></h5>

                                <h5 className="card-title">{data.validFrom}</h5>
                                <h5 className="card-title">{data.description}</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            
                
            
        </>
    );
}

export default SingleProperty;