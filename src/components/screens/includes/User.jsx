import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";

function User( { match}) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${match.params.id}`)
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setUser(response.data.data);
            }) 
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });
    return (
        <div>
            <Helmet>
                <title>{user.first_name} {user.last_name}</title>
            </Helmet>
            <img src={user.avatar} alt={user.first_name} />
            <h1>{user.first_name} {user.last_name}</h1>
            <p>{user.email}</p>
        </div>
    )
}

export default User;



