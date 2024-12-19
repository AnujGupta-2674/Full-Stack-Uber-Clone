import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FinishRide(props) {
    const navigate = useNavigate();

    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
            rideId: props.ride._id
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }
    }

    return (
        <div>
            <h5 onClick={() => props.setFinishRidePanel(false)} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>

            <div className='flex border-2 items-center justify-between border-yellow-400 rounded-xl p-4 mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://imgs.search.brave.com/y59SZ4weq5o7U0WAOifBj0CaMQQKqoy3YaPaNH24VEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/dGhlcmVzLWEtcHVi/bGljbHktYXZhaWxh/YmxlLWFpLW1vZGVs/LXdoaWNoLWNhbi1n/ZW5lcmF0ZS12MC14/NjViYnhkb3NrYjkx/LmpwZz93aWR0aD02/NDAmY3JvcD1zbWFy/dCZhdXRvPXdlYnAm/cz03OTU0ZDgyNGUy/N2MzMDZiYjA1OGY2/MmNhOTM4OGQ5MWIx/NmE5NjI5" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h2>
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

                    <button onClick={endRide} className='w-full flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg mt-1'>Finish Ride</button>

                    <p className='mt-10 text-red-500 text-xs'>Click on finish ride button if you have completed the payment.</p>

                </div>

            </div>
        </div>
    );
}

export default FinishRide;