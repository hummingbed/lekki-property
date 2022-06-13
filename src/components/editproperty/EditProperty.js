// import './AddProperty.css';
import Navbar from '../navbar/Navbar';
// import axios from 'axios';
import { useState } from 'react';
import { useParams } from "react-router-dom";
const EditProperty = () => {

    const params = useParams();
    const userId = params.id;

    

    // const initialValues = { address: "", type: "", bedroom: "", sittingRoom: "", kitchen: "", bathroom: "", toilet: "", propertyOwner: "", description: "", validFrom: "", validTo: ""};
    const [address, setAddress] = useState("Mile");
    const [bedroom, setBedroom] = useState("");
    const [type, setType] = useState("");
    const [sittingRoom, SetSittingRoom] = useState("");
    const [kitchen, setKitchen] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [toilet, setToilet] = useState("");
    const [propertyOwner, setPropertyOwner] = useState("");
    const [description, setDescription] = useState("");
    const [validFrom, setValidFrom] = useState("");
    const [validTo, setValidTo] = useState("");
    const [formdata, setformdata] = useState([]);
    // const [uploadImage, setformdata] = useState([]);
    

    const data = { bedroom, sittingRoom, kitchen, bathroom, toilet, description,  validTo}

    const handleSubmit = (e) => {
        e.preventDefault();

       


        const url = `https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property/` + userId;

        console.log(url, 123)
       // const url = "https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property";

        fetch(url, {
            method: 'PATCH',

            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => {
                // Handle the error
                console.log(error);
              });
    }

    console.log(data,66);
    return (
        <div>
            <Navbar></Navbar>
            <div className="contains">

                <div className="wrapper">
                    <div className="contacts">
                        <h3>Lekki Property</h3>
                        <ul>
                            <li>Lagos, Nigeria</li>
                            <li>080-123-445-55</li>
                            <li>lekki_property@mail.com</li>
                        </ul>
                    </div>

                    <div className="form">
                        <h3>Send us a message</h3>
                          
                        <form action="" onSubmit={handleSubmit} >
                        
                            <p>
                                <label for="">Bedroom</label>
                                <input type="number" value={bedroom} onChange={(e) => setBedroom(e.target.value)} />
                            </p>
                            
                            <p>
                                <label for="">sittingRoom</label>
                                <input type="number" value={sittingRoom} onChange={(e) => SetSittingRoom(e.target.value)} />
                            </p>
                            <p>
                                <label for="">kitchen</label>
                                <input type="number" value={kitchen} onChange={(e) => setKitchen(e.target.value)} />
                            </p>
                            <p>
                                <label for="">bathroom</label>
                                <input type="number" value={bathroom} onChange={(e) => setBathroom(e.target.value)} />
                            </p>
                            <p>
                                <label for=""> toilet</label>
                                <input type="number" value={toilet} onChange={(e) => setToilet(e.target.value)} />
                            </p>

                            <p>
                                <label for="">validTo</label>
                                <input type="date" value={validTo} onChange={(e) => setValidTo(e.target.value)} />
                            </p>
                            
                            <p className="full-width">
                                <label for="">Write your message</label>
                                <textarea type="image" name="" value={description} onChange={(e) => setDescription(e.target.value)} id="" cols="30" rows="7"></textarea>
                            </p>
                            <p className="full-width">
                                <button>Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EditProperty;