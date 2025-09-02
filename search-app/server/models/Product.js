// import mongoose, { Schema } from "mongoose";

// const productSchema = new Schema({

//     name : String , 
//     price : Number
// })

// const product = mongoose.model('Product' , productSchema)
// export default product;

import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
     
    name : {
        type : String,
        required : true
    } , 
    price : {
        type : Number,
        required : true
    }

})

const product = mongoose.model('product' , productSchema)
export default product;