import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task"
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function GET(request) {
  try {
    const tasks = await Task.find();
    console.log(tasks)
    return NextResponse.json(tasks);

  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting data!!", 404, false)
  }
}

export async function POST(request) {
  const { title, content, status, userId } = await request.json();
  console.log("testing", title, content, status, userId)
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);

  const data = jwt.verify(authToken, process.env.JWT_KEY)
  console.log(data._id);
  try {
    const task = new Task({
      title,
      content,
      userId: data._id,
      status,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to create task!!",
      successs: false,
    })
  }
}