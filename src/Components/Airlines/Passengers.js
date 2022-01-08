
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPassengersList } from '../../Actions/postActions';
import { Link, useNavigate } from 'react-router-dom';



const Passengers = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    let passengers = useSelector((state) => state.passengers.passengers);
    console.log(passengers, "passengers List")
    useEffect(() => {
        dispatch(getPassengersList());
    }, [])


    const viewList = (item) => {
        navigate('/ViewPassenger', { state: item });
    }
    debugger;
    if (passengers && passengers.length == 0) {
        return <h1>loading..</h1>;
    }
    return (
        <div className="container">
            <div className="py-4">
                <div className="row">

                    {passengers.map((item, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div className="card shadow text-center py-4">

                                <div className="card-body">
                                    <h5 className="card-title mb-0">{item.name}</h5>

                                    <p className="text-muted small mt-2">{item.country}</p>
                                    <Link className="btn btn-primary btn-profile" to={`/passenger/${item.id}`}>
                                        View Profile
                                    </Link>

                                    <button className="btn btn-edit" onClick={() => viewList(item)}>
                                        <span className="material-icons">View Passengers</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Passengers
