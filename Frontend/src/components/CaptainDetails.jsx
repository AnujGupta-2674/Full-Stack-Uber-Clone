import React, { useContext } from 'react';
import { CaptainDataContext } from "../context/CaptainContext";

function CaptainDetails() {
    const { captain } = useContext(CaptainDataContext);
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-4'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/LvQgQ6ronCeOfP_oGXqDtzWCbWrrcYjVPbFtjb9YVHo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3VuLmNvLnVr/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAyL0NyZWVweTYu/cG5nP3N0cmlwPWFs/bCZ3PTk2MA" alt="" />
                    <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>$295.2</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>

            <div className='flex mt-6 p-3 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-2xl font-thin ri-time-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>

                <div className='text-center'>
                    <i className="text-2xl font-thin ri-speed-up-fill"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>

                <div className='text-center'>
                    <i className="text-2xl font-thin ri-booklet-fill"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </>
    );
}

export default CaptainDetails;