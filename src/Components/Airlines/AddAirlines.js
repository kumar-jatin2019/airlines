
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { createAirlines } from "../../Actions/postActions";

const AddPassenger = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [slogan, setSlogan] = useState("");
    const [est, setEst] = useState("");

    // {
    //     "id": 12,
    //     "name": "Sri Lankan Airways",
    //     "country": "Sri Lanka",
    //     "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    //     "slogan": "From Sri Lanka",
    //     "head_quaters": "Katunayake, Sri Lanka",
    //     "website": "www.srilankaairways.com",
    //     "established": "1990"
    // }
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        const new_Airline = {
          id:14226,
          name:name ,
          country: country,
          slogan:slogan,
          est:est
        };
    
        console.log(new_Airline, "new Airlines")
        dispatch(createAirlines(new_Airline));
       navigate("/");
      };
    return (
        <div className="container">
            <div className="py-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="card card-body shadow">
                            <form onSubmit={submitForm}>
                                <div className="form-row form-group mb-4">
                                {/* <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Airline Id"
                                            name="id"
                                            value={id}
                                            onChange={(e) => setId(e.target.value)}
                                            className="form-control"
                                        />
                                    </div> */}
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Airline Name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            placeholder="Enter Country "
                                            name="country"
                                            value={country}
                                            onChange= {(e) => setCountry(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-row form-group mb-4">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Slogan"
                                            name="slogan"
                                            value={slogan}
                                            onChange={(e) => setSlogan(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Establishment Year"
                                            name="est"
                                            value={est}
                                            onChange={(e) => setEst(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                              

                                <button type="submit" className="btn btn-primary">
                                    Add Airlines
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPassenger
