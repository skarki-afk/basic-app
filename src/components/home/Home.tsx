import {useState} from "react"
import Navbar from './Navbar';
import Hero from './Hero'
import HeroNext from "./HeroNext"

interface Props{
    darkMode: boolean;
    handleDark: ()=> void;
    handleSidebar: ()=>void;
    sidebar: boolean
}

const Home =({darkMode,handleDark,handleSidebar,sidebar}:Props)=>{
    
    return(
        <div className={`w-screen md:w-96${darkMode?"bg-black text-white": ""}`}>
            <Navbar 
            darkMode = {darkMode}
            onClick ={handleSidebar}
            sidebar= {sidebar}
            handleDark= {handleDark}
            />
            <Hero 
                darkMode = {darkMode}
                sidebar ={sidebar}
                onClick ={handleSidebar}
                handleDark= {handleDark}
            />
            <HeroNext
                darkMode ={darkMode}
            />
        </div>
    )
}

export default Home