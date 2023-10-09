"use client"
import UserContext from '@/context/UserContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { logout } from '@/services/userService'
import { useRouter } from 'next/navigation'

const CustomNavbar = () => {
  const context = useContext(UserContext)
  const router = useRouter()
  console.log(context);
  async function doLogout() {
    try {
      const result = await logout()
      console.log(result);
      context.setUser(undefined)
      router.push("/")
    } catch (error) {
      toast.error("Logout error")
    }
  }
  return (
    <nav className='bg-blue-600 h-12 py-2 px-4 flex justify-between items-center'>
      <div className='brand'><h1 className='text-2xl font-semibold'><a href='#!'>Work Manager</a></h1></div>
      <div>
        <ul className='flex space-x-5'>
          {context.user && (
            <>
              <li>
                <Link href={"/"} className='hover:text-blue-200'>Home</Link>
              </li>
              <li>
                <Link href={"/add-task"} className='hover:text-blue-200'>Add Task</Link>
              </li>
              <li>
                <Link href={"/show-tasks"} className='hover:text-blue-200'>Show Task</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className='flex space-x-5'>
          {context.user && (
            <>
              <li>
                <Link href={"#!"} className='hover:text-blue-200'>{context.user.name}</Link></li>

              <li>
                <button onClick={doLogout}>Logout</button>
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li>
                <Link href={"/login"} className='hover:text-blue-200'>Login</Link></li>

              <li>
                <Link href={"/signup"} className='hover:text-blue-200'>Sign Up</Link></li>
            </>

          )}

        </ul>
      </div>
    </nav >
  )
}

export default CustomNavbar