"use client"
import React from 'react';
import backgroundImage from '../../../public/one.jpg';

const ActionSection = () => {
    return (
        <section
            className="bg-cover bg-center h-screen flex items-center bg-custom-bg"
        >
            <div className="container mx-auto text-center text-black">
                <h2 className="text-3xl font-semibold mb-6">Take Action</h2>
                <p className="text-xl mb-8">
                    Manage your tasks efficiently and stay organized.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default ActionSection;
