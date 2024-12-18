import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';

// test_cap@email.com
// test_cap_pass

const CaptainHome = () => {
    const [ridePopupPanel, setRidePopupPanel] = useState(true);
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

    const ridePopupPanelRef = useRef(null);
    const confirmRidePopupPanelRef = useRef(null);

    useGSAP(function () {
        if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ridePopupPanel])

    useGSAP(function () {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePopupPanel])

    return (
        <div className='h-screen'>

            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-login' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-3/5'>
                <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/oaHyBWG8fmC61RQUBizJ5ru-LjKVxVY1WkmwaBoJO8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmRh/aWx5bWFpbC5jby51/ay9pL3BpeC8yMDE1/LzA3LzI4LzIzLzJB/RUE4NTk0MDAwMDA1/NzgtMC1pbWFnZS1h/LTdfMTQzODEyMTc4/OTUwNy5qcGc" alt="map" />

            </div>

            <div className='h-2/5 p-6'>
                <CaptainDetails />
            </div>

            <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 pt-12 bg-white px-3 py-10 translate-y-full'>
                <RidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
            </div>

            <div ref={confirmRidePopupPanelRef} className='fixed h-screen w-full z-10 bottom-0 pt-12 bg-white px-3 py-10 translate-y-full'>
                <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
            </div>

        </div>
    )
}

export default CaptainHome