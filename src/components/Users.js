import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserCard from './UserCard'
const Users = () => {
    const [listUsers, setListUsers] = useState([])

    const fetchUsers =() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setListUsers(res.data)).catch((err)=> console.log(err));
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            
            {listUsers.map((el,i) =>(<UserCard item={el} key={i}/>))}
        </div>
    )
}

export default Users
