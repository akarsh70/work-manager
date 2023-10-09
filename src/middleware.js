import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
    console.log("middleware executed");

    // Check if the "authToken" cookie exists before accessing its value
    const authTokenCookie = request.cookies.get("authToken");
    const authToken = authTokenCookie ? authTokenCookie.value : null;
    if (request.nextUrl.pathname === "/api/login" ||
        request.nextUrl.pathname === "/api/users") {
        return;
    }
    console.log(authToken);
    const loggedInUserNotAccessPaths =
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname === "/signup"
    console.log(authToken);
    if (loggedInUserNotAccessPaths) {
        if (authToken) {
            return NextResponse.redirect(new URL("/profile/user", request.url))
        }

    } else {
        if (!authToken) {
            if (request.nextUrl.pathname.startsWith("/api")) {
                return NextResponse.json({
                    messagr: "Access Denied!!",
                    success: false,
                }, { status: 401, })
            }
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }
}

export const config = {
    matcher: [
        "/",
        "/login",
        "/signup",
        "/add-task",
        "/show-tasks",
        "/profile/:path*",
        "/api/:path*",
    ],
};