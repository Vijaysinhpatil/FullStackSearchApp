import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import './Style.css'
const Search = () => {
    const [products , setProducts] = useState([]);
    const [searchTerm , setSearchTerm] = useState("");

    useEffect(() => {
       fetchProducts();
    } , [searchTerm])

    const fetchProducts = async () => {
      
        const responce = await axios.get(`http://localhost:8080/api/products?search=${searchTerm}`)
        setProducts(responce.data)
    }

    return(
        <div className="product-list">
           <h1>Product Search</h1>
           <div className="search-box">
               <input type="text" 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter Item"
               />
           </div>
           <div className="products">
            {
                products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id}
                         className="product-card"
                        >
                          <h3>
                             {product.name}
                          </h3>
                          <p>${product.price.toFixed(2)}</p>
                        </div>
                    ))
                ) :
                (
                    <p>No Products found matching "{searchTerm}"" </p>
                )
            }
           </div>
        </div>
    )
}
export default 
Search;