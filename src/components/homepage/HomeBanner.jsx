"use client"
import React from 'react';

const BannerSection = () => {
    return (
        <div className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto flex items-center justify-around py-5">

                <div className='w-80 rounded-full shadow-md'>
                    <img src="/signup.svg" alt="my image" />
                </div>

                <div className="  text-center ">
                    <h1 className="text-4xl font-bold mb-4"> Wellcome to Task Manager</h1>
                    <p className="mb-8 text-xl">Organize Your Tasks with Ease</p>
                    <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
