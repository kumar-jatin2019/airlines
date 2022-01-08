import React, { useState } from "react";


const AddStudent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


    const submitForm = (e) => {
        e.preventDefault();
        console.log(name, email, phone, address);

    };
    return (
        <div className="container">
            <div className="py-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="card card-body shadow">
                            <form onSubmit={submitForm}>
                                <div className="form-row form-group mb-4">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Student Name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            placeholder="Enter Student E-mail"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-row form-group mb-4">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Student Phone"
                                            name="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            placeholder="Enter Student Class"
                                            name="standard"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                              

                                <button type="submit" className="btn btn-primary">
                                    Add Student
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent
