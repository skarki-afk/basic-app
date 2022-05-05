import DetailInfo from "./DetailInfo"

type Props = {
    darkMode: boolean
    handleSidebar: ()=> void
    sidebar: boolean
    handleDark: ()=> void
    
}

const Detail =({darkMode,handleDark,handleSidebar,sidebar}:Props)=>{
    
    return(
        <div className={` ${darkMode? "bg-black text-white":"bg-white text-black"} `}>
            <DetailInfo 
            darkMode={darkMode}
            handleDark ={handleDark}
            sidebar={sidebar}
            handleSidebar={handleSidebar}
            
            />
        </div>
    )
}

export default Detail