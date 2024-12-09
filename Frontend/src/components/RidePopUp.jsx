import React from 'react';

function RidePopUp() {
    return (
        <div>
            <h5 onClick={() => props.setConfirmRidePanel(false)} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available</h3>

            <div className='flex items-center justify-between bg-yellow-400 rounded-xl p-3 mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://imgs.search.brave.com/y59SZ4weq5o7U0WAOifBj0CaMQQKqoy3YaPaNH24VEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/dGhlcmVzLWEtcHVi/bGljbHktYXZhaWxh/YmxlLWFpLW1vZGVs/LXdoaWNoLWNhbi1n/ZW5lcmF0ZS12MC14/NjViYnhkb3NrYjkx/LmpwZz93aWR0aD02/NDAmY3JvcD1zbWFy/dCZhdXRvPXdlYnAm/cz03OTU0ZDgyNGUy/N2MzMDZiYjA1OGY2/MmNhOTM4OGQ5MWIx/NmE5NjI5" alt="" />
                    <h2 className='text-lg font-medium'>Test_passenger</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
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

                <button onClick={() => {

                }} className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</button>

                <button onClick={() => {

                }} className='w-full bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg mt-1'>Ignore</button>

            </div>
        </div>
    );
}

export default RidePopUp;