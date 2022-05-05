import AppsIcon from '@mui/icons-material/Apps';
import "./hero.css"

interface Props{
    darkMode: boolean
    sidebar: boolean
    onClick: ()=> void
    handleDark: ()=> void
}

const Hero =({darkMode,sidebar,onClick,handleDark}:Props)=>{
    const style1 = {
        backgroundImage: "url('/images/category-1.png')"
    }
    const style2 = {
        backgroundImage: "url('/images/category-2.png')"
    }
    const style3 = {
        backgroundImage: "url('/images/category-3.png')"
    }
    const style4 = {
        backgroundImage: "url('/images/category-4.png')"
    }
    const style5={
        backgroundImage: "url('/images/trending-1.png')"
    }
    const style6={
        backgroundImage: "url('/images/trending-2.png')"
    }

    return(
        <div className={` height px-4 font-semibold text-xs position pt-24 ${darkMode?"bg-black text-white":""} relative`}>
            <div className='mb-4'>
                <div className='flex items-center justify-between'>
                    <h3 className="uppercase font-bold tracking-wider">categories</h3>
                    <AppsIcon className='cursor-pointer'/>
                </div>
                <div className='py-7 flex'>
                    <div style={style1} className='cursor-pointer h-20 bg-center w-20 rounded-full justify-center flex items-center text-white font-semibold text-xs uppercase mr-3'>new</div>
                    <div style={style2} className='cursor-pointer h-20 bg-center w-20 rounded-full justify-center flex items-center text-white font-semibold text-xs uppercase mr-3'>tops</div>
                    <div style={style3} className='cursor-pointer h-20 bg-center w-20 rounded-full justify-center flex items-center text-white font-semibold text-xs uppercase mr-3'>jackets</div>
                    <div style={style4} className='cursor-pointer h-20 bg-center w-20 rounded-full justify-center flex items-center text-white font-semibold text-xs uppercase'>pants</div> 
                </div>
            </div>

            <div className='h-full'>
                <div className='flex items-center justify-between'>
                    <h3 className="uppercase font-bold tracking-wider">trending collections</h3>
                    <AppsIcon className='cursor-pointer'/>
                </div>
                <div className=' h-screen pt-4'>
                    <div style={style5} className="w-full h-full bg-no-repeat flex items-end bg-cover bg-center mb-8"> 
                        <p className='uppercase text-white font-semibold w-44 text-xl ml-4 my-4'>outwear by cristian scarlato</p>
                    </div>
                    <div style={style6} className="w-full h-full bg-no-repeat bg-center flex flex-col items-center justify-end bg-cover "> 
                        <p className='uppercase text-white font-semibold text-xl my-2'>basic summer sale</p>
                        <p className='uppercase text-white text-sm font-normal mb-20'>march 10 - 15</p>
                    </div>
                </div>
            </div>
            {/* <div className={`h-screen w-1/2 ${darkMode? "bg-black" :"bg-white"} fixed top-0 left-0 bottom-0 py-5 z-30 duration-300 ${sidebar? "translate-x-0 shadow-4xl": "translate-x-100"}`}>
                <ul className='h-full flex flex-col items-end mx-5 text-base uppercase'>
                    <CloseIcon className='text-end cursor-pointer' onClick={onClick}/>
                    <div className='flex items-center'>
                        <li className='m-4'>darkMode</li>
                        <div 
                        className={`h-5 w-8 rounded-2xl border ${darkMode? "border-white":"border-black"} relative`}
                        onClick={handleDark}>
                            <span className={`h-4 w-4 rounded-full bg-black absolute bottom-px ${darkMode? "left-0 bg-white":"right-0"} duration-300 cursor-pointer`} ></span>
                        </div>
                    </div>

                    <div className='cursor-pointer w-full'>
                        <Link to= "/search" className='w-full flex items-center justify-end'>
                            <SearchIcon className='mx-3 '/>
                            <li className='my-2'>search</li>
                        </Link>
                    </div>
                    <div className='flex items-center absolute bottom-16 cursor-pointer'>
                        <LogoutIcon className='mx-2'/>
                        <li className='my-2'>logout</li>
                    </div>
                </ul>
            </div> */}
        </div>
    )
}

export default Hero