import Navbar from "../Navbar"
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchSlider from "./SearchSlider";
import { useState } from "react";
import useFetch from "../../data/useFetch";



interface Props {
    darkMode: boolean;
    onClick: ()=>void;
    sidebar: boolean;
    handleDark: ()=> void;
}
const Search =({darkMode,onClick,sidebar,handleDark}:Props)=>{
    const [favorite,setFavorite] = useState<boolean>(false)
    const handleFavorite =()=>{
            setFavorite(prevFavorite => !prevFavorite)
    }
    const {data , error, isPending} = useFetch("http://localhost:8000/products")
return(
    <div className={`w-96 px-4 ${darkMode? "bg-black text-white":"bg-white text-black"}`}>
        <Navbar 
        darkMode={darkMode}
        onClick={onClick}
        sidebar={sidebar}
        handleDark={handleDark}
        />
        <div className={`relative ${darkMode? "bg-black text-white":"bg-white text-black flex items-center justify-center"}` }>
            <input className={`mt-24 outline-none w-full border border-b-2 border-x-0 border-t-0 ${darkMode? "" : "pb-2"} text-black`} type="text" placeholder=" SEARCH PRODUCTS"/>
            <FilterListIcon className={`cursor-pointer absolute top-24 right-0 color-white ${darkMode? "text-black" : ""}`}/>
        </div>
        <div className={`${isPending? "h-screen" : "" } ${error? "h-screen" : "" } flex flex-col ${isPending? "items-center" : "" } ${error? "items-center" : "" } pt-2`}>
            {isPending && <div>...Loading</div>}
            {data && <SearchSlider 
                favorite={favorite}
                handleFavorite ={handleFavorite}
            />}
            {error && <div> {error} </div>}
        </div>
    </div>
)
}

export default Search