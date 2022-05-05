import Navbar from "../Navbar"
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchSlider from "./SearchSlider";
import { useState } from "react";



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
return(
    <div className={`w-96 px-4 ${darkMode? "bg-black text-white":"bg-white text-black"}`}>
        <Navbar 
        darkMode={darkMode}
        onClick={onClick}
        sidebar={sidebar}
        handleDark={handleDark}
        />
        <div className={`relative ${darkMode? "bg-black text-white":"bg-white text-black"}` }>
            <input className="mt-24 outline-none w-full border border-b-2 border-x-0 border-t-0 pb-2 text-black" type="text" placeholder="SEARCH PRODUCTS"/>
            <FilterListIcon className={`cursor-pointer absolute top-24 right-0 color-white ${darkMode? "text-black" : ""}`}/>
        </div>
        <div className="flex flex-col">
            <SearchSlider 
                favorite={favorite}
                handleFavorite ={handleFavorite}
            />
        </div>
    </div>
)
}

export default Search