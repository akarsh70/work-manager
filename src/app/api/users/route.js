import { connectDb } from "@/helper/db";
import { User } from "@/models/user"

import { NextResponse } from "next/server"

import bcrypt from "bcryptjs"
connectDb()
export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: false
    })
  }
  return NextResponse.json(users)
}
export async function POST(request) {


  //fetch


  const { name, email, password, about, profileURL } = await request.json()

  const user = new User({
    name,
    email,
    password,
    about,
    profileURL
  });
  try {

    user.password =await bcrypt.hashSync(user.password,
      parseInt(process.env.BCRYPT_SALT))
    console.log(user);
    const createUser = await user.save()


    const response = NextResponse.json(user, {
      status: 201,
    })
    return response
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user!!",
      status: false
    },{
      status: 500
    })
  }
  // const body = request.body;
  // console.log(body);
  // console.log(request.method);
  // console.log(request.nextUrl.pathname);

  // return NextResponse.json({
  //     message:"posting user data"
  // })

}
export function DELETE() {

}
export function PUT() {

}