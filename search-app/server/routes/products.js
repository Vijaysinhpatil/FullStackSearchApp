// // routes/products.js
// import express from 'express';
// import product from '../models/Product.js';

// const router = express.Router();

// router.get('/seed', async (req, res) => {
//     await product.deleteMany();
//     await product.insertMany([
//         { name: "Laptop", price: 99999.99 },
//         { name: "SmartPhone", price: 100000 },
//         { name: "HeadPhone", price: 454545 },
//         { name: "Tablet", price: 457819 },
//         { name: "SmartWatch", price: 789456 }
//     ]);
//     res.send("Database Seeded");
// });

// router.get('/', async (req, res) => {
//     const search = req.query.search || "";
//     console.log(req.query);
    
//     const products = await product.find({
//         name: { $regex: search, $options: 'i' }
//     });
//     res.json(products);
// });

// export default router; // ✅ Correct export for ES Modules

import express from 'express'
const router = express.Router()
import product from '../models/Product.js';
// router.get('/seed' , async(req , res) => {
     
//      const productsFound = await product.find()
//      res.json(productsFound)

//      res.status(200).json({
//         success : "Product Found"
//      })
    
// })

router.get('/seed' , (req , res) => {

    const productFound = product.find();

    if(!productFound) {
        return res.status(400).json({
            error : "Product Not Found"
        })
    }
    // res.json(productFound)
    res.status(400).json({
        products : productFound ,
        success : "Product Found",
    })
    
})
// router.post('/insert' , async(req , res) => {

//     const {name , price } = req.body;

//     const NewData =  new product({
//         name : name,
//         price : price
//     })
    
//     if(!NewData) 
//     {
//         return res.status(400).json({
//             error : "Not New Data Found"
//         })
//     }
//     await NewData.save()
//     res.json(NewData)
// })

router.post('/insert' , async(req , res) => {

    const {name , price} = req.body;

    const NewData = new product({
        name : name,
        price : price
    })

    if(!NewData)
    {
        return res.status(400).json({
            error : "New Data is Not Added"
        })
    }
    
    await NewData.save();
    res.status(200).json({
        NewData : NewData ,
        success : "Product Added SuccessFully",
    })
})
// router.delete('/:id' , async(req , res) => {
      
//      try{
//         const deleteData = product.findByIdAndDelete(req.params.id);

//         if(!deleteData){
//             return res.status(400).json({
//                 error : "Data is Not Found"
//             })
//         }
//         res.status(200).json({
//             success : "Data is Deleted SuccessFully"
//         })
//      }
//      catch(err){
//         if(err)
//         {
//             res.status(400).json({
//                 error : "Error May Be Occured"
//             })
//         }
//      }
// })

router.post('/:id' , (req , res) => {

    try{

        const deletedItems = product.findByIdAndDelete(req.params.id)
         
        if(!deletedItems) {

            return res.status(400).json({
                error : "Data Not Deleted"
            })

        }

        res.status(200).json({
            deletedItems : deletedItems ,
            success : "Data is Deleted Successfully"
        })

    }   catch(err) {

        res.status(400).json({
            error : "An Erros is Been Occured"
        })
    } 
})
export default router;