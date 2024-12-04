import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8')] h-screen pt-8 w-full flex justify-between flex-col">
                <img className='w-16 ml-8' src="https://imgs.search.brave.com/t7VQJJJK16Akv9oRjNrWOU12DotP1kq0YYOJl0Evpks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzU5MDc2MC5wbmc" alt="logo" />
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                    <Link to={"/login"} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </>
    )
}

export default Home;