import ImgSlider from "./ImgSlider"
import {Link} from "react-router-dom"

interface Props{
    darkMode: boolean
}
const Main=({darkMode}:Props)=>{
    
    return(
        <div className="h-full">
            <ImgSlider/>
            <div className="flex flex-col items-center my-7 px-5">
                <Link className="w-full h-14" to="/signup">
                    <button 
                    className={`uppercase font-thin w-full h-14 rounded-sm mb-3 ${ darkMode? "bg-white text-black": "bg-black text-white"} dark:bg-white dark:text-black`}
                    >
                        register
                    </button>
                </Link>
                <Link className ="w-full h-14" to="/login">
                    <button 
                    className={`uppercase border ${darkMode? "border-white": "border-black"} dark:border-white  w-full h-14 rounded-sm my-3`}>
                        login 
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Main