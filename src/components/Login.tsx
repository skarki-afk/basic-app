interface Props{
    darkMode: boolean;
}

const Login = ({darkMode}:Props) => {
    return (
        <div className={`w-96 h-screen px-6 ${darkMode? "bg-black text-white" : ""}  dark:bg-black dark:text-white`}>
            <div className="flex flex-col items-center ">
                <h3 className="uppercase  tracking-wider font-bold text-3xl pt-8 mb-8 text-center">login</h3>
                <div>

                <p className="uppercase mb-16  tracking-wider w-44 text-center font-bold text-sm">get started now for 20% discount</p>
                </div>
            </div>
            <div> 
                <label htmlFor="user" className="uppercase tracking-wider font-bold">username</label>
                <input className="h-9 outline-none  rounded-sm border border-black w-full mt-1.5 mb-4 text-black" type="text" id="user" />
                <label htmlFor="password" className="uppercase tracking-wider font-bold">password</label>
                <input className="h-9 outline-none rounded-sm border border-black w-full mt-1.5 text-black mb-11"type="password" id="password" />
            </div>
            <button 
                 className={`uppercase border font-bold border-black ${darkMode? "border-white" : ""} dark:border-white w-full h-11 text-md rounded-sm my-3 `}>
                log in
            </button>

        </div>
    )
}

export default Login