// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import productsRouts from '../server/routes/products.js';
// //stick with import or const
// dotenv.config();

// const app = express();
// const PORT = 8080;

// app.use(cors());
// app.use(express.json());
// app.use('/api/products', productsRouts);

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("MongoDB is connected");
// }).catch((err) => {
//     console.log("Not Able to Connect");
// });

// app.get("/", (req, res) => {
//     res.send("Inside Server");
// });

// app.listen(PORT, () => {
//     console.log("Server is Getting Connected");
// });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouts from '../server/routes/products.js';
const app = express()
const PORT = 8080
//stick with import or const
dotenv.config();

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/products' , productsRouts)

//Database Connection
mongoose.connect(process.env.MONGO_URI , {
   useNewUrlParser : true ,
   useUnifiedTopology : true
})
.then(() => {
    console.log("DataBase Is Connected");
})
.catch((err) => {
    console.log("DataBase is Not Conncted" , err);
})

app.listen(PORT , () => {

     console.log("Server Is Getting Conneted");
     
})


