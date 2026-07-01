import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
        <div>
            <h2 className='text-white text-center p-3 text-4xl py-5 mb-4'>LOGIN</h2>
            <input className='bg-gray-700 text-white text-center p-3 text-2xl rounded-xl border-2 border-gray-200' type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
            {" "}
            <input className='bg-gray-700 text-white text-center p-3 text-2xl rounded-xl border-2 border-gray-200' type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            {" "}
            <button className='bg-black rounded-2xl text-white text-center px-7 py-4 text-2xl' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;