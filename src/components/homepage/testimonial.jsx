"use client"
import React, { useState } from 'react';

const testimonialData = [
    {
        name: 'John Doe',
        position: 'CEO, Company ABC',
        quote:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/log.svg',
    },
    {
        name: 'Jane Smith',
        position: 'Designer, Company XYZ',
        quote:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '/log.svg',
    },
    {
        name: 'Jane Smith',
        position: 'Designer, Company XYZ',
        quote:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: '/log.svg',
    },
];

const TestimonialSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonialData.length - 1 ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonialData.length - 1 : prev - 1
        );
    };

    return (
        <section className="bg-blue-500 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <img
                        src={testimonialData[currentTestimonial].image}
                        alt={testimonialData[currentTestimonial].name}
                        className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold">
                        {testimonialData[currentTestimonial].name}
                    </h2>
                    <p className="text-gray-600">
                        {testimonialData[currentTestimonial].position}
                    </p>
                    <p className="text-gray-800 mt-4">
                        {testimonialData[currentTestimonial].quote}
                    </p>
                </div>

                <div className="mt-4 flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-l"
                        onClick={prevTestimonial}
                    >
                        Previous
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r"
                        onClick={nextTestimonial}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
