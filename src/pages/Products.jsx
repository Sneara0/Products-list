import React from "react";
import { Link } from "react-router-dom";
export default function Products(){
    
const products =[
    {id:1,name:"Laptop", price:800},
    {id:2, name:"Phone", price:500},
    {id:3, name:"Tablet", price:300},
];


return (
    <div>
        <h1 className=" text-2xl font-bold mb-4"> Products</h1>
        <ul className="space-y-2">
            {products.map((product=>(
                <li key={product.id} className="border p-2 rounded hover:bg-gray-100">
                    <Link to={'/products/ ${product.id}'}>{product.name}-${product.price}
                    </Link>

                </li>

            )
           



            ))}

        </ul>
    </div>





)















}