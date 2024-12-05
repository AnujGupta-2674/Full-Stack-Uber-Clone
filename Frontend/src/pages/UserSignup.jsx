import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserDataContext } from "../context/UserContext"

const UserSignup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

        if (response.status === 201) {
            const data = response.data;

            setUser(data.user)

            localStorage.setItem('token', data.token)

            navigate('/home')
        }

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <div className='p-7 h-screen flex flex-col justify-between'>
                <div>
                    <img src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="logo" className='w-16 mb-10' />

                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                        <div className='flex gap-4'>
                            <input type="text" required className='bg-[#eeee] rounded px-4 py-2 border text-lg placeholder:text-base w-1/2' placeholder='First name' value={firstName} onChange={(e) => {
                                setFirstName(e.target.value)
                            }} />

                            <input type="text" required className='bg-[#eeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' placeholder='Last name' value={lastName} onChange={(e) => {
                                setLastName(e.target.value)
                            }} />
                        </div>

                        <h3 className='text-lg font-medium mt-2 mb-2'>What's your email</h3>
                        <input required type="email" placeholder='email@example.com' className='bg-[#eeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base' value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />

                        <h3 className='text-lg font-medium mb-2 mt-2'>Enter Password</h3>
                        <input required type="password" placeholder='**************' className='bg-[#eeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base' value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />

                        <button className='w-full mt-4 bg-[#111] text-white px-4 py-2 rounded font-semibold'>Create Account</button>
                    </form>

                    <p className='text-center mt-5'>Already have a account? <Link className='text-blue-600' to={"/login"}>Login here</Link></p>

                </div>

                <div>
                    <p className='text-xs leading-tight'>By proceeding you consent to get calls, whatsapp or SMS messages, including by automated means, from Uber and its affiliates to the number provided</p>
                </div>
            </div>
        </>
    )
}

export default UserSignup;