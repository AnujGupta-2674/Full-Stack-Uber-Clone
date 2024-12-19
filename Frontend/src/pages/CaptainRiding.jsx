import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LiveTracking from '../components/LiveTracking';

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null);
    const location = useLocation();
    const ride = location.state?.ride;

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])

    return (
        <div>
            <div className='h-screen relative'>
                <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                   <LiveTracking/>
                    <Link to='/captain-login' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                        <i className="text-lg font-medium ri-logout-box-r-line"></i>
                    </Link>
                </div>

                <div className='h-4/5'>

                    <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/oaHyBWG8fmC61RQUBizJ5ru-LjKVxVY1WkmwaBoJO8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmRh/aWx5bWFpbC5jby51/ay9pL3BpeC8yMDE1/LzA3LzI4LzIzLzJB/RUE4NTk0MDAwMDA1/NzgtMC1pbWFnZS1h/LTdfMTQzODEyMTc4/OTUwNy5qcGc" alt="map" />

                </div>

                <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative' onClick={() => {
                    setFinishRidePanel(true)
                }}>
                    <h5 onClick={() => { }} className='p-1 text-center w-[95%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-up-wide-line"></i></h5>
                    <h4 className='text-xl font-semibold'>4 mins away</h4>
                    <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
                </div>

                <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 pt-12 bg-white px-3 py-10 translate-y-full'>
                    <FinishRide setFinishRidePanel={setFinishRidePanel} ride={ride} />
                </div>

            </div>
        </div>
    )
}

export default CaptainRiding;