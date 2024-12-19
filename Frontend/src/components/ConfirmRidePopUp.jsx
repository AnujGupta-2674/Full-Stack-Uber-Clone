import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ConfirmRidePopUp(props) {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }

    }

    return (
        <div>
            <h5 onClick={() => props.setRidePopupPanel(false)} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>

            <div className='flex items-center justify-between bg-yellow-400 rounded-xl p-3 mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://imgs.search.brave.com/y59SZ4weq5o7U0WAOifBj0CaMQQKqoy3YaPaNH24VEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/dGhlcmVzLWEtcHVi/bGljbHktYXZhaWxh/YmxlLWFpLW1vZGVs/LXdoaWNoLWNhbi1n/ZW5lcmF0ZS12MC14/NjViYnhkb3NrYjkx/LmpwZz93aWR0aD02/NDAmY3JvcD1zbWFy/dCZhdXRvPXdlYnAm/cz03OTU0ZDgyNGUy/N2MzMDZiYjA1OGY2/MmNhOTM4OGQ5MWIx/NmE5NjI5" alt="" />
                    <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            <div className='flex gap-2 justify-between flex-col items-center'>

                <div className='w-full mt-5'>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Pickup</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Destination</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>${props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>

                </div>

                <div className='mt-6 w-full'>

                    <form onSubmit={
                        submitHandler
                    }>

                        <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />

                        <button className='w-full flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg mt-1'>Confirm</button>

                        <button onClick={() => {
                            props.setConfirmRidePopupPanel(false)
                            props.setRidePopupPanel(false)
                        }} className='w-full bg-red-600 text-white font-semibold p-3 rounded-lg mt-1'>Cancel</button>

                    </form>

                </div>

            </div>
        </div >
    );
}

export default ConfirmRidePopUp;