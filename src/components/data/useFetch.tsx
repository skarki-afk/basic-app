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
    const [error, setError] = useState<string>("")
    const [isPending, setIsPending] = useState<boolean>(true)
    
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
            setIsPending(false)
          })
          .catch(err => {
            setIsPending(false)
            setError(err.message)
          })
    },
    [url])
    return {data, newData, error, isPending};
}

export default useFetch