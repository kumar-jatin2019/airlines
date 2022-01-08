
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// Get A method you want to call for Api //
import { getPassengersViewList } from "../../Actions/postActions";

import { Link, useNavigate } from 'react-router-dom';




const ViewPassenger = () => {

    console.log("First");

    const { state } = useLocation();
    const dispatch = useDispatch();

    let ViewPassengers = [];
     ViewPassengers = useSelector((state) => state.passengers.viewPassengers);
    console.log(ViewPassengers, "View passengers List")
    
    let FilterPassengersFlight = [];
    let finalPassengersList = [];
    let FilteredPasengers = [];


    useEffect(() => {
        debugger;
        console.log("second");

        dispatch(getPassengersViewList());

    }, [])
    console.log(state, "All State");
    const { name } = state; // Read values passed on state
    // console.log(name);

    FilteredPasengers = [...ViewPassengers];
    FilteredPasengers.forEach(element => {
        //   console.log(element.airline,"elment filtered");
        FilterPassengersFlight = element.airline;
        FilterPassengersFlight.forEach(value => {
            //  console.log(value.name,"Flight Name");
            if (name === value.name) {
                finalPassengersList.push(value);
            }


        })

    });


    console.log(finalPassengersList,"Final")
    if (finalPassengersList && finalPassengersList.length == 0) {
        alert("first")
        return <h1>loading..</h1>;
    
    }
    return (

        <div className="container">
            <div className="py-4">
                <div className="row">

                    {finalPassengersList.map((item, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div className="card shadow text-center py-4">

                                <div className="card-body">
                                    <h5 className="card-title mb-0">{item.name}</h5>

                                    <p className="text-muted small mt-2">{item.country}</p>
                                    <Link className="btn btn-primary btn-profile" to={`/passenger/${item.id}`}>
                                        View Profile
                                    </Link>

                                    <button className="btn btn-edit" >
                                        <span className="material-icons">View </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ViewPassenger
