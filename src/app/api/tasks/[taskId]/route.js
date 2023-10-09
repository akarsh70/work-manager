import { getResponseMessage } from "@/helper/responseMessage";
import { NextResponse } from "next/server";
import { Task } from "@/models/task"


export  async function GET(request,{params}){
const {taskId} = params;
try{
    const task = await Task.findById(taskId);
    return NextResponse.json(task);

}catch(error){
    console.log(error);
    return getResponseMessage("Error is getting Task!!",404,false)
}
}
// export async function POST(){

// }
export async function PUT(request,{params}){
try{
    const {taskId} = params;
const {title,content,status} = await request.json();
let task = await Task.findById(taskId);
(task.title = title),(task.content = content), (task.status = status);

const updatetask = await task.save();
return  NextResponse.json(updatetask)
}catch(error){
    console.log(error);
    return getResponseMessage("Error in updating task!!",500,false)
}
}
export async function DELETE(request,{params}){
try{
    const {taskId} = params;
    await Task.deleteOne({
        _id:taskId,
    })
    return getResponseMessage("TaskDeleted !",200,true);
}catch(error){
    console.log(error);
    return getResponseMessage("Error in deleting Task!!",500,false)
}
}