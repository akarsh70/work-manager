"use client"
import UserContext from '@/context/UserContext'
import { login } from '@/services/userService'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const router = useRouter();
    const context = useContext(UserContext)
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const loginFormSubmitted = async (event) => {
        event.preventDefault()
        console.log(loginData);
        if (loginData.email.trim() === "") {
            toast.info("Invalid Data", {
                position: "top-center"
            })
            return
        }
        try {
            const result = await login(loginData)
            console.log(result);
            toast.success("Logged in")
            context.setUser(result.user)
            router.push("/")
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
                position: "top-center"
            })
        }
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
                    <h1 className='text-3xl text-center' > Login Here</h1>

                    <form action='#!' onSubmit={loginFormSubmitted} className='mt-5' >


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
                                    setLoginData({
                                        ...loginData,
                                        email: event.target.value,
                                    })
                                }}
                                value={loginData.email}
                            />
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
                                    setLoginData({
                                        ...loginData,
                                        password: event.target.value,
                                    })
                                }}
                                value={loginData.password}
                            />
                        </div>


                        <div className='mt-4 flex justify-center'>
                            <button className='bg-green-600 py-2 px-3 rounded-lg hover:bg-green-400' >
                                Login
                            </button>
                            <button className='bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-800 ms-3' >
                                Reset
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}


export default Login