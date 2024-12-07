import React from 'react';
import { Link } from 'react-router-dom';

function Riding() {
    return (
        <>
            <div className='h-screen'>

                <Link to='/home' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full'>

                    <i className='ri-home-5-line text-lg font-medium'></i>

                </Link>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/oaHyBWG8fmC61RQUBizJ5ru-LjKVxVY1WkmwaBoJO8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmRh/aWx5bWFpbC5jby51/ay9pL3BpeC8yMDE1/LzA3LzI4LzIzLzJB/RUE4NTk0MDAwMDA1/NzgtMC1pbWFnZS1h/LTdfMTQzODEyMTc4/OTUwNy5qcGc" alt="map" />
                </div>

                <div className='h-1/2 p-4'>
                    <div className='flex items-center justify-between'>

                        <img className='h-14' src="https://imgs.search.brave.com/r5LpautcabQ5IYX_j6o8dNrzoaEl4WvFKmetAPZz4wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzgvVWJl/ci1QTkctUGhvdG9z/LnBuZw" alt="car" />

                        <div className='text-right'>

                            <h2 className='text-lg font-medium'>Anuj</h2>
                            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH04 AG 2674</h4>
                            <p className='text-sm text-gray-600'>Maruti Suzuki Ertiga</p>

                        </div>

                    </div>

                    <div className='flex gap-2 justify-between flex-col items-center'>



                        <div className='w-full mt-5'>

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

                    </div>

                    <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>

                </div>

            </div>
        </>
    );
}

export default Riding;