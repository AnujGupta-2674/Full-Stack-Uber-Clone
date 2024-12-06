import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LoactionSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);

    const vehiclePanelRef = useRef(null);
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const confirmRidePanelRef = useRef(null);

    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [confirmRidePanel, setConfirmRidePanel] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                opacity: 1,
                // padding:20
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                // padding: 20,
                opacity: 0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen])

    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanel])

    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePanel])

    return (
        <>
            <div className='h-screen relative overflow-hidden'>
                <img className='w-16 absolute left-5 top-5' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="logo" />

                <div className='h-screen w-screen'>
                    {/* image for temporary use */}
                    <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/oaHyBWG8fmC61RQUBizJ5ru-LjKVxVY1WkmwaBoJO8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmRh/aWx5bWFpbC5jby51/ay9pL3BpeC8yMDE1/LzA3LzI4LzIzLzJB/RUE4NTk0MDAwMDA1/NzgtMC1pbWFnZS1h/LTdfMTQzODEyMTc4/OTUwNy5qcGc" alt="map" />
                </div>

                <div className='flex flex-col justify-end absolute top-0 w-full h-screen'>

                    <div className='h-[30%] p-6 bg-white relative'>
                        <h5 ref={panelCloseRef} onClick={() => setPanelOpen(false)} className='opacity-0 absolute right-6 top-6 text-2xl'>
                            <i className="ri-arrow-down-wide-line"></i>
                        </h5>
                        <h4 className='text-2xl font-bold'>Find a trip</h4>
                        <form onSubmit={(e) => {
                            submitHandler(e)
                        }}>
                            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
                            <input onClick={() => {
                                setPanelOpen(true)
                            }} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' value={pickup} onChange={(e) => {
                                setPickup(e.target.value)
                            }} />
                            <input onClick={() => {
                                setPanelOpen(true)
                            }} className='bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full' type="text" placeholder='Enter your destination' value={destination} onChange={(e) => {
                                setDestination(e.target.value)
                            }} />
                        </form>
                    </div>

                    <div ref={panelRef} className='bg-white h-0'>
                        <LocationSearchPanel setVehiclePanel={setVehiclePanel} setPanelOpen={setPanelOpen} />
                    </div>

                </div>

                <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 pt-12 bg-white px-3 py-10 translate-y-full'>
                    <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
                </div>

                <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 pt-12 bg-white px-3 py-6 translate-y-full'>
                    <ConfirmRide />
                </div>



            </div >
        </>
    )
}

export default Home;