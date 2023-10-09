 async function takeTime(){
    await new Promise((res)=>{
        // throw new Error("this is manual error")
        setTimeout(res,3000)
    })
}

export default async function About(){
    await takeTime()
    return(
        <div>
        <h1>This is about page</h1>
        </div>
    )
}