import React from 'react'
import { Link, useParams  } from 'react-router-dom';


import Avatar from '../../Layout/Avatar';




const Students = () => {
   
    return (
        <div>
            <div className="container">
                <div className="py-4">
                    <div className="row">

                        {new Array(12).fill("").map((item, index) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={index}>
                                <div className="card shadow text-center py-4">
                                    <Avatar url = {`https://i.pravatar.cc/150?img= ${index}`} />
                                   {/* <img src  ="https://i.pravatar.cc/150?img=3" alt ="profile images" /> */}
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">Student Name</h5>
                                        <p className="text-muted small">Student E-mail</p>
                                        <Link  className="btn btn-primary btn-profile" to={`/student/${index}`}>
                                        View Profile
                                        </Link>
                                        {/* <a href="!#">
                                           
                                        </a> */}
                                        <button className="btn btn-edit">
                                            <span className="material-icons">delete_outline</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Students
