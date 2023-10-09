"use client"
import { signUp } from '@/services/userService'
import React, { useState } from 'react'
import { toast } from "react-toastify"


const Signup = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://i.stack.imgur.com/l60Hf.png"
    })

    const doSignup = async (event) => {
        event.preventDefault()
        console.log(event);
        console.log(data);
        if (data.name.trim() === "" || data.name == null) {
            toast.warning(" Name is Required");
            return
        }

        try {
            const result = await signUp(data)
            console.log(result);
            toast.success("User is Registered!!", {
                position: "top-center"
            })

            setData({
                name: "",
                email: "",
                password: "",
                about: "",
                profileURL: ""
            })
        } catch (error) {
            console.log(error);
            toast.error("Registered Error" + error.response.data.message, {
                position: "top-center"
            })
        }
    };
    const resetForm = () => {
        setData({
            name: "",
            email: "",
            password: "",
            about: "",
            profileURL: ""
        })
    }
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-4 col-start-5 '>

                <div className='my-8 flex justify-center'>
                    <img src="/signup.svg" alt="my image" style={{
                        width: "50%"
                    }} />

                </div>
                <div className='py-5'>
                    <h1 className='text-3xl text-center' > Signup Here</h1>
                    <form action='#!' className='mt-5' onSubmit={doSignup}>
                        <div className='mt-3'>
                            <label htmlFor="user_name" className='block text-sm font-medium mb-2 ps-2'>
                                Username
                            </label>
                            <input
                                type='text'
                                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800'
                                placeholder='Enter Here'
                                id='user_name'
                                name="user_name"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        name: event.target.value,
                                    })
                                }}
                                value={data.name}
                            />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="user_email" className='block text-sm font-medium mb-2 ps-2'>
                                Email
                            </label>
                            <input
                                type='email'
                                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800'
                                placeholder='Enter Here'
                                id='user_email'
                                email="user_email"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        email: event.target.value,
                                    })
                                }}
                                value={data.email} />
                        </div>  <div className='mt-3'>
                            <label htmlFor="user_password" className='block text-sm font-medium mb-2 ps-2'>
                                Password
                            </label>
                            <input
                                type='password'
                                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800'
                                placeholder='Enter Here'
                                id='user_password'
                                password="user_password"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        password: event.target.value,
                                    })
                                }}
                                value={data.password} />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="user_about" className='block text-sm font-medium mb-2 ps-2'>
                                About
                            </label>
                            <textarea
                                type='password'
                                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800'
                                placeholder='Enter Here'
                                id='user_about'
                                rows={8}
                                about="user_about"
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        about: event.target.value,
                                    })
                                }}
                                value={data.about}>
                            </textarea>
                        </div>
                        <div className='mt-4 flex justify-center'>
                            <button type='submit' className='bg-green-600 py-2 px-3 rounded-lg hover:bg-green-400' >
                                Sign Up
                            </button>
                            <button onClick={resetForm} type='button' className='bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-800 ms-3' >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup