import React from 'react';
import { FaTasks, FaUser, FaCheckCircle } from 'react-icons/fa';

const FeatureSection = () => {
    return (
        <section className="bg-blue-500 text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-blue-400 p-6 rounded-lg shadow-md">
                        <div className="text-4xl mb-4">
                            <FaTasks />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Task Management</h3>
                        <p className="text-gray-100">
                            Organize and manage your tasks efficiently.
                        </p>
                    </div>

                    <div className="border border-blue-400 p-6 rounded-lg shadow-md">
                        <div className="text-4xl mb-4">
                            <FaUser />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">User Accounts</h3>
                        <p className="text-gray-100">
                            Create and manage user accounts for personalized task lists.
                        </p>
                    </div>

                    <div className="border border-blue-400 p-6 rounded-lg shadow-md">
                        <div className="text-4xl mb-4">
                            <FaCheckCircle />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Prioritization</h3>
                        <p className="text-gray-100">
                            Prioritize tasks and stay focused on what matters most.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
