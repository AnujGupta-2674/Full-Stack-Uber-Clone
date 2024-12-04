import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Captainlogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        });

        setEmail("");
        setPassword("");
    }

    return (
        <>
            <div className='p-7 h-screen flex flex-col justify-between'>
                <div>
                    <img src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc" alt="logo" className='w-16 mb-10' />

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

                    <p className='text-center mt-5'>Join a fleet? <Link className='text-blue-600' to={"/captain-signup"}>Register as a Captain</Link></p>

                </div>

                <div>
                    <Link className='w-full flex items-center justify-center mt-4 bg-[#d5622d] text-white px-4 py-2 rounded font-semibold' to={"/login"}>Sign in as User</Link>
                </div>
            </div>
        </>
    )
}

export default Captainlogin;