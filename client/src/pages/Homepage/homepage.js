import React, { useState, useEffect} from 'react'
import axios from 'axios';

export default function HomePage() {
  const [users, putUsers] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
     const URL = 'https://jsonplaceholder.typicode.com/users'
     axios.get(URL)
     .then(response => {
       response.data.map((user) => {
        putUsers((prev) => [...prev, new User(user)])
       })
       console.log(users)
     })
     .error(error => {
       console.log('Got an error:' + error)
     })
  }
  return (
    <>
     {users.map((user) => {
      return <p key = {user.id}>{user.email}</p>
     })}
    </>
  )
}

class User {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.email = data.email
  }
}