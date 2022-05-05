import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link} from "react-router-dom"
import useFetch from '../../data/useFetch';

type Props = {
    favorite: boolean
    handleFavorite: ()=> void
}
const SearchSlider =({favorite,handleFavorite}:Props)=>{
    const {data: products} = useFetch("http://localhost:8000/products" )
    
    const sliderElements = products.map(items => {
        return(
            <Link to={`/detail/${items.id}`}>
                <div className="flex py-2 w-full">
                    <img src={`/images/${items.img}`} className="w-28 object-cover"/>
                    <div className="py-2 mx-5 w-full">
                        <p className="font-semibold uppercase text-xs">{items.title}</p >
                        <p className="text-xs my-2 uppercase">{items.description}</p>
                        <div className='w-full my-7 flex justify-between'>
                        <p className="text-sm font-bold ">$ {items.price}</p>
                        {/* {<FavoriteIcon 
                        className={`${favorite? "text-blue-300" : "text-red-500"} cursor-pointer`}
                        onClick = {()=>handleFavorite()}
                        />} */}
                        </div>
                    </div>
                </div>
            </Link>
        )
    })
    return(
        <div>
            {sliderElements} 
        </div>
    )
}

export default SearchSlider