interface Props{
    darkMode: boolean
}

const SignUp = ({darkMode}: Props) => {
    return (
        <div className={`w-96 h-screen px-6 dark:bg-black dark:text-white ${darkMode? "bg-black text-white":""}`}>
            <div className="flex flex-col items-center ">
                <h3 className="uppercase  tracking-wider font-bold text-3xl pt-8 mb-8 text-center">register</h3>
                <div>

                <p className="uppercase tracking-wider mb-16 w-44 text-center font-bold text-sm">get started now for 20% discount</p>
                </div>
            </div>
            <div> 
                <label htmlFor="user" className="uppercase font-bold  tracking-wider text-left">username</label>
                <input className="h-9 outline-none  rounded-sm border border-black w-full mt-1.5 mb-6" type="text" id="user" />
                <label htmlFor="password" className="uppercase font-bold  tracking-wider text-left mb-px">password</label>
                <input className="h-9 outline-none rounded-sm border border-black w-full mt-1.5 mb-6"type="password" id="password" />
                <label htmlFor="password" className="uppercase tracking-wider font-bold text-left mb-px">confirm password</label>
                <input className="h-9 outline-none rounded-sm border border-black w-full mt-1.5 mb-11"type="password" id="password" />
            </div>
            <button 
                 className={`uppercase border font-bold border-black w-full h-11 text-md rounded-sm my-3 mb-10 ${darkMode? "border-white": ""} dark:border-white`}>
                register
            </button>

        </div>
    )
}

export default SignUp