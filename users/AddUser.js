import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import navbar from "../layout/Navbar";
import {useNavigate}from "react-router-dom";

const AddUser = () => {
let navigate = useNavigate()
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    })
    const {name,username,email} =user
    const onInputChange=(e) =>{
    setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = async (e) =>{
        e.preventDefault()
        await axios.post( "http://localhost:8080/users", user)
        navbar("/")
    }
    return (
        <div className={"container"}>
            <div className={"col-md-6 offset-md-3 border border-primary rounded p-4 mt-2 show"}>
                <h2 className={"text-center m-4"}>Register User</h2>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className={"mb-3"}>
                        <label htmlFor={"Name"} className={"form-label"}> Name</label>
                        <input
                            type={"text"}
                            className={"form-control"}
                            placeholder={"Enter your name"}
                            name={"name"}
                            value={name}
                            onChange={(e) =>onInputChange(e)}
                        />
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor={"UserName"} className={"form-label"}> UserName</label>
                        <input
                            type={"text"}
                            className={"form-control"}
                            placeholder={"Enter your username"}
                            name={"username"}
                            value={username}
                            onChange={(e) =>onInputChange(e)}
                        />
                    </div>
                    <div className={"mb-3"}>
                        <label htmlFor={"Email"} className={"form-label"}> Email</label>
                        <input
                            type={"text"}
                            className={"form-control"}
                            placeholder={"Enter your email"}
                            name={"email"}
                            value={email}
                            onChange={(e) =>onInputChange(e)}
                        />
                    </div>
                 <button type={"submit"} className={"btn btn-success"}>Submit</button>

                </form>

            </div>

        </div>
    );
};

export default AddUser;