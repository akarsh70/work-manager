"use client"

import { addTask } from "@/services/taskService"
import { useState } from "react"
import React from 'react';
import { toast } from "react-toastify"


const AddTask = () => {
    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "",
        userId: "",
    })

    const handleAddTask = async (event) => {
        event.preventDefault()
        console.log(task);
        try {
            const result = await addTask(task)
            console.log(result);
            toast.success("Your Task is added !!", {
                position: "top-center"
            });

            setTask({
                title: '',
                content: '',
                status: '',
            })
        } catch (error) {
            console.log(error);
            toast.error("Task not added!!", {
                position: "top-center"
            })
        }
    }

    return (
        <div className='grid grid-cols-12 justify-center'>
            <div className=' col-span-6 col-start-4 p-5 shadow-sm'>

                <div className='my-8 flex justify-center'>
                    <img src="/login1.svg" alt="my image" style={{
                        width: "50%"
                    }} />

                </div>
                <h1 className='text-3xl text-center'>Add your task Here </h1>
                <form action='#!' onSubmit={handleAddTask}>
                    <div className='mt-4'>
                        <label htmlFor='task_title' className='block tex-sm font-medium mb-2'>Title</label>
                        <input
                            type='text'
                            className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800'
                            id='task_title'
                            name="task_title"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    title: event.target.value,
                                })
                            }}
                            value={task.title}
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor='task_content' className='block tex-sm font-medium mb-2'>Content</label>
                        <textarea
                            className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800'
                            id='task_content'
                            name="task_content"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    content: event.target.value,
                                })
                            }}
                            value={task.content}
                            rows={5} />
                    </div>
                    <div className='mt-4'>

                        <label htmlFor='task_status' className='block text-sm font-medium mb-2'>
                            Status
                        </label>
                        <select id="task_status" className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800'
                            name="task_status"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    status: event.target.value,
                                })
                            }}
                            value={task.status}
                        >
                            <option value="none" selected disabled>---Select Status---</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className='mt-4 flex justify-center'>
                        <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800' >
                            Add Task
                        </button>
                        <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3' >
                            Clear
                        </button>
                    </div>
                    {
                        // JSON.stringify(task)
                    }
                </form>
            </div>
        </div>
    )
}

export default AddTask