import React from 'react';
import axios from 'axios';
import Property from '../property/Property';
import SingleProperty from '../singleproperty/SingleProperty';
import { useState } from 'react';
import {
    Link
  } from "react-router-dom";
import './Api.css';
import logo from '../Assets/logo.jpg';

const PropertyApi = () => {
    const url = "https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property";
    const [data, setData] = useState([]);
    const [searchProperty, setSearchProperty] = useState([]);

    const [filterProperty, setFilterProperty] = useState(data);

    // console.log(data, 'testing');
    const filterResult = (catItem) =>{
        const result = data.filter((curDate) => {
            return curDate.PropertyApi ===catItem;
        });
        setFilterProperty(filterResult);
    }

    axios.get(url)
        .then(res => {
            const getProperties = res.data.data;
            setData(getProperties);
            // filterProperty(getProperties)
            // console.log(getProperties)
        }).catch(err => console.log(err))

    // const listProperty = data.map((data, index) =>{
    //     return (
    //         data.address)

    // })
    

    return (
        <>
            <div className="seachbox">
                <input type="text" placeholder="search address (e.g general" onChange={event => { setSearchProperty(event.target.value) }} />
            </div>

            {/* <div class="btn_box">
                <button className="primary_btn" >Sell Propertie</button>
                <button className="secondary_btn" >Buy Properties</button>
                <button className="primary_btn" >Sell Propertie</button>
                <button className="secondary_btn" >Buy Properties</button>
            </div> */}

            

            <div class="container">   
            <button onClick={() => filterResult (data.address == 'general')} >clicl</button>             
                <div class="row" id="filter">
                    <form className='search-container'>
                        <div class="form-group col-sm-3 col-xs-6">
                            <select data-filter="make" class="filter-make filter form-control" >
                                <option value="">Select Make</option>
                                <option value="">Show All</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-3 col-xs-6">
                            <select data-filter="model" class="filter-model filter form-control">
                                <option value="">Select Model</option>
                                <option value="">Show All</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-3 col-xs-6">
                            <select data-filter="type" class="filter-type filter form-control">
                                <option value="">Select Type</option>
                                <option value="">Show All</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-3 col-xs-6">
                            <select data-filter="price" class="filter-price filter form-control">
                                <option value="">Select Price Range</option>
                                <option value="">Show All</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

            {
                data.filter((data) => {
                    if (searchProperty == "") {
                        return data;
                    }
                    else if (data.address.toLowerCase().includes(searchProperty.toLowerCase())) {
                        return data;
                    }
                }).map((data, key,) => {
                    return (

                        <div id="cards_landscape_wrap-2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <a href="">
                                            <div class="card-flyer">
                                                <div class="text-box">
                                                    <div class="image-box">
                                                        <img src={data.images[1] ? data.images[0].path : logo} alt="" />
                                                    </div>
                                                    <div class="text-container">
                                                        <h6 class="card-title"> Address: {data.address}</h6>
                                                        <h6 class="card-title">no. of rooms: {data.bedroom}</h6>
                                                        <h6 class="card-title">Owner: {data.propertyOwner}</h6>
                                                        <p class="card-title">description: {data._id}</p>
                                                        <Link to={`url/${data._id}`}>More Details</Link>
                                                        {/* {console.log(`${url}/${data._id}`)} */}
                                                        <SingleProperty linkId={data}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        // <div className="card" >
                        //     <div class="card-body" key={key}>
                        //     <img src={data.images[0] ? data.images[0].path : logo} class="card-img-top" height={200} width={100} alt="property image"/>
                        // <h6 class="card-title"> Address: {data.address}</h6>
                        // <h6 class="card-title">no. of rooms: {data.bedroom}</h6>
                        // <h6 class="card-title">Owner: {data.propertyOwner}</h6>
                        // <h6 class="card-title">description: {data.description}</h6>
                        //     </div>                       
                        // </div>
                    )
                })
            }
        </>
    );
}

export default PropertyApi;