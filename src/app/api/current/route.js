import { NextResponse } from "next/server";
import {User} from "@/models/user"
import jwt from "jsonwebtoken"
export async function GET(request){
   const authToken =  request.cookies.get("authToken")?.value;
  console.log(authToken);

const data = jwt.verify(authToken,process.env.JWT_KEY)
console.log(data);
const user = await User.findById(data._id).select("-password")
  return NextResponse.json(user)
}