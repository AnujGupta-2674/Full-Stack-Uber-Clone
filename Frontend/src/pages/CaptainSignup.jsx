import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from "../context/CaptainContext"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CaptainSignup() {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const { captain, setCaptain } = useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain);

            localStorage.setItem('token', data.token)
            navigate('/captain-home');
        }

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }

    return (
        <>
            <div className='p-7 h-screen flex flex-col justify-between'>
                <div>
                    <img src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc" alt="logo" className='w-16 mb-10' />

                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
                        <div className='flex gap-4'>
                            <input type="text" required className='bg-[#eeee] rounded px-4 py-2 border text-lg placeholder:text-base w-1/2' placeholder='First name' value={firstName} onChange={(e) => {
                                setFirstName(e.target.value)
                            }} />

                            <input type="text" required className='bg-[#eeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' placeholder='Last name' value={lastName} onChange={(e) => {
                                setLastName(e.target.value)
                            }} />
                        </div>

                        <h3 className='text-lg font-medium mt-2 mb-2'>What's our Captain's email</h3>
                        <input required type="email" placeholder='email@example.com' className='bg-[#eeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base' value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />

                        <h3 className='text-lg font-medium mb-2 mt-2'>Enter Password</h3>
                        <input required type="password" placeholder='**************' className='bg-[#eeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base' value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />

                        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                        <div className='flex gap-4 mb-7'>
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                                type="text"
                                placeholder='Vehicle Color'
                                value={vehicleColor}
                                onChange={(e) => {
                                    setVehicleColor(e.target.value)
                                }}
                            />
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                                type="text"
                                placeholder='Vehicle Plate'
                                value={vehiclePlate}
                                onChange={(e) => {
                                    setVehiclePlate(e.target.value)
                                }}
                            />
                        </div>
                        <div className='flex gap-4 mb-7'>
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                                type="number"
                                placeholder='Vehicle Capacity'
                                value={vehicleCapacity}
                                onChange={(e) => {
                                    setVehicleCapacity(e.target.value)
                                }}
                            />
                            <select
                                required
                                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                                value={vehicleType}
                                onChange={(e) => {
                                    setVehicleType(e.target.value)
                                }}
                            >
                                <option value="" disabled>Select Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="auto">Auto</option>
                                <option value="moto">Moto</option>
                            </select>
                        </div>


                        <button className='w-full mt-4 bg-[#111] text-white px-4 py-2 rounded font-semibold'>Create Captain Account</button>
                    </form>

                    <p className='text-center mt-5'>Already have a account? <Link className='text-blue-600' to={"/captain-login"}>Login here</Link></p>

                </div>

                <div>
                    <p className='text-xs leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
                </div>
            </div>
        </>
    );
}

export default CaptainSignup;