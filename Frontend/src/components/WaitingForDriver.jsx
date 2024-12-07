import React from 'react';

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.WaitingForDriver(false)
                // props.setVehiclePanel(false)
            }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

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

            </div>

        </div>
    )
}

export default WaitingForDriver;