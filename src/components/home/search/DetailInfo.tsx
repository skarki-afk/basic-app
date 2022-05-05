import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams,} from 'react-router-dom';
import useFetch from '../../data/useFetch';

type Props = {
    darkMode: boolean
    handleSidebar: ()=> void
    sidebar: boolean
    handleDark: ()=> void
}


const Detail =({darkMode, handleDark,handleSidebar,sidebar}:Props)=>{
    const { id } = useParams();
    const {newData: products} = useFetch("http://localhost:8000/products/" + id)
   console.log(products)

    const style = {
        backgroundImage: `url('/images/${ products.img }')`
        }
    // const detailElements = products.map(items => {
    //     const style = {
    //         backgroundImage: `url('/images/${ items.img }')`
    //     }
        
    //     return(
    //         <div style={style} className={`h-full relative w-screen  bg-no-repeat bg-contain`}>
    //             <div className={`absolute px-5 bottom-8 ${darkMode? "bg-black text-white":"bg-white text-black"} w-screen flex flex-col border ${darkMode? "border-white" : "border-black"} `}>
    //                 <div className='flex text-lg justify-between py-4 '>
    //                     <span className='font-semibold capitalize'> { items.title } </span>
    //                     <span>$ { items.price }</span>
    //                 </div>
    //                 <button className={`uppercase ${darkMode? "text-black bg-white":"text-white bg-black"}  w-full my-4 rounded-sm h-12`}>
    //                     buy now
    //                 </button>
    //             </div>
    //         </div>
            
    //     )
    // })
    return(
        <div className='h-screen'>
            <div className='flex justify-center'>
                <div 
                className={`w-96 md:w-screen flex justify-between px-4 py-8 fixed top-0 left-0 md:left- bg-transparent z-10`}>
                    <MenuIcon
                    className='cursor-pointer' 
                    onClick={handleSidebar}/>
                    <Link to="/home">
                    <h3 className='uppercase cursor-pointer font-bold tracking-wider'>basics</h3>
                    </Link>
                    <ShoppingBagOutlinedIcon className={`cursor-pointer `}/>
                </div>

                <div className={`h-screen w-1/2 ${darkMode? "bg-black text-white" :"bg-white"} fixed top-0 left-0 bottom-0 py-5 z-30 duration-300 ${sidebar? "translate-x-0 shadow-4xl": "translate-x-100"}`}>
                    <ul className='h-full flex flex-col items-end mx-5 text-base uppercase'>
                        <CloseIcon className='text-end cursor-pointer' onClick={handleSidebar}/>
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
                        <div className='flex items-center absolute bottom-16 cursor-pointer'>
                            <li className='my-2'>logout</li>
                            <LogoutIcon className='mx-2'/>
                        </div>
                    </ul>
                </div>
            </div>
            
            <div style={style} className={`h-full relative w-screen  bg-no-repeat bg-contain bg-center`}>
              <div className={`absolute px-5 bottom-8 ${darkMode? "bg-black text-white":"bg-white text-black"} w-screen flex flex-col border ${darkMode? "border-white" : "border-black"} `}>
                  <div className='flex text-lg justify-between py-4 '>
                     <span className='font-semibold capitalize'> { products.title } </span>
                     <span>$ { products.price }</span>
                   </div>
                 <button className={`uppercase ${darkMode? "text-black bg-white":"text-white bg-black"}  w-full my-4 rounded-sm h-12`}>
                        buy now
                 </button>
             </div>
        </div>
        </div>
    )
}


export default Detail