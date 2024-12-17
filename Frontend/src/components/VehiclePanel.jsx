import React from 'react';

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 onClick={() => props.setVehiclePanel(false)} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex active:border-black border-2  rounded-xl mb-2 w-full p-3 items-center bg-gray-100 justify-between'>
                <img className='h-12' src="https://imgs.search.brave.com/r5LpautcabQ5IYX_j6o8dNrzoaEl4WvFKmetAPZz4wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzgvVWJl/ci1QTkctUGhvdG9z/LnBuZw" alt="Car" />

                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>${props.fare.car}</h2>

            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex border-2 active:border-black rounded-xl mb-2 w-full p-3 items-center justify-between bg-gray-100'>
                <img className='h-12' src="https://imgs.search.brave.com/M80ekhuOQtpOR99O0a2encmAioFbRriXRfpucXVNIkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2F1dG8tcmlj/a3NoYXctcG5nLXJp/Y2tzaGF3LWluZGlh/LXRyYW5zcG9ydC10/YXhpLWFzaWFuLWF1/dG9yaWNrc2hhdy05/NjAucG5n" alt="Auto Rickshaw" />

                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
                </div>
                <h2 className='text-xl font-semibold'>${props.fare.auto}</h2>

            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex border-2 active:border-black rounded-xl mb-2 w-full p-3 items-center bg-gray-100 justify-between'>
                <img className='h-12' src="https://imgs.search.brave.com/8ZCmrYSjDsVn0Cr6OscktE-YjZmsvPuQLkrro9bAmyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3JlZGl0/aW5nem9uZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDEvQmlrZS1QTkct/Qnktc3ItZWRpdGlu/Zy16b25lLTItMS5w/bmc_cmVzaXplPTUw/MCw0MTkmc3NsPTE" alt="bike" />

                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, moto rides</p>
                </div>
                <h2 className='text-xl font-semibold'>${props.fare.moto}</h2>

            </div>
        </div>
    )
}

export default VehiclePanel