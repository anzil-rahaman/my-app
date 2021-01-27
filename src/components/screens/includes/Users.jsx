import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setUsers(response.data.data);
            }) 
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },[]);

    let renderItems = () => {
        return users.map((user) => (
            <li>
                <Link to={`/user/${user.id}`}>
                    <img src={user.avatar} alt={user.first_name}/>
                    <h6>{user.first_name} {user.last_name}</h6>
                    <p>{user.email}</p>
                </Link>
            </li>
        ));
    }

    return (
        <>
            <Helmet>
                <title>Users</title>
            </Helmet>
            <h1>Users</h1>
            <ul>
                {renderItems()}
            </ul>
        </>
    )

}

export default Users;
