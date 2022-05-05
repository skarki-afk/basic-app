import {useState, useEffect} from "react"

type Product = {
    id: number
    description: string
    title: string
    price: number
    img: string
}


const useFetch =(url:string)=>{
    const [data, setData] = useState<Product[]>([])
    const [newData, setNewData] = useState<Product>({id: 1, description: "", title: "", price: 0, img:"" })
    // const [id,setId] = useState<Number>()
    // const [description,setDescription] = useState<String>("")
    // const [title,setTitle] = useState<String>("")
    // const [price,setPrice] = useState<Number>()
    // const [img, setImg] = useState<String>("")
    useEffect( () => {
        fetch(url)
          .then(res => {
            if(!res.ok){
              throw Error("could not fetch data from resource")
            }
            return res.json()
          })
          .then(data=> {
            setData(data)
            setNewData(data)
          })
          .catch(err => {
            console.log(err.message)
          })
    },
    [url])
    return {data, newData};
}

export default useFetch