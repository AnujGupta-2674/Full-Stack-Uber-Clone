import React from 'react';

const LocationSearchPanel = (props) => {

    // sample array for location
    const location = [
        "24B, Near Kapoor's cafe, Shereyians Coding School, Bhopal",
        "26A, Near Jai Ambe Enterprises cafe, Shereyians Coding School, Mumbai",
    ]

    return (
        <div className='mt-2'>
            {/* this is just sample data */}
            {
                location.map(function (elem, idx) {
                    return <div key={idx}
                        onClick={() => {
                            props.setVehiclePanel(true)
                            props.setPanelOpen(false)
                        }} className='flex items-center border-2 p-3 justify-start gap-4 my-2 border-gray-100 active:border-black rounded-xl'>
                        <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }
        </div >
    )
}

export default LocationSearchPanel;