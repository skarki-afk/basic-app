import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css"


interface Props{
    darkMode:boolean
}
const HeroNext =({darkMode}:Props)=>{
    interface Settings{
        dots: boolean
        infinite: boolean
        speed: number
        slidesToShow: number
        slidesToScroll: number
        initialSlide: number
        autoplay: boolean
      }
  
      const settings:Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide:0,
        autoplay: false
      };
    return(
        <div className={`h-full md:pt-28 px-4 relative ${darkMode?"bg-black text-white":""}`} >
            <div>
                <div className='flex items-center justify-between'>
                    <h3 className="uppercase font-bold tracking-wider text-xs">twenty21</h3>
                    <KeyboardArrowRightIcon className='cursor-pointer'/>
                </div>
                <div className='py-4 flex'>
                    <div className='mr-2'>
                        <img src='/images/twenty-1.png'></img>
                        <p className='text-xs font-semibold capitalize mt-2 tracking-wider'> ribbed polo-neck jacket</p>
                        <p className='capitalize text-xs tracking-wider'>jacked & james</p>
                        <p className='mt-1 text-base'>$39.90</p>

                    </div>
                    <div className=''>
                        <img src='/images/twenty-2.png'></img>
                        <p className='capitalize text-xs font-semibold mt-2 tracking-wider'>oversized shirt jacket</p>
                        <p className='capitalize text-xs tracking-wider'>jacked & james</p>
                        <p className='mt-1'>$79.90</p>
                    </div>                
                </div>
            </div>
            <div className='my-4'>
                <div className='flex items-center justify-between'>
                    <h3 className="uppercase font-bold tracking-wider text-xs">spring essentials</h3>
                    <KeyboardArrowRightIcon className='cursor-pointer'/>
                </div>
                <div >
                    <Slider {...settings}>
                        <div className='mr-4'>
                            <img className='object-cover h-40 w-40' src='/images/spring-1.png'></img>
                            <div className='mx-1'>
                            <p className='capitalize text-xs mt-2 tracking-wider'>white cotton t-shirt</p>
                            <p className='capitalize text-xs tracking-wider'>jacked & james</p>
                            <p className='mt-1'>$79.90</p>
                            </div>
                        </div>           
                        <div className='mr-4'>
                            <img className='object-cover h-40 w-40' src='/images/spring-2.png'></img>
                            <div className='mx-1'>
                            <p className='capitalize text-xs mt-2 tracking-wider'>light blue tshirt</p>
                            <p className='capitalize text-xs tracking-wider'>jacked & james</p>
                            <p className='mt-1'>$79.90</p>
                            </div>
                        </div>   
                        <div className='mr-4'>
                            <img className='object-cover h-40 w-40' src='/images/spring-3.png'></img>
                            <div className='mx-1'>
                            <p className='capitalize text-xs mt-2 tracking-wider'>oversized denim jacket</p>
                            <p className='capitalize text-xs tracking-wider'>jacked & james</p>
                            <p className='mt-1'>$67.90</p>
                            </div>
                        </div>  
                    </Slider>

                </div>
                
            </div>
            
        </div>
    )
}

export default HeroNext