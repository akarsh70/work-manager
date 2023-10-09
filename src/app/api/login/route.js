import { NextResponse } from "next/server";
import { User } from "@/models/user"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
// import connectDb from "@/helper/db";
import { connectToDatabase } from "@/helper/db"
export async function POST(request) {
    try {
        // const connection = await connectDb()
        const { email, password } = await request.json();
        const dataBase = await connectToDatabase
        const user = await User.findOne({
            email: email,
        });
        console.log(email, "--------->")
        if (!user) {
            throw new Error("user not found!!");
        }
        const matched = bcrypt.compareSync(password, user.password)
        if (!matched) {
            throw new Error("Password not matched!!")
        }
        const token = jwt.sign({
            _id: user._id,
            name: user.name
        },
            process.env.JWT_KEY
        )

        const response = NextResponse.json({
            message: "Login Success!!",
            sucesss: true,
            user: user
        })
        console.log(response);
        response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: false
        })
        console.log(user);
        console.log(token);
        return response;
        // connection.close()
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        },
            {
                status: 500,
            });
    }
}