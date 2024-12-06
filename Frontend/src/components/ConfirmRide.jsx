import React from 'react';

const ConfirmRide = () => {
    return (
        <div>
            <h5 onClick={() => props.setVehiclePanel(false)} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>

                <img className='h-20' src="https://imgs.search.brave.com/r5LpautcabQ5IYX_j6o8dNrzoaEl4WvFKmetAPZz4wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzgvVWJl/ci1QTkctUGhvdG9z/LnBuZw" alt="car" />

                <div className='w-full mt-5'>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>202/6</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Gauri Shankar Wadi No:-2, Mumbai</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>D-11/Sec-5</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kandiwali West, Mumbai</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>$193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>

                </div>

                <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</button>

            </div>

        </div>
    )
}

export default ConfirmRide