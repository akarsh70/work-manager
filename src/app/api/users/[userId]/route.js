import { NextResponse } from "next/server";
import { User } from "@/models/user"


export async function GET(request,{params}){
    const {userId} = params;

    const user = await User.finfById(userId).select("-password")

    return NextResponse.json(user)
}


export async function  DELETE(request,{params}){
    const {userId} = params;

    try{
        await User.deleteOne({
            _id:userId,
        })
    return NextResponse.json({
        message:"user deleted!!",
        success:true,
    })
    }catch(error){ 
        return NextResponse.json({
        message:"Error in deleteing user",
        success:false,
        })
    }
   
}

export async function PUT(request,{params}){
    const {userId}= params;
    const{name,password,about, profileURL} = await request.json();
    try{
        const user = await User.findById(userId);
        user.name = name;
        user.about = about;
        user.password = password;
        user.profileURL = profileURL

        const updateUser = await user.save()
        return NextResponse.json(updateUser)
    }catch(error){
        return NextResponse.json({
            message:"failed to update user!!",
            success: false,
        })
    }

}