import React, { useEffect, useState } from 'react';
const Login = () => {
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_Number] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const Save = () => {
    console.log("email="+email+"\nPhone Number="+phone_number+"\nFirst Name="+first_name+"\nLast Name="+last_name)
  };

 
  return (
    <div>
        <div>
          <input type="email"placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input  type="text"placeholder="Phone Number"
            value={phone_number}
            onChange={(e) => setPhone_Number(e.target.value)}
          />
           <input type="text" placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirst_Name(e.target.value)}
          />
           <input type="text" placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLast_Name(e.target.value)}
          />
          <button onClick={Save} >Login</button>
        </div>
     
    </div>
  );
};

export default Login;
