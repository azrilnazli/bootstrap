import React, { useEffect } from 'react';
import axios from 'axios';

function Invoices() {
  useEffect(() => {
    axios.defaults.baseURL = 'http://sanctum.test';
    axios.post('/login', {
      email: "admin@local",
      password: "password"
    })
    .then(({ data }) => {
      if(data.status==="success"){
        console.log(data)
      } else {
        console.log("error")
      }
    });
  });
  return (
    <div className="Login">Auto Login</div>
  );
}
export default Invoices;