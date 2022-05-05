import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider =()=>{
    interface Settings{
        dots: boolean
        infinite: boolean
        speed: number
        slidesToShow: number
        slidesToScroll: number
        autoplay: boolean
      }
  
      const settings:Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
      return (
        <div >
          <Slider {...settings}>
            <div>
              <img height="562px" width="412px" className="object-contain" src='/images/1.png'/>
              <div className="text-center">
                <h3 className="text-2xl font-bold uppercase py-3 tracking-[0.5px]">exclusive sports wear</h3>
                <div className="flex justify-center">
                  <p className="w-60 ">Matching Simplicity and Comfort for your daily basic needs </p>
                </div>              
              </div>
            </div>
            <div>
              <img height="562px" className="object-contain " src='/images/2.png'/>
              <div className="text-center ">
                <h3 className="text-2xl font-bold uppercase py-3 tracking-[0.5px]">hustle in style</h3>
                <div className="flex justify-center">
                  <p className="w-60 ">Matching Simplicity and Comfort for your daily basic needs </p>
                </div>              
              </div> 
            </div>           
            <div>
              <img height="562px" className="object-contain" src='/images/3.png'/>  
              <div className="text-center">
                <h3 className="text-2xl font-bold uppercase py-3 tracking-[0.5px]">for the minimalists</h3>
                <div className="flex justify-center">
                  <p className="w-60 ">Matching Simplicity and Comfort for your daily basic needs </p>
                </div>
              </div>  
            </div>     
          </Slider>

        </div>)
}

export default ImgSlider