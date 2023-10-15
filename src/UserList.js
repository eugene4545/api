import React, { useState, useEffect } from 'react';
import axios from 'axios'; //import axios api
import './App.css'

export default function UserList() {
  const [listOfUser, setListOfUser] = useState([]);// set state

  useEffect(() => {
    const fetchData = async () => {//fetching data using try catch method
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(response.data);
      } catch (error) {
        console.error('Error Fetching Data:', error);//error with message
      }
    };

    fetchData();
  }, []);

  return (//return card with details
    
    <div className="user-list">
    <div className="title">
    <h2>Sofware developers in Australia</h2>
    </div>
  
      <ul className='card'>
        {listOfUser.map((user) => (//map through each object selecting name,email,address and company
          <li key={user.id}  className='cardbox'> 
          <div className='begining'>
            <strong>{user.name}:</strong>
            </div>
            <div>
              Email: {user.email}
            </div>
           
            <div>
              Address: {user.address.street}, {user.address.city}
            </div>
            <div className='end'>
             <p> Company: {user.company.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
