import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

interface Props {
    darkMode: boolean;
    onClick: ()=>void;
    handleDark: ()=> void;
    sidebar: boolean;
}

const Navbar =({darkMode,onClick,handleDark,sidebar}:Props)=>{
    return(
        <div className=''>
            
                <div 
                className={`w-96 md:w-screen flex justify-between px-4 py-8 fixed top-0 left-0  ${darkMode?"bg-black text-white":"bg-white"} z-10`}>
                    <MenuIcon
                    className='cursor-pointer' 
                    onClick={onClick}/>
                    <Link to="/">
                    <h3 className='uppercase cursor-pointer font-bold tracking-wider'>basics</h3>
                    </Link>
                    <ShoppingBagOutlinedIcon className={`cursor-pointer `}/>
                </div>

            <div className={`h-screen w-1/2 ${darkMode? "bg-black text-white" :"bg-white"} fixed top-0 left-0 bottom-0 py-5 z-30 duration-300 ${sidebar? "translate-x-0 shadow-4xl": "translate-x-100"}`}>
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
                        <Link to= "/" className='w-full flex items-center justify-end'>
                            <li className='my-2'>home</li>
                            <HomeIcon className='mx-3 '/>
                            
                        </Link>
                    </div>
                    <div className='cursor-pointer w-full'>
                        <Link to= "/search" className='w-full flex items-center justify-end'>
                            <li className='my-2'>search</li>
                            <SearchIcon className='mx-3 '/>
                        </Link>
                    </div>
                    <div className=' absolute bottom-16 cursor-pointer'>
                        <Link to="/browse" className='flex items-center'>
                            <li className='my-2'>logout</li>
                            <LogoutIcon className='mx-2'/>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>

    )
}

export default Navbar;