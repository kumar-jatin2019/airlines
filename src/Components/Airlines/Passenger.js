import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../Actions/postActions";
import Avatar from "../../Layout/Avatar";



const Passenger = () => {
    const { id } = useParams();
    console.log(id, "id with params");
    const dispatch = useDispatch();
    let passenger = useSelector((state) => state.passengers.passenger);
    console.log(passenger);
    // Case when we get the data through Routes such as id or  {} //
   
     debugger;
     useEffect(() => {
        loadPost();
      }, []);
    
      const loadPost = () => {
        dispatch(getPost(id));
      };
    

    return (
      
        <div className="container">
            <div className="py-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="card card-body shadow">
                            <div className="row">
                                <div className="col-md-4">
                                    <Avatar url = {passenger.logo} />
                                </div>
                                <div className="col-md-8">
                                    <ul className="list-group">
                                        <li
                                            className="d-flex justify-content-between align-items-center list-group-item list-group-item-action"
                                        >
                                            <h3 className="m-0">{passenger.name}</h3>
                                   


                                        </li>
                                        <li className="list-group-item">
                                            <p>Country: {passenger.country}</p>
                                            <p>Establishment: {passenger.established}</p>
                                            <p>Slogan: {passenger.slogan}</p>
                                            <p>Website: {passenger.website}</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Passenger
