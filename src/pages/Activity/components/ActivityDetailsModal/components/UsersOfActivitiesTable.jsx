import React, { useState, useEffect } from 'react'
import {Table} from "react-bootstrap";
import { UsersActivityAPIHelper } from '../../../../../helpers/APIHelpers/UsersActivitiesAPI';

function UsersOfActivitiesTable(props) {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        let activityDTO = {
            id: props.activityCard.id
        };
        try {
            const response = await UsersActivityAPIHelper.getUsersOfActivity(activityDTO);
            console.log(response)
            setUsers(response?.data)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        async function getAll() {
            const responseAct = await getUsers()
        }
        getAll();
    }, []);


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>TCKimlikNo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Birth Date</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((element, index) =>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{element.tcSecurityNumber}</td>
                            <td>{element.name}</td>
                            <td>{element.surname}</td>
                            <td>@{element.username}</td>
                            <td>{element.birthDate}</td>
                            <td>{element.address}</td>
                        </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default UsersOfActivitiesTable

