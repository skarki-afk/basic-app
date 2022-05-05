type Products = {
    id: number
    description: string
    title: string
    price: number
    img: string
}

type DataType = {
    options: string[]
    products: Products[]
}


const data:DataType = {
    
        options: ["all","tops","sweatshirts","jackets","pants"],

        products:[
                {
                    id: 0,
                    title: "ribbed polo-neck jumper",  
                    description : "jack & james",
                    price: 39.90,
                    img: "twenty-1.png"
                },
                {
                    id: 1,
                    title: "oversized shirt jacket",  
                    description : "jack & james",
                    price: 79.90,
                    img: "twenty-2.png"
                },
                {
                    id: 2,
                    title: "oversized denim jacket",  
                    description : "jack & james",
                    price: 67.90,
                    img: "spring-1.png"
                },
                {
                    id: 3,
                    title: "white cotton tshirt",  
                    description : "jack & james",
                    price: 39.90,
                    img: "spring-2.png"
                }
            ]
}

export default data;