import './AddProperty.css';
import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
const AddProperty = () => {

    const [address, setAddress] = useState("");
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
    const [images, setImages] = useState([]);

    const data = { address, bedroom, type, sittingRoom, kitchen, bathroom, toilet, propertyOwner, description, validFrom, validTo, images }

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = "https://sfc-lekki-property.herokuapp.com/api/v1/lekki/property";

        fetch(url, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => {
                console.log(error);
            });
    }

    console.log(data);
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
                        <h3>Enter new Porperty</h3>

                        <form action="" onSubmit={handleSubmit} >
                            <p>
                                <label for="">Address</label>
                                <input type="text" name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                {/* <small className='text-danger'>{formErrors.address}</small> */}
                            </p>

                            <p>
                                <label for="">Bedroom</label>
                                <input type="number" value={bedroom} onChange={(e) => setBedroom(e.target.value)} />
                            </p>
                            <p>
                                <label for="">Type</label>
                                <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
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
                                <label for="">propertyOwner</label>
                                <input type="text" value={propertyOwner} onChange={(e) => setPropertyOwner(e.target.value)} />
                            </p>
                            <p>
                                <label for=""> validFrom</label>
                                <input type="date" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} />
                            </p>
                            <p>
                                <label for="">validTo</label>
                                <input type="date" value={validTo} onChange={(e) => setValidTo(e.target.value)} />
                            </p>
                            <p className="full-width">
                                <label for="">Write your message</label>
                                <input type="file" value={images} onChange={(e) => setImages([e.target.value])} src="img_submit.gif" alt="Submit" width="48" height="48" />
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

export default AddProperty;