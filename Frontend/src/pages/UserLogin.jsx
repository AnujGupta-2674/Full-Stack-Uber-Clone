import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserDataContext);


    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }

        const respone = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

        if (respone.status === 200) {
            const data = respone.data

            setUser(data.user);
            
            localStorage.setItem('token', data.token)

            navigate('/home')
        }

        setEmail("");
        setPassword("");
    }

    return (
        <>
            <div className='p-7 h-screen flex flex-col justify-between'>
                <div>
                    <img src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="logo" className='w-16 mb-10' />

                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                        <input required type="email" value={email} placeholder='email@example.com' className='bg-[#eeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base' onChange={(e) => {
                            setEmail(e.target.value)
                        }} />

                        <h3 className='text-lg font-medium mb-2 mt-2'>Enter Password</h3>
                        <input required type="password" value={password} placeholder='**************' className='bg-[#eeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base' onChange={(e) => {
                            setPassword(e.target.value);
                        }} />

                        <button className='w-full mt-4 bg-[#111] text-white px-4 py-2 rounded font-semibold'>Login</button>
                    </form>

                    <p className='text-center mt-5'>New Here? <Link className='text-blue-600' to={"/signup"}>Create new Account</Link></p>

                </div>

                <div>
                    <Link className='w-full flex items-center justify-center mt-4 bg-[#10b461] text-white px-4 py-2 rounded font-semibold' to={"/captain-login"}>Sign in as Captain</Link>
                </div>
            </div>
        </>
    )
}

export default UserLogin;